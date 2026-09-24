import { agent, areas, business, confirmed, gbp, legal, profiles, siteUrl } from '@/lib/site'
import { getStories } from '@/lib/stories'

/**
 * /llms.txt, the plain text summary answer engines read to learn who a
 * site is about (llmstxt.org). Every fact here comes from site.ts or the
 * story front matter; nothing is typed twice. It follows the same rules as
 * the rest of the site: no review scores, no fee language, no client names
 * or street addresses (story summaries already meet that).
 */
export const dynamic = 'force-static'

export async function GET() {
  const stories = await getStories()
  const lines = [
    `# ${business.name}`,
    '',
    `> ${business.description}`,
    '',
    '## Who',
    '',
    `- Agent: ${agent.name}, Texas real estate broker, Texas Real Estate Commission license ${business.license}`,
    `- Business: ${business.legalNote}`,
    `- Service area: ${legal.serviceAreaSentence}`,
    `- Phone: ${business.phone}`,
    `- Email: ${business.email}`,
    `- Hours: ${gbp.hours.map((h) => `${h.label}, ${h.display}`).join('; ')}`,
    `- Designations: ${agent.designations.join(', ')}`,
    ...confirmed([profiles.har, profiles.linkedin, gbp.mapsUrl, profiles.facebookPage, profiles.youtube]).map((u) => `- Profile: ${u}`),
    '',
    '## Pages',
    '',
    `- [About ${agent.name}](${siteUrl}/about/)`,
    `- [Buying a home](${siteUrl}/buyers/)`,
    `- [Selling a home](${siteUrl}/sellers/)`,
    `- [Areas served](${siteUrl}/areas/)`,
    `- [What clients have written](${siteUrl}/testimonials/)`,
    ...areas.map((a) => `- [${a.name}, ${a.county}, Texas](${siteUrl}/areas/${a.slug}/)`),
    `- [Contact](${siteUrl}/contact/)`,
    '',
    '## Stories',
    '',
    ...stories.map((s) => `- [${s.title}](${siteUrl}/stories/${s.slug}/): ${s.summary}`),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
