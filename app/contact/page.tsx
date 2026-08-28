import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contact.hero.subtitle,
};

export default function ContactPage() {
  // Only rows with a real value are shown, so the panel never prints a
  // placeholder. While these are all null the form is the sole contact path —
  // which is exactly how the current davisexecutivetraining.com works.
  const details = [
    { icon: Icon.pin, title: "Location", value: site.locations, href: undefined },
    { icon: Icon.phone, title: "Phone", value: site.phone, href: site.phoneHref ?? undefined },
    { icon: Icon.mail, title: "Email", value: site.email, href: site.emailHref ?? undefined },
    { icon: Icon.clock, title: "Hours", value: site.hours, href: undefined },
  ].filter((d): d is typeof d & { value: string } => Boolean(d.value));

  return (
    <>
      <PageHero {...contact.hero} />

      <section className="bg-white">
        <div className="container-x grid gap-10 py-16 lg:grid-cols-5 lg:gap-12 lg:py-20">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-mist-line bg-mist-light p-8 lg:p-10">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                {contact.form.heading}
              </h2>
              <p className="mt-2 text-sm text-slate-body">{contact.form.intro}</p>
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            {details.length > 0 && (
            <div className="card-dark p-8">
              <h2 className="border-b border-white/15 pb-4 font-display text-lg font-extrabold">
                {contact.hqHeading}
              </h2>
              <dl className="mt-6 space-y-5">
                {details.map(({ icon: Glyph, title, value, href }) => (
                  <div key={title} className="flex gap-3">
                    <Glyph className="mt-0.5 shrink-0 text-base text-brand" />
                    <div>
                      <dt className="text-sm font-bold text-white">{title}</dt>
                      <dd className="mt-1 text-xs leading-relaxed text-white/60">
                        {href ? (
                          <a href={href} className="break-all hover:text-white">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
            )}

            <div className="rounded-xl bg-brand-wash p-7">
              <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.12em] text-brand">
                {contact.guarantee.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-body">
                {contact.guarantee.text}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
