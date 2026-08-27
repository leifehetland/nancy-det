import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { training } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description: training.hero.subtitle,
};

export default function TrainingPage() {
  return (
    <>
      <PageHero {...training.hero} />

      <section className="bg-white">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-3 lg:gap-12 lg:py-20">
          {/* ---------------- Main column ---------------- */}
          <div className="lg:col-span-2">
            <h2 className="rule-accent font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {training.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {training.paragraphs.map((p) => (
                <p key={p} className="prose-body">
                  {p}
                </p>
              ))}
            </div>

            {/* The two program families the live site organizes training around. */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {training.tracks.map((track) => {
                const Glyph = Icon[track.icon];
                return (
                  <Link
                    key={track.title}
                    href={track.href}
                    className="group rounded-xl border border-mist-line bg-ink p-6 text-white transition-colors hover:border-brand"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                      <Glyph />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-extrabold">{track.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{track.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-light">
                      Learn more
                      <Icon.chevron className="text-xs transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {training.pillars.map((pillar) => {
                const Glyph = Icon[pillar.icon];
                return (
                  <div key={pillar.title} className="card">
                    <span className="icon-tile">
                      <Glyph />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-body">{pillar.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl bg-brand-wash p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-extrabold text-brand">
                <Icon.sparkle />
                {training.gainsHeading}
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {training.gains.map((gain) => (
                  <li key={gain} className="flex items-start gap-2.5 text-sm text-ink">
                    <Icon.check className="mt-0.5 shrink-0 text-base text-brand" />
                    {gain}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card-dark">
              <h2 className="border-b border-white/15 pb-4 font-display text-lg font-extrabold">
                {training.specs.heading}
              </h2>
              <dl className="mt-5 space-y-5">
                {training.specs.items.map((item) => {
                  const Glyph = Icon[item.icon];
                  return (
                    <div key={item.title} className="flex gap-3">
                      <Glyph className="mt-0.5 shrink-0 text-base text-brand" />
                      <div>
                        <dt className="text-sm font-bold text-white">{item.title}</dt>
                        <dd className="mt-1 text-xs leading-relaxed text-white/60">{item.text}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
              <Link href={training.specs.cta.href} className="btn-primary btn-block mt-7">
                {training.specs.cta.label}
              </Link>
            </div>

            <div className="card">
              <h2 className="font-display text-base font-extrabold text-ink">
                {training.inHouse.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-body">{training.inHouse.text}</p>
              <Link
                href={training.inHouse.cta.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-dark"
              >
                {training.inHouse.cta.label}
                <Icon.chevron className="text-xs" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
