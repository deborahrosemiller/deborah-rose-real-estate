import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, areaSentence, regionSentence } from '@/lib/site'

/**
 * ===================================================================
 *  THE HERO. FULL-SCREEN FOOTAGE, A LIGHT WASH, A BAND BEHIND THE TYPE.
 * ===================================================================
 *
 * Brett, 2026-09-18: full-screen footage with the text in front of it,
 * white type, a dark gradient for a cinematic effect. Later the same day,
 * on the live review with Deborah: "it's too dark. We need it brighter.
 * Decrease the black overlay by 50 percent. We just want to make sure we
 * can read the words, but we really want to see the background."
 *
 * So the overlay is built in two layers now:
 *
 *   1. The ambient wash, at half its former density, across the whole
 *      frame. This is what lets the footage read as footage.
 *   2. A narrower band directly behind the copy block. It carries the
 *      density the type needs without dimming the rest of the frame.
 *
 * Plus a soft text shadow on the headline and paragraph (`.hero-copy` in
 * tailwind.css), which lifts measured contrast at the glyph edge and is
 * close to invisible. The order of remedies was set on the review: tighten
 * the gradient, then shadow, then weight, and only then more overlay.
 * Never put the global darkness back.
 *
 * Measured against the brightest frame of the graded footage (2.67 s,
 * 90th percentile luminance 0.814 linear). See docs/hero-contrast.md for
 * the numbers.
 *
 * Built from Tailwind Plus, Marketing, Heroes, "Simple centered with
 * background image" (React, v4.3): full-bleed media, a scrim, copy on
 * top. Rethemed: left aligned, Playfair, the rose button.
 *
 * THE BAND IS THE WHOLE SCREEN BELOW THE HEADER. `.hero-full` is 100dvh
 * minus the header with a 100vh fallback. The header stays white and in
 * the flow.
 *
 * THE COPY. Deborah on the live review: "That's because I WAS a financial
 * planner." The headline states the fact, not a simile. The eyebrow names
 * the two markets, the paragraph names the five towns (big to specific,
 * Brett). Closing speed is a possibility, never a promise: "can include."
 *
 * The footage is Deborah's own listing video of a one story estate on
 * nearly two acres in Porter, Montgomery County. The title card that
 * showed the street address was cut on 2026-09-18 at Brett's request.
 * Muted, forty seconds, 720 and 1080. Reduced motion shows the poster.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-night">
      <div className="hero-full relative flex flex-col justify-center">
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
         * Layer 1, the ambient wash. Exactly half of what shipped that
         * morning (85/80/30 became 42/40/15 bottom to top; 60/30/0 became
         * 30/15/0 left to right).
         */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/42 via-black/40 via-65% to-black/15" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-black/30 via-black/15 via-55% to-transparent" />
        {/*
         * Layer 2, the band behind the copy. From lg the copy sits in the
         * left 53 percent of the frame, so the band is 50 percent black held
         * to the halfway mark and gone by 72 percent; the house on the right
         * sits under the wash alone. Below lg the copy spans the frame from
         * about 15 percent down, so the band runs top to bottom: clear at
         * the very top, 50 percent from the 12 percent mark to the foot.
         * 50 is the measured minimum for the paragraph at 4.5:1 on the
         * brightest frame (docs/hero-contrast.md); 30 left it at 3.5:1.
         */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/50 via-black/50 via-50% to-transparent to-72% lg:block" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-black/15 via-black/50 via-12% to-black/50 lg:hidden" />

        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
          <div className="hero-copy max-w-2xl">
            <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-rose-soft/90">{regionSentence}</p>
            <h1 className="mt-5 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-cream sm:text-6xl/[1.03] lg:text-7xl/[1.02]">
              I spent thirty-six years in finance. Now I sell real estate.
            </h1>
            <p className="mt-6 max-w-xl text-lg/8 text-cream sm:text-xl/8">
              I was a banker first and a financial planner after that, and I sold my firm in 2008 before I ever sold a
              house. Every deal I handle in {areaSentence} starts by making sure the numbers work for you. And part of
              that can include fast closes.
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
