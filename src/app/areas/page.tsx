import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { breadcrumb } from '@/lib/schema'
import { areaContent } from '@/content/areas'
import { areas } from '@/lib/site'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Areas served: Kingwood, Humble, Porter, Conroe, Magnolia and Tomball',
  description:
    'The six towns Deborah Rose Miller serves across the Lake Houston area and Montgomery County, Texas, with the neighborhoods she has closed in and the stories from each.',
  alternates: { canonical: '/areas/' },
}

export default async function AreasPage() {
  const stories = await getStories()
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }])]} />
      <PageIntro eyebrow="Areas" title="Six towns across two counties.">
        <p>
          Kingwood and Humble on the Lake Houston side of Harris County. Porter, Conroe and Magnolia in Montgomery
          County, and Tomball at the line between them. I have lived, worked or served in most of these places, and
          each page carries the neighborhoods I have closed in and the stories from there.
        </p>
      </PageIntro>
      <section className="pb-20 lg:pb-28">
        <Container>
          <ul role="list" className="divide-y divide-rule border-y border-rule">
            {areas.map((a) => {
              const count = stories.filter((s) => s.area === a.slug).length
              const c = areaContent[a.slug]
              return (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}/`} className="group grid gap-y-3 py-8 sm:grid-cols-5 sm:gap-x-8">
                    <div className="sm:col-span-2">
                      <span className="font-display text-3xl text-ink group-hover:underline group-hover:decoration-ink/30 group-hover:underline-offset-4">
                        {a.name}
                      </span>
                      <span className="mt-1 block text-sm text-ink-faint">
                        {a.county} <span aria-hidden="true">&middot;</span> {count === 1 ? '1 story' : `${count} stories`}
                      </span>
                    </div>
                    <p className="text-base/7 text-ink-soft sm:col-span-3">{c.intro}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>
      <ClosingAsk heading="Not sure which of these is right for you?" secondaryHref="/stories/" secondaryLabel="Read the stories">
        Tell me what you need from a location and I will tell you where I would look first.
      </ClosingAsk>
    </>
  )
}
