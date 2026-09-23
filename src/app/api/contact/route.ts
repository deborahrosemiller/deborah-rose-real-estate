import { NextResponse } from 'next/server'

import { business } from '@/lib/site'

/**
 * The contact form's endpoint. Brett, 2026-09-23: every submission has to
 * reach Deborah by email. It delivers to every channel that is
 * configured and succeeds if any one of them accepts the note:
 *
 *   RESEND_API_KEY      emails the note to CONTACT_TO (her address by
 *                       default) through Resend's HTTPS API. No package
 *                       to install and no SDK; it is one fetch.
 *   CONTACT_WEBHOOK_URL posts the same fields as JSON to a webhook, which
 *                       is where a CRM or a Zapier or Make scenario
 *                       hangs. This is the original path and is
 *                       unchanged, so anything already pointed at it
 *                       keeps working.
 *
 * With neither set it answers `not-connected` and the form hands the
 * visitor the phone number and the email address. Nothing is ever
 * silently dropped: a submission either reaches her or the visitor is
 * told on the page that it did not.
 */

const RESEND_API = process.env.RESEND_API_BASE ?? 'https://api.resend.com'

/**
 * Resend will only accept a From on a domain verified in the account.
 * A new account can send from onboarding@resend.dev to its own signup
 * address with no DNS at all, which is the default here so the form
 * works the hour the key is set. Verify deborahroserealestate.com and
 * set CONTACT_FROM to an address on it when there is time.
 */
const FROM = process.env.CONTACT_FROM ?? 'Deborah Rose Real Estate Group <onboarding@resend.dev>'
const TO = process.env.CONTACT_TO ?? business.email

const INTENTS: Record<string, string> = {
  buying: 'Buying',
  selling: 'Selling',
  both: 'Selling and buying',
  other: 'Something else',
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

type Note = {
  name: string
  email: string
  phone: string
  intent: string
  message: string
  submittedAt: string
}

/** The note as Deborah reads it in her inbox, on one screen, plain. */
function emailBodies(note: Note) {
  const intent = INTENTS[note.intent] ?? note.intent
  const rows: [string, string][] = [
    ['Name', note.name],
    ['Email', note.email],
    ['Phone', note.phone],
    ['Thinking about', intent],
    ['Sent', new Date(note.submittedAt).toLocaleString('en-US', { timeZone: 'America/Chicago' })],
  ].filter((row): row is [string, string] => Boolean(row[1]))

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    note.message || '(no message)',
    '',
    'Sent from the contact form on deborahroserealestate.com',
  ].join('\n')

  const html = [
    '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#1a1a1a">',
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">',
    ...rows.map(
      ([k, v]) =>
        `<tr><td style="padding:2px 16px 2px 0;color:#6b6b6b">${escapeHtml(k)}</td><td style="padding:2px 0">${escapeHtml(v)}</td></tr>`,
    ),
    '</table>',
    `<p style="white-space:pre-wrap;margin:20px 0 0">${escapeHtml(note.message || '(no message)')}</p>`,
    '<p style="margin:24px 0 0;color:#6b6b6b;font-size:14px">Sent from the contact form on deborahroserealestate.com</p>',
    '</div>',
  ].join('')

  return { text, html, subject: `Website note from ${note.name}${intent ? ` (${intent.toLowerCase()})` : ''}` }
}

async function sendEmail(note: Note) {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  const { subject, text, html } = emailBodies(note)
  const res = await fetch(`${RESEND_API}/emails`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject,
      text,
      html,
      ...(note.email ? { reply_to: note.email } : {}),
    }),
  })
  if (!res.ok) {
    console.error('contact: Resend refused the note', res.status, await res.text().catch(() => ''))
    return false
  }
  return true
}

async function sendWebhook(note: Note) {
  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (!webhook) return null
  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...note, source: 'deborahroserealestate.com contact form' }),
  })
  if (!res.ok) {
    console.error('contact: the webhook refused the note', res.status)
    return false
  }
  return true
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not read the form.' }, { status: 400 })
  }

  const note: Note = {
    name: String(body.name ?? '').trim(),
    email: String(body.email ?? '').trim(),
    phone: String(body.phone ?? '').trim(),
    intent: String(body.intent ?? '').trim(),
    message: String(body.message ?? '').trim(),
    submittedAt: new Date().toISOString(),
  }
  const honeypot = String(body.company ?? '').trim()

  if (honeypot) return NextResponse.json({ ok: true })
  if (!note.name || (!note.email && !note.phone)) {
    return NextResponse.json({ ok: false, error: 'A name and either an email or a phone number are needed.' }, { status: 400 })
  }

  const results = await Promise.all([sendEmail(note), sendWebhook(note)])
  const configured = results.filter((r) => r !== null)

  if (!configured.length) {
    return NextResponse.json({ ok: false, error: 'not-connected' }, { status: 503 })
  }
  if (!configured.some(Boolean)) {
    return NextResponse.json({ ok: false, error: 'The message could not be delivered.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
