"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { contact, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Workshop inquiry form.
 *
 * Posts to /api/inquiry, which validates the payload and emails it to Nancy.
 * See lib/mailer.ts for the provider adapter and the env vars it needs.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setError(
        site.email
          ? `We couldn’t reach the server. Please email ${site.email} directly.`
          : "We couldn’t reach the server. Please try again shortly."
      );
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-md border border-mist-line bg-white px-3.5 py-3 text-sm text-ink min-h-[44px] " +
    "placeholder:text-slate-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 " +
    "disabled:opacity-60";
  const label = "block text-[11px] font-bold uppercase tracking-[0.12em] text-ink";
  const busy = status === "sending";

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-xl border border-success-line bg-success-wash p-8 text-center"
      >
        <span
          aria-hidden="true"
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success text-xl text-white"
        >
          <Icon.check />
        </span>
        <p className="mt-5 font-display text-lg font-extrabold text-success-ink">
          Thank you. Your inquiry is on its way.
        </p>
        <p className="mt-2 text-sm text-success-ink/90">
          Thanks for reaching out. We will follow up with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md border-2 border-success-ink/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-success-ink transition-colors hover:bg-success-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success-ink"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
      {/* Honeypot. Hidden from people, irresistible to bots. Not `display:none`,
          which some bots skip. Off-screen with aria-hidden works better. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website (leave this blank)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full Name *</label>
          <input
            id="name"
            name="name"
            required
            disabled={busy}
            autoComplete="name"
            placeholder="e.g. John Smith"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={busy}
            autoComplete="email"
            inputMode="email"
            placeholder="e.g. jsmith@company.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            disabled={busy}
            autoComplete="tel"
            inputMode="tel"
            placeholder="e.g. (205) 555-0199"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>Company / Organization</label>
          <input
            id="company"
            name="company"
            disabled={busy}
            autoComplete="organization"
            placeholder="e.g. Ducks Unlimited"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="program" className={label}>Program Interest</label>
        <select id="program" name="program" disabled={busy} className={field} defaultValue={contact.form.programs[0]}>
          {contact.form.programs.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          {contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={busy}
          placeholder={contact.form.messagePlaceholder}
          className={field}
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-brand/30 bg-brand-wash px-4 py-3 text-sm font-semibold text-brand-dark"
        >
          {error}
        </p>
      )}

      <button type="submit" disabled={busy} className="btn-primary btn-block disabled:opacity-70">
        {busy ? (
          "Sending…"
        ) : (
          <>
            <Icon.send />
            {contact.form.submit}
          </>
        )}
      </button>
    </form>
  );
}
