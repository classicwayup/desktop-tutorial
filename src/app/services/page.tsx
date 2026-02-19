import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Done-for-you workflow design, automation builds, and ongoing support for nonprofits.",
};

const services = [
  {
    name: "Flow Audit",
    price: "$2,500",
    description:
      "A comprehensive review of your organization's workflows, tools, and team processes. Submit your info asynchronously and receive a detailed roadmap for improvement — no meetings required.",
    deliverables: [
      "Async intake questionnaire & process submission",
      "Current-state workflow mapping",
      "Tool & technology assessment",
      "Detailed audit report with findings",
      "Prioritized improvement roadmap",
      "Recorded video walkthrough of findings (30 min)",
    ],
    ideal: "Organizations that know something is broken but aren't sure where to start.",
  },
  {
    name: "Flow Build",
    price: "$7,500 – $12,500",
    description:
      "We design and implement your new workflow systems end-to-end. From SOPs and automations to recorded training — we build it, test it, and hand it over ready to run.",
    deliverables: [
      "Custom workflow design & documentation",
      "Automation setup (Zapier, Make, or native tools)",
      "SOP creation for all new processes",
      "Tool configuration & integration",
      "Recorded training library for your team",
      "30-day post-launch async support",
    ],
    ideal: "Teams ready to overhaul their operations and invest in long-term systems.",
  },
  {
    name: "FloSteady Retainer",
    price: "$2,000/month",
    description:
      "Ongoing workflow support so your systems stay current as your organization grows. Submit requests anytime — we handle updates, fixes, and optimizations on your schedule.",
    deliverables: [
      "Monthly workflow health check",
      "Up to 10 hours of support per month",
      "Automation maintenance & updates",
      "New SOP creation as needed",
      "Async support via ticket portal",
      "Quarterly written strategy review",
    ],
    ideal: "Organizations that want a dedicated operations partner without the overhead.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Done-for-you workflow design, automation, and ongoing support — built
            specifically for nonprofit&nbsp;teams.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-neutral-200 p-8 lg:p-10"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-neutral-900">
                  {service.name}
                </h2>
                <span className="text-xl font-bold text-brand-500">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-neutral-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-neutral-50 p-4">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Ideal For
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {service.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How custom work happens */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            How custom work happens — no calls required
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Submit your intake form",
                description:
                  "Fill out an async questionnaire describing your organization, workflows, and goals.",
              },
              {
                step: "2",
                title: "We build & deliver",
                description:
                  "You receive your audit report, documentation, or build deliverables — fully written and recorded.",
              },
              {
                step: "3",
                title: "Implement with support",
                description:
                  "Access your ticket portal anytime to ask questions or request updates. No scheduling required.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
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

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-neutral-600">
            Most organizations start with a ready-made toolkit. Need something
            custom? Submit an intake form — no call needed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/products"
              className="rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Browse Products
            </a>
            <a
              href="https://tally.so/r/flostead-intake"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-500 hover:text-brand-500"
            >
              Apply for Custom Work
            </a>
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            Custom work intake is async — no call or meeting required.
          </p>
        </div>
      </section>
    </>
  );
}
