import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about FloStead products, services, and how everything works.",
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "Do I need to get on a call to work with FloStead?",
        a: "No. FloStead is built to be fully async and faceless. Every product is an instant digital download. Custom services are handled through an intake form and delivered via written reports and recorded videos — no meetings required.",
      },
      {
        q: "Who are FloStead's products and services built for?",
        a: "Nonprofit teams that want to build clear, repeatable workflows without hiring a full-time operations consultant. Whether you're a small shop with a handful of staff or a growing organization, our toolkits are designed to be picked up and used immediately.",
      },
      {
        q: "How do I get support if I have a question?",
        a: "Product support is handled asynchronously via our ticket portal. You submit your question, and we respond in writing — typically within one business day. There are no live chat or phone options.",
      },
    ],
  },
  {
    category: "Products",
    questions: [
      {
        q: "How do I access my purchase after buying?",
        a: "All products are delivered instantly through Gumroad. After checkout you'll receive an email with a download link. You can also access your purchases anytime through your Gumroad library.",
      },
      {
        q: "What formats do the templates come in?",
        a: "All templates are compatible with both Google Workspace and Microsoft Office. Free templates are Google Docs, Google Sheets, or Miro — you can download any Google file as Word (.docx) or Excel (.xlsx) directly from Google. Premium templates include both the Google version and the Microsoft Office version (Word, Excel, or PowerPoint) in the same download. The Volunteer Coordination Workflow (Miro) also includes a PDF version for non-Miro users.",
      },
      {
        q: "Can I customize the templates for my organization?",
        a: "Yes — all templates are fully editable. They are starting points built around nonprofit workflows, not locked-down forms.",
      },
      {
        q: "Do you offer refunds?",
        a: "Because all products are digital and delivered immediately, we do not offer refunds. If you have a problem accessing your purchase, contact us via the ticket portal and we'll make it right.",
      },
    ],
  },
  {
    category: "Custom Services",
    questions: [
      {
        q: "How does the Flow Audit work if there are no calls?",
        a: "You complete a detailed async intake questionnaire covering your current workflows, team structure, tools, and pain points. We review everything and deliver a written audit report with a prioritized roadmap, plus a recorded video walkthrough of the findings.",
      },
      {
        q: "How long does a Flow Audit take?",
        a: "After you submit your intake form, you'll receive your completed audit report within 7–10 business days.",
      },
      {
        q: "How does the Flow Build work without live sessions?",
        a: "You submit an intake form detailing what you need built. We design, build, and document your systems, then deliver everything — SOPs, automations, tool configurations — along with a recorded training library your team can watch on their own schedule.",
      },
      {
        q: "What does 'async support via ticket portal' mean for the Retainer?",
        a: "You get access to a support portal where you can submit requests, questions, or change tickets at any time. We work through them in priority order and respond in writing. There are no scheduled check-ins unless you request one.",
      },
    ],
  },
  {
    category: "Free Resources",
    questions: [
      {
        q: "Are the free templates really free?",
        a: "Yes. The templates on the Resources page are free to download and use with no email required.",
      },
      {
        q: "What's included in the Free SOP Starter Kit?",
        a: "5 plug-and-play Standard Operating Procedure templates covering onboarding, program delivery, donor management, volunteer coordination, and internal communications. Enter your email on the homepage to receive them.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50/60 to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
            Everything you need to know — no waiting for a reply.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-200 pb-3">
                {section.category}
              </h2>
              <dl className="mt-6 space-y-8">
                {section.questions.map((item) => (
                  <div key={item.q}>
                    <dt className="text-sm font-semibold text-neutral-900">
                      {item.q}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-xl font-bold text-neutral-900">
            Still have a question?
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Browse our products or submit a support ticket — no call needed.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Browse Products
            </Link>
            <a
              href="https://tally.so/r/flostead-support"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-brand-500 hover:text-brand-500"
            >
              Submit a Support Ticket
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
