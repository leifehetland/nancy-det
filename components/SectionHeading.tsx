/**
 * Section heading with the DET red rule. `align="center"` centers the rule and
 * shrinks it to a short tick, matching the "How We Help" / "Testimonials" rows.
 */
export default function SectionHeading({
  title,
  intro,
  align = "left",
  tone = "ink",
  as: Tag = "h2",
}: {
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "ink" | "brand";
  as?: "h1" | "h2" | "h3";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <Tag
        className={[
          "font-display text-2xl font-extrabold tracking-tight sm:text-3xl",
          tone === "brand" ? "text-brand" : "text-ink",
          centered ? "rule-accent-center" : "rule-accent",
        ].join(" ")}
      >
        {title}
      </Tag>
      {intro && (
        <p className={["prose-body", centered ? "mt-5 text-sm" : "mt-6"].join(" ")}>
          {intro}
        </p>
      )}
    </div>
  );
}
