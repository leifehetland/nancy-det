import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/Icons";
import {
  betterApproach,
  goodCompany,
  home,
  howWeHelp,
  mission,
  testimonialSection,
  testimonials,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="bg-white">
        <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className="pill-badge">
              <Icon.sparkle className="text-sm" />
              {home.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {home.titleLead} <span className="text-brand">{home.titleAccent}</span>
            </h1>
            <p className="mt-3 font-display text-xl font-extrabold uppercase tracking-tight text-ink sm:text-2xl">
              {home.subtitle}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-body">{home.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={home.primaryCta.href} className="btn-primary normal-case tracking-normal">
                {home.primaryCta.label}
                <Icon.chevron />
              </Link>
              <Link href={home.secondaryCta.href} className="btn-secondary normal-case tracking-normal">
                {home.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Hero image slot with the overlay caption from the design. */}
          <div className="relative overflow-hidden rounded-2xl shadow-lift">
            <Placeholder
              label="Speaker addressing a workshop audience"
              tone="dark"
              rounded="rounded-2xl"
              className="aspect-[4/3] w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/70 to-transparent p-6 pt-16 text-white">
              <p className="font-bold">{home.heroCaption.title}</p>
              <p className="mt-1 text-xs text-white/70">{home.heroCaption.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HOW WE HELP ===================== */}
      <section className="bg-mist">
        <div className="container-x py-16 lg:py-20">
          <SectionHeading
            title={howWeHelp.heading}
            intro={howWeHelp.intro}
            align="center"
            tone="brand"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeHelp.items.map((item) => {
              const Glyph = Icon[item.icon];
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-mist-line bg-white p-6 text-center shadow-card"
                >
                  <Placeholder
                    label="Portrait"
                    rounded="rounded-full"
                    className="mx-auto h-20 w-20"
                  />
                  <h3 className="mt-5 flex items-center justify-center gap-2 font-display text-base font-extrabold text-brand">
                    <Glyph />
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-body">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== A BETTER APPROACH ===================== */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Placeholder
          label="Workshop participants seated in a training room"
          tone="dark"
          rounded="rounded-none"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/70" />
        <div className="container-x flex justify-end py-16 lg:py-24">
          <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lift">
            <h2 className="rule-accent font-display text-2xl font-extrabold tracking-tight text-ink">
              {betterApproach.heading}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-body">{betterApproach.text}</p>
            <Link href={betterApproach.cta.href} className="btn-primary mt-7">
              {betterApproach.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== YOU'RE IN GOOD COMPANY ===================== */}
      <section className="relative isolate overflow-hidden bg-mist-light">
        <Placeholder
          label="Corporate team backdrop"
          rounded="rounded-none"
          className="absolute inset-0 -z-10 h-full w-full opacity-40"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/75" />
        <div className="container-x py-16 text-center lg:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-lg text-brand">
            <Icon.building />
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            {goodCompany.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-body">
            {goodCompany.intro}
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {goodCompany.clients.map((c) => (
              <li key={c} className="chip text-xs shadow-sm">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <SectionHeading
            title={testimonialSection.heading}
            intro={testimonialSection.intro}
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative overflow-hidden rounded-xl border border-mist-line bg-mist-light p-7"
              >
                <Icon.quote
                  className="absolute right-5 top-5 text-3xl text-brand/15"
                  aria-hidden="true"
                />
                <blockquote className="relative pr-8 text-sm italic leading-relaxed text-slate-body">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-brand">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="bg-ink">
        <div className="container-x py-16 lg:py-20">
          <div className="grid items-center gap-10 rounded-2xl bg-ink-soft p-8 lg:grid-cols-[auto_1fr] lg:p-12">
            <Placeholder
              label="Coaching session"
              tone="dark"
              rounded="rounded-full"
              className="h-40 w-40 shrink-0 ring-4 ring-brand/60 lg:h-48 lg:w-48"
            />
            <div>
              <p className="eyebrow">{mission.eyebrow}</p>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl">
                {mission.statement}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65">
                {mission.support}
              </p>
              <Link href={mission.cta.href} className="btn-primary mt-7 normal-case tracking-normal">
                {mission.cta.label}
                <Icon.chevron />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
