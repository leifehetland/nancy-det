import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Placeholder from "@/components/Placeholder";
import SectionHeading from "@/components/SectionHeading";
import { Icon } from "@/components/Icons";
import {
  about,
  approach,
  clients,
  contact,
  hero,
  outcomes,
  programs,
  quoteBand,
  testimonialSection,
  testimonials,
} from "@/lib/site";

/**
 * One-page brochure site.
 *
 * Section order matches lib/site.ts, except About Nancy, which renders here
 * right after the hero, above the quote band, rather than after it. The
 * design is deliberately restrained: type-led, few borders, red used as an
 * accent rather than a fill. Section ids are the anchor targets the header
 * observes.
 */
export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-white">
        <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {hero.heading}
            </h1>
            <span aria-hidden="true" className="mt-7 block h-1 w-16 rounded-full bg-brand" />
            <p className="mt-7 max-w-xl prose-body">
              {hero.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={hero.primaryCta.href} className="btn-primary normal-case tracking-normal">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="btn-ghost normal-case tracking-normal">
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {hero.image ? (
            // Square graphic, framed rather than cropped: a dark blue mat
            // around the full image instead of the object-cover photo slot
            // Placeholder uses elsewhere.
            <div className="mx-auto w-full max-w-md rounded-2xl bg-ink p-4 shadow-lift sm:p-6 lg:mx-0 lg:max-w-none">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                width={2000}
                height={2000}
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="w-full rounded-lg"
              />
            </div>
          ) : (
            <Placeholder
              label={hero.imageAlt}
              priority
              tone="dark"
              rounded="rounded-2xl"
              className="aspect-[4/5] w-full"
            />
          )}
        </div>

        {/* Navy credential strip — grounds the hero and brings brand colour in
            immediately below the fold line. */}
        <div className="bg-ink">
          <div className="container-x grid divide-y divide-white/10 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {hero.facts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-3 px-2 py-4 sm:justify-center">
                <span className="whitespace-nowrap font-display text-2xl font-extrabold text-brand-light">
                  {f.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT NANCY ============ */}
      <section id="about" className="scroll-mt-24 bg-white">
        <div className="container-x py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
            <Placeholder
              label={about.imageAlt}
              src={about.image}
              rounded="rounded-2xl"
              className="mx-auto aspect-[4/5] w-full max-w-xs lg:mx-0 lg:w-72"
            />

            <div>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 className="section-title mt-4">{about.heading}</h2>
              <p className="mt-2 text-sm font-bold text-brand-dark">{about.role}</p>

              <div className="mt-6 space-y-4">
                {about.paragraphs.map((p) => (
                  <p key={p} className="prose-body">
                    {p}
                  </p>
                ))}
              </div>

              <figure className="mt-8 rounded-2xl bg-ink p-7 sm:p-8">
                <p className="eyebrow-light">{about.mission.label}</p>
                <blockquote className="mt-4 font-display text-lg font-semibold italic leading-relaxed text-white">
                  “{about.mission.quote}”
                </blockquote>
              </figure>

              <a href={about.cta.href} className="btn-primary mt-8 normal-case tracking-normal">
                {about.cta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUOTE BAND ============ */}
      {/* The quote moved out of the hero. It reads as the premise for the
          sections that follow, rather than as an opening statement. */}
      <section className="border-y-4 border-brand bg-ink">
        <div className="container-x py-16 lg:py-20">
          <figure className="mx-auto max-w-4xl text-center">
            <Icon.quote className="mx-auto text-3xl text-brand" aria-hidden="true" />
            <blockquote className="mt-6 font-display text-xl font-extrabold leading-[1.4] tracking-tight text-white sm:text-2xl lg:text-[1.9rem]">
              {quoteBand.quote}
            </blockquote>
            <figcaption className="mt-7 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brand" />
              <span>
                <span className="font-bold text-white">{quoteBand.attribution}</span>
                <span className="block text-white/50 sm:inline">
                  <span className="hidden sm:inline"> · </span>
                  {quoteBand.attributionRole}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ APPROACH ============ */}
      <section id="approach" className="scroll-mt-24 bg-mist-light">
        <div className="container-x py-20 lg:py-24">
          <SectionHeading
            eyebrow={approach.eyebrow}
            title={approach.heading}
            intro={approach.intro}
          />

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
            {approach.items.map((item) => {
              const Glyph = Icon[item.icon];
              return (
                <div key={item.title}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                      <Glyph />
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Outcomes moved onto navy so the section closes with weight. */}
          <div className="mt-16 rounded-2xl bg-ink p-8 sm:p-10">
            <h3 className="font-display text-lg font-extrabold text-white">{outcomes.heading}</h3>
            <span aria-hidden="true" className="mt-4 block h-1 w-10 rounded-full bg-brand" />
            <ul className="mt-7 grid gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.items.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-white/75">
                  <Icon.check className="mt-0.5 shrink-0 text-base text-brand-light" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section id="programs" className="scroll-mt-24 bg-white">
        <div className="container-x py-20 lg:py-24">
          <SectionHeading
            eyebrow={programs.eyebrow}
            title={programs.heading}
            intro={programs.intro}
          />

          <div className="mt-14 space-y-6">
            {programs.items.map((p) => {
              const Glyph = Icon[p.icon];
              return (
                <article
                  key={p.title}
                  className="grid gap-6 rounded-xl bg-ink p-7 text-white sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-lg text-white">
                    <Glyph />
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-extrabold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-brand-light">{p.lead}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                      {p.text}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-xs font-semibold leading-snug text-white/85"
                        >
                          <Icon.check className="mt-px shrink-0 text-sm text-brand-light" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="bg-white">
        <div className="container-x py-20 lg:py-24">
          <SectionHeading
            eyebrow={clients.eyebrow}
            title={clients.heading}
            intro={clients.intro}
          />
          <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.items.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2.5 border-b border-mist-line pb-3 text-sm font-semibold text-ink"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-mist-light">
        <div className="container-x py-20 lg:py-24">
          <SectionHeading
            eyebrow={testimonialSection.eyebrow}
            title={testimonialSection.heading}
          />

          <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-mist-line bg-white p-6 sm:p-7">
                <Icon.quote className="text-2xl text-brand/25" aria-hidden="true" />
                <blockquote className="mt-3 text-sm italic leading-relaxed text-slate-body">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-start gap-3 text-sm">
                  <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-brand" />
                  <span>
                    <span className="font-bold text-ink">{t.name}</span>
                    <span className="text-slate-muted"> · {t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="scroll-mt-24 border-t-4 border-brand bg-ink">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow-light">{contact.eyebrow}</p>
            <h2 className="section-title-light mt-4">{contact.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">{contact.intro}</p>

            <div className="mt-10 border-l-2 border-brand pl-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-light">
                {contact.guarantee.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {contact.guarantee.text}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-lift sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============ REMEMBERING MOE ============ */}
      {/* Raised to full section weight and given its own white ground, rather
          than stacking directly under Contact's navy — this is now the
          highlight for Moe on the site, not a footnote below it. The QR gets
          the dark card instead, so it reads as the focal point. */}
      <section className="border-t-4 border-brand bg-white">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow">In Memoriam</p>
            <h2 className="section-title mt-4">{about.moe.heading}</h2>
            <p className="mt-5 max-w-xl prose-body">{about.moe.text}</p>
          </div>

          <div className="mx-auto w-full max-w-xs rounded-2xl bg-ink p-7 text-center shadow-lift sm:p-9">
            <h3 className="eyebrow-light">{about.moe.qrHeading}</h3>
            <div className="mx-auto mt-5 w-fit rounded-xl bg-white p-3">
              <Image
                src={about.moe.qrCode}
                alt={about.moe.qrAlt}
                width={820}
                height={820}
                className="h-40 w-40 sm:h-44 sm:w-44"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">{about.moe.qrCaption}</p>
          </div>
        </div>
      </section>
    </>
  );
}
