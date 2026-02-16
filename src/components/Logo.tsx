import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="36"
        height="28"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="10" width="60" height="8" rx="4" fill="#2E75B6" />
        <rect x="0" y="26" width="45" height="8" rx="4" fill="#4A8FD0" />
        <rect x="0" y="42" width="30" height="8" rx="4" fill="#6BA9E0" />
      </svg>
      <span className="text-xl font-bold text-neutral-900">
        Flo<span className="text-brand-500">Stead</span>
      </span>
    </Link>
  );
}
