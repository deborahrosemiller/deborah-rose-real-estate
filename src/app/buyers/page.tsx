import type { Metadata } from 'next'
import { ClockIcon, DocumentMagnifyingGlassIcon, HomeModernIcon, ScaleIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { Timeline } from '@/components/Timeline'
import { FeatureSplit } from '@/components/FeatureSplit'
import { StoryCard } from '@/components/StoryCard'
import { FAQList } from '@/components/FAQList'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumb, faqNode } from '@/lib/schema'
import { buyersFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'
import { regionSentence } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Buying a home in Kingwood, Humble, Porter, Conroe or Magnolia',
  description:
    'How Deborah Rose Miller works with buyers across the Lake Houston area and Montgomery County: lenders who can close in ten days to three weeks, inspections she attends in person, and offers built to win.',
  path: '/buyers/',
})

/**
 * The five steps. Brett, 2026-09-18: every paragraph runs the same number
 * of lines at desktop width, no orphan line. Step two is "Financing first"
 * so the name fits on one line. Step four carries no fee language
 * (Deborah: "I don't want to make it where my fee is the first thing we
 * talk about"); she has won bidding wars on how tight the contract was.
 * Step five is in communication with the lender and title company, never
 * "on" them (Deborah: "They would never talk to me if I did that.
 * Communication is the key.").
 */
const STEPS = [
  {
    label: 'Step one',
    name: 'The first call',
    description:
      'Twenty minutes on the phone. What you are trying to do, when, and what you can comfortably spend. I tell you what is realistic in the part of the market you want and what I would do first.',
  },
  {
    label: 'Step two',
    name: 'Financing first',
    description:
      'Your lender decides how fast you can close and how your offer reads to a seller. I introduce you to lenders who can close in ten days to three weeks, so you are approved before we open a door.',
  },
  {
    label: 'Step three',
    name: 'The search',
    description:
      'I will not waste your time on homes that do not fit. When you want one neighborhood and one floor plan, we watch that neighborhood, including what is about to list, and move the day it appears.',
  },
  {
    label: 'Step four',
    name: 'The offer',
    description:
      'Price is one lever. The close date, the contingencies, the earnest money and a lender the listing agent trusts are the others. I have won bidding wars on how tight the contract was written.',
  },
  {
    label: 'Step five',
    name: 'Inspection to closing',
    // Deborah's rewrite, 2026-09-21. Her em dashes: the aside around "even on new
    // construction" is set in commas, and the closing line is split into two
    // sentences (site rule). The closing line is bold, as she set it.
    description:
      'I stay personally involved from inspection through closing. I attend the inspection, even on new construction, and provide a same-day update with photos. From there, I stay in close communication with the lender and title company, keeping the transaction moving and my clients informed every step of the way.',
    closing: 'Because in real estate, communication isn’t just important. It’s essential.',
  },
]

const BUILT_FOR = [
  {
    name: 'Self-employed and business owners.',
    description:
      'A tax return that shows every deduction you are entitled to can look thin to the wrong underwriter. I know which lenders read it correctly, because for thirty-six years in banking and financial planning I sat on the other side of that conversation.',
    icon: ScaleIcon,
  },
  {
    name: 'Relocating from out of state.',
    description:
      'Video walkthroughs of what the listing photos leave out, same-day answers across time zones, and an inspection I attend in person and report room by room. I have closed homes for buyers who first walked in on closing day.',
    icon: ClockIcon,
  },
  {
    name: 'Corporate relocation and new construction.',
    description:
      'I work with relocation companies and with builders, and I treat a new build the way I treat a resale: a full inspection before closing, a punch list the builder fixes, and a price checked against what the same plan sold for nearby.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Buying and selling at the same time.',
    description:
      'One project with two closings, sequenced so you are never between homes. If you owe more than your current home is worth, we talk about that first. I have brought in an investor so a client could break even and still buy the home they wanted.',
    icon: HomeModernIcon,
  },
]

export default async function BuyersPage() {
  const stories = (await getStories()).filter((s) => s.role === 'Buyer story' || s.role === 'Sale and purchase').slice(0, 3)
  return (
    <>
      <SchemaGraph nodes={[faqNode(buyersFaq), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Buyers', path: '/buyers/' }])]} />
      <PageIntro eyebrow={regionSentence} title="Buying a home in the Lake Houston area or Montgomery County">
        <p>
          The house is the easy part. The loan, the timeline and the offer are where a purchase is won or lost, and
          those are parts of my fifty plus years in the financial industry and municipal government. I work across
          Kingwood, Humble, Porter, Conroe and Magnolia.
        </p>
      </PageIntro>

      <Timeline items={STEPS} />

      <FeatureSplit
        eyebrow="Buyers I am built for"
        heading="Four situations where the financial background does the work"
        intro="Some purchases are won on the numbers. A self-employed borrower. An appraisal that comes in short. A seller who needs certainty more than price. Those are the ones I am built for."
        items={BUILT_FOR}
      />

      {stories.length ? (
        <section className="bg-field py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-rose">Buyer stories</h2>
              <p className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Successful buyer stories</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {stories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper">
        <Container className="py-24 sm:py-32">
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Questions buyers ask</h2>
          <div className="mt-10">
            <FAQList items={buyersFaq} />
          </div>
        </Container>
      </section>

      {/* Her own line with clients, contractions and all (Deborah and Brett, live review 2026-09-18). */}
      <ClosingAsk heading="In a perfect world, what are you wanting?">
        Since we know the world&rsquo;s not perfect, then I&rsquo;ll know where the tradeoffs need to be.
      </ClosingAsk>
    </>
  )
}
