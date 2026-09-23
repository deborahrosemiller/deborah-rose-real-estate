/**
 * The contact form's receiver, as a Google Apps Script web app.
 *
 * Brett, 2026-09-23: no third-party service and nothing new to pay for.
 * This runs in Deborah's own Google account and sends the note with
 * GmailApp, from her address to her address, with the visitor set as the
 * reply-to. The free Gmail quota is 100 recipients a day, which a
 * contact form will not come near.
 *
 * This file is the copy of record. It does not run from the repository:
 * paste it into script.google.com and deploy it as a web app. The steps
 * are in docs/contact-form.md.
 *
 * Never commit the real SECRET. Leave the placeholder here and paste the
 * value into the Apps Script editor and into Vercel. The repository is
 * on GitHub.
 */

/** Where the note goes. Her canonical address, the one in src/lib/site.ts. */
var TO = 'deborahroserealtor@gmail.com'

/** What shows as the sender's name. */
var SENDER = 'Deborah Rose Real Estate Group'

/**
 * Must match CONTACT_WEBHOOK_SECRET on Vercel. A deployed web app answers
 * anyone who finds the URL, so the shared secret is what makes a stray
 * POST inert. Apps Script cannot read custom request headers, so it
 * travels in the body.
 */
var SECRET = 'PASTE_THE_SECRET_HERE'

var INTENTS = {
  buying: 'Buying',
  selling: 'Selling',
  both: 'Selling and buying',
  other: 'Something else',
}

function reply(ok, error) {
  return ContentService.createTextOutput(JSON.stringify({ ok: ok, error: error || null })).setMimeType(
    ContentService.MimeType.JSON,
  )
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function doPost(e) {
  var body
  try {
    body = JSON.parse(e.postData.contents)
  } catch (err) {
    return reply(false, 'The note could not be read.')
  }

  if (!SECRET || body.secret !== SECRET) return reply(false, 'forbidden')

  var name = String(body.name || '').trim()
  var email = String(body.email || '').trim()
  var phone = String(body.phone || '').trim()
  var intent = INTENTS[body.intent] || String(body.intent || '').trim()
  var message = String(body.message || '').trim()
  if (!name || (!email && !phone)) return reply(false, 'A name and either an email or a phone number are needed.')

  var sent = Utilities.formatDate(new Date(), 'America/Chicago', "MMMM d, yyyy 'at' h:mm a")

  var rows = []
  if (name) rows.push(['Name', name])
  if (email) rows.push(['Email', email])
  if (phone) rows.push(['Phone', phone])
  if (intent) rows.push(['Thinking about', intent])
  rows.push(['Sent', sent])

  var text = rows
    .map(function (r) {
      return r[0] + ': ' + r[1]
    })
    .join('\n')
  text += '\n\n' + (message || '(no message)') + '\n\nSent from the contact form on deborahroserealestate.com'

  var html =
    '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#1a1a1a">' +
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">' +
    rows
      .map(function (r) {
        return (
          '<tr><td style="padding:2px 16px 2px 0;color:#6b6b6b">' +
          escapeHtml(r[0]) +
          '</td><td style="padding:2px 0">' +
          escapeHtml(r[1]) +
          '</td></tr>'
        )
      })
      .join('') +
    '</table>' +
    '<p style="white-space:pre-wrap;margin:20px 0 0">' +
    escapeHtml(message || '(no message)') +
    '</p>' +
    '<p style="margin:24px 0 0;color:#6b6b6b;font-size:14px">Sent from the contact form on deborahroserealestate.com</p>' +
    '</div>'

  var subject = 'Website note from ' + name + (intent ? ' (' + intent.toLowerCase() + ')' : '')
  var options = { htmlBody: html, name: SENDER }
  if (email) options.replyTo = email

  try {
    GmailApp.sendEmail(TO, subject, text, options)
  } catch (err) {
    return reply(false, 'Gmail refused the note: ' + err)
  }
  return reply(true)
}

/** Opening the URL in a browser should say something, not throw. */
function doGet() {
  return ContentService.createTextOutput('This endpoint takes the contact form. Nothing to see here.')
}
