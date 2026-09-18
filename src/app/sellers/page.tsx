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
import { breadcrumb, faqNode } from '@/lib/schema'
import { sellersFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Selling a home in Kingwood, Humble, Porter, Conroe, Magnolia or Tomball',
  description:
    'How Deborah Rose Miller sells homes across the Lake Houston area and Montgomery County: pricing from this week’s closed sales, presentation that earns a bidding war, and a timeline you can count on.',
  alternates: { canonical: '/sellers/' },
}

const STEPS = [
  {
    label: 'Step one',
    name: 'The price',
    description:
      'I pull the closed sales in your immediate area the day we talk, and what is competing with you that week, including the builder if there is one. The number we choose is a strategy, and I will explain the strategy.',
  },
  {
    label: 'Step two',
    name: 'The preparation',
    description:
      'Some homes need a stager and some need a weekend of decluttering. I tell you which, and I do not spend your money on work that will not show up in the offer.',
  },
  {
    label: 'Step three',
    name: 'The presentation',
    description:
      'Professional photography, video where it earns its keep, and a listing written to stop a buyer scrolling past forty similar homes. The estate in the video on my homepage was one of those listings.',
  },
  {
    label: 'Step four',
    name: 'The offers',
    description:
      'When more than one buyer wants the house, I run the competition so it works for you. When one buyer wants it, I negotiate the terms that matter most to you, which are not always price.',
  },
  {
    label: 'Step five',
    name: 'Inspection to closing',
    description:
      'Repairs confirmed in person, the buyer’s lender watched daily, the title company kept on schedule. If you have already moved out of state, I am your eyes on the ground until the wire clears.',
  },
]

const SOLD_THROUGH = [
  {
    name: 'Selling from another state.',
    description:
      'I have listed and closed homes in Humble for owners who were hundreds of miles away for the entire transaction, in a heavy buyer’s market, under contract in under a week at their asking price.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Downsizing and retirement timing.',
    description:
      'When to list matters more than most people expect. I told one couple to list in spring instead of December. They cleared their goal by five thousand dollars, and by December the market had turned.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Selling new construction you just bought.',
    description:
      'A thin equity window and a builder still selling the same plan down the street. Pricing this correctly is arithmetic, and I have gotten sellers out even on homes they had owned for a year.',
    icon: HomeIcon,
  },
  {
    name: 'Selling to buy the next one.',
    description:
      'Two contracts, closing dates within days of each other, and a backup plan we hopefully never use. I have run both sides for the same clients more than once.',
    icon: ArrowsRightLeftIcon,
  },
]

export default async function SellersPage() {
  const stories = (await getStories()).filter((s) => s.role === 'Seller story' || s.role === 'Sale and purchase').slice(0, 3)
  return (
    <>
      <SchemaGraph nodes={[faqNode(sellersFaq), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Sellers', path: '/sellers/' }])]} />
      <PageIntro eyebrow="Sellers" title="Selling a home in the Lake Houston area or Montgomery County.">
        <p>
          A sale is a pricing decision, a timing decision and a presentation decision, made in that order. Get the
          first one right and the other two get easier.
        </p>
      </PageIntro>

      <Timeline items={STEPS} />

      <FeatureSplit
        eyebrow="Situations I have sold through"
        heading="Four sales where the plan mattered more than the market."
        intro="Every one of these is a real transaction on this site. The market was working against the seller in most of them, and the outcome came from the plan."
        items={SOLD_THROUGH}
      />

      {stories.length ? (
        <section className="bg-field py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-rose">Seller stories</h2>
              <p className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">How it went for other sellers.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {stories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-rule bg-field">
        <Container className="py-24 sm:py-32">
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">What sellers ask first.</h2>
          <div className="mt-10">
            <FAQList items={sellersFaq} />
          </div>
        </Container>
      </section>

      <ClosingAsk heading="Find out what your home would bring this month.">
        An honest read on price, timing and preparation, from the closed sales in your immediate area.
      </ClosingAsk>
    </>
  )
}
