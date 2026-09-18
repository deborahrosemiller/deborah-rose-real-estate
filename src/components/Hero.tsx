import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, areaSentence } from '@/lib/site'

/**
 * ===================================================================
 *  THE HERO. THE VIDEO PLAYS BEHIND THE WORDS ON EVERY SCREEN.
 * ===================================================================
 *
 * Brett, 2026-09-18, on the phone review: "I prefer if the video was
 * actually playing behind the text in the hero section, not below." So
 * the split hero is gone. The footage runs full bleed for the whole first
 * screen, phones included, and the headline, one sentence and one action
 * sit on a white panel over it. The panel is what keeps the earlier rule
 * intact: no word is ever read against moving pixels.
 *
 * Built from Tailwind Plus, Marketing, Heroes, "Simple centered with
 * background image" (React, v4.3): full-bleed media, a copy block on top.
 * Rethemed: the copy block is a white panel rather than white type on a
 * dark scrim, left aligned, Playfair, the ink button.
 *
 * The footage is Deborah's own listing video of a one story estate on
 * nearly two acres in Porter, Montgomery County, cut to forty seconds,
 * muted, at 720 and 1080. Reduced motion shows the poster still.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-paper">
      <div className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-end sm:min-h-[640px] lg:max-h-[960px]">
        <div className="absolute inset-0 -z-10">
          <HeroVideo />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-still absolute inset-0 h-full w-full object-cover"
            src="/hero/porter-estate-poster.webp"
            alt="Mediterranean style one story home on a wooded lot with a wide lawn, Riverwalk, Porter, Texas"
            width={1600}
            height={843}
          />
          {/* A light foot gradient so the panel's edge reads against bright footage. */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/25 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pb-4 sm:px-6 sm:pb-10 lg:px-8">
          <div className="max-w-xl border border-rule bg-field/95 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
            <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-rose">{areaSentence}</p>
            <h1 className="mt-4 font-display text-[2.25rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:text-[2.75rem]/[1.04] lg:text-[3.25rem]/[1.04]">
              A real estate agent who thinks like a financial planner.
            </h1>
            <p className="mt-5 text-lg/7 text-ink-soft">
              I ran a financial planning firm for twenty-five years before I sold a single home. Every deal I handle in
              the Lake Houston area and Montgomery County starts with the numbers in front of you, and closes in ten
              days to three weeks when the lender is right.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contact/">Talk with Deborah</Button>
              <a href={`tel:${business.phoneE164}`} className="tap text-sm/6 text-ink-soft hover:text-ink figure">
                Call or text {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
