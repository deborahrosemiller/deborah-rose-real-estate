import { HeroVideo } from '@/components/HeroVideo'

/**
 * ===================================================================
 *  THE INTERIOR HERO. FULL-BLEED FOOTAGE, A LIGHT WASH, A BAND BEHIND THE TYPE.
 * ===================================================================
 *
 * Brett, 2026-09-18: the homepage footage runs full bleed behind the
 * eyebrow, the H1 and the intro paragraph on Buyers, Sellers, Stories and
 * Areas, with white type. The band's height comes from its aspect ratio
 * (INTRO_BAND below), so the four pages match at every width, and the copy
 * is top aligned at a fixed offset so the eyebrow lands at the same height
 * on every page. A headline that would overflow gets shortened; the band
 * never grows. Everything below the band is text on white.
 *
 * THE OVERLAY IS TWO LAYERS, SAME AS THE HOMEPAGE HERO. On the live review
 * of 2026-09-18 Brett cut the overlay by half: "we really want to see the
 * background." Layer 1 is the ambient wash at half its former density.
 * Layer 2 is a narrower band directly behind the copy. A soft text shadow
 * (`.hero-copy`) does the rest. Measured against the brightest frame of
 * the graded footage; see docs/hero-contrast.md. Never put the global
 * darkness back to fix a ratio; tighten the band, then the shadow, then
 * the weight, in that order.
 *
 * THE EYEBROW NAMES THE TWO MARKETS, THE PARAGRAPH NAMES THE TOWNS.
 * Brett, 2026-09-18: big to specific. Every town still appears on the page.
 *
 * The footage is graded (slight desaturation, lifted blacks, slowed to
 * 0.8x) and the poster is a frame from the same graded file, under the
 * same overlay, so there is no flash when playback takes over. The poster
 * is the LCP candidate; the video loads metadata only until it plays.
 * Reduced motion removes the video and leaves the poster.
 */

/**
 * THE BAND IS 16:9 FROM md, AND 3:4 BELOW IT. Brett, 2026-09-18: a
 * standard 16 by 9 video header with the type over it. The aspect ratio
 * gives the four pages identical heights at any viewport width. At phone
 * widths 16:9 is about 210 pixels tall and cannot hold a headline and a
 * paragraph, so below md the band is 3:4 (500 pixels tall at 375) and the
 * vertical padding drops so the longest intro fits with room. Change the
 * ratio here and nowhere else.
 */
export const INTRO_BAND = 'aspect-[3/4] md:aspect-video'

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className={`relative isolate overflow-hidden bg-night ${INTRO_BAND}`}>
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
       * Layer 1, the ambient wash, at half the density that shipped that
       * morning. Below lg the copy spans the frame, top aligned, so the
       * wash runs bottom to top: 42 at the foot, 41 held to the 70 percent
       * mark, 28 at the top. From lg the copy sits in the left 55 to 70
       * percent, so the wash runs left to right: 41, 40 held to 70 percent,
       * 15 at the far edge.
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/42 via-black/41 via-70% to-black/28 lg:hidden" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/41 via-black/40 via-70% to-black/15 lg:block" />
      {/*
       * Layer 2, the band behind the copy. Below lg the copy hangs from the
       * top, so the band runs top to bottom and is gone by the foot. From lg
       * it runs left to right and is gone by the 70 percent mark.
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/30 via-70% to-transparent lg:hidden" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/30 via-black/30 via-45% to-transparent to-70% lg:block" />

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-[13%] pb-8 sm:pt-[11%] md:pt-[9%] lg:px-8 lg:pt-[9%]">
        <div className="hero-copy max-w-2xl">
          {eyebrow ? <p className="text-base/7 font-semibold text-rose-soft/90">{eyebrow}</p> : null}
          <h1 className="mt-2 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-cream sm:text-6xl/[1.04] lg:text-[3.75rem]/[1.03]">
            {title}
          </h1>
          {children ? <div className="mt-8 space-y-6 text-lg/8 text-pretty text-cream/90 sm:text-xl/8">{children}</div> : null}
        </div>
      </div>
    </div>
  )
}
