import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import { memorial as m } from "@/lib/site";

export const metadata: Metadata = {
  title: "In Memoriam",
  description: `Remembering ${m.shortName}, co-founder of Davis Executive Training. ${m.dates}.`,
};

/**
 * Memorial page.
 *
 * Intentionally quieter than the rest of the site: no red CTA buttons, no
 * "inquire" prompts, wider measure, more air. The only brand element is a thin
 * red rule, so the page still reads as part of DET without selling anything.
 */
export default function InMemoriamPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow={m.eyebrow}
        title={m.name}
        rule
        meta={
          <>
            <p className="mt-7 text-base text-white/70">{m.dates}</p>
            <p className="mt-1.5 text-sm text-white/60">{m.role}</p>
          </>
        }
      />

      {/* ============ PORTRAIT + INTRO ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
            {/* Replace with next/image once a photograph is available. */}
            <Placeholder
              label="Photograph of Moe"
              rounded="rounded-full"
              className="mx-auto h-44 w-44 shrink-0 sm:mx-0 sm:h-52 sm:w-52"
            />
            <p className="text-lg leading-relaxed text-slate-body">{m.intro}</p>
          </div>

          {/* His own words */}
          <figure className="mx-auto mt-14 max-w-3xl border-l-4 border-brand pl-7">
            <blockquote className="font-display text-xl font-semibold italic leading-relaxed text-ink sm:text-2xl">
              “{m.quote}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm font-bold text-slate-muted">
              <span aria-hidden="true" className="h-px w-6 bg-brand" />
              {m.shortName}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============ LIFE ============ */}
      <section className="bg-mist-light">
        <div className="container-x py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {m.life.heading}
            </h2>
            <div className="mt-7 space-y-5">
              {m.life.paragraphs.map((p) => (
                <p key={p} className="prose-body">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-2xl font-extrabold tracking-tight text-ink">
              {m.personal.heading}
            </h2>
            <div className="mt-7 space-y-5">
              {m.personal.paragraphs.map((p) => (
                <p key={p} className="prose-body">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SURVIVORS + WISHES ============ */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {m.survivors.heading}
            </h2>
            <ul className="mt-7 space-y-4">
              {m.survivors.items.map((person) => (
                <li key={person.name} className="border-l-2 border-mist-line pl-5">
                  <span className="block font-bold text-ink">{person.name}</span>
                  <span className="block text-sm text-slate-body">{person.detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl bg-mist p-8">
              <h2 className="font-display text-lg font-extrabold tracking-tight text-ink">
                {m.wishes.heading}
              </h2>
              <p className="mt-4 prose-body">{m.wishes.text}</p>
            </div>

            <p className="mt-12 text-center text-sm leading-relaxed text-slate-muted">
              {m.source.text}{" "}
              <a
                href={m.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline underline-offset-4 hover:text-brand-dark"
              >
                {m.source.label}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTINUITY ============ */}
      <section className="bg-ink">
        <div className="container-x py-12">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/60">
            {m.continuity}
          </p>
        </div>
      </section>
    </>
  );
}
