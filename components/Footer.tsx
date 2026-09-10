import Link from "next/link";
import { Wordmark } from "./Logo";
import { Icon } from "./Icons";
import { footer, memorial, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-mist-line bg-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div className="md:col-span-1">
          <Wordmark className="h-auto w-44" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-body">
            {site.description}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Explore</h2>
          <ul className="mt-4 text-sm lg:space-y-2.5">
            {footer.links.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex min-h-[44px] items-center text-slate-body hover:text-brand-dark lg:min-h-0 lg:py-1">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={memorial.href} className="flex min-h-[44px] items-center text-slate-body hover:text-brand-dark lg:min-h-0 lg:py-1">
                {memorial.navLabel}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
            {footer.touchHeading}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {site.email && site.emailHref && (
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex min-h-[44px] items-center gap-2 text-slate-body hover:text-brand-dark"
                >
                  <Icon.mail className="mt-0.5 shrink-0 text-base text-brand" />
                  <span>
                    {site.email.split("@")[0]}@<wbr />
                    {site.email.split("@")[1]}
                  </span>
                </a>
              </li>
            )}
            {site.phone && site.phoneHref && (
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 text-slate-body hover:text-brand">
                  <Icon.phone className="shrink-0 text-base text-brand" />
                  {site.phone}
                </a>
              </li>
            )}
            {site.hq && (
              <li className="flex items-start gap-2 text-slate-body">
                <Icon.pin className="mt-0.5 shrink-0 text-base text-brand" />
                {site.hq}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-mist-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {footer.legal.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-[44px] items-center hover:text-brand-dark sm:min-h-0">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
