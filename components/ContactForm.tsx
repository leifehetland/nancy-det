"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { contact } from "@/lib/site";

/**
 * Workshop inquiry form.
 *
 * There's no backend wired up yet, so submitting shows a confirmation state
 * instead of posting. Point `handleSubmit` at a form endpoint (a Next.js route
 * handler, Formspree, HubSpot, etc.) when one exists.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST to a real endpoint.
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-md border border-mist-line bg-white px-3.5 py-2.5 text-sm text-ink " +
    "placeholder:text-slate-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
  const label =
    "block text-[11px] font-bold uppercase tracking-[0.12em] text-ink";

  if (sent) {
    return (
      <div className="rounded-xl border border-brand/25 bg-brand-wash p-8 text-center">
        <p className="font-display text-lg font-extrabold text-ink">Thank you — inquiry received.</p>
        <p className="mt-2 text-sm text-slate-body">
          A DET training coordinator will be in touch within 24 business hours.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-secondary mt-6">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Full Name *
          </label>
          <input id="name" name="name" required placeholder="e.g. John Smith" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g. jsmith@company.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. (404) 555-0199"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company / Organization
          </label>
          <input
            id="company"
            name="company"
            placeholder="e.g. AT&T or Merrill Lynch"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="program" className={label}>
          Program Interest
        </label>
        <select id="program" name="program" className={field} defaultValue={contact.form.programs[0]}>
          {contact.form.programs.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Tell Us About Your Team Objectives
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Provide details on team size, presentation challenges, or desired dates..."
          className={field}
        />
      </div>

      <button type="submit" className="btn-primary btn-block">
        <Icon.send />
        {contact.form.submit}
      </button>
    </form>
  );
}
