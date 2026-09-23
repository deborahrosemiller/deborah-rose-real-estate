import type { Metadata } from 'next'
import { CalendarDaysIcon, GlobeAmericasIcon, HomeIcon, ArrowsRightLeftIcon } from '@heroicons/react/20/solid'

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
import { sellersFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'
import { regionSentence } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Selling a home in Kingwood, Humble, Porter, Conroe or Magnolia',
  description:
    'How Deborah Rose Miller sells homes across the Lake Houston area and Montgomery County: pricing from this week’s closed sales, presentation that earns a bidding war, and a timeline you can count on.',
  path: '/sellers/',
})

/**
 * The five steps, in Deborah's words from the live review of 2026-09-18.
 * Step one: "The number we choose is a strategy, and I will explain that
 * strategy." Step three: buyers decide to see your home off the website,
 * so photography is key. Step four covers a multiple offer situation and a
 * single buyer alike. Step five landed on the verb "coordinate."
 */
const STEPS = [
  {
    label: 'Step one',
    name: 'The price',
    description:
      'The number we choose is a strategy, and I will explain that strategy. Closed sales and current market activity in your area are just the beginning of that conversation.',
  },
  {
    label: 'Step two',
    name: 'The preparation',
    // Deborah's rewrite, 2026-09-23, shorter. Her em dash before "without" is
    // set as a comma: split into two sentences it leaves a fragment. The bold
    // closing line she added on 2026-09-22 is not in her new text, so it is
    // out; flagged to her, since Buyers step five still ends on one.
    description:
      'Every home needs a different level of preparation. I’ll help you focus on the updates and finishing touches that matter to buyers, without spending money where it won’t add value.',
  },
  {
    label: 'Step three',
    name: 'The presentation',
    description:
      'Buyers make their initial decision to see your home off the website, so professional photography is key to the whole process. Video where it earns its keep, and a listing written to match.',
  },
  {
    label: 'Step four',
    name: 'The offers',
    description:
      'Whether it is a multiple offer situation or a single buyer, I focus on negotiating the terms that matter most to you. Price is one of them. The close date and the contingencies are others.',
  },
  {
    label: 'Step five',
    name: 'Inspection to closing',
    description:
      'Repairs, negotiation and communication, whether you are local or out of state. Those are the areas I coordinate, every day, with the buyer\u2019s side, the lender and the title company.',
  },
]

const SOLD_THROUGH = [
  {
    name: 'Selling from another state.',
    description:
      'I have listed and closed homes for owners who were hundreds of miles away for the entire transaction, in a heavy buyer’s market, under contract in under a week at their asking price.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Downsizing and retirement timing.',
    description:
      'Timing is everything. One couple wanted to wait until December to list. I told them to list in the spring instead, and it put five thousand dollars more in their pocket. By December the market had turned.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Selling new construction you just bought.',
    description:
      'A thin equity window and a builder still selling the same plan down the street. Pricing this correctly is arithmetic, and I have gotten sellers out even on homes they had owned for a year.',
    icon: HomeIcon,
  },
  {
    name: 'Selling and buying at the same time.',
    description:
      'Two contracts, one closing date. I have run both sides for the same clients more than once, and the sequencing is the whole job: the sale funds the purchase, and nobody spends a night between homes.',
    icon: ArrowsRightLeftIcon,
  },
]

export default async function SellersPage() {
  const stories = (await getStories()).filter((s) => s.role === 'Seller story' || s.role === 'Sale and purchase').slice(0, 3)
  return (
    <>
      <SchemaGraph nodes={[faqNode(sellersFaq), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Sellers', path: '/sellers/' }])]} />
      <PageIntro eyebrow={regionSentence} title="Selling a home in the Lake Houston area or Montgomery County">
        <p>
          A sale is a pricing decision, a timing decision, and a presentation decision. Coordination and negotiation
          are where I excel. I work across Kingwood, Humble, Porter, Conroe and Magnolia.
        </p>
      </PageIntro>

      <Timeline items={STEPS} />

      <FeatureSplit
        eyebrow="Situations I have sold through"
        heading="Four sales where our plan mattered more than the market"
        intro="Every one of these is a real transaction on this site. The market was working against the seller in most of them, and the outcome came from our plan."
        items={SOLD_THROUGH}
      />

      {stories.length ? (
        <section className="bg-field py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-rose">Seller stories</h2>
              <p className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Successful seller stories</p>
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
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Questions sellers ask</h2>
          <div className="mt-10">
            <FAQList items={sellersFaq} />
          </div>
        </Container>
      </section>

      <ClosingAsk heading="Let&rsquo;s talk about pricing, timing and preparation">
        We start from the closed sales in your immediate area and what is on the market this month.
      </ClosingAsk>
    </>
  )
}
