# FloStead Project — Claude Code Instructions

## Project Overview

FloStead is a Next.js 14 website built with TypeScript and Tailwind CSS. It serves as the landing page and web presence for the FloStead brand.

- **Local path:** ~/flostead (development folder)
- **Domain:** flostead.com (also www.flostead.com)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Project Structure

```
~/flostead/
├── src/app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── favicon.ico
│   ├── fonts/                # Geist font files
│   ├── products/page.tsx     # Products page
│   ├── services/page.tsx     # Services page (async/faceless — no contact form)
│   ├── services/ContactForm.tsx  # Unused — retained for reference only
│   ├── faq/page.tsx          # FAQ page (self-serve support)
│   └── resources/page.tsx    # Resources page
├── src/components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   └── ConvertKitForm.tsx    # Email signup form
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── .eslintrc.json
├── .env.example
└── .gitignore
```

## Business Model Notes

FloStead is a **fully faceless, async business**. No calls, no live meetings, no direct human contact entry points.

- All products are digital downloads via Gumroad (instant access)
- Custom services use async intake forms (Tally.so) — no Calendly or contact forms
- Support is ticket-based (Tally.so portal) — no email/Slack/live chat
- Do NOT add Book a Call, Calendly, contact forms, or live chat to any page

## Current Product Lineup

| Product | Price | Gumroad URL | Status |
|---|---|---|---|
| SOP Starter Kit | $47 | flostead.gumroad.com/l/sop-starter-kit | Active |
| Workflow Blueprint | $147 | flostead.gumroad.com/l/workflow-blueprint | Active (Most Popular) |
| Monthly Reporting Toolkit | $297 | flostead.gumroad.com/l/reporting-toolkit | Active |
| Mini-Audit | $497 | flostead.gumroad.com/l/mini-audit | Active |
| Grant Infrastructure & AI Proposal Builder | $197 | flostead.gumroad.com/l/grant-builder | **Placeholder — Gumroad listing not yet created** |

> **Note:** The Grant Infrastructure & AI Proposal Builder Gumroad listing is a placeholder URL. Update `src/app/products/page.tsx` with the real Gumroad URL once the listing is live.

## GitHub Connection

- **Repository:** https://github.com/classicwayup/desktop-tutorial
- **GitHub account:** classicwayup
- **Default branch:** main
- **CLI auth:** GitHub CLI (`gh`) authenticated via OAuth, credentials stored in keychain
- **Git credential helper:** `gh auth setup-git` configured so git push/pull works without prompts

## Vercel Connection

- **Vercel team:** flow-stead
- **Vercel project:** flostead
- **Project ID:** prj_FyJCM3XpWnHlH0h5wxJ5Zk9aOFxk
- **Production URL:** https://flostead.com
- **Also accessible at:** https://flostead.vercel.app
- **Git integration:** Connected to classicwayup/desktop-tutorial — pushes to `main` auto-deploy to production
- **Nameservers:** ns1.vercel-dns.com, ns2.vercel-dns.com (verified)

## Change Management — ALWAYS FOLLOW THIS WORKFLOW

**The user requires the ability to roll back any change. Never push directly to main without a rollback path.**

### Required workflow for ALL code changes:

1. **Create a feature branch BEFORE making any changes:**
   ```
   git checkout main
   git pull origin main
   git checkout -b <descriptive-branch-name>
   ```

2. **Make changes on the feature branch.** Commit frequently with clear messages.

3. **Push the feature branch to GitHub:**
   ```
   git push -u origin <branch-name>
   ```
   Vercel will automatically create a **preview deployment** for this branch. The preview URL will be visible in the Vercel dashboard and on the GitHub pull request. This lets the user preview changes on a live URL before they go to flostead.com.

4. **Create a pull request** so the user can review changes:
   ```
   gh pr create --title "description" --body "details"
   ```

5. **Wait for user approval.** Share the Vercel preview URL so the user can verify changes at a live preview of flostead.com before merging.

6. **Only merge to main after explicit user approval:**
   ```
   gh pr merge <pr-number> --merge
   ```
   This triggers an automatic production deployment to flostead.com.

### Rollback procedures:

