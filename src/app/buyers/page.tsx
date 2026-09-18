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
import { breadcrumb, faqNode } from '@/lib/schema'
import { buyersFaq } from '@/content/faq'
import { getStories } from '@/lib/stories'
import { regionSentence } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Buying a home in Kingwood, Humble, Porter, Conroe or Magnolia',
  description:
    'How Deborah Rose Miller works with buyers across the Lake Houston area and Montgomery County: lenders who can close in ten days to three weeks, inspections she attends in person, and offers built to win.',
  alternates: { canonical: '/buyers/' },
}

const STEPS = [
  {
    label: 'Step one',
    name: 'The first call',
    description:
      'Twenty minutes on the phone. What you are trying to do, when, and what you can comfortably spend. I tell you what is realistic in the part of the market you want and what I would do first.',
  },
  {
    label: 'Step two',
    name: 'Financing before showings',
    description:
      'Your lender decides how fast you can close and how your offer reads to a seller. I introduce you to lenders who can close in ten days to three weeks, and you are fully approved before we open a door.',
  },
  {
    label: 'Step three',
    name: 'The search',
    description:
      'I do not show you homes that do not fit. When you want one neighborhood and one floor plan, we watch that neighborhood, including what is about to list, and we move the day the right one appears.',
  },
  {
    label: 'Step four',
    name: 'The offer',
    description:
      'Price is one lever. Close date, contingencies, earnest money and a lender the listing agent trusts are the others. I have won a bidding war by adjusting my own fee, and I will tell you every option before we write.',
  },
  {
    label: 'Step five',
    name: 'Inspection to closing',
    description:
      'I attend the inspection, including on new construction, and report to you the same day with photos. Then I stay on the lender and the title company daily until the keys are in your hand.',
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
      'Video walkthroughs of what the listing photos leave out, same-day answers across time zones, and an inspection I attend in person and report room by room. I have closed homes in Kingwood and Magnolia for buyers who first walked in on closing day.',
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
      <PageIntro eyebrow={regionSentence} title="Buying a home in the Lake Houston area or Montgomery County.">
        <p>
          Kingwood, Humble, Porter, Conroe and Magnolia. The house is the easy part. The loan, the timeline and the
          offer are where a purchase is won or lost, and those are the parts I spent thirty-six years in the financial
          industry learning to read.
        </p>
      </PageIntro>

      <Timeline items={STEPS} />

      <FeatureSplit
        eyebrow="Buyers I am built for"
        heading="Four situations where the financial background does the work."
        intro="Most agents can open a door. The purchases below turned on the loan, the timing or the structure, and that is where I earn my fee."
        items={BUILT_FOR}
      />

      {stories.length ? (
        <section className="bg-field py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-base/7 font-semibold text-rose">Buyer stories</h2>
              <p className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">How it went for other buyers.</p>
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
          <h2 className="font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">What buyers ask first.</h2>
          <div className="mt-10">
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
