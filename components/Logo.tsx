import Image from "next/image";
import Link from "next/link";

// The supplied artwork: a red field with the "Davis" script and the D mark,
// with "EXECUTIVE TRAINING" set in red beneath it. Intrinsic size 2550x547.
const LOGO_SRC = "/images/det-logo.jpg";
const LOGO_W = 2550;
const LOGO_H = 547;
const LOGO_ALT = "Davis Executive Training";

/**
 * The wordmark on its own.
 *
 * Note: the "EXECUTIVE TRAINING" line in the artwork is red on white, so the
 * logo needs a light backing to stay legible. On dark surfaces use
 * `<Logo variant="footer" />`, which wraps it in a white card.
 */
export function Wordmark({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={LOGO_W}
      height={LOGO_H}
      priority={priority}
      sizes="(max-width: 640px) 220px, 320px"
      className={className}
    />
  );
}

/**
 * Header lockup: the wordmark, a divider, and the positioning line.
 * `variant="footer"` renders the wordmark alone on a white card.
 */
export default function Logo({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  if (variant === "footer") {
    return (
      <Link href="/" aria-label="Davis Executive Training home" className="inline-flex">
        <span className="inline-flex rounded-md bg-white p-2 shadow-sm">
          <Wordmark className="h-auto w-56" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Davis Executive Training home"
      className="flex shrink-0 items-center gap-4"
    >
      <Wordmark priority className="h-auto w-48 sm:w-56 lg:w-64" />
      <span className="hidden h-12 w-px bg-mist-line sm:block" />
      <span className="hidden leading-tight sm:block">
        <span className="block font-display text-base font-extrabold text-ink">
          Improve Job
          <br />
          Performance
        </span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-muted">
          Public Speaking &amp;
          <br />
          Leadership Mastery
        </span>
      </span>
    </Link>
  );
}
