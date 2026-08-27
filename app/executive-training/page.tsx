import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Icon } from "@/components/Icons";
import { executiveTraining as ex } from "@/lib/site";

export const metadata: Metadata = {
  title: "Executive Training",
  description: ex.hero.subtitle,
};

export default function ExecutiveTrainingPage() {
  return (
    <>
      <PageHero {...ex.hero} />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="pill-badge">
                <Icon.briefcase className="text-sm" />
                {ex.badge}
              </p>
              <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                {ex.heading}
              </h2>
              <div className="mt-6 space-y-4">
                {ex.paragraphs.map((p) => (
                  <p key={p} className="prose-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="card-dark ring-2 ring-brand">
              <h2 className="font-display text-lg font-extrabold text-brand">
                {ex.outcomes.heading}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {ex.outcomes.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Icon.check className="mt-0.5 shrink-0 text-base text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={ex.outcomes.cta.href} className="btn-primary btn-block mt-7">
                {ex.outcomes.cta.label}
              </Link>
            </div>
          </div>

          {/* The three program options, each given full room for its copy. */}
          <div className="mt-16 lg:mt-20">
            <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {ex.modulesHeading}
            </h2>
            <div className="mt-10 space-y-6">
              {ex.modules.map((mod, i) => (
                <article
                  key={mod.title}
                  className="grid gap-6 rounded-xl border border-mist-line bg-mist-light p-7 sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand font-display text-lg font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
                      {mod.title}
                    </h3>
                    <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.1em] text-brand">
                      {mod.subtitle}
                    </p>
                    <div className="mt-4 space-y-3">
                      {mod.paragraphs.map((p) => (
                        <p key={p} className="text-sm leading-relaxed text-slate-body">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact" className="btn-primary">
                Contact Us Today To Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
