"use client";

export default function ConvertKitForm() {
  return (
    <form
      action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions"
      method="post"
      className="flex flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="ck-email" className="sr-only">
        Email address
      </label>
      <input
        id="ck-email"
        name="email_address"
        type="email"
        required
        placeholder="Enter your email"
        className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      >
        Get the Free Kit
      </button>
    </form>
  );
}