- **Revert a merged PR** (safest — creates a new commit that undoes the change):
  ```
  git revert <commit-hash>
  git push origin main
  ```

- **Roll back to a specific previous deployment on Vercel:**
  ```
  vercel rollback <deployment-url> --scope flow-stead
  ```

- **View deployment history:**
  ```
  vercel ls --scope flow-stead
  ```

- **View git history for rollback targets:**
  ```
  git log --oneline main
  ```

### Rules:

- NEVER force push to main
- NEVER commit directly to main — always use a feature branch
- NEVER merge without user approval
- ALWAYS create a PR with a preview deployment link
- ALWAYS confirm the user has reviewed the preview before merging
- If something breaks in production, immediately revert or roll back using the procedures above

## Tools Installed

- **Node.js** v22.14.0 — installed at ~/.local/node/bin/
- **npm** v10.9.2
- **Git** v2.50.1 — via Xcode Command Line Tools
- **GitHub CLI (gh)** v2.67.0 — installed at ~/.local/bin/gh
- **Vercel CLI** v50.17.1 — installed globally via npm
- **PATH additions** in ~/.zshrc and ~/.zprofile:
  - `$HOME/.local/bin` (gh CLI)
  - `$HOME/.local/node/bin` (Node.js, npm, vercel)

## Development Folder

- **Path:** ~/flostead
- **Purpose:** This is the primary local development folder. All code changes should be made here.
- **Git status:** Fully initialized, cloned from GitHub, on `main` branch, up to date with origin
- **Vercel link:** .vercel/project.json present — linked to flow-stead/flostead project
- **Node modules:** Installed (run `npm install` if missing after a fresh clone)
- **Branches on disk:**
  - `main` (active, tracks origin/main)
  - `claude/flostead-landing-page-5NNZD` (merged, historical)

### How this folder connects to GitHub and Vercel:

```
~/flostead (local dev folder)
    │
    ├── git push ──► GitHub: classicwayup/desktop-tutorial
    │                    │
    │                    ├── push to main ──► Vercel auto-deploys to flostead.com (production)
    │                    └── push to branch ──► Vercel creates preview deployment (unique URL)
    │
    └── .vercel/project.json ──► Vercel project: flow-stead/flostead
```

- Editing files in ~/flostead, committing, and pushing to a branch creates a Vercel preview deployment
- Merging that branch into main on GitHub triggers a production deployment to flostead.com
- The Vercel CLI can also be used from this folder to manually deploy, inspect, or rollback

## Work Completed

1. Installed Xcode Command Line Tools (git v2.50.1)
2. Installed GitHub CLI (gh v2.67.0), authenticated as classicwayup
3. Installed Node.js v22.14.0 LTS and npm
4. Installed Vercel CLI v50.17.1, authenticated under flow-stead team
5. Cloned project from GitHub into ~/flostead
6. Merged feature branch `claude/flostead-landing-page-5NNZD` into main
7. Configured git to use gh for credential management (`gh auth setup-git`)
8. Pushed merged main to GitHub
9. Deployed to Vercel production under flow-stead team
10. Removed duplicate `desktop-tutorial` Vercel project
11. Assigned flostead.com and www.flostead.com domains to the flostead project
12. Connected GitHub repo to Vercel for automatic deployments
13. Renamed local folder from ~/FloStead to ~/flostead as the designated development folder
14. Verified git repo integrity, remote tracking, and Vercel link after rename
15. Added Google Workspace domain verification CNAME record via Vercel CLI (rec_5732d4990968a4ed1ff5b135)
16. Removed all Book-a-Call / Calendly links (navbar, homepage hero, homepage CTA)
17. Removed Services page contact form; replaced with self-serve CTA
18. Converted all service deliverables to async (no calls, interviews, or live sessions)
19. Added "How It Works" async process section to homepage
20. Added "How custom work happens" async process section to Services page
21. Added "Apply for Custom Work" async intake button (Tally.so) to Services page
22. Created /faq page with self-serve Q&A covering general, products, services, and resources
23. Added FAQ to navbar and footer navigation
24. Added support ticket link (Tally.so) to footer
25. Updated CLAUDE.md to reflect faceless business model and new project structure
26. Split Resources page into Free Templates (3) and Premium Templates (3 paid via Gumroad)
    - Free: SOP Template, Onboarding Checklist, Volunteer Coordination Workflow
    - Premium: Process Audit Worksheet ($17), Monthly Board Report Template ($27), Donor Acknowledgment Automation Guide ($37)
