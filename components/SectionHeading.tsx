/**
 * The eyebrow + heading + optional intro block that opens most sections.
 *
 * This pattern appeared six times in page.tsx with small drifts between
 * copies. Centralising it means a change to section rhythm happens once.
 *
 * `rule-top` draws the short red rule above the eyebrow (see globals.css).
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "max-w-2xl",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`rule-top ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {intro && (
        <p className="mt-5 prose-body">{intro}</p>
      )}
    </div>
  );
}
