# Email setup

There are **two separate systems** here and it is worth keeping them straight,
because they solve different problems and only one of them is Nancy's actual
email.

| System | What it does | Who it serves |
| --- | --- | --- |
| **Porkbun mailbox** | Receives mail sent to nancy@nancydavisexecutivetraining.com, and lets her send as that address | Nancy's real, day to day email |
| **Resend** | Delivers the website inquiry form into her inbox | One narrow pipe, website to Nancy |

Resend is not her email provider. If Resend vanished tomorrow, she would still
receive and send normally. It only exists so the contact form has a reliable way
to hand her a lead.

---

## 1. Nancy sending and receiving with ease

She already has the Porkbun mailbox, which is the hard part. What is left is
choosing the app she actually reads it in. Three realistic options.

### Option A: Apple Mail on her Mac and iPhone (recommended if she uses Apple devices)

Smoothest experience, no monthly cost, no polling delay.

- Incoming (IMAP): `imap.porkbun.com`, port `993`, SSL/TLS
- Outgoing (SMTP): `smtp.porkbun.com`, port `587` STARTTLS (or `465` SSL)
- Username: the full address, `nancy@nancydavisexecutivetraining.com`
- Password: the mailbox password she set in Porkbun, **not** her Porkbun
  account password. This is the single most common setup failure.

Because IMAP syncs both ways, mail read on her phone shows as read on her Mac.

### Option B: Keep using Gmail, send and receive as nancy@

Good if she does not want to leave the Gmail interface.

**Sending as nancy@** (this part works well):
Gmail, Settings, Accounts and Import, "Send mail as", Add another email address.
Enter her name and `nancy@nancydavisexecutivetraining.com`, then the SMTP
details above. Gmail emails a confirmation code to nancy@, which she reads in
Porkbun webmail once, then pastes back. Afterwards set that address as the
default sender.

**Receiving in Gmail** (this part is the compromise):
Gmail can only pull external mail over POP3 (`pop.porkbun.com`, port `995`,
SSL), and it polls on its own schedule. That can mean anywhere from a few
minutes to an hour of delay on a new inquiry. For a business where a fast reply
wins the job, that delay is a real cost.

### Option C: Google Workspace on the domain, about $7/month

Real Gmail, on her own domain, no POP polling, no compromises. Requires moving
the MX records away from Porkbun email hosting and migrating existing mail.

Honest take: if she is going to live in this inbox every day, Option A is free
and excellent on Apple devices, and Option C is worth the $7 if she insists on
Gmail specifically. Option B is the one with the sharp edge.

---

## 2. Resend, for the contact form

### The important realisation

The form notification email goes **only to Nancy**. No client ever sees it. So
the "from" address on it does not affect how anyone perceives her business.

That means the zero risk configuration is simply:

```
INQUIRY_FROM=onboarding@resend.dev
INQUIRY_TO=nancy@nancydavisexecutivetraining.com
RESEND_API_KEY=<the key>
```

No DNS changes, nothing to break, works immediately. `Reply-To` is already set
to the person who filled in the form, so she just hits reply and the
conversation continues from her real address.

### If she later wants it branded

Verifying `nancydavisexecutivetraining.com` in Resend means adding DKIM and SPF
records at Porkbun. Then `INQUIRY_FROM` can become something like
`inquiries@nancydavisexecutivetraining.com`.

**The trap, and it is a bad one:** a domain can only have ONE SPF TXT record.
Porkbun email hosting already published one. If you add Resend's SPF as a second
record, both become invalid and **Nancy's own outgoing mail starts landing in
spam**. The includes have to be merged into a single record, something like:

```
v=spf1 include:<porkbun's existing include> include:<resend's include> ~all
```

Copy the existing record first, merge, then replace. Do not add.

Given the realisation above, there is no strong reason to do any of this.

---

## 3. Where the key goes

Never in the repo. `.env.local` is gitignored; `.env.example` is the tracked
template and holds no secrets.

- Local development: `.env.local`
- Production: Vercel project settings, Environment Variables

If a key is ever pasted into a chat, an email, or a commit, rotate it in the
Resend dashboard. Rotation is free and instant.

---

## 4. Checking it works

1. Set the three variables in Vercel, redeploy.
2. Submit the form on the live site with your own email in the email field.
3. Confirm the notification lands in nancy@ (check spam the first time).
4. Hit reply on it. Confirm the reply goes to the address you typed into the
   form, not to Resend.
5. Send a message from nancy@ to an outside address and confirm it arrives and
   shows the right sender.

Step 4 is the one people forget, and it is the one that matters most.
