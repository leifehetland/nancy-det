# Davis Executive Training

A Next.js 14 (App Router) + TypeScript + Tailwind rebuild of davisexecutivetraining.com.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
app/
  layout.tsx              Root layout: fonts, metadata, Header + Footer
  globals.css             Tailwind layers + the component classes below
  page.tsx                Home
  training/               Training overview hub
  executive-training/     The three program options
  financial-services/     Planners/Brokers/Agents + Wholesaler Commando Training
  about/                  Company, mission, founder bios
  contact/                Inquiry form + HQ details
  sitemap.ts, robots.ts
components/
  Header, Footer, PageHero, Logo, Icons, Placeholder, SectionHeading, ContactForm
lib/
  site.ts                 ALL site copy
```

## Editing copy

Every string on the site lives in `lib/site.ts` — no page or component contains
hard-coded copy. To reword anything, edit that file only.

Copy follows **davisexecutivetraining.com**, which is the authoritative source.
Program descriptions on the Executive Training and Financial Services pages, the
benefits lists, the mission statement, the client roster and all four
testimonials are verbatim from the live site.

## In Memoriam page

`/in-memoriam` remembers co-founder Eugene Moor "Moe" Davis (1946 — 2026).

It is deliberately quieter than the rest of the site: no CTA buttons, no
"inquire" prompts, a wider measure and more whitespace. The only brand element
is a thin red rule, so it still reads as part of DET without selling anything.

**Placement.** The link sits last in the footer's Quick Links, and on Moe's card
on the About page — not in the top nav. The top nav is the business's
conversion path, and a memorial among "Training / Financial Services / Contact"
makes the first impression about loss rather than the work. The footer gives it
site-wide presence with more dignity. Move it by adding an entry to `nav` in
`lib/site.ts` if Nancy would rather it be top-level.

**Copy.** Written from the family's published obituary in our own words, not
reproduced from it. Nancy should reword freely — `memorial` in `lib/site.ts`.

Two editorial decisions worth knowing about, both reversible:

- The obituary's passage about Moe's sobriety and AA sponsorship is **not**
  included. It belongs to the family to place, not to a business site. To add
  it, drop a paragraph into `memorial.life.paragraphs`.
- The Financial Services page previously said workshops were "conducted
  personally by Moe Davis." That is now reframed: he is credited in past tense
  as the person who built the wholesaler curriculum, and delivery is attributed
  to Nancy. See `financialServices.paragraphs` and
  `financialServices.wholesaler.closing`.

The About page now leads with Nancy as the person running the company, with Moe
second and in past tense.

## Fact-checking note

Everything in `lib/site.ts` has been checked against davisexecutivetraining.com
and outside sources. Program descriptions, benefits lists, the client roster,
all four testimonials, the mission statement and the founder bios are from the
live site. Details invented by the design reference — contact information, an
"Atlanta & Birmingham" headquarters, a 24-hour response guarantee — have been
removed. See the comment blocks in `lib/site.ts` for the specifics.

## Design system

Layout and component architecture follow the James Williams, LLC project
(centralized content file, `container-x` wrapper, `PageHero`, sticky header,
four-column footer). No copy was carried over from that project.

Tokens live in `tailwind.config.ts`:

| Token   | Value     | Used for                                  |
| ------- | --------- | ----------------------------------------- |
| `ink`   | `#0f1a2e` | Hero banners, utility bar, footer, dark cards |
| `brand` | `#e31e24` | DET red — CTAs, accents, rules, icons     |
| `mist`  | `#f1f5f9` | Section backgrounds, card fills           |

Reusable classes are defined in `app/globals.css`: `.container-x`, `.btn-primary`,
`.btn-secondary`, `.eyebrow`, `.section-title`, `.card`, `.card-dark`, `.chip`,
`.icon-tile`, `.pill-badge`, `.rule-accent`.

## Before launch

1. **Contact details** — `site.email` is set to
   `nancy@nancydavisexecutivetraining.com`. `site.phone`, `site.locations`,
   `site.hq` and `site.hours` are still `null`. The design reference's values for those
   were fabricated, so they were removed rather than shipped. Everything
   that renders them is conditional, so the site simply omits those lines until
   real values are filled in — it never prints a placeholder. Until then the
   inquiry form is the only contact path, which is how the current
   davisexecutivetraining.com works too.

   Leads to verify with Nancy, none of them published:
   - An unclaimed Manta listing gives 7118 Lake Run Circle, Vestavia, AL 35242
     and (205) 915-0630. Looks like a home address — get explicit permission
     before putting either on a public page.
   - The old site's phone lives only inside an image with no alt text
     (`DET-call-300x227.png`), so it can't be read programmatically.
   - Birmingham is **Central** time, not Eastern.
2. **Contact form** — `components/ContactForm.tsx` shows a confirmation state but
   does not submit anywhere. Point `handleSubmit` at a real endpoint.
3. **Images** — every photo slot renders `components/Placeholder.tsx`, a labeled
   panel holding the right aspect ratio. Replace each with `next/image`:
   home hero, four "How We Help" portraits, the "A Better Approach" and
   "You're in Good Company" backgrounds, the mission portrait, and the two
   founder portraits on About, and the portrait of Moe on `/in-memoriam`.
4. **Logo** — the real artwork is wired up from `public/images/det-logo.jpg`
   via `components/Logo.tsx`. It is a 228 KB JPEG of flat brand colors; Next.js
   re-encodes it to WebP/AVIF on the fly, but an SVG or PNG original would be
   sharper and smaller if one exists. Note that "EXECUTIVE TRAINING" is red on
   white inside the image, so the logo needs a light backing — the footer wraps
   it in a white card for this reason.
5. **Legal pages** — the footer links to `/privacy-policy` and `/special-thanks`,
   which don't exist yet.
6. **Favicon** — add `app/favicon.ico` and the PNG icon set to `public/`.

## Fonts

`app/layout.tsx` loads Archivo (display) and Inter (body) through
`next/font/google`, which fetches them at build time and self-hosts the result.
This needs network access to `fonts.googleapis.com` during `npm run build`.
