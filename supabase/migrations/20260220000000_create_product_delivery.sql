-- FloStead Digital Product Delivery Schema

-- Enable pgcrypto for secure token generation
create extension if not exists pgcrypto;

-- Products table
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  slug text unique not null,
  file_path text not null,        -- path in Supabase Storage bucket
  price_cents integer not null,
  active boolean default true,
  created_at timestamptz default now()
);

-- Purchases table (one row per completed payment)
create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) not null,
  customer_email text not null,
  stripe_session_id text unique,  -- populated when Stripe is connected
  amount_paid_cents integer,
  created_at timestamptz default now()
);

-- Download tokens table (expiring, one-time links)
create table if not exists download_tokens (
  id uuid primary key default gen_random_uuid(),
  purchase_id uuid references purchases(id) not null,
  token text unique not null,
  expires_at timestamptz not null default (now() + interval '48 hours'),
  used_at timestamptz,            -- null = not yet used
  created_at timestamptz default now()
);

-- Row Level Security
alter table products enable row level security;
alter table purchases enable row level security;
alter table download_tokens enable row level security;

-- Products: public can read active products
create policy "Public can view active products"
  on products for select
  using (active = true);

-- Purchases and tokens: service role only (Edge Functions use service role key)
create policy "Service role only"
  on purchases for all
  using (auth.role() = 'service_role');

create policy "Service role only"
  on download_tokens for all
  using (auth.role() = 'service_role');

-- Seed current products from CLAUDE.md
insert into products (name, slug, file_path, price_cents, description) values
  ('SOP Starter Kit', 'sop-starter-kit', 'products/sop-starter-kit.zip', 4700, 'Standard operating procedures starter kit'),
  ('Workflow Blueprint', 'workflow-blueprint', 'products/workflow-blueprint.zip', 14700, 'Complete workflow blueprint system'),
  ('Monthly Reporting Toolkit', 'reporting-toolkit', 'products/reporting-toolkit.zip', 29700, 'Monthly reporting toolkit for organizations'),
  ('Mini-Audit', 'mini-audit', 'products/mini-audit.zip', 49700, 'Process mini-audit framework'),
  ('Grant Infrastructure & AI Proposal Builder', 'grant-builder', 'products/grant-builder.zip', 19700, 'Grant infrastructure and AI-assisted proposal builder for nonprofits')
on conflict (slug) do nothing;
