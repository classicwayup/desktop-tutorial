import type { Metadata } from "next";
import ConvertKitForm from "@/components/ConvertKitForm";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free templates, guides, and insights to help your nonprofit build better workflows.",
};

const templates = [
  {
    title: "SOP Template — Program Delivery",
    description:
      "A ready-to-use template for documenting your core program delivery process step by step.",
    format: "Google Docs",
  },
  {
    title: "Onboarding Checklist",
    description:
      "Streamline new hire onboarding with this comprehensive checklist covering day 1 through week 4.",
    format: "Google Sheets",
  },
  {
    title: "Volunteer Coordination Workflow",
    description:
      "Map out your volunteer intake, scheduling, and follow-up process in one clear workflow.",
    format: "Miro Template",
  },
  {
    title: "Monthly Board Report Template",
    description:
      "A clean, professional template for presenting program metrics and financials to your board.",
    format: "Google Slides",
  },
  {
    title: "Donor Acknowledgment Automation Guide",
    description:
      "Step-by-step instructions to automate thank-you emails and tax receipts for donors.",
    format: "PDF Guide",
  },
  {
    title: "Process Audit Worksheet",
    description:
      "A self-guided worksheet to evaluate the health of any internal process and identify quick wins.",
    format: "Google Docs",
  },
];

const caseStudies = [
  {
    title: "Community First: From Chaos to Clarity",
    summary:
      "How a mid-size human services nonprofit eliminated 15 hours/week of duplicated work by systematizing their intake and reporting processes.",
    tag: "Operations Overhaul",
  },
  {
    title: "Bright Futures: Scaling Without Breaking",
    summary:
      "An education nonprofit grew from 3 to 12 programs in 18 months — without adding operations staff — by building workflow systems first.",
    tag: "Growth & Scaling",
  },
  {
    title: "Hope Alliance: The Onboarding Fix",
    summary:
      "Reduced new staff onboarding time from 6 weeks to 10 days with documented SOPs and automated training sequences.",
    tag: "Onboarding",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Free templates, guides, and case studies to help your nonprofit build
            better&nbsp;workflows.
          </p>
        </div>
      </section>

      {/* Free Templates */}
      <section id="templates" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Free Templates
          </h2>
          <p className="mt-2 text-neutral-600">
            Download and customize these templates for your team — no email
            required.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((t) => (
              <div
                key={t.title}
                className="flex flex-col rounded-xl border border-neutral-200 p-6 transition-shadow hover:shadow-md"
              >
                <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                  {t.format}
                </span>
                <h3 className="mt-3 text-base font-semibold text-neutral-900">
                  {t.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {t.description}
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-lg border border-brand-500 px-4 py-2 text-sm font-medium text-brand-500 transition-colors hover:bg-brand-50"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Blog
          </h2>
          <p className="mt-2 text-neutral-600">
            Practical insights on workflow design, automation, and nonprofit
            operations.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Why Every Nonprofit Needs SOPs (Even Small Ones)",
              "5 Signs Your Workflow Is Costing You Time",
              "The Nonprofit Leader's Guide to Automation",
            ].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-xs font-medium text-neutral-400">
                  Coming Soon
                </p>
                <h3 className="mt-2 text-base font-semibold text-neutral-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  This post is in the works. Subscribe below to get notified
                  when it&apos;s published.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Case Studies
          </h2>
          <p className="mt-2 text-neutral-600">
            Real results from real nonprofits.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="rounded-xl border border-neutral-200 p-6"
              >
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
                  {cs.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {cs.summary}
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-medium text-brand-500 hover:text-brand-600"
                >
                  Read More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Stay in the loop
          </h2>
          <p className="mt-3 text-neutral-600">
            Get new templates, blog posts, and workflow tips delivered to your
            inbox.
          </p>
          <div className="mt-8">
            <ConvertKitForm />
          </div>
          <p className="mt-3 text-xs text-neutral-400">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
