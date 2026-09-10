import Image from "next/image";

/**
 * Image slot.
 *
 * With `src`, renders the real photograph. Without one, renders a tinted panel
 * that holds the correct aspect ratio and names the shot that belongs there —
 * so an unfilled slot reads as deliberate rather than broken.
 *
 * `src` accepts a local path under /public or an images.unsplash.com URL
 * (allowed in next.config.mjs).
 */
export default function Placeholder({
  label,
  src,
  className = "",
  tone = "light",
  rounded = "rounded-xl",
  priority = false,
}: {
  label: string;
  src?: string | null;
  className?: string;
  tone?: "light" | "dark";
  rounded?: string;
  priority?: boolean;
}) {
  const dark = tone === "dark";

  if (src) {
    return (
      <div className={["relative overflow-hidden", rounded, className].join(" ")}>
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    );
  }

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
