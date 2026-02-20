import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-made workflow toolkits for nonprofits — from SOPs to reporting systems.",
};

const products = [
  {
    name: "SOP Starter Kit",
    price: "$47",
    description:
      "5 plug-and-play Standard Operating Procedure templates built for nonprofit teams. Covers onboarding, program delivery, donor management, volunteer coordination, and internal communications.",
    features: [
      "5 customizable SOP templates (Google Docs)",
      "Quick-start guide with examples",
      "Video walkthrough (15 min)",
      "Bonus: SOP naming & filing conventions cheat sheet",
    ],
    gumroadUrl: "https://flostead.gumroad.com/l/sop-starter-kit",
    highlighted: false,
  },
  {
    name: "Workflow Blueprint",
    price: "$147",
    description:
      "A step-by-step framework to map, document, and optimize any repeatable process in your organization. Ideal for operations leads who want to systematize without hiring a consultant.",
    features: [
      "Workflow mapping canvas (Miro template)",
      "Decision tree builder",
      "Automation opportunity checklist",
      "3 real nonprofit workflow examples",
      "60-min self-paced training video",
    ],
    gumroadUrl: "https://flostead.gumroad.com/l/workflow-blueprint",
    highlighted: true,
  },
  {
    name: "Monthly Reporting Toolkit",
    price: "$297",
    description:
      "Stop rebuilding reports from scratch every month. This toolkit gives you a complete reporting system with dashboards, templates, and automated data pulls.",
    features: [
      "Board report template (Google Slides)",
      "Program metrics dashboard (Google Sheets)",
      "Automated data collection setup guide",
      "Donor impact report template",
      "Monthly review checklist",
    ],
    gumroadUrl: "https://flostead.gumroad.com/l/reporting-toolkit",
    highlighted: false,
  },
  {
    name: "Mini-Audit",
    price: "$497",
    description:
      "A focused, asynchronous workflow audit. Submit your current processes and get back a prioritized action plan with specific recommendations to reduce bottlenecks and improve efficiency.",
    features: [
      "Intake questionnaire & process submission form",
      "Written audit report (10-15 pages)",
      "Prioritized action plan with quick wins",
      "Tool & automation recommendations",
      "Recorded video summary of findings (20 min)",
    ],
    gumroadUrl: "https://flostead.gumroad.com/l/mini-audit",
    highlighted: false,
  },
  {
    name: "Grant Infrastructure & AI Proposal Builder",
    price: "$197",
    description:
      "A systems-based funding toolkit for nonprofits, workforce boards, and community-based organizations. Build internal grant readiness, standardize proposal workflows, and accelerate drafting with AI — no freelance writer required.",
    features: [
      "Grant readiness assessment",
      "Logic model builder",
      "Outcomes & performance metrics framework",
      "Budget narrative template",
      "Compliance-aligned language bank (workforce & aging services)",
      "AI prompt library for structured proposal drafting",
      "Multi-format files: PDF, .DOCX, and Excel-compatible",
    ],
    gumroadUrl: "https://flostead.gumroad.com/l/grant-builder",
    highlighted: false,
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Ready-made workflow toolkits so you can start fixing operations
            today&nbsp;— no waiting for a consultant.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  product.highlighted
                    ? "border-brand-500 ring-2 ring-brand-500/20"
                    : "border-neutral-200"
                }`}
              >
                {product.highlighted && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-neutral-900">
                    {product.name}
                  </h2>
                  <span className="shrink-0 text-2xl font-bold text-brand-500">
                    {product.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {product.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-medium transition-colors ${
                    product.highlighted
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "border border-brand-500 text-brand-500 hover:bg-brand-50"
                  }`}
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
