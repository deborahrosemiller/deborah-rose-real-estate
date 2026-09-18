import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { Heading, Eyebrow } from '@/components/Text'
import { Steps } from '@/components/Steps'
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
    'How Deborah Rose Miller sells homes across the Lake Houston area and Montgomery County: pricing from this week’s closed sales, staging that earns a bidding war, and a timeline you can count on.',
  alternates: { canonical: '/sellers/' },
}

const STEPS = [
  {
    name: 'The price',
    body: 'I pull the closed sales in your immediate area the day we talk, and what is competing with you that week, including the builder if there is one. The number we choose is a strategy, and I will explain the strategy.',
  },
  {
    name: 'The preparation',
    body: 'Some homes need a stager and some need a weekend of decluttering. I tell you which, and I do not spend your money on work that will not show up in the offer.',
  },
  {
    name: 'The presentation',
    body: 'Professional photography, video where it earns its keep, and a listing written to stop a buyer scrolling through forty similar homes. The Porter estate on my homepage was one of those listings.',
  },
  {
    name: 'The offers',
    body: 'When more than one buyer wants the house, I run the competition so it works for you. When one buyer wants it, I negotiate the terms that matter most to you, which are not always price.',
  },
  {
    name: 'Inspection to closing',
    body: 'Repairs confirmed in person, the buyer’s lender watched daily, the title company kept on schedule. If you have already moved out of state, I am your eyes on the ground until the wire clears.',
  },
]

export default async function SellersPage() {
  const stories = (await getStories()).filter((s) => s.role === 'Seller story' || s.role === 'Sale and purchase').slice(0, 3)
  return (
    <>
      <SchemaGraph nodes={[faqNode(sellersFaq), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Sellers', path: '/sellers/' }])]} />
      <PageIntro eyebrow="Sellers" title="Selling a home in the Lake Houston area or Montgomery County.">
        <p>
          A sale is a pricing decision, a timing decision and a presentation decision, made in that order. I have
          priced a home a little under the market to draw three buyers and closed it twenty thousand dollars over
          list, and I have told a client to list in spring instead of December and watched December prove me right.
        </p>
      </PageIntro>

      <section className="pb-20 lg:pb-28">
        <Container>
          <Eyebrow>How it goes</Eyebrow>
          <Heading className="mt-6 max-w-2xl">Five steps, in the order they happen.</Heading>
          <Steps items={STEPS} className="mt-12" />
        </Container>
      </section>

      <section className="band py-20 lg:py-28">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow>What is different</Eyebrow>
              <Heading className="mt-6">Situations I have sold through.</Heading>
            </div>
            <dl className="mt-10 space-y-10 lg:col-span-7 lg:mt-0">
              <div>
                <dt className="font-display text-2xl text-ink">Selling from another state</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  I have listed and closed homes in Humble for owners who were hundreds of miles away for the entire
                  transaction, in a heavy buyer&rsquo;s market, under contract in under a week at their asking price.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Downsizing and retirement timing</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  When to list matters more than most people expect. I read the market the way I used to read a
                  portfolio, and I will tell you if the plan you have in mind is going to cost you.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Selling new construction you just bought</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  A thin equity window and a builder still selling the same plan down the street. Pricing this
                  correctly is arithmetic, and I have gotten sellers out even on homes they had owned for a year.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Selling to buy the next one</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  Two contracts, closing dates within days of each other, and a backup plan we hopefully never use.
                  I have run both sides for the same clients more than once.
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {stories.length ? (
        <section className="py-20 lg:py-28">
          <Container>
            <Eyebrow>Seller stories</Eyebrow>
            <Heading className="mt-6 max-w-2xl">How it went for other sellers.</Heading>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-rule py-20 lg:py-28">
        <Container>
          <Eyebrow>Questions</Eyebrow>
          <Heading className="mt-6 max-w-2xl">What sellers ask first.</Heading>
          <div className="mt-12">
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
