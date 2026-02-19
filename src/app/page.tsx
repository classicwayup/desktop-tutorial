import ConvertKitForm from "@/components/ConvertKitForm";

const problems = [
  {
    title: "Scattered Processes",
    description:
      "Your team repeats the same tasks differently every time. Nothing is documented. Onboarding takes forever.",
  },
  {
    title: "Tool Overload",
    description:
      "Spreadsheets, sticky notes, and three different apps that don't talk to each other. Sound familiar?",
  },
  {
    title: "Burnout & Bottlenecks",
    description:
      "Everything runs through one person. When they're out, the whole operation stalls.",
  },
];

const solutions = [
  {
    title: "Document What Works",
    description:
      "We capture your best processes into clear, reusable SOPs your whole team can follow.",
  },
  {
    title: "Automate the Repetitive",
    description:
      "From intake forms to reporting, we wire up automations that save hours every week.",
  },
  {
    title: "Build for Stability",
    description:
      "Your workflows keep running smoothly — even when key staff are on vacation.",
  },
];

const testimonials = [
  {
    quote:
      "FloStead transformed how our team operates. We went from chaos to clarity in just a few weeks.",
    name: "Sarah M.",
    role: "Executive Director, Community First",
  },
  {
    quote:
      "The SOP Starter Kit alone saved us 10+ hours of onboarding time for every new hire.",
    name: "James T.",
    role: "Operations Manager, Bright Futures",
  },
  {
    quote:
      "Finally, a partner who understands that nonprofits need systems that work — not just more software.",
    name: "Maria L.",
    role: "Program Director, Hope Alliance",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Workflow Systems &amp; Automation for Nonprofits
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Make work feel steady&nbsp;again
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            FloStead helps nonprofits build clear, repeatable workflows so your
            team can focus on mission&nbsp;— not&nbsp;busywork.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#sop-kit"
              className="rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Get the Free SOP Starter Kit
            </a>
            <a
              href="/products"
              className="rounded-lg border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-500 hover:text-brand-500"
            >
              Browse Toolkits
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Everything works without a call
            </h2>
            <p className="mt-4 text-neutral-600">
              FloStead is built to be fully self-serve. Browse, buy, and
              implement — on your schedule.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Pick your toolkit",
                description:
                  "Browse our products page and choose the template, blueprint, or audit that fits your situation.",
              },
              {
                step: "2",
                title: "Download instantly",
                description:
                  "Purchase through Gumroad and get immediate access. No waiting, no scheduling.",
              },
              {
                step: "3",
                title: "Implement at your pace",
                description:
                  "Follow the included guides and videos to put your new systems in place — on your own timeline.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-neutral-500">
            Need custom work?{" "}
            <a href="/services" className="font-medium text-brand-500 hover:text-brand-600">
              View async services &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Sound familiar?
            </h2>
            <p className="mt-4 text-neutral-600">
              Most nonprofits run on passion — but passion alone doesn&apos;t
              scale.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {problems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Here&apos;s how we fix it
            </h2>
            <p className="mt-4 text-neutral-600">
              A steady workflow means fewer fires, less stress, and more impact.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {solutions.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOP Starter Kit */}
      <section id="sop-kit" className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Free SOP Starter Kit
          </h2>
          <p className="mt-4 text-neutral-600">
            Get 5 plug-and-play SOP templates designed specifically for
            nonprofit teams. Enter your email and we&apos;ll send it right over.
          </p>
          <div className="mt-8">
            <ConvertKitForm />
          </div>
          <p className="mt-3 text-xs text-neutral-400">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Trusted by nonprofit teams
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-neutral-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-500 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to make work feel steady?
          </h2>
          <p className="mt-4 text-brand-100">
            Pick up a ready-made toolkit and start fixing your operations
            today — no waiting, no back-and-forth.
          </p>
          <a
            href="/products"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-brand-600 transition-colors hover:bg-neutral-100"
          >
            Browse Products
          </a>
        </div>
      </section>
    </>
  );
}
