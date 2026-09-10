import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information submitted through this website.`,
};

/**
 * Privacy policy.
 *
 * Written to describe what this site ACTUALLY does today: one contact form,
 * no analytics, no cookies, no third-party trackers. If any of that changes
 * (adding Google Analytics, a chat widget, a booking embed), this page has to
 * change with it.
 *
 * This is a plain-language description, not legal advice. Nancy should have it
 * reviewed before relying on it, particularly if she ever collects information
 * from students under 13, which brings COPPA into scope.
 */
export default function PrivacyPolicyPage() {
  const updated = "September 2026";

  return (
    <>
      <section className="bg-ink text-white">
        <div className="container-x py-16 text-center md:py-20">
          <p className="eyebrow-light">Legal</p>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/60">Last updated {updated}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-10">
            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">
                What we collect
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                The only information this website collects is what you type into the
                inquiry form: your name, email address, phone number, optionally your
                company or organization, which program you are interested in, and
                whatever you write in the message field.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                We do not use analytics, advertising trackers, or cookies. The site does
                not build a profile of you, and it does not know you visited unless you
                choose to write to us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">
                What we do with it
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                Form submissions are delivered by email to Nancy Davis so she can reply
                to you. The message passes through Resend, an email delivery service, on
                its way to her inbox. That is the only third party involved.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                We do not sell your information, rent it, or share it with anyone for
                marketing. We will not add you to a mailing list because you sent an
                inquiry.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">
                How long we keep it
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                Your inquiry lives in Nancy&apos;s email as long as ordinary business
                correspondence does. If you would like it deleted, ask and it will be.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">
                Students and young people
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                Our school and student programs are arranged through the school or
                through a parent or guardian. This website is not directed at children,
                and we ask that young people not submit the form themselves.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-ink">
                Getting in touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                Questions about any of this, or requests to see or delete what we hold,
                can go to{" "}
                {site.email && site.emailHref ? (
                  <a
                    href={site.emailHref}
                    className="font-semibold text-brand-dark underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                ) : (
                  "us through the inquiry form"
                )}
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
