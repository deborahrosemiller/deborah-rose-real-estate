import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { StoryCard } from '@/components/StoryCard'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { absolute, AGENT_ID, PERSON_ID, breadcrumb, imageNode } from '@/lib/schema'
import { agent, areas, areaSentence, business, siteUrl } from '@/lib/site'
import { formatDate, getStories, getStory } from '@/lib/stories'

export async function generateStaticParams() {
  const stories = await getStories()
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const story = await getStory(slug)
  if (!story) return {}
  return pageMetadata({
    title: story.title,
    description: story.summary,
    path: `/stories/${story.slug}/`,
    image: story.image ? { url: story.image, width: 1600, height: 1067 } : undefined,
    openGraph: { type: 'article', publishedTime: story.date, authors: [agent.name] },
  })
}

/**
 * ===================================================================
 *  THE STORY PAGE, LAID OUT LIKE buddybuck.com's ARTICLES.
 * ===================================================================
 *
 * Brett, 2026-09-18: a photo in the hero of every article, laid out the
 * way Buddy's are. Measured on buddybuck.com/blog: a dark band holds a
 * back link, a category link, the white serif headline and a thin meta
 * row; the photo sits below the headline and straddles the seam between
 * the band and the white body, contained and centered with rounded
 * corners; the body starts under it on a narrow measure. Rebuilt here in
 * her palette: the band is the site's near-black with the rose on the
 * category, never Buddy's navy. The category and the city are real links
 * (the stories index and the area page), so nothing reads as a pill.
 *
 * The photo is the one exception to the site's no-radius rule on photos,
 * because this layout is the one Brett pointed at. Recorded in CLAUDE.md.
 */
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = await getStory(slug)
  if (!story) notFound()

  const all = await getStories()
  const related = [
    ...all.filter((s) => s.slug !== story.slug && s.area === story.area),
    ...all.filter((s) => s.slug !== story.slug && s.area !== story.area),
  ].slice(0, 3)
  const area = areas.find((a) => a.slug === story.area)
  const path = `/stories/${story.slug}/`
  const imageId = `${siteUrl}${path}#image`
  const metaLink = 'tap text-cream/85 hover:text-cream'

  return (
    <>
      <SchemaGraph
        nodes={[
          {
            '@type': 'BlogPosting',
            '@id': `${siteUrl}${path}#article`,
            headline: story.title,
            description: story.summary,
            image: story.image ? { '@id': imageId } : undefined,
            datePublished: story.date,
            dateModified: story.date,
            author: { '@id': PERSON_ID },
            publisher: { '@id': AGENT_ID },
            mainEntityOfPage: { '@type': 'WebPage', '@id': absolute(path) },
            inLanguage: 'en-US',
            articleSection: story.role,
            about: { '@type': 'City', name: story.city, containedInPlace: { '@type': 'AdministrativeArea', name: `${story.county}, Texas` } },
            contentLocation: { '@type': 'Place', name: `${story.city}, Texas` },
            wordCount: story.body.trim().split(/\s+/).length,
          },
          ...(story.image ? [imageNode({ path: story.image, caption: story.alt ?? story.title, city: story.city, id: imageId })] : []),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Stories', path: '/stories/' },
            { name: story.title, path },
          ]),
        ]}
      />

      <article>
        {/* The dark band. */}
        <header className="bg-night text-cream">
          <Container className="pt-10 pb-28 sm:pt-14 sm:pb-48 lg:pb-72">
            <div className="mx-auto max-w-3xl">
              <p className="flex flex-wrap items-center gap-x-3 text-sm/6">
                <Link href="/stories/" className={metaLink}>
                  Back to stories
                </Link>
                <span aria-hidden="true" className="text-cream/40">
                  &middot;
                </span>
                <Link href="/stories/" className="tap font-semibold tracking-[0.08em] uppercase text-rose-soft hover:text-cream">
                  {story.role}
                </Link>
              </p>
              <h1 className="mt-6 font-display text-[2.25rem]/[1.1] text-pretty text-cream sm:text-5xl/[1.08]">{story.title}</h1>
              <p className="mt-6 text-sm/6 text-cream/70">
                <time dateTime={story.date}>{formatDate(story.date)}</time> <span aria-hidden="true">&middot;</span> {story.readMinutes} min read{' '}
                <span aria-hidden="true">&middot;</span> By {agent.name}, {business.name} <span aria-hidden="true">&middot;</span>{' '}
                {area ? (
                  <Link href={`/areas/${area.slug}/`} className={metaLink}>
                    {story.city}, Texas
                  </Link>
                ) : (
                  <span>{story.city}, Texas</span>
                )}
              </p>
            </div>
          </Container>
        </header>

        {/*
         * The photo, straddling the seam. A story with no acceptable photo
         * (see docs/story-photos.md) gets the city set as type in the same
         * frame, never a photo of a different property. The hero video's
         * poster stood in here for a day on 2026-09-18 and that was wrong.
         */}
        <Container>
          <figure className="mx-auto -mt-20 max-w-4xl overflow-hidden rounded-2xl bg-paper shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] sm:-mt-36 lg:-mt-56">
            {story.image ? (
              <Image
                src={story.image}
                alt={story.alt ?? story.title}
                width={1600}
                height={800}
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
                className="aspect-2/1 w-full object-cover"
              />
            ) : (
              <div className="flex aspect-2/1 w-full items-end p-8 sm:p-10">
                <span className="font-display text-3xl text-ink-faint sm:text-4xl">{story.city}, Texas</span>
              </div>
            )}
          </figure>
        </Container>

        <Container className="mt-12 sm:mt-16">
          {story.facts.length ? (
            <div className="mx-auto mb-14 max-w-[40rem]">
              <h2 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-rose">The numbers</h2>
              <dl className="mt-4 divide-y divide-rule border-y border-rule text-base/7">
                {story.facts.map((f) => (
                  <div key={f.label} className="grid gap-x-6 py-3 sm:grid-cols-5">
                    <dt className="text-ink-soft sm:col-span-2">{f.label}</dt>
                    <dd className="text-ink figure sm:col-span-3">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          <div className="prose-story mx-auto max-w-[40rem]" dangerouslySetInnerHTML={{ __html: story.html }} />
          <footer className="mx-auto mt-14 max-w-[40rem] border-t border-rule pt-8">
            <p className="font-display text-xl text-ink">{agent.name}</p>
            <p className="mt-1 text-sm/6 text-ink-soft">
              {business.name}. Serving {areaSentence}, Texas.{' '}
              <a href={`tel:${business.phoneE164}`} className="tap text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink figure">
                {business.phone}
              </a>
            </p>
            <p className="mt-4 text-xs/5 text-ink-faint">
              Names and addresses are left out of every story on purpose. The transactions are real and the records
              are on file. {business.legalNote}. TREC license {business.license}.
            </p>
          </footer>
        </Container>
      </article>

      {related.length ? (
        <section className="mt-20 bg-paper py-20 lg:py-28">
          <Container>
            <p className="text-base/7 font-semibold text-rose">More stories</p>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <StoryCard key={s.slug} story={s} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <ClosingAsk heading="Ready to write your own?" secondaryHref={area ? `/areas/${area.slug}/` : '/areas/'} secondaryLabel={area ? `More about ${area.name}` : 'See the areas'} />
    </>
  )
}
