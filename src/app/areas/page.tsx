import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { breadcrumb } from '@/lib/schema'
import { areaContent } from '@/content/areas'
import { areas, regionSentence } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Areas served: Kingwood, Humble, Porter, Conroe and Magnolia',
  description:
    'The five towns Deborah Rose Miller serves across the Lake Houston area and Montgomery County, Texas, with the neighborhoods she has closed in and the stories from each.',
  alternates: { canonical: '/areas/' },
}

export default async function AreasPage() {
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }])]} />
      {/*
       * Live review 2026-09-18. Brett cut the counting frame ("six towns
       * across two counties"). The idea they landed on: the two larger areas
       * hold several communities, each with its own feel, its own
       * demographics and its own charm, and the job is matching a person to
       * the right one. No story counts anywhere on the page (Deborah: a
       * reader may think that is all the sales she has); the link says
       * "Read a few of the stories." The closing heading is her word,
       * "flavor." Keep it.
       */}
      <PageIntro eyebrow={regionSentence} title="Two areas, and a community for every kind of life in them.">
        <p>
          The Lake Houston area and Montgomery County hold several communities, and each one has its own feel, its own
          demographics and its own charm. The work is matching you to the right one.
        </p>
      </PageIntro>
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base/7 font-semibold text-rose">The communities</p>
            <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-pretty text-ink sm:text-5xl/[1.05]">
              Kingwood and Humble in the Lake Houston area. Porter, Conroe and Magnolia in Montgomery County.
            </h2>
            <p className="mt-6 text-lg/8 text-ink-soft">
              I have lived, worked or served in most of these places. Each page carries the neighborhoods I have closed
              in and a few of the stories from there.
            </p>
          </div>
          <ul role="list" className="mt-16 divide-y divide-rule border-y border-rule">
            {areas.map((a) => {
              const c = areaContent[a.slug]
              return (
                <li key={a.slug} className="grid gap-y-3 py-8 sm:grid-cols-5 sm:gap-x-8">
                  <div className="sm:col-span-2">
                    <Link
                      href={`/areas/${a.slug}/`}
                      className="tap font-display text-3xl text-ink hover:underline hover:decoration-ink/30 hover:underline-offset-4"
                    >
                      {a.name}
                    </Link>
                    <span className="mt-1 block text-sm text-ink-faint">{a.county}</span>
                    <Link
                      href={`/areas/${a.slug}/#stories`}
                      className="tap mt-3 inline-block text-sm/6 font-semibold text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                    >
                      Read a few of the stories
                    </Link>
                  </div>
                  <p className="text-base/7 text-ink-soft sm:col-span-3">{c.intro}</p>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>
      <ClosingAsk heading="Which flavor is right for you?" secondaryHref="/stories/" secondaryLabel="Read a few of the stories">
        Each of these communities has its own flavor, and the question is which one fits you. Tell me what you need
        from a place and I will match you to the right community.
      </ClosingAsk>
    </>
  )
}