27. Added Premium Templates anchor link to footer Resources column
28. Added Grant Infrastructure & AI Proposal Builder ($197) to Products page — merged to main, live on flostead.com
    - Placeholder Gumroad URL: flostead.gumroad.com/l/grant-builder (update when listing is live)
    - Targets nonprofits, workforce boards, community-based organizations
    - Includes: grant readiness assessment, logic model builder, outcomes framework, budget narrative template, compliance language bank, AI prompt library, multi-format files
29. Added CLAUDE.md to ~/flostead repo (checked into git) for persistent project context
30. Added Google Workspace domain verification DNS records to flostead.com via Vercel CLI
    - TXT record: google-site-verification=52528Y1d06KfFv2rwPlHHCXb1nh_-XsLpCneMG5cwtk (rec_d7823eb27be7d802d4f70680)
    - CNAME record: gv-nthoikxwlfqn7i → gv-nthoikxwlfqn7i.dv.googlehosted.com (rec_dc2528ec8d6e5f9658dd64d4)
    - CNAME record: m23qsi2ke33x → m23qsi2ke33x.dv.googlehosted.com (rec_a4a46951c385fa1f9ca6d0ac)
    - MX record: @ priority 1 → SMTP.GOOGLE.COM (rec_508cf9de13e81c2e557ac2e1)
    - TXT record (DKIM): google._domainkey → v=DKIM1;k=rsa;p=MIIBIjAN... (rec_ed6a58091f83392dafc1526c)
31. Built Supabase digital product delivery infrastructure (PR #8 — pending merge)
    - Supabase project: todjwzjcltoyolbmpzoy (linked via CLI)
    - DB migration: products, purchases, download_tokens tables with Row Level Security
    - All 5 products seeded in products table
    - Private storage bucket: `products` (50MB file limit, signed URLs)
    - Edge Function deployed: `deliver-product` — records purchase, generates 48h expiring signed URL, sends download email via Resend
    - Stripe webhook handler stubbed in Edge Function (activates when Stripe is connected)
    - Resend API key set as Edge Function secret
    - .env.local created locally (gitignored) with all credentials

## Digital Delivery Infrastructure

### Supabase
- **Project URL:** https://todjwzjcltoyolbmpzoy.supabase.co
- **Project ref:** todjwzjcltoyolbmpzoy
- **CLI auth:** Personal access token stored in session (`sbp_45c...`)
- **Storage bucket:** `products` (private, 50MB limit)
- **Edge Function:** `deliver-product` — POST with `{product_slug, customer_email}` triggers full delivery flow
- **Local credentials:** `~/flostead/.env.local` (gitignored)

### Resend
- **Purpose:** Transactional email only — sends purchase confirmation + download link
- **From address:** noreply@flostead.com
- **API key:** stored in `.env.local` and as Supabase Edge Function secret
- **Pending:** flostead.com domain verification in Resend dashboard

### Stripe (pending)
- **Status:** Not yet connected
- **When ready:** Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` to `.env.local` and Supabase secrets
- **Webhook endpoint:** `https://todjwzjcltoyolbmpzoy.supabase.co/functions/v1/deliver-product`

### Delivery Flow
```
Customer pays (Stripe) →
Stripe webhook → deliver-product Edge Function →
  • Record purchase in DB
  • Generate 48h expiring signed URL from Supabase Storage
  • Send download email via Resend →
Customer receives link, downloads file, link expires
```

### CLI Commands for Product Management
```bash
# Upload a product file
npx supabase storage cp ./file.zip ss:///products/products/slug.zip

# Redeploy Edge Function after changes
SUPABASE_ACCESS_TOKEN=<token> npx supabase functions deploy deliver-product --no-verify-jwt

# Push a new DB migration
SUPABASE_ACCESS_TOKEN=<token> npx supabase db push

# Check Edge Function logs
SUPABASE_ACCESS_TOKEN=<token> npx supabase functions logs deliver-product
```
