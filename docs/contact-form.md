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

## How it works now

Brett, 2026-09-23: no third-party service and nothing new to pay for.
The note is emailed by a Google Apps Script web app running in Deborah's
own Google account.

    the form
      -> POST /api/contact/            (the site)
      -> POST the Apps Script /exec    (her Google account)
      -> GmailApp.sendEmail            (her Gmail, to herself)

`scripts/contact-webhook.gs` in this repository is the copy of record
for the script. It does not run from here; it is pasted into
script.google.com. Two variables on Vercel point at it:

| Variable | What it is |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | The web app's URL. It ends in `/exec`. |
| `CONTACT_WEBHOOK_SECRET` | A long random string, the same one in the script. |

The secret travels in the body rather than a header, because Apps Script
cannot read custom request headers and a deployed web app answers anyone
who finds its URL. The script drops anything that does not carry it.

With `CONTACT_WEBHOOK_URL` unset the form still says it is not
connected. The endpoint never accepts a note it cannot deliver.

The email arrives as name, email, phone, what they are thinking about
and when it was sent, then their message, with the subject "Website note
from [name]" and a reply-to set to the visitor, so replying in Gmail
answers them rather than her.

## To turn it on

Steps 1 to 4 happen in Deborah's Google account and step 5 on Vercel, so
they are hers and Brett's to do rather than something a session can do
on their behalf.

1. Sign in to Google as **deborahroserealtor@gmail.com** and open
   script.google.com. New project. Name it "Contact form".
2. Replace everything in `Code.gs` with the contents of
   `scripts/contact-webhook.gs` from this repository.
3. Replace `PASTE_THE_SECRET_HERE` with a long random string. Keep it:
   it goes into Vercel in step 5, and it never goes into this
   repository, which is on GitHub.
4. Deploy, New deployment, type **Web app**. Execute as **Me**. Who has
   access: **Anyone**. Deploy, then authorize when Google asks, which it
   will, because the script sends mail as her. Copy the web app URL; it
   ends in `/exec`.

   "Anyone" is what lets the site's server post to it without signing
   in. The secret is what makes that safe.
5. In the Vercel project, Settings, Environment Variables, add
   `CONTACT_WEBHOOK_URL` (the `/exec` URL) and `CONTACT_WEBHOOK_SECRET`
   (the same string), for all environments. Redeploy, or push anything.
6. Send a note through the form at deborahroserealestate.com/contact/
   and confirm it lands in her inbox.

Free Gmail sends 100 recipients a day from Apps Script. A contact form
will not come near it. There is no account to create, no card, and
nothing to renew.

If the script is ever edited, deploy again as a **new version** of the
same deployment, or the URL keeps serving the old code.

## A text alert, if they want one

Email is the thing that had to work. A text is a separate decision with
a recurring cost, so nothing has been signed up for.

**A phone notification instead of a text.** Free, and worth trying
first. Every one of these emails has a subject starting "Website note
from". A Gmail filter on that, set to notify on her phone, puts the
alert in front of her in seconds.

**The same Apps Script.** It can also text, after a fashion, through a
carrier email-to-SMS gateway. Free, one more line in the script, and
genuinely unreliable: carriers filter these and have been retiring the
gateways. Worth knowing, not worth depending on.

**A CRM she already pays for.** If the CRM Brett mentioned can text her
on a new lead, point a second webhook at it and nothing else changes. No
new vendor, no registration, because the CRM has already done it.

**Twilio.** The obstacle is not the code, it is US carrier
registration: application-to-person SMS to US numbers must go through
A2P 10DLC first. A brand and a campaign, a few dollars a month on top of
roughly a dollar for the number and under a cent a message, and a review
measured in days. Small money, real friction.

The order to try them: the Gmail filter, then the CRM, then Twilio only
if she wants a real text from a number that is hers.

## How this was tested

On 2026-09-23, against a production build, with the webhook pointed at a
local stand-in that answers exactly as an Apps Script web app does,
including the redirect to googleusercontent that Apps Script performs on
the way to its response:

- A full submission returned `{"ok":true}` and the stand-in received
  every field, the secret, the source and the timestamp.
- A submission whose secret did not match was refused by the stand-in,
  and the site answered 502, so the visitor sees the error and the phone
  number rather than a false "Sent".
- A name with no email and no phone was refused with the message the
  form shows.
- A filled honeypot returned success and posted nothing.

The script itself was run outside Google, with `ContentService`,
`Utilities` and `GmailApp` stubbed, to check its behaviour before anyone
pastes it: a good note sends one email with the right subject, reply-to
and body; a wrong or missing secret sends nothing; a name with no way to
reach them back is refused; a name and phone with no email sends with no
reply-to; unreadable JSON is refused.

What has not been tested is Google's own delivery, which needs the
script deployed in her account. That is step 6 above.
