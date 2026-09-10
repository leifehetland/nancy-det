import { formatInquiryText, type InquiryPayload } from "./inquiry";

/**
 * Outbound mail adapter.
 *
 * Everything provider-specific lives in this file. To swap Resend for Postmark,
 * SES, or SMTP via nodemailer, replace `send()` — nothing else changes.
 *
 * Resend is called over its plain REST API rather than the SDK, so this adds no
 * dependency to the project.
 *
 * Required environment variables (set these in the Vercel project settings):
 *
 *   RESEND_API_KEY   Your key from resend.com/api-keys. Sending scope only.
 *   INQUIRY_TO       Where inquiries land. Defaults to Nancy's mailbox.
 *   INQUIRY_FROM     The verified sender. Until nancydavisexecutivetraining.com
 *                    is verified in Resend (which means adding SPF/DKIM records
 *                    at Porkbun), use "onboarding@resend.dev".
 *
 * NOTE ON HEADERS: the visitor's address goes in Reply-To, never in From.
 * Putting it in From would forge their domain and get the mail spam-filed or
 * rejected outright under DMARC.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type SendResult = { ok: true } | { ok: false; error: string };

export function mailerConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendInquiry(d: InquiryPayload): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO ?? "nancy@nancydavisexecutivetraining.com";
  const from = process.env.INQUIRY_FROM ?? "onboarding@resend.dev";

  if (!apiKey) {
    // Fail loudly in the server log; the caller returns a generic message.
    console.error("[inquiry] RESEND_API_KEY is not set, inquiry was NOT sent.");
    return { ok: false, error: "not_configured" };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Davis Executive Training <${from}>`,
        to: [to],
        reply_to: d.email,
        subject: `Workshop inquiry from ${d.name}${d.company ? ` (${d.company})` : ""}`,
        text: formatInquiryText(d),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[inquiry] Resend returned ${res.status}: ${detail}`);
      return { ok: false, error: "send_failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("[inquiry] Network error calling Resend:", err);
    return { ok: false, error: "send_failed" };
  }
}
