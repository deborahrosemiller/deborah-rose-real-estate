import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, regionSentence } from '@/lib/site'

/**
 * ===================================================================
 *  THE HERO. FOOTAGE, AND THE COPY EITHER ON IT OR UNDER IT.
 * ===================================================================
 *
 * TWO LAYOUTS, ONE SET OF WORDS.
 *
 * From lg the hero is Brett's: full-screen footage with the copy on top
 * of it in white, the two overlay layers and the text shadow measured in
 * docs/hero-contrast.md. Nothing about that changed.
 *
 * Below lg it is not. Deborah, 2026-09-22, on her phone: the footage was
 * "practically black," she could not tell what the photos were, and she
 * asked for the dark overlay off. White type over footage is the only
 * reason the overlay exists, so on phones the type comes off the footage
 * instead: the video plays in a band at the top with NO overlay at all,
 * and the words sit under it on the white field in ink. The photo reads
 * at full brightness and the copy reads at 16:1. Flagged for Brett, whose
 * call the overlay was, on the review of 2026-09-23.
 *
 * WHAT IS STILL HIS, FROM THE LIVE REVIEW OF 2026-09-18:
 *
 *   1. The ambient wash at half its former density, and the band behind
 *      the copy block, both from lg only now.
 *   2. The text shadow (`.hero-copy` in tailwind.css), also from lg only,
 *      since below lg no word is read over footage.
 *   3. "It's too dark. We need it brighter. We really want to see the
 *      background." That is the line this change follows.
 *
 * Measured against the brightest frame of the graded footage (2.67 s,
 * 90th percentile luminance 0.814 linear). See docs/hero-contrast.md.
 *
 * Built from Tailwind Plus, Marketing, Heroes, "Simple centered with
 * background image" (React, v4.3): full-bleed media, a scrim, copy on
 * top. Rethemed: left aligned, Playfair, the rose button.
 *
 * THE COPY. The headline is Deborah's own intro line, sent in her content
 * revision of 2026-09-21. The paragraph is one sentence, cut back by her
 * on 2026-09-22. The eyebrow names the two markets; the five towns run
 * further down the page.
 *
 * The footage is Deborah's own listing video of a one story estate on
 * nearly two acres in Porter, Montgomery County. The title card that
 * showed the street address was cut on 2026-09-18 at Brett's request.
 * Muted, forty seconds, 720 and 1080. Reduced motion shows the poster.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-field lg:bg-night">
      {/*
       * The footage. In the flow at the top on phones, absolute behind
       * everything from lg. `.hero-media` carries both, in tailwind.css.
       */}
      <div className="hero-media relative w-full overflow-hidden bg-night">
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
        {/*
         * Layer 1, the ambient wash, from lg only. Exactly half of what
         * shipped the morning of 2026-09-18 (85/80/30 became 42/40/15
         * bottom to top; 60/30/0 became 30/15/0 left to right).
         */}
        <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-t from-black/42 via-black/40 via-65% to-black/15 lg:block" />
        <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-r from-black/30 via-black/15 via-55% to-transparent lg:block" />
        {/*
         * Layer 2, the band behind the copy, from lg only. The copy sits
         * in the left 53 percent of the frame, so the band is 50 percent
         * black held to the halfway mark and gone by 72 percent; the house
         * on the right sits under the wash alone. 50 is the measured
         * minimum for the paragraph at 4.5:1 on the brightest frame.
         *
         * There is deliberately no phone equivalent any more. Below lg no
         * type is over the footage, so nothing needs darkening.
         */}
        <div aria-hidden="true" className="absolute inset-0 hidden bg-linear-to-r from-black/50 via-black/50 via-50% to-transparent to-72% lg:block" />
      </div>

      <div className="hero-copy relative mx-auto w-full max-w-7xl px-6 py-10 sm:py-12 lg:flex lg:hero-full lg:flex-col lg:justify-center lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-rose lg:text-rose-soft/90">{regionSentence}</p>
          <h1 className="mt-5 font-display text-[2.25rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:text-6xl/[1.03] lg:text-7xl/[1.02] lg:text-cream">
            Real Estate Experience Backed by 36+ Years of Financial Expertise
          </h1>
          <p className="mt-6 max-w-xl text-lg/8 text-ink-soft sm:text-xl/8 lg:text-cream">
            Every deal I handle starts by making sure the numbers work for you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/contact/" className="focus-visible:outline-ink lg:focus-visible:outline-cream">
              Talk with Deborah
            </Button>
            <a
              href={`tel:${business.phoneE164}`}
              className="tap text-sm/6 text-ink-soft hover:text-ink lg:text-cream/80 lg:hover:text-cream figure"
            >
              Call or text {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
