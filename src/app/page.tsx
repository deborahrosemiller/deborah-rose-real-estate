import type { Metadata } from 'next'
import Image from 'next/image'
import { BanknotesIcon, BuildingLibraryIcon, UsersIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Button } from '@/components/Button'
import { FeatureThree } from '@/components/FeatureThree'
import { AreaGrid } from '@/components/AreaGrid'
import { StoryCard } from '@/components/StoryCard'
import { FAQList } from '@/components/FAQList'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { faqNode, videoNode } from '@/lib/schema'
import { homeFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'
import { agent } from '@/lib/site'

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
      'I spent thirty-six years in the financial industry, first as a banker and then as the owner of Rose Financial Group, before I held a real estate license. I read loan products the way other people read listings. I know which lenders can close in ten days to three weeks, and which ones understand a self-employed borrower, and that conversation happens before we look at a single house.',
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
      // Deborah's rewrite, 2026-09-21. The em dash after "served" is split into two sentences (site rule).
      'Community involvement has always been at the heart of how I do business. I built my financial planning firm through relationships formed in the Chamber of Commerce and the communities I served. And I’ve built my real estate business the same way. Today, much of my business comes from referrals and long-standing relationships. In fact, many of the stories shared on this site began with something very simple: someone I had served introducing me to someone they cared about.',
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

      {/*
       * Her own introduction, sent by Deborah on 2026-09-21 with the intro
       * line that heads the hero and revised by her on 2026-09-22 (the first
       * paragraph now runs through banking, the planning firm and what that
       * perspective gives a client). Her words as she wrote them, except the
       * em dash in the second sentence, split into two sentences per the
       * site's standing rule. She cut the "Today, I bring that experience"
       * paragraph on 2026-09-22, so the section is two paragraphs and closes
       * on the mission. The mission sentence is bold, as she set it. White
       * tone, so the paper "How I work" band below still alternates.
       */}
      <section aria-label="Introduction from Deborah" className="bg-field py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl space-y-6 text-lg/8 text-ink-soft">
            <p className="text-xl/8 text-ink sm:text-2xl/9">
              Buying or selling a home is more than a real estate transaction. It&rsquo;s one of the most important
              financial decisions you&rsquo;ll make. Before building my real estate business, I spent more than 36
              years in the financial services industry, first in banking and later as the owner of a financial
              planning firm. That experience gives me a unique perspective in real estate: I understand not only the
              value of a home, but how the decisions you make today can impact your financial future.
            </p>
            <p>
              My mission is simple:{' '}
              <strong className="font-semibold text-ink">
                to serve, connect, and deliver a real estate experience built on trust, knowledge, and heart.
              </strong>
            </p>
          </div>
        </Container>
      </section>

      <FeatureThree
        eyebrow="How I work"
        heading="What fifty plus years in finance and municipal government taught me about buying a house"
        items={HOW}
        tone="paper"
      />

      {/* Tailwind Plus, Blog sections, "Three-column with images": the section around three StoryCards. */}
      <section aria-labelledby="stories-heading" className="bg-field py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="stories-heading" className="text-base/7 font-semibold text-rose">
              Stories from the field
            </h2>
            {/* Deborah's heading and subtext, 2026-09-21. The subtext's em dash is split into two sentences (site rule). */}
            <p className="mt-2 font-display text-[2.25rem]/[1.1] text-balance text-ink sm:text-5xl/[1.05]">
              Real deals. Real neighborhoods. Real results
            </p>
            <p className="mt-6 text-lg/8 text-ink-soft">
              A look inside actual transactions I&rsquo;ve handled. The challenges, the decisions, and what made the
              difference.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {shown.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
          <p className="mt-16">
            <Button variant="quiet" href="/stories/">
              Read more stories
            </Button>
          </p>
        </Container>
      </section>

      <AreaGrid tone="paper" />

      {/*
       * Tailwind Plus, Content sections, "With image" (React, v4.3): a
       * portrait beside the copy. History, so it is not undone: the first
       * build had her 400 by 500 Google profile photo upscaled to half the
       * viewport and it read soft, so Brett had it removed. On the live
       * review of 2026-09-18 he asked for her face back, in color: "we don't
       * see her face, so we need a color photo of her headshot." So the
       * portrait is here at 192 to 224 CSS pixels wide, which never exceeds
       * the source's own pixels. A real headshot file is on its way; when
       * it lands, replace `agent.headshot` and nothing here moves.
       *
       * The opening. Brett: "I am Deborah Rose Miller" sounds like a bot.
       * The heading now says the one thing the section exists to say, the
       * maiden name, the way she would say it out loud.
       */}
      <section aria-labelledby="about-heading" className="bg-field py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-4xl lg:mx-0 lg:flex lg:items-start lg:gap-x-16">
            <Image
              src={agent.headshot}
              alt={agent.headshotAlt}
              width={400}
              height={500}
              sizes="(min-width: 640px) 224px, 192px"
              className="h-auto w-48 shrink-0 object-cover sm:w-56 lg:mt-2"
            />
            <div className="mt-10 max-w-3xl lg:mt-0">
              <p id="about-heading" className="text-base/7 font-semibold text-rose">
                About
              </p>
              <h2 className="mt-2 font-display text-[2.5rem]/[1.05] text-pretty text-ink sm:text-5xl/[1.05] lg:text-6xl/[1.04]">
                Rose is my maiden name
              </h2>
              <p className="mt-8 text-xl/8 text-ink sm:text-2xl/9">
                It has been on the door of every business I have run, and it is on this one. Community is my business.
              </p>
              <div className="mt-10 max-w-2xl space-y-6 text-lg/8 text-ink-soft">
                <p>
                  I started in banking in 1972 and spent thirty-six years in the financial industry, the later years as
                  the owner of Rose Financial Group, which I sold in 2008. I spent two years after that helping the City
                  of Magnolia plan its next twenty, and then went into residential real estate because I had bought and
                  sold enough of my own homes to know I could do the job well. I co-founded the Magnolia Education
                  Foundation in 2001 and serve on the board of the Humble ISD Education Foundation today, where I am a
                  past chair.
                </p>
              </div>
              <p className="mt-10">
                <Button variant="quiet" href="/about/">
                  More about me
                </Button>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/*
       * The "Find me on Google" section that sat here was removed on the
       * live review of 2026-09-18. It duplicated the footer, and the local
       * search value lives in the RealEstateAgent and LocalBusiness schema
       * and in name, phone, hours and service area consistency, none of
       * which needs a visible section. The schema is untouched (layout.tsx),
       * the footer keeps the phone, email, hours and the Google link.
       */}

      <section id="questions" className="bg-paper">
        <Container className="py-24 sm:py-32">
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Questions my clients ask</h2>
          <div className="mt-10">
            <FAQList items={homeFaq} />
          </div>
        </Container>
      </section>

      <ClosingAsk heading="Tell me what you are trying to do" secondaryHref="/about/" secondaryLabel="Read about me first">
        Buying, selling, or both at once. The first call is twenty minutes and costs nothing.
      </ClosingAsk>
    </>
  )
}
