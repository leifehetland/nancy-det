import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { financialServices as fs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financial Services",
  description: fs.hero.subtitle,
};

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero {...fs.hero} />

      {/* ============ PLANNERS · BROKERS · AGENTS ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="pill-badge">
                <Icon.pie className="text-sm" />
                {fs.badge}
              </p>
              <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                {fs.heading}
              </h2>

              <figure className="mt-6 rounded-r-lg border-l-4 border-brand bg-mist-light p-6">
                <blockquote className="text-sm italic leading-relaxed text-slate-body">
                  “{fs.pullQuote.quote}”
                </blockquote>
                {fs.pullQuote.attribution && (
                  <figcaption className="mt-4 text-sm font-bold text-brand">
                    — {fs.pullQuote.attribution}
                  </figcaption>
                )}
              </figure>

              <div className="mt-6 space-y-4">
                {fs.paragraphs.map((p) => (
                  <p key={p} className="prose-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="card-dark lg:sticky lg:top-24">
              <h2 className="border-b border-white/15 pb-4 font-display text-lg font-extrabold">
                {fs.outcomes.heading}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {fs.outcomes.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Icon.check className="mt-0.5 shrink-0 text-base text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={fs.outcomes.cta.href} className="btn-primary btn-block mt-7">
                {fs.outcomes.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHOLESALER COMMANDO TRAINING ============ */}
      <section className="bg-mist">
        <div className="container-x py-16 lg:py-20">
          <p className="eyebrow">{fs.wholesaler.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            {fs.wholesaler.heading}
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <figure className="rounded-r-lg border-l-4 border-brand bg-white p-6">
                <blockquote className="text-sm italic leading-relaxed text-slate-body">
                  “{fs.wholesaler.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-brand">
                  — {fs.wholesaler.quoteAttribution}
                </figcaption>
              </figure>
              <div className="mt-6 space-y-4">
                {fs.wholesaler.paragraphs.map((p) => (
                  <p key={p} className="prose-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-xl border border-mist-line bg-white p-7">
                <h3 className="font-display text-base font-extrabold text-ink">
                  {fs.wholesaler.listHeading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {fs.wholesaler.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-body">
                      <Icon.check className="mt-0.5 shrink-0 text-base text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-xl bg-brand-wash p-7">
                <p className="text-sm leading-relaxed text-ink">{fs.wholesaler.closing}</p>
                <Link href="/contact" className="btn-primary mt-6">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTITUTIONS ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="rounded-2xl bg-mist-light p-8 lg:p-12">
            <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {fs.institutions.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-body">
              {fs.institutions.intro}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {fs.institutions.items.map((name) => (
                <li key={name} className="chip">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
