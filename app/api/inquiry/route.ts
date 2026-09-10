import { NextResponse } from "next/server";
import { parseInquiry } from "@/lib/inquiry";
import { sendInquiry } from "@/lib/mailer";

// Node runtime, not Edge: the mail adapter needs full fetch/TLS behaviour, and
// an SMTP-based adapter would need TCP sockets that the Edge runtime lacks.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Crude per-IP throttle. Serverless instances do not share memory, so this is a
 * speed bump rather than a real limit — it costs nothing and stops the naive
 * case. If the form ever gets seriously abused, move this to Upstash/Vercel KV.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) hits.clear();

  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const parsed = parseInquiry(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  // Honeypot: the field is hidden from real users, so anything in it is a bot.
  // Return 200 so the bot believes it succeeded and does not retry.
  if (parsed.data.website) {
    console.warn(`[inquiry] Honeypot triggered from ${ip}, discarded.`);
    return NextResponse.json({ ok: true });
  }

  const sent = await sendInquiry(parsed.data);
  if (!sent.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sorry, we couldn't send that just now. Please email nancy@nancydavisexecutivetraining.com directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
