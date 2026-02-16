"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-xl font-bold text-neutral-900">
          Flo<span className="text-brand-500">Stead</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Book a Call
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium text-neutral-600 transition-colors hover:text-brand-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
