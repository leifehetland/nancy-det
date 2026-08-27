/**
 * Photo placeholder.
 *
 * The design calls for photography that we don't have licensed assets for yet.
 * Rather than ship broken <img> tags, each photo slot renders this: a tinted
 * panel that holds the correct aspect ratio and names the shot that belongs
 * there. Replace a slot by swapping this component for next/image.
 */
export default function Placeholder({
  label,
  className = "",
  tone = "light",
  rounded = "rounded-xl",
}: {
  label: string;
  className?: string;
  tone?: "light" | "dark";
  rounded?: string;
}) {
  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={`Placeholder for ${label}`}
      className={[
        "relative flex items-center justify-center overflow-hidden",
        rounded,
        dark ? "bg-ink-soft" : "bg-mist",
        className,
      ].join(" ")}
    >
      {/* Diagonal hatch so the slot reads as intentionally empty, not broken. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${
            dark ? "rgba(255,255,255,0.05)" : "rgba(15,26,46,0.045)"
          } 0 10px, transparent 10px 20px)`,
        }}
      />
      <span
        className={[
          "relative px-4 text-center text-[11px] font-bold uppercase tracking-[0.16em]",
          dark ? "text-white/45" : "text-ink/35",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}
