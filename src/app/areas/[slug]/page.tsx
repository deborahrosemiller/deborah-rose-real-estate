import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Heading, Eyebrow } from '@/components/Text'
import { StoryCard } from '@/components/StoryCard'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { absolute, AGENT_ID, BROKERAGE_ID, breadcrumb, cityNode } from '@/lib/schema'
import { areaContent, neighborhoodNote } from '@/content/areas'
import { agent, areas, business } from '@/lib/site'
import { getStoriesForArea } from '@/lib/stories'

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = areaContent[slug]
  if (!c) return {}
  return pageMetadata({ title: c.title, description: c.metaDescription, path: `/areas/${slug}/` })
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  const c = areaContent[slug]
  if (!area || !c) notFound()

  const stories = await getStoriesForArea(slug)
  const others = areas.filter((a) => a.slug !== slug)
  const path = `/areas/${slug}/`

  return (
    <>
      <SchemaGraph
        nodes={[
          /*
           * A narrower RealEstateAgent node for this one city, identified by
           * this page's URL and tied back to the sitewide entity. The
           * sitewide node says "serves these five towns"; this one says
           * "serves this town, and here is the page about it."
           */
          {
            '@type': 'RealEstateAgent',
            '@id': `${absolute(path)}#agent`,
            name: `${business.name}, ${area.name}`,
            url: absolute(path),
            image: absolute(agent.headshot),
            telephone: business.phoneE164,
            email: business.email,
            description: c.metaDescription,
            areaServed: cityNode(area.name, area.county),
            parentOrganization: { '@id': AGENT_ID },
            memberOf: { '@id': BROKERAGE_ID },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Areas', path: '/areas/' },
            { name: area.name, path },
          ]),
        ]}
      />

      <section className="pt-10 pb-16 sm:pt-14 lg:pb-24">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Areas', href: '/areas/' }, { name: area.name, href: path }]} />
          <Eyebrow className="mt-8">
            {area.region === area.county ? area.county : (
              <>
                {area.county} <span className="text-ink-faint">&middot;</span> {area.region}
              </>
            )}
          </Eyebrow>
          <Heading as="h1" className="mt-4 max-w-4xl">
            {c.title}
          </Heading>
          <div className="mt-10 max-w-3xl space-y-6 text-lg/8 text-ink-soft">
            <p className="text-[22px]/[1.4] text-ink">{c.intro}</p>
            {c.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <dl className="mt-12 grid gap-x-12 gap-y-8 border-t border-rule pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-ink">Neighborhoods I have closed in</dt>
              <dd>
                <ul role="list" className="mt-3 space-y-1 text-base/7 text-ink-soft">
                  {c.neighborhoods.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm/6 text-ink-faint">{neighborhoodNote}</p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink">Zip codes</dt>
              <dd className="mt-3 text-base/7 text-ink-soft figure">{area.zip.join(', ')}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-ink">Call or text</dt>
              <dd className="mt-3">
                <a href={`tel:${business.phoneE164}`} className="tap text-base/7 text-ink figure hover:underline hover:underline-offset-4">
                  {business.phone}
                </a>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="band py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Why me here</Eyebrow>
            <p className="mt-6 font-display text-2xl/[1.35] text-ink sm:text-[1.75rem]/[1.35]">{c.deborah}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Eyebrow>Stories from {area.name}</Eyebrow>
          {stories.length ? (
            <>
              <Heading className="mt-6 max-w-2xl">Transactions I have handled here.</Heading>
              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {stories.map((s) => (
                  <StoryCard key={s.slug} story={s} />
                ))}
              </div>
            </>
          ) : (
            <>
              <Heading className="mt-6 max-w-2xl">No published story from {area.name} yet.</Heading>
              <p className="mt-6 max-w-2xl text-lg/8 text-ink-soft">
                The transactions I closed here predate the records I keep digitally. They will be added as I pull them
                together. In the meantime the stories from the neighboring towns show how I work.
              </p>
              <p className="mt-6">
                <Link href="/stories/" className="tap text-[13px] font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink/25 pb-1 hover:border-ink">
                  All stories
                </Link>
              </p>
            </>
          )}
        </Container>
      </section>

      <section className="bg-paper py-12 lg:py-16">
        <Container>
          <p className="text-sm text-ink-soft">
            Nearby:{' '}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 ? ', ' : ''}
                <Link href={`/areas/${o.slug}/`} className="tap text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  {o.name}
                </Link>
              </span>
            ))}
            .
          </p>
        </Container>
      </section>

      <ClosingAsk heading={`Buying or selling in ${area.name}?`} secondaryHref="/stories/" secondaryLabel="Read the stories">
        Tell me what you are trying to do and I will tell you what is realistic here this month.
      </ClosingAsk>
    </>
  )
}
