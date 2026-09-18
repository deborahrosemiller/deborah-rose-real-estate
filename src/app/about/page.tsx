import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { Credentials } from '@/components/Credentials'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { breadcrumb } from '@/lib/schema'
import { agent, business, production, tagline } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Deborah Rose Miller',
  description:
    'Deborah Rose Miller owned Rose Financial Group for twenty-five years, served nine years on the Magnolia ISD school board, helped write the City of Magnolia’s first comprehensive plan, and now sells homes across the Lake Houston area and Montgomery County.',
  alternates: { canonical: '/about/' },
}

const SERVICE = [
  { name: 'Magnolia Education Foundation', detail: 'Co-founder and founding president, 2001' },
  { name: 'Humble ISD Education Foundation', detail: 'Board of directors, past chair' },
  { name: 'Magnolia ISD Board of Trustees', detail: 'Nine years, two as president' },
  { name: 'City of Magnolia', detail: 'Economic Development Coordinator, two years' },
  { name: 'Lake Houston Area Chamber of Commerce', detail: 'Director' },
  { name: 'Greater East Montgomery County Chamber of Commerce', detail: 'Member' },
  { name: 'Greater Magnolia Chamber of Commerce', detail: 'Past president' },
  { name: 'Rotary', detail: 'Fellow Rotarian. Founding member of the Magnolia Rotary Club, member of the Summer Creek Rotary Club' },
  { name: 'Magnolia-Tomball YMCA', detail: 'Director and past chairman' },
]

const FIGURES = [
  { label: 'years of business leadership', value: production.yearsBusiness },
  { label: 'years owning Rose Financial Group', value: String(production.yearsRoseFinancial) },
  { label: 'years in residential real estate', value: production.yearsRealEstate },
  { label: 'homes sold as listing or buyer agent, per HAR', value: String(production.sold) },
]

const CREDENTIALS = [
  { name: 'Texas real estate broker license', detail: `TREC #${business.license}` },
  { name: 'Brokerage', detail: business.legalNote },
  { name: 'Houston Association of REALTORS', detail: production.harTier },
  { name: 'Real Estate Negotiation Expert', detail: 'RENE' },
  { name: 'Certified Luxury Home Marketing Specialist', detail: 'CLHMS' },
  { name: 'Five Star Real Estate Agent', detail: 'Houston, 2023' },
]

/**
 * Tailwind Plus, Marketing, Content sections, "Split with image" (React,
 * v4.3), from Brett's account 2026-09-17: the headshot fills the left half,
 * the biography runs down the right. Below it, the <dl> from Stats
 * sections, "Two-column description", set as type. Then the community
 * record as a definition list.
 */
export default function AboutPage() {
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]} />

      <div className="relative bg-field">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image src={agent.headshot} alt={agent.headshotAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="bg-paper object-cover object-top grayscale" />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base/7 font-semibold text-rose">About</p>
              <h1 className="mt-2 font-display text-[2.5rem]/[1.05] text-pretty text-ink sm:text-5xl/[1.05]">
                I am Deborah Rose Miller, and Rose has been on the door of every business I have run.
              </h1>
              <p className="mt-6 text-xl/8 text-ink">{tagline}</p>
              <div className="mt-10 max-w-xl space-y-6 text-base/7 text-ink-soft lg:max-w-none">
                <p>
                  Rose is my maiden name. It was the name of my financial planning firm, Rose Financial Group, which I
                  owned and ran for twenty-five years before I sold it in 2008 while living in Magnolia, Texas. It is the
                  name of this business too, because the way I work has not changed. I look at the whole picture, I run
                  the numbers before anyone signs, and I tell people what I see even when it is not what they hoped to
                  hear.
                </p>
                <p>
                  After I sold the firm, the city manager of Magnolia took me to lunch and asked me to come work for him.
                  I spent two years as the city&rsquo;s Economic Development Coordinator and stayed a second year as an
                  independent contractor. I helped write Magnolia&rsquo;s first comprehensive plan, worked directly with
                  developers, and sat in the meetings where zoning and the city&rsquo;s boundaries were decided. Before
                  that I had served nine years on the Magnolia ISD school board, two of them as president, and over the
                  years I have served two Houston mayors.
                </p>
                <p>
                  The natural next step from city work with developers would have been commercial real estate. I wanted
                  residential. I had bought and sold enough of my own homes by then to know what a good agent does and
                  what a careless one costs you, and I was confident I could do the job well. I have been doing it for
                  more than a decade now, and thirty-eight of those closings are on my HAR record.
                </p>
                <p>
                  I built the financial planning firm through the Chamber of Commerce, Rotary and the nonprofits I gave
                  my time to. I built this business the same way, with the same Rotarians and the same Chamber network.
                  Most of the people I work with came through someone I already know, and the clients I enjoy most are
                  the ones who let me use what I know on their behalf.
                </p>
                <h2 className="mt-16 font-display text-2xl text-ink">Three careers, one client.</h2>
                <p>
                  I am not a lender, and I have spent a career reading loan products. I know which lenders close in ten
                  days to three weeks, which ones will think about a file instead of running it through a formula, and
                  which ones handle self-employed borrowers well. I am selective about who I send you to for exactly
                  that reason.
                </p>
                <p>
                  When a purchase turns on what a city is planning, what an HOA can enforce or how a boundary was drawn,
                  I have sat on the side of the table that decided it. Nine years as a trustee taught me how a district
                  is run, funded and drawn. I can tell you how attendance boundaries work, where to find the
                  state&rsquo;s own report on any campus, and what questions to ask the district directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-rule bg-field py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-rose">In numbers</p>
            <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Forty-five years of showing up.</h2>
            <div className="mt-16 sm:mt-20">
              <Credentials items={FIGURES} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <p className="text-base/7 font-semibold text-rose">Community</p>
              <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Where I have served.</h2>
              <p className="mt-6 text-lg/8 text-ink-soft">
                Education foundations are the cause I give my time to. The Magnolia Education Foundation, which I helped
                start in 2001, is in its twenty-fifth year.
              </p>
            </div>
            <dl className="mt-10 divide-y divide-rule border-y border-rule lg:col-span-7 lg:mt-0">
              {SERVICE.map((s) => (
                <div key={s.name} className="grid gap-x-8 py-4 sm:grid-cols-2">
                  <dt className="text-ink">{s.name}</dt>
                  <dd className="text-ink-soft">{s.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-field py-24 sm:py-32">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <p className="text-base/7 font-semibold text-rose">Credentials</p>
              <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">License, brokerage and designations.</h2>
            </div>
            <dl className="mt-10 divide-y divide-rule border-y border-rule lg:col-span-7 lg:mt-0">
              {CREDENTIALS.map((c) => (
                <div key={c.name} className="grid gap-x-8 py-4 sm:grid-cols-2">
                  <dt className="text-ink">{c.name}</dt>
                  <dd className="text-ink-soft">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <ClosingAsk heading="If any of that sounds like the help you need, call me." secondaryHref="/stories/" secondaryLabel="Read the stories first" />
    </>
  )
}
