import type { Metadata } from 'next'
import Image from 'next/image'
import { BanknotesIcon, BuildingLibraryIcon, UsersIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Button } from '@/components/Button'
import { FeatureThree } from '@/components/FeatureThree'
import { AreaGrid } from '@/components/AreaGrid'
import { StoryCard } from '@/components/StoryCard'
import { GoogleProfile } from '@/components/GoogleProfile'
import { FAQList } from '@/components/FAQList'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { faqNode, videoNode } from '@/lib/schema'
import { homeFaq } from '@/content/faq'
import { agent } from '@/lib/site'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

/**
 * The three things she brings that a search result cannot. Copy derived
 * from her own case study articles and the September brief; the first
 * person is hers.
 */
const HOW = [
  {
    name: 'The numbers first.',
    description:
      'I owned Rose Financial Group for twenty-five years before I held a real estate license. I read loan products the way other people read listings. I know which lenders close in ten days to three weeks, and which ones understand a self-employed borrower, and that conversation happens before we look at a single house.',
    href: '/buyers/',
    linkLabel: 'How I work with buyers',
    icon: BanknotesIcon,
  },
  {
    name: 'City hall, from the inside.',
    description:
      'I spent two years as Economic Development Coordinator for the City of Magnolia and helped write its first comprehensive plan. I served nine years on the Magnolia ISD school board, two of them as president. When you ask about zoning, an HOA or a school district, the answer comes from someone who has sat on the other side of that table.',
    href: '/about/',
    linkLabel: 'More about me',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Built through the community.',
    description:
      'I built my financial planning firm through the Chamber of Commerce and Rotary, and I built this business the same way. Most of the people I work with arrive through someone I already know, and several of the stories on this site started as a referral from an existing client.',
    href: '/stories/',
    linkLabel: 'Read the stories',
    icon: UsersIcon,
  },
]

export default async function Home() {
  const stories = await getStories()
  const featured = stories.filter((s) => s.featured).slice(0, 3)
  const shown = featured.length === 3 ? featured : stories.slice(0, 3)

  return (
    <>
      <SchemaGraph nodes={[faqNode(homeFaq), videoNode()]} />
      <Hero />

      <FeatureThree
        eyebrow="How I work"
        heading="What twenty-five years of financial planning taught me about buying a house."
        items={HOW}
        className="border-t border-rule py-24 sm:py-32"
      />

      {/* Tailwind Plus, Blog sections, "Three-column with images": the section around three StoryCards. */}
      <section aria-labelledby="stories-heading" className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="stories-heading" className="text-base/7 font-semibold text-rose">
              Stories from the field
            </h2>
            <p className="mt-2 font-display text-[2.25rem]/[1.1] text-balance text-ink sm:text-5xl/[1.05]">
              Real deals in real neighborhoods.
            </p>
            <p className="mt-6 text-lg/8 text-ink-soft">
              Each one is a transaction I handled, told without the client&rsquo;s name or the street address, with the
              numbers that mattered and what I would do again.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {shown.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
          <p className="mt-16">
            <Button variant="quiet" href="/stories/">
              All seventeen stories
            </Button>
          </p>
        </Container>
      </section>

      <AreaGrid />

      {/* Tailwind Plus, Content sections, "Split with image": the compact form, headshot beside the introduction. */}
      <section aria-labelledby="about-heading" className="relative bg-paper">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                src={agent.headshot}
                alt={agent.headshotAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="bg-paper object-cover object-top grayscale"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p id="about-heading" className="text-base/7 font-semibold text-rose">
                About
              </p>
              <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-pretty text-ink sm:text-5xl/[1.05]">I am Deborah Rose Miller.</h2>
              <p className="mt-6 text-xl/8 text-ink">
                Rose is my maiden name and it has been on the door of every business I have run. Community is my
                business. Relevance is my mission.
              </p>
              <div className="mt-10 max-w-xl text-base/7 text-ink-soft lg:max-w-none">
                <p>
                  I sold my financial planning firm in 2008 after twenty-five years, spent two years helping the City
                  of Magnolia plan its next twenty, and then went into residential real estate because I had bought and
                  sold enough of my own homes to know I could do the job well. I co-founded the Magnolia Education
                  Foundation in 2001 and serve on the board of the Humble ISD Education Foundation today, where I am a
                  past chair.
                </p>
                <p className="mt-8">
                  <Button variant="quiet" href="/about/">
                    More about me
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleProfile />

      <section id="questions" className="bg-field">
        <Container className="py-24 sm:py-32">
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Things people ask on the first call.</h2>
          <div className="mt-10">
            <FAQList items={homeFaq} />
          </div>
        </Container>
      </section>

      <ClosingAsk heading="Tell me what you are trying to do." secondaryHref="/about/" secondaryLabel="Read about me first">
        Buying, selling, or both at once. The first call is twenty minutes and costs nothing.
      </ClosingAsk>
    </>
  )
}
