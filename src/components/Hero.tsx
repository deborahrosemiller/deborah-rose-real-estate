import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, areaSentence } from '@/lib/site'

/**
 * ===================================================================
 *  THE HERO. FULL-SCREEN FOOTAGE, A DARK GRADIENT, WHITE TYPE.
 * ===================================================================
 *
 * Brett, 2026-09-18: "On the desktop version, I want the video playing
 * full screen, and I want the text in front of it. Let's do a darker,
 * semi-transparent, blacker gradient over the video, and then we can put
 * the text in white so it'll have more of a cinematic effect." So the
 * white panel is gone. The footage fills the first screen on every
 * device, a black gradient sits over it, heaviest at the foot and the
 * left where the words are, and the copy is set in white directly on it.
 * The gradient is what keeps the words legible; it is tuned so the
 * lightest frames in the footage still clear 4.5:1 behind the paragraph.
 *
 * Built from Tailwind Plus, Marketing, Heroes, "Simple centered with
 * background image" (React, v4.3): full-bleed media, a scrim, copy on
 * top. Rethemed: left aligned, Playfair, the rose button.
 *
 * THE BAND IS THE WHOLE SCREEN. Brett, 2026-09-18: the video takes up the
 * entire hero on desktop and on phones. `.hero-full` is 100dvh with a
 * 100vh fallback. The header overlays it (see Navbar) so no white band
 * eats the top of the screen. The copy sits at the foot, and the bottom
 * padding is what gives at short laptop heights, never the type.
 *
 * The footage is Deborah's own listing video of a one story estate on
 * nearly two acres in Porter, Montgomery County. The title card that
 * showed the street address was cut on 2026-09-18 at Brett's request.
 * Muted, forty seconds, 720 and 1080. Reduced motion shows the poster.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-night">
      <div className="hero-full relative flex flex-col justify-end">
        <div className="absolute inset-0 -z-20">
          <HeroVideo />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-still absolute inset-0 h-full w-full object-cover"
            src="/hero/porter-estate-poster.webp"
            alt="Mediterranean style one story home on a wooded lot with a wide lawn, Riverwalk, Porter, Texas"
            width={1600}
            height={843}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        {/*
         * The scrim, directional. Bottom to top: 85 percent at the foot where
         * the paragraph and button sit, 70 held to the 45 percent mark where
         * the headline sits, 25 at the top. Left to right: 50 at the edge to
         * clear at the right. A short top band of 55 sits under the overlaid
         * white nav. Measured 2026-09-18 against the brightest graded frame:
         * paragraph 7.1:1, headline 5.7:1 at the combined stops they occupy.
         */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/70 via-45% to-black/25" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-black/50 via-black/15 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/55 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-12 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-rose-soft/90">{areaSentence}</p>
            <h1 className="mt-5 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-cream sm:text-6xl/[1.03] lg:text-7xl/[1.02]">
              A real estate agent who thinks like a financial planner.
            </h1>
            <p className="mt-6 max-w-xl text-lg/8 text-cream/85 sm:text-xl/8">
              I ran a financial planning firm for twenty-five years before I sold a single home. Every deal I handle in
              the Lake Houston area and Montgomery County starts with the numbers in front of you, and closes in ten
              days to three weeks when the lender is right.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contact/" className="focus-visible:outline-cream">
                Talk with Deborah
              </Button>
              <a href={`tel:${business.phoneE164}`} className="tap text-sm/6 text-cream/80 hover:text-cream figure">
                Call or text {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
