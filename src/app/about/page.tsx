import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { INTRO_BAND } from '@/components/PageIntro'
import { Credentials } from '@/components/Credentials'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumb, profilePageNode } from '@/lib/schema'
import { agent, business, production, tagline } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'About Deborah Rose Miller',
  description:
    'Deborah Rose Miller spent thirty-six years in the financial industry, a banker and then the owner of Rose Financial Group, served nine years on the Magnolia ISD school board, helped write the City of Magnolia’s first comprehensive plan, and now sells homes across the Lake Houston area and Montgomery County.',
  path: '/about/',
  openGraph: { type: 'profile', firstName: 'Deborah', lastName: 'Miller' },
})

const SERVICE = [
  { name: 'Magnolia Education Foundation', detail: 'Co-founder and founding president, 2001' },
  // Deborah, 2026-09-22: past chair, and a director today.
  { name: 'Humble ISD Education Foundation', detail: 'Past chair and current director' },
  { name: 'Magnolia ISD Board of Trustees', detail: 'Nine years, two as president' },
  { name: 'City of Magnolia', detail: 'Economic Development Coordinator, two years' },
  { name: 'Lake Houston Area Chamber of Commerce', detail: 'Director' },
  { name: 'Greater East Montgomery County Chamber of Commerce', detail: 'Member' },
  // Deborah, 2026-09-21: never president of this chamber; she was a board member.
  { name: 'Greater Magnolia Chamber of Commerce', detail: 'Board member' },
  // Deborah, 2026-09-22: Rotary stays in this list only, and without "Fellow Rotarian".
  { name: 'Rotary', detail: 'Founding member of the Magnolia Rotary Club, member of the Summer Creek Rotary Club' },
  { name: 'Magnolia-Tomball YMCA', detail: 'Director and past chairman' },
]

const FIGURES = [
  { label: 'years across the financial industry, school trustee and municipal government', value: production.yearsCareer },
  { label: 'years in the financial industry, 1972 to 2008', value: String(production.yearsFinancialIndustry) },
  { label: 'years in residential real estate', value: production.yearsRealEstate },
  { label: 'in total career sales volume', value: production.careerVolume },
]

const CREDENTIALS = [
  { name: 'Texas real estate broker license', detail: `TREC #${business.license}` },
  { name: 'Brokerage', detail: business.legalNote },
  { name: 'Houston Association of REALTORS', detail: production.harTier },
  { name: 'Real Estate Negotiation Expert', detail: 'RENE' },
  { name: 'Certified Luxury Home Marketing Specialist', detail: 'CLHMS' },
  { name: 'Five Star Professional award', detail: 'Eleven consecutive years' },
]

