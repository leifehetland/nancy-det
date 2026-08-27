import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { footer, site } from "@/lib/site";

export default function Footer() {
  // Split the client roster into two even columns.
  const half = Math.ceil(footer.trusted.length / 2);
  const trustedColumns = [footer.trusted.slice(0, half), footer.trusted.slice(half)];

  return (
    <footer className="border-t-4 border-brand bg-ink text-white/70">
      <div className="container-x grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo variant="footer" />
          <p className="mt-5 text-sm leading-relaxed">{site.description}</p>
          <p className="mt-5 flex items-start gap-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-light">
            <Icon.shield className="mt-0.5 shrink-0 text-sm" />
            {footer.badge}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="border-b border-white/15 pb-3 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-white">
            {footer.quickLinksHeading}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex items-center gap-2 hover:text-white">
                  <Icon.chevron className="text-[10px] text-brand" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trusted by */}
        <div>
          <h2 className="border-b border-white/15 pb-3 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-white">
            {footer.trustedHeading}
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-white/50">{footer.trustedIntro}</p>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            {trustedColumns.map((col, i) => (
              <ul key={i} className="space-y-2">
                {col.map((name) => (
                  <li key={name}>• {name}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="border-b border-white/15 pb-3 font-display text-sm font-extrabold uppercase tracking-[0.12em] text-white">
            {footer.touchHeading}
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon.pin className="mt-0.5 shrink-0 text-base text-brand" />
              <span className="text-white/80">{site.hq}</span>
            </li>
            <li className="flex gap-3">
              <Icon.phone className="mt-0.5 shrink-0 text-base text-brand" />
              <a href={site.phoneHref} className="text-white/80 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon.mail className="mt-0.5 shrink-0 text-base text-brand" />
              <a href={site.emailHref} className="break-all text-white/80 hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <Link href={footer.cta.href} className="btn-primary btn-block mt-6">
            {footer.cta.label}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {footer.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
