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
import { buyersFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Buying a home in Kingwood, Humble, Porter, Conroe, Magnolia or Tomball',
  description:
    'How Deborah Rose Miller works with buyers across the Lake Houston area and Montgomery County: lenders who close in ten days to three weeks, inspections she attends in person, and offers built to win.',
  alternates: { canonical: '/buyers/' },
}

const STEPS = [
  {
    name: 'The first call',
    body: 'Twenty minutes on the phone. What you are trying to do, when, and what you can comfortably spend. I will tell you what is realistic in the part of the market you want and what I would do first.',
  },
  {
    name: 'Financing before showings',
    body: 'Your lender decides how fast you can close and how your offer reads to a seller. I introduce you to lenders who close in ten days to three weeks, and who know how to underwrite a self-employed borrower, and we get you fully approved before we open a door.',
  },
  {
    name: 'The search',
    body: 'I do not show you homes that do not fit. When you want one neighborhood and one floor plan, we watch that neighborhood, including what is about to list, and we move the day the right one appears.',
  },
  {
    name: 'The offer',
    body: 'Price is one lever. Close date, contingencies, earnest money and a lender the listing agent trusts are the others. I have won a bidding war by adjusting my own fee, and I will tell you every option before we write.',
  },
  {
    name: 'Inspection to closing',
    body: 'I attend the inspection, including on new construction, and report to you the same day with photos. Then I stay on the lender and the title company daily until the keys are in your hand.',
  },
]

export default async function BuyersPage() {
  const stories = (await getStories()).filter((s) => s.role === 'Buyer story' || s.role === 'Sale and purchase').slice(0, 3)
  return (
    <>
      <SchemaGraph nodes={[faqNode(buyersFaq), breadcrumb([{ name: 'Home', path: '/' }, { name: 'Buyers', path: '/buyers/' }])]} />
      <PageIntro eyebrow="Buyers" title="Buying a home in the Lake Houston area or Montgomery County.">
        <p>
          The house is the easy part. The loan, the timeline and the offer are where a purchase is won or lost, and
          those are the parts I spent twenty-five years in financial planning learning to read.
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
              <Heading className="mt-6">Buyers I am built for.</Heading>
            </div>
            <dl className="mt-10 space-y-10 lg:col-span-7 lg:mt-0">
              <div>
                <dt className="font-display text-2xl text-ink">Self-employed and business owners</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  A tax return that shows every deduction you are entitled to can look thin to the wrong underwriter. I
                  know which lenders read it correctly and how to present it, because for twenty-five years I was the
                  one preparing my clients for that conversation.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Relocating from out of state</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  Video walkthroughs of what the listing photos leave out, same-day answers across time zones, and an
                  inspection I attend in person and report room by room. I have closed homes in Kingwood and Magnolia for
                  buyers who first walked in on closing day.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Corporate relocation and new construction</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  I work with relocation companies and with builders, and I treat a new build the way I treat a resale:
                  a full inspection before closing, a punch list the builder fixes, and a price checked against what the
                  same plan sold for nearby.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-ink">Buying and selling at the same time</dt>
                <dd className="mt-3 text-base/7 text-ink-soft">
                  One project with two closings, sequenced so you are never between homes. If you owe more than your
                  current home is worth, we talk about that first, and there are more answers than waiting it out.
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {stories.length ? (
        <section className="py-20 lg:py-28">
          <Container>
            <Eyebrow>Buyer stories</Eyebrow>
            <Heading className="mt-6 max-w-2xl">How it went for other buyers.</Heading>
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
          <Heading className="mt-6 max-w-2xl">What buyers ask first.</Heading>
          <div className="mt-12">
            <FAQList items={buyersFaq} />
          </div>
        </Container>
      </section>

      <ClosingAsk heading="Tell me what you are looking for and when you need it.">
        The first call is twenty minutes and costs nothing. You will leave it knowing what is realistic.
      </ClosingAsk>
    </>
  )
}
