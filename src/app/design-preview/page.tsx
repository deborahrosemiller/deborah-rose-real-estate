import Image from 'next/image'

import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Text'
import { HouseMark } from '@/components/HouseMark'

/**
 * SCRATCH. Three treatments of the second homepage section, side by side,
 * for Deborah and Brett on the review of 2026-09-23. Not linked from
 * anywhere and not meant to ship: delete this file once they choose.
 */
const LEAD =
  'Buying or selling a home is more than a real estate transaction. It’s one of the most important financial decisions you’ll make. Before building my real estate business, I spent more than 36 years in the financial services industry, first in banking and later as the owner of a financial planning firm. That experience gives me a unique perspective in real estate: I understand not only the value of a home, but how the decisions you make today can impact your financial future.'
const MISSION =
  'My mission is simple: to serve, connect, and deliver a real estate experience built on trust, knowledge, innovation, and heart.'
const CLOSE =
  'Whether you’re buying your first home, selling a longtime family property, relocating, or expanding your investment portfolio, I am committed to providing the strategy, guidance, and advocacy you need to make confident real estate decisions.'

function Label({ children }: { children: React.ReactNode }) {
  return <p className="bg-ink px-6 py-2 text-[13px] font-semibold tracking-[0.12em] text-cream uppercase">{children}</p>
}

export default function DesignPreview() {
  return (
    <>
      <Label>Option 1, live now: the rose mark, faint, on the band tone</Label>
      <section className="band relative isolate overflow-hidden py-20 sm:py-28">
        <Image
          src="/brand/deborah-rose-mark.png"
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          className="pointer-events-none absolute -right-10 top-1/2 -z-10 w-44 -translate-y-1/2 opacity-[0.09] sm:-right-6 sm:w-60 lg:right-12 lg:w-80"
        />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>My approach</Eyebrow>
            <p className="mt-6 text-xl/8 text-ink sm:text-2xl/9">{LEAD}</p>
            <p className="mt-10 font-display text-2xl/[1.35] text-ink sm:text-[1.75rem]/[1.35]">{MISSION}</p>
            <p className="mt-6 max-w-2xl text-lg/8 text-ink-soft">{CLOSE}</p>
          </div>
        </Container>
      </section>

      <Label>Option 2: the house and rose, large and faint, behind the copy</Label>
      <section className="band relative isolate overflow-hidden py-20 sm:py-28">
        <HouseMark tone="light" className="absolute -right-16 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 opacity-[0.10] sm:-right-4 sm:h-80 sm:w-80 lg:right-10 lg:h-[26rem] lg:w-[26rem]" />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>My approach</Eyebrow>
            <p className="mt-6 text-xl/8 text-ink sm:text-2xl/9">{LEAD}</p>
            <p className="mt-10 font-display text-2xl/[1.35] text-ink sm:text-[1.75rem]/[1.35]">{MISSION}</p>
            <p className="mt-6 max-w-2xl text-lg/8 text-ink-soft">{CLOSE}</p>
          </div>
        </Container>
      </section>

      <Label>Option 3: the copy on the band, the mission on a night panel with the motif</Label>
      <section className="band py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>My approach</Eyebrow>
            <p className="mt-6 text-xl/8 text-ink sm:text-2xl/9">{LEAD}</p>
            <p className="mt-6 max-w-2xl text-lg/8 text-ink-soft">{CLOSE}</p>
          </div>
        </Container>
      </section>
      <section className="bg-night py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
            <HouseMark tone="dark" className="h-40 w-40 shrink-0 sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-rose-soft/90">My mission</p>
              <p className="mt-4 font-display text-2xl/[1.35] text-cream sm:text-[1.75rem]/[1.35]">{MISSION}</p>
            </div>
          </div>
        </Container>
      </section>
      <div className="h-16 bg-field" />
    </>
  )
}
