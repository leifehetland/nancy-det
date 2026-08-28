// Shared shape + validation for the workshop inquiry form.
// Used by both the client form and the server route, so the two cannot drift.

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  program: string;
  message: string;
  /** Honeypot. Real users never see this field, so any value means a bot. */
  website?: string;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Field length caps, so a bot cannot post a megabyte of spam. */
const MAX = {
  name: 120,
  email: 200,
  phone: 40,
  company: 200,
  program: 200,
  message: 5000,
} as const;

/**
 * Validates and normalizes an untrusted request body.
 * Returns the clean payload, or the first human-readable problem found.
 */
export function parseInquiry(
  body: unknown
): { ok: true; data: InquiryPayload } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Malformed request." };
  }

  const raw = body as Record<string, unknown>;
  const str = (k: string) => (typeof raw[k] === "string" ? (raw[k] as string).trim() : "");

  const data: InquiryPayload = {
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    company: str("company"),
    program: str("program"),
    message: str("message"),
    website: str("website"),
  };

  if (!data.name) return { ok: false, error: "Please enter your name." };
  if (!data.email) return { ok: false, error: "Please enter your email address." };
  if (!EMAIL_RE.test(data.email)) return { ok: false, error: "That email address doesn't look right." };
  if (!data.phone) return { ok: false, error: "Please enter a phone number." };

  for (const [key, limit] of Object.entries(MAX)) {
    if (data[key as keyof typeof MAX].length > limit) {
      return { ok: false, error: "That message is too long to send." };
    }
  }

  return { ok: true, data };
}

/** Plain-text body of the notification email. */
export function formatInquiryText(d: InquiryPayload): string {
  return [
    "New workshop inquiry from the website:",
    "",
    `Name:     ${d.name}`,
    `Email:    ${d.email}`,
    `Phone:    ${d.phone}`,
    `Company:  ${d.company || "—"}`,
    `Program:  ${d.program || "—"}`,
    "",
    "Message:",
    d.message || "(none)",
    "",
    "—",
    "Reply directly to this email to reach the sender.",
  ].join("\n");
}
