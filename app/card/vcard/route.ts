import { card, site } from "@/lib/site";

/**
 * vCard download for /card's "Save to contacts" button.
 *
 * Built from lib/site.ts rather than checked in as a static .vcf so the file
 * a visitor saves can never disagree with what the page shows them.
 *
 * vCard 3.0, not 4.0: 3.0 is what iOS Contacts and Android both import
 * without complaint. Lines are CRLF-terminated because the spec requires it
 * and some parsers enforce it.
 */
export const runtime = "nodejs";

/** Escape the characters that are structural inside a vCard property value. */
function esc(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

export async function GET() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Davis;Nancy;;;",
    `FN:${esc(card.name)}`,
    `ORG:${esc(site.name)}`,
    "TITLE:Founder",
  ];

  // card.phone, not site.phone — see the note on the `card` export.
  lines.push(`TEL;TYPE=CELL,VOICE:${card.phoneHref.replace("tel:", "")}`);

  if (site.email) {
    lines.push(`EMAIL;TYPE=INTERNET,WORK:${site.email}`);
  }

  lines.push(
    `URL:${card.websiteHref}`,
    "ADR;TYPE=WORK:;;;Birmingham;AL;;USA",
    `NOTE:${esc(`${card.tagline} Executive communication and presentation training.`)}`,
    "END:VCARD"
  );

  return new Response(lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nancy-davis.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
