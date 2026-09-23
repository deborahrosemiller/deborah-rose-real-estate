import type { Metadata } from 'next'
import Image from 'next/image'
import { BanknotesIcon, BuildingLibraryIcon, UsersIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Text'
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
    name: 'The numbers first',
    description:
      'I spent thirty-six years in the financial industry, first as a banker and then as the owner of Rose Financial Group, before I held a real estate license. I read loan products the way other people read listings. I know which lenders can close in ten days to three weeks, and which ones understand a self-employed borrower, and that conversation happens before we look at a single house.',
    href: '/buyers/',
    linkLabel: 'How I work with buyers',
    icon: BanknotesIcon,
  },
  {
    name: 'City hall, from the inside',
    description:
      'I spent two years as Economic Development Coordinator for the City of Magnolia and helped write its first comprehensive plan. I served nine years on the Magnolia ISD school board, two of them as president. When you ask about zoning, an HOA or a school district, the answer comes from someone who has sat on the other side of that table.',
    href: '/about/',
    linkLabel: 'More about me',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Built through the community',
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
       * Her own introduction. She sent it on 2026-09-21 with the intro line
       * that heads the hero, revised the first paragraph on 2026-09-22 to
       * run through banking and the planning firm, and cut the "Today, I
       * bring that experience" paragraph the same day. Her words, except the
       * em dash in the second sentence, split in two per the site's rule.
       *
       * The shape is from 2026-09-22 as well: she said it read as a wall of
       * text on plain white. It now carries the band tone (white at both
       * edges, so the paper "How I work" section below still reads as a
       * change of tone), the rose label, the mission in the display serif,
       * and her own rose mark as the background of the whole section. The
       * mark is the one in public/brand, the same rose as the logo and the
       * same red as the accent; it is texture rather than an image with
       * something to say, so it carries no alt text and nothing reads over
       * it at less than 15:1. Three treatments of this section, including
       * the house-and-rose motif from her own graphic, are at
       * /design-preview/ for the review on 2026-09-23.
       */}
      <section aria-label="Introduction from Deborah" className="band relative isolate overflow-hidden py-20 sm:py-28">
        {/*
          * Deborah, 2026-09-23: the rose is the background of the section
          * now, not an ornament at its edge. It is centred and taller than
          * the band so it fills the height and crops at the stem and the
          * bud, the way a watermark does. 6 percent, because the copy reads
          * over it here: her red on the paper tone at that strength leaves
          * ink type above 15:1.
          */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
          <Image
            src="/brand/deborah-rose-mark.png"
            alt=""
            width={512}
            height={512}
            className="h-[118%] w-auto max-w-none opacity-[0.06]"
          />
        </div>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>My approach</Eyebrow>
            <p className="mt-6 text-xl/8 text-ink sm:text-2xl/9">
              Buying or selling a home is more than a real estate transaction. It&rsquo;s one of the most important
              financial decisions you&rsquo;ll make. Before building my real estate business, I spent more than 36
              years in the financial services industry, first in banking and later as the owner of a financial
              planning firm. That experience gives me a unique perspective in real estate: I understand not only the
              value of a home, but how the decisions you make today can impact your financial future.
            </p>
            <p className="mt-10 font-display text-2xl/[1.35] text-ink sm:text-[1.75rem]/[1.35]">
              My mission is simple: to serve, connect, and deliver a real estate experience built on trust, knowledge,
              innovation, and heart.
            </p>
            <p className="mt-6 max-w-2xl text-lg/8 text-ink-soft">
              Whether you&rsquo;re buying your first home, selling a longtime family property, relocating, or expanding
              your investment portfolio, I am committed to providing the strategy, guidance, and advocacy you need to
              make confident real estate decisions.
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
            {/*
              * Deborah's heading and subtext, 2026-09-21. The subtext's em dash is
              * split into two sentences (site rule). The heading was three
              * sentences until 2026-09-23, when she sent a screenshot of it and
              * asked twice: first for the periods out, then for all of the
              * punctuation out. It carries none now, and it is the one heading on
              * the site in title case, which is how she asked for it. Hers beats
              * the house style.
              */}
            <p className="mt-2 font-display text-[2.25rem]/[1.1] text-balance text-ink sm:text-5xl/[1.05]">
              Real Deals Real Neighborhoods Real Results
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
       * The heading is Deborah's own line, sent 2026-09-22, and it keeps her
       * exclamation mark: headings carry no ending punctuation on this site,
       * but hers is a full sentence, the same exception the question-mark
       * headings take. The line that used to sit under it ("It has been on
       * the door of every business I have run") is gone; the heading says it.
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
                Rose means family and strength to me. It has been on the door of every business I have owned!
              </h2>
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
