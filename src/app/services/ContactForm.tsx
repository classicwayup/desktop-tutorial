"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Replace with your form endpoint (Formspree, ConvertKit, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-brand-700">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-brand-600">
          We&apos;ve received your message and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="org"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Organization
        </label>
        <input
          id="org"
          name="organization"
          type="text"
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        />
      </div>
      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">Select a service</option>
          <option value="flow-audit">Flow Audit ($2,500)</option>
          <option value="flow-build">Flow Build ($7,500–$12,500)</option>
          <option value="retainer">FloSteady Retainer ($2,000/mo)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          placeholder="Tell us about your organization and what you're looking for..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      >
        Send Message
      </button>
    </form>
  );
}