/** A definition list on the full plate width, 40/60, hairlines between rows. */
function Rows({ rows }: { rows: { name: string; detail: string }[] }) {
  return (
    <dl className="mt-12 divide-y divide-rule border-y border-rule">
      {rows.map((r) => (
        <div key={r.name} className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-5">
          <dt className="text-ink sm:col-span-2">{r.name}</dt>
          <dd className="text-ink-soft sm:col-span-3">{r.detail}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * The page about her. The hero is the same structure as the other pages
 * (eyebrow, H1, intro paragraph) without the video, and a small circular
 * portrait sits to the right of the H1. The H1 is her name, plainly;
 * "I am Deborah Rose Miller" read like a bot to Brett (2026-09-18).
 * The biography is her own HAR bio, adapted and sent by Brett on
 * 2026-09-22, in the first person. Two numbers in it are open: "more than
 * 45 years of business leadership" (the site states fifty plus years in
 * the figures below) and "25 years as owner of Rose Financial Group"
 * (CLAUDE.md had the firm's duration unstated pending her resume). Both
 * came from her, both are flagged for her confirmation.
 * Brett, 2026-09-18: no photo panel, no split; "if anything, a small circle photo of Deborah on the
 * right side of the H1." The portrait is a square crop of her profile
 * photo, rendered at 120px, which is well inside the source's resolution.
 *
 * Every section below stacks its header on top of full-width content.
 * Brett rejected the header-beside-content split twice on this page.
 */
export default function AboutPage() {
  return (
    <>
      <SchemaGraph nodes={[profilePageNode(), breadcrumb([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]} />

      {/* The same band height token as the video headers, so the five secondary pages match (Brett, 2026-09-18). */}
      <div className={`flex flex-col justify-center bg-field py-10 ${INTRO_BAND}`}>
        <Container>
          <div className="max-w-3xl">
            <p className="text-base/7 font-semibold text-rose">About</p>
            <div className="mt-2 flex items-start justify-between gap-x-6 sm:gap-x-10">
              <h1 className="font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:text-6xl/[1.04] lg:text-[3.75rem]/[1.03]">
                Deborah Rose Miller
              </h1>
              <Image
                src="/about/deborah-rose-miller-portrait.webp"
                alt={agent.headshotAlt}
                width={240}
                height={240}
                sizes="120px"
                priority
                className="size-24 shrink-0 rounded-full object-cover sm:size-[7.5rem]"
              />
            </div>
            <p className="mt-8 max-w-2xl text-lg font-medium text-pretty text-ink-soft sm:text-xl/8">{tagline}</p>
          </div>
        </Container>
      </div>

      {/*
       * The biography in two columns from lg, so the page uses its width
       * (Brett, 2026-09-18: too much blank space on the right). Tailwind
       * Plus, Stats sections, "Two-column description": the paragraph grid.
       */}
      <div className="bg-field pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 text-lg/8 text-ink-soft lg:grid-cols-2">
            <div className="space-y-6">
            <p>
              With more than 45 years of business leadership and over a decade of real estate experience, including 25
              years as owner of Rose Financial Group, I offer a rare combination of financial insight, strategic
              negotiation, and personalized service. My clients benefit from thoughtful guidance, data-driven
              decision-making, and a relationship-first approach that extends well beyond the closing table.
            </p>
            <p>
              Known for blending innovative technology with genuine personal service, I utilize professional
              marketing, AI-powered tools, data-driven pricing strategies, and deep local market knowledge to maximize
              exposure for sellers and uncover opportunities for buyers. Whether assisting first-time homebuyers,
              move-up buyers, relocation clients, luxury home sellers, or those searching for acreage, lakefront
              properties, or investment opportunities, I am committed to delivering exceptional results with
              integrity, professionalism, and clear communication.
            </p>
            </div>
            <div className="space-y-6">
            <p>
              A lifelong community leader, I have spent decades investing in the communities I serve. I was a board
              appointee under two Houston mayors, and I&rsquo;m a past school board trustee, past Chair and current
              Director of the Humble ISD Education Foundation. I remain actively involved with Partnership Lake
              Houston (past director), the East Montgomery County Chamber of Commerce (member), and the Magnolia-area
              chamber of commerce, believing that strong communities create stronger real estate markets and better
              opportunities for families.
            </p>
            <p>
              My mission is simple: to serve, connect, and deliver a real estate experience built on trust, knowledge,
              innovation, and heart. Whether you&rsquo;re buying your first home, selling a longtime family property,
              relocating, or expanding your investment portfolio, I am committed to providing the strategy, guidance,
              and advocacy you need to make confident real estate decisions.
            </p>
            </div>
            <h2 className="pt-10 font-display text-3xl text-ink lg:col-span-2">Three careers, one client</h2>
            <p>
              I started out as a banker, and I have spent a career reading loan products. I know which lenders can
              close in ten days to three weeks, which ones will think about a file instead of running it through a
              formula, and which ones handle self-employed borrowers well. I am selective about who I send you to for exactly
              that reason.
            </p>
            <p>
              When a purchase turns on what a city is planning, what an HOA can enforce or how a boundary was drawn,
              I have sat on the side of the table that decided it. Nine years as a trustee taught me how a district
              is run, funded and drawn. I can tell you how attendance boundaries work, where to find the
              state&rsquo;s own report on any campus, and what questions to ask the district directly.
            </p>
          </div>
        </Container>
      </div>

      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base/7 font-semibold text-rose">In numbers</p>
            <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Fifty plus years of showing up</h2>
          </div>
          <div className="mt-16 sm:mt-20">
            <Credentials items={FIGURES} />
          </div>
        </Container>
      </section>

      <section className="bg-field py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base/7 font-semibold text-rose">Community</p>
            <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">Where I have served</h2>
            <p className="mt-6 text-lg/8 text-ink-soft">
              Education foundations are the cause I give my time to. The Magnolia Education Foundation, which I helped
              start in 2001, is in its twenty-fifth year.
            </p>
          </div>
          <Rows rows={SERVICE} />
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base/7 font-semibold text-rose">Credentials</p>
            <h2 className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">License, brokerage and designations</h2>
          </div>
          <Rows rows={CREDENTIALS} />
        </Container>
      </section>

      <ClosingAsk heading="If any of that sounds like the help you need, call me" secondaryHref="/stories/" secondaryLabel="Read the stories first" />
    </>
  )
}
