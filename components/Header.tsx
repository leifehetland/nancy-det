"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header>
      {/* Utility bar */}
      <div className="bg-ink text-white">
        <div className="container-x flex flex-col items-center justify-between gap-1 py-2 text-xs md:flex-row md:py-2.5">
          <p className="text-center font-semibold md:text-left">
            {site.bannerLead} —{" "}
            <span className="text-brand-light">{site.bannerAccent}</span>
          </p>
          {/* Rendered only once real contact details exist in lib/site.ts. */}
          <div className="flex items-center gap-5">
            {site.phone && site.phoneHref && (
              <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-brand-light">
                <Icon.phone className="text-brand-light" />
                {site.phone}
              </a>
            )}
            {site.email && site.emailHref && (
              <a
                href={site.emailHref}
                className="hidden items-center gap-1.5 hover:text-brand-light sm:flex"
              >
                <Icon.mail className="text-brand-light" />
                {site.email}
              </a>
            )}
            <Link href="/contact" className="font-semibold hover:text-brand-light">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="sticky top-0 z-50 border-b border-mist-line bg-white/95 backdrop-blur">
        <div className="container-x flex items-center justify-between gap-6 py-3">
          <Logo />

          {/* whitespace-nowrap keeps each label on one line; the sizes below are
              tuned so all six items plus the CTA fit at the xl breakpoint. */}
          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative whitespace-nowrap rounded-md px-2.5 py-2 text-[13px] font-bold",
                    "transition-colors 2xl:px-3 2xl:text-sm",
                    // The active marker is a positioned bar rather than
                    // text-decoration, so it stays a single clean rule.
                    "after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-[2px]",
                    "after:rounded-full after:transition-colors 2xl:after:inset-x-3",
                    active
                      ? "bg-brand-wash text-brand after:bg-brand"
                      : "text-ink after:bg-transparent hover:text-brand hover:after:bg-brand/30",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary ml-2.5 whitespace-nowrap px-4 py-2.5 2xl:px-5">
              Sign Up
              <Icon.chevron />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-mist-line text-ink xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-mist-line bg-white xl:hidden">
            <nav className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "py-3 text-sm font-bold",
                    isActive(item.href) ? "text-brand" : "text-ink hover:text-brand",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
                Sign Up
                <Icon.chevron />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
