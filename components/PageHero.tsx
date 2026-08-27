/**
 * The navy banner that opens every interior page.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-x py-16 text-center md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
