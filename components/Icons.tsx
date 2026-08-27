import type { SVGProps } from "react";

/**
 * A small hand-rolled icon set. Kept local (rather than pulling an icon
 * package) so the bundle stays tiny and every glyph shares one stroke weight.
 *
 * All icons inherit `currentColor` and default to 1em so they size with text.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="1em"
      height="1em"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icon = {
  phone: (p: IconProps) => (
    <Base {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </Base>
  ),
  mail: (p: IconProps) => (
    <Base {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </Base>
  ),
  pin: (p: IconProps) => (
    <Base {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Base>
  ),
  clock: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Base>
  ),
  users: (p: IconProps) => (
    <Base {...p}>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M22 20v-1.5a4 4 0 0 0-3-3.8M16.5 4.2a3.2 3.2 0 0 1 0 6" />
    </Base>
  ),
  video: (p: IconProps) => (
    <Base {...p}>
      <rect x="2" y="6" width="13" height="12" rx="2" />
      <path d="m15 11 6-3.5v9L15 13" />
    </Base>
  ),
  mic: (p: IconProps) => (
    <Base {...p}>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
    </Base>
  ),
  chat: (p: IconProps) => (
    <Base {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z" />
    </Base>
  ),
  target: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </Base>
  ),
  trend: (p: IconProps) => (
    <Base {...p}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Base>
  ),
  award: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
    </Base>
  ),
  shield: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 22s8-3.5 8-10V5.5L12 2 4 5.5V12c0 6.5 8 10 8 10Z" />
    </Base>
  ),
  dollar: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 2v20" />
      <path d="M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3" />
    </Base>
  ),
  book: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5Z" />
      <path d="M12 2v18" />
    </Base>
  ),
  building: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 22V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v18" />
      <path d="M15 9h4a1 1 0 0 1 1 1v12M2 22h20" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </Base>
  ),
  briefcase: (p: IconProps) => (
    <Base {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M2 13h20" />
    </Base>
  ),
  pie: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3a9 9 0 1 0 9 9h-9Z" />
      <path d="M15.5 2.5A9 9 0 0 1 21.5 8.5H15.5Z" />
    </Base>
  ),
  sparkle: (p: IconProps) => (
    <Base {...p}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
      <path d="M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" />
    </Base>
  ),
  check: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </Base>
  ),
  send: (p: IconProps) => (
    <Base {...p}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </Base>
  ),
  chevron: (p: IconProps) => (
    <Base {...p}>
      <path d="m9 6 6 6-6 6" />
    </Base>
  ),
  quote: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="1em" height="1em" {...p}>
      <path d="M9.5 5C6.5 6.6 4.6 9.4 4.6 12.9c0 3.3 1.9 5.6 4.6 5.6 2.3 0 4-1.6 4-3.9 0-2.2-1.5-3.8-3.6-3.8-.4 0-.9.1-1 .1.3-1.6 1.9-3.4 3.7-4.4L9.5 5Zm9.4 0c-3 1.6-4.9 4.4-4.9 7.9 0 3.3 1.9 5.6 4.6 5.6 2.3 0 4-1.6 4-3.9 0-2.2-1.5-3.8-3.6-3.8-.4 0-.9.1-1 .1.3-1.6 1.9-3.4 3.7-4.4L18.9 5Z" />
    </svg>
  ),
};

/** Icon names that page content in `lib/site.ts` is allowed to reference. */
export type IconName = keyof typeof Icon;
