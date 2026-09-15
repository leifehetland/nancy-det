import type { ReactNode } from "react";

/**
 * Navy banner that opens the interior pages (/in-memoriam, /privacy-policy).
 *
 * `meta` takes whatever belongs under the title on that page: dates and role
 * on the memorial, a last-updated line on the policy.
 */
export default function PageHero({
  eyebrow,
  title,
  rule = false,
  meta,
}: {
  eyebrow: string;
  title: string;
  /** Short red rule between the title and the meta block. */
  rule?: boolean;
  meta?: ReactNode;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-x py-16 text-center md:py-20">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {rule && (
          <span aria-hidden="true" className="mx-auto mt-7 block h-px w-16 bg-brand" />
        )}
        {meta}
      </div>
    </section>
  );
}
