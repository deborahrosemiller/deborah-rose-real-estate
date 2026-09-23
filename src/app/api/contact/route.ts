import { NextResponse } from 'next/server'

/**
 * The contact form's endpoint. Brett, 2026-09-23: no third-party service
 * and nothing new to pay for. It posts the submission as JSON to
 * CONTACT_WEBHOOK_URL, which is a Google Apps Script web app running in
 * Deborah's own Google account; the script sends the note to her with
 * GmailApp. `scripts/contact-webhook.gs` is the copy of record for it
 * and docs/contact-form.md has the deployment steps.
 *
 * CONTACT_WEBHOOK_SECRET travels in the body, because a deployed Apps
 * Script web app answers anyone who finds the URL and Apps Script cannot
 * read custom request headers. The script drops anything without it.
 *
 * Until the variables are set the endpoint answers `not-connected` and
 * the form hands the visitor the phone number and the email address. It
 * never accepts a note it cannot deliver.
 *
 * An Apps Script web app answers 200 with a JSON body whether it sent
 * the mail or refused it, and redirects once to googleusercontent on the
 * way, so the status code alone says nothing. The body is what is read.
 */
export async function POST(request: Request) {
  const webhook = process.env.CONTACT_WEBHOOK_URL
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not read the form.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const phone = String(body.phone ?? '').trim()
  const intent = String(body.intent ?? '').trim()
  const message = String(body.message ?? '').trim()
  const honeypot = String(body.company ?? '').trim()

  if (honeypot) return NextResponse.json({ ok: true })
  if (!name || (!email && !phone)) {
    return NextResponse.json({ ok: false, error: 'A name and either an email or a phone number are needed.' }, { status: 400 })
  }

  if (!webhook) {
    return NextResponse.json({ ok: false, error: 'not-connected' }, { status: 503 })
  }

  let res: Response
  try {
    res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        intent,
        message,
        secret: process.env.CONTACT_WEBHOOK_SECRET ?? '',
        source: 'deborahroserealestate.com contact form',
        submittedAt: new Date().toISOString(),
      }),
    })
  } catch (error) {
    console.error('contact: the webhook could not be reached', error)
    return NextResponse.json({ ok: false, error: 'The message could not be delivered.' }, { status: 502 })
  }

  const answer = await res.text().catch(() => '')
  let delivered = res.ok
  try {
    const parsed = JSON.parse(answer) as { ok?: boolean }
    if (typeof parsed.ok === 'boolean') delivered = parsed.ok
  } catch {
    // Not JSON. The status code is all there is to go on.
  }

  if (!delivered) {
    console.error('contact: the webhook refused the note', res.status, answer.slice(0, 500))
    return NextResponse.json({ ok: false, error: 'The message could not be delivered.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
