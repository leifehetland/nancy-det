import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import { Icon } from "@/components/Icons";
import { about, memorial } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: about.hero.subtitle,
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="pill-badge">
                <Icon.award className="text-sm" />
                {about.badge}
              </p>
              <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                {about.heading}
              </h2>
              <div className="mt-6 space-y-4">
                {about.paragraphs.map((p) => (
                  <p key={p} className="prose-body">
                    {p}
                  </p>
                ))}
              </div>
              <Link href={about.cta.href} className="btn-primary mt-8 normal-case tracking-normal">
                {about.cta.label}
                <Icon.chevron />
              </Link>
            </div>

            <div className="card-dark p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg text-white">
                <Icon.sparkle />
              </span>
              <h2 className="mt-8 font-display text-xl font-extrabold uppercase tracking-wide text-white">
                {about.missionCard.heading}
              </h2>
              <blockquote className="mt-5 text-base italic leading-relaxed text-white/85">
                “{about.missionCard.quote}”
              </blockquote>
              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
                {about.missionCard.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm font-bold text-white">{stat.label}</dt>
                    <dd className="mt-1 text-xs text-white/55">{stat.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="bg-mist">
        <div className="container-x py-16 lg:py-20">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            {about.peopleHeading}
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {about.people.map((person) => (
              <article
                key={person.name}
                className="rounded-xl border border-mist-line bg-white p-7 sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <Placeholder
                    label="Portrait"
                    rounded="rounded-full"
                    className="h-20 w-20 shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-ink">{person.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-brand">
                      {person.role}
                    </p>
                  </div>
                </div>

                {person.quote && (
                  <blockquote className="mt-6 rounded-r-lg border-l-4 border-brand bg-mist-light p-5 text-sm italic leading-relaxed text-slate-body">
                    “{person.quote}”
                  </blockquote>
                )}

                <div className="mt-5 space-y-3">
                  {person.paragraphs.map((p) => (
                    <p key={p} className="text-sm leading-relaxed text-slate-body">
                      {p}
                    </p>
                  ))}
                </div>

                {person.memorial && (
                  <Link
                    href={memorial.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark"
                  >
                    {memorial.navLabel}
                    <Icon.chevron className="text-xs" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY DET ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <h2 className="text-center font-display text-2xl font-extrabold uppercase tracking-tight text-ink sm:text-3xl">
            {about.whyHeading}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {about.why.map((item) => {
              const Glyph = Icon[item.icon];
              return (
                <div key={item.title} className="card">
                  <span className="icon-tile">
                    <Glyph />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-extrabold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-body">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
