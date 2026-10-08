import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import { card, site } from "@/lib/site";

/**
 * Digital business card. Unlinked from the site: reachable only by sharing
 * the URL.
 *
 * Layout notes, since a card is mostly a negative-space problem:
 *   - The card itself is capped at 26rem, roughly the proportions of a real
 *     one held upright. It does not grow on desktop.
 *   - The page fills the viewport with brand navy so a wide screen reads as a
 *     card lying on a surface rather than a narrow column stranded in white.
 *   - Phone first. Someone who opens this on a phone usually wants to call.
 */
export const metadata: Metadata = {
  title: "Nancy Davis · Davis Executive Training",
  description: "Contact card for Nancy Davis, founder of Davis Executive Training.",
  // Shared by URL, not advertised. Keep it out of search results.
  robots: { index: false, follow: false },
  alternates: { canonical: "/card" },
};

/** One contact line: icon, label, 44px tap target. */
function Row({
  icon: Glyph,
  href,
  children,
  external = false,
}: {
  icon: (p: { className?: string }) => JSX.Element;
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex min-h-[44px] items-center gap-3 rounded-lg px-2 py-2 text-[15px] text-ink transition-colors hover:bg-mist-light"
    >
      <Glyph className="shrink-0 text-base text-brand-dark" />
      <span className="break-all group-hover:text-brand-dark">{children}</span>
    </a>
  );
}

export default function CardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-10 sm:px-8 sm:py-16">
      <div className="w-full max-w-[26rem]">
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand bg-white shadow-lift">
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <Image
              src={card.logo}
              alt={card.logoAlt}
              width={1041}
              height={546}
              priority
              sizes="(max-width: 640px) 60vw, 240px"
              className="h-auto w-48 sm:w-56"
            />

            {/* The signature's navy left rule, kept as the one piece of its
                structure worth carrying over verbatim. */}
            <div className="mt-8 border-l-[3px] border-ink pl-4">
              <h1 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-[27px]">
                {card.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-slate-body">{card.role}</p>
              <p className="mt-2 text-sm italic text-brand-dark">{card.tagline}</p>
            </div>

            <div className="mt-7 space-y-0.5 border-t border-mist-line pt-5">
              {/* card.phone, not site.phone: this is Nancy's private line and
                  it is published on this page only. */}
              <Row icon={Icon.phone} href={card.phoneHref}>
                {card.phone}
              </Row>
              {site.email && site.emailHref && (
                <Row icon={Icon.mail} href={site.emailHref}>
                  {site.email}
                </Row>
              )}
              <Row icon={Icon.external} href={card.websiteHref} external>
                {card.websiteLabel}
              </Row>
              <div className="flex min-h-[44px] items-center gap-3 px-2 py-2 text-[15px] text-slate-body">
                <Icon.pin className="shrink-0 text-base text-brand-dark" />
                <span>{card.locationLabel}</span>
              </div>
            </div>

            <a href={card.vcardHref} download className="btn-primary btn-block mt-6">
              <Icon.check aria-hidden="true" />
              {card.saveLabel}
            </a>
            <p className="mt-2.5 text-center text-xs text-slate-muted">{card.saveHint}</p>
          </div>

          <p className="border-t border-mist-line bg-mist-light px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-muted sm:px-8">
            {card.meta.join(" · ")}
          </p>
        </div>
      </div>
    </main>
  );
}
