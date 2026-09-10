"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { nav, site } from "@/lib/site";

/**
 * Minimal sticky header for the one-page site.
 *
 * The old utility bar was removed in the minimalist pass — it was three
 * competing rows of chrome above the fold. Nav items are anchors; the active
 * one is tracked with an IntersectionObserver so the header reflects position
 * on the page.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      {/* Slim navy strip. Reinstated in the colour pass — it puts brand navy at
          the very top of the page and carries the email, which is currently the
          only contact route. */}
      <div className="bg-ink text-white">
        <div className="container-x flex items-center justify-between gap-4 py-2 text-xs">
          <p className="font-semibold tracking-wide text-white/80">
            {site.tagline} <span className="text-white/30">·</span>{" "}
            <span className="text-brand-light">{site.subTagline}</span>
          </p>
          {site.email && site.emailHref && (
            <a
              href={site.emailHref}
              className="hidden min-h-[32px] items-center gap-1.5 text-white/80 hover:text-white sm:flex"
            >
              <Icon.mail className="text-brand-light" />
              {site.email}
            </a>
          )}
        </div>
      </div>

      <div
        className={[
          "sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow",
          scrolled ? "border-b border-mist-line shadow-sm" : "border-b border-transparent",
        ].join(" ")}
      >
      <div className="container-x flex items-center justify-between gap-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={[
                "relative whitespace-nowrap px-3 py-2 text-sm font-semibold transition-colors",
                "after:absolute after:inset-x-3 after:-bottom-px after:h-[2px] after:transition-colors",
                active === item.href
                  ? "text-brand-dark after:bg-brand"
                  : "text-ink/70 after:bg-transparent hover:text-ink",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-4 px-5 py-2.5">
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-mist-line text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-mist-line bg-white lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center text-sm font-semibold text-ink hover:text-brand-dark"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Get in Touch
            </a>
            <Link
              href="/in-memoriam"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-[44px] items-center border-t border-mist-line pt-4 text-sm text-slate-body hover:text-brand-dark"
            >
              In Memoriam
            </Link>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
