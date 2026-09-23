# The contact form

Written 2026-09-23, after Brett asked whether the form on the live site
delivers anything. It did not. This is what it does now, what has to
happen for it to reach her inbox, and what a text alert would take.

## What was true before

`/api/contact` forwarded the submission to `CONTACT_WEBHOOK_URL` and
answered `not-connected` when that variable was unset. It has never been
set on Vercel. A POST to the live endpoint returned:

    HTTP/1.1 503 Service Unavailable
    {"ok":false,"error":"not-connected"}

So the form has never delivered a note. It did not pretend to: the page
told the visitor it was not connected and gave them the phone number and
the email address. Nothing was silently dropped, and nothing arrived.

## What it does now

The endpoint delivers to every channel that is configured and reports
success if any one of them accepted the note.

| Variable | What it does |
| --- | --- |
| `RESEND_API_KEY` | Emails the note to `CONTACT_TO` through Resend's HTTPS API. One fetch, no package to install. |
| `CONTACT_TO` | Who the email goes to. Defaults to the address in `src/lib/site.ts`. |
| `CONTACT_FROM` | Who it comes from. Defaults to `onboarding@resend.dev`. |
| `CONTACT_WEBHOOK_URL` | Posts the same fields as JSON to any endpoint that accepts it. Unchanged, and still optional. |

With neither `RESEND_API_KEY` nor `CONTACT_WEBHOOK_URL` set, the form
still says it is not connected. The endpoint never accepts a note it
cannot deliver.

The email arrives as name, email, phone, what they are thinking about
and when it was sent, then their message, with `Reply-To` set to their
address so hitting reply in Gmail answers the visitor.

## To turn on email delivery

Three steps, about ten minutes, and the first one needs an account, so
it is Deborah's or Brett's to do rather than something a session can do
on their behalf.

1. Create a Resend account at resend.com, signing up as
   `deborahroserealtor@gmail.com`. The free tier is 3,000 emails a month
   and 100 a day, which is far more than a contact form will ever use.
2. Create an API key and add it to the Vercel project as
   `RESEND_API_KEY` (Settings, Environment Variables, all environments).
   Redeploy, or push anything, so the new value is picked up.
3. Send a note through the form and confirm it lands.

With no other setup, Resend sends from `onboarding@resend.dev` and will
only deliver to the account's own signup address. That is exactly the
case here, which is why this works without touching DNS.

When there is time, verify `deborahroserealestate.com` in Resend, which
is three DNS records on the domain, and set `CONTACT_FROM` to something
like `Deborah Rose Real Estate Group <notes@deborahroserealestate.com>`.
That makes the notification come from her own domain and lets the form
mail anyone, not only her.

## A text alert, if they want one

Email is the thing that had to work and now does. A text is a separate
decision with a recurring cost, so nothing has been signed up for.

**Twilio, the direct route.** The webhook already carries every field,
so the endpoint could send an SMS in the same handler. The obstacle is
not the code, it is US carrier registration: any business sending
application-to-person SMS to US numbers must register through A2P 10DLC
before messages deliver reliably. That means a brand registration and a
campaign, a few dollars a month on top of roughly a dollar a month for
the number and under a cent per message, and a review that takes days,
not minutes. Real cost is small. Real friction is the registration.

**A CRM she already pays for.** If the CRM Brett mentioned can text her
on a new lead, that is the cheapest path by far: point
`CONTACT_WEBHOOK_URL` at its inbound webhook and nothing else changes,
no new vendor and no registration, because the CRM has already done it.
This is the one to check first.

**Zapier or Make, in between.** Point the webhook at a catch hook and
let the scenario send the text. Costs a plan rather than a per-message
rate, and no code ships.

**A phone notification instead of a text.** A Gmail filter on the
subject line, which always starts "Website note from", set to notify on
her phone gets the alert to her in seconds for nothing. This is worth
trying before paying for SMS, because it may simply be enough.

The recommendation, in order: check the CRM first, try the Gmail filter
alongside it, and only reach for Twilio if she wants a real text from a
number that is hers.

## How this was tested

Against a production build on 2026-09-23, with the email API and the
webhook pointed at a local receiver, submitted through the real form in
a browser rather than by curl:

- A full submission returned "Sent. I will be in touch." on the page,
  and the receiver logged both the email payload and the webhook payload
  with every field intact and `Reply-To` set to the visitor.
- A name with no email and no phone was refused with the message the
  form shows.
- A name and phone with no email was delivered, with no `Reply-To`.
- A filled honeypot returned success and delivered nothing.

Resend's own servers were not in the loop, since that needs the key.
The request that would go to them was captured and read field by field.
