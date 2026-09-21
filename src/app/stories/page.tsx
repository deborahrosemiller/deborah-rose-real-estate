import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { StoryCard } from '@/components/StoryCard'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumb } from '@/lib/schema'
import { areas } from '@/lib/site'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = pageMetadata({
  title: 'Every transaction has a story',
  description:
    'Real transactions across the Lake Houston area and Montgomery County, in Kingwood, Humble, Porter, Conroe and Magnolia, told by Deborah Rose Miller with the numbers that mattered.',
  path: '/stories/',
})

/**
 * The headline is Deborah's line, the subhead is Brett's (live review
 * 2026-09-18). Nothing here explains what the stories leave out; the site
 * never narrates its own editorial rules (CLAUDE.md).
 *
 * The geography paragraph below the header is for search, big to small:
 * Greater Houston, the two counties, the Lake Houston area, then the five
 * towns, each linked to its page. Tomball stays out.
 */
export default async function StoriesPage() {
  const stories = await getStories()
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Stories', path: '/stories/' }])]} />
      <PageIntro eyebrow="Stories" title="Every transaction has a story.">
        <p>Here, just a few I&rsquo;ll share.</p>
      </PageIntro>
      <section className="bg-paper pt-16 pb-20 sm:pt-20 lg:pb-28">
        <Container>
          <p className="max-w-3xl text-lg/8 text-ink-soft">
            These are transactions from across Greater Houston, in Harris County and Montgomery County: the Lake Houston
            area, which is Kingwood and Humble, and the Montgomery County towns of Porter, Conroe and Magnolia. By area:{' '}
            {areas.map((a, i) => (
              <span key={a.slug}>
                {i > 0 ? ', ' : ''}
                <Link href={`/areas/${a.slug}/`} className="tap text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  {a.name}
                </Link>
              </span>
            ))}
            .
          </p>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, i) => (
              <StoryCard key={story.slug} story={story} priority={i < 3} />
            ))}
          </div>
        </Container>
      </section>
      {/* Her own line with clients (live review 2026-09-18); Brett cut "Your move could be the next one." */}
      <ClosingAsk heading="In a perfect world, what are you wanting?" secondaryHref="/areas/" secondaryLabel="See the areas">
        Since we know the world&rsquo;s not perfect, then I&rsquo;ll know where the tradeoffs need to be.
      </ClosingAsk>
    </>
  )
}
