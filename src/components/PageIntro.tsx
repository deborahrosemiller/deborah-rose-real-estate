import { HeroVideo } from '@/components/HeroVideo'

/**
 * ===================================================================
 *  THE INTERIOR HERO. FULL-BLEED FOOTAGE, A DIRECTIONAL SCRIM, WHITE TYPE.
 * ===================================================================
 *
 * Brett, 2026-09-18: the homepage footage runs full bleed behind the
 * eyebrow, the H1 and the intro paragraph on Buyers, Sellers, Stories and
 * Areas, with a darker overlay and white type for a cinematic effect. The
 * band's height comes from its aspect ratio (INTRO_BAND below), so the four
 * pages match at every width; a headline that would overflow gets
 * shortened, the band never grows. Everything below the band is text on
 * white.
 *
 * THE SCRIM IS DIRECTIONAL, NOT A FLAT WASH. It is densest where the type
 * sits and opens up across the rest of the frame so the footage still
 * reads as footage. The values were set by measurement against the
 * brightest frame of the graded footage (ffmpeg signalstats, 90th
 * percentile luminance), so that white body text clears 4.5:1 and the
 * headline clears 3:1 in the region the type occupies. See the report in
 * docs/ for the numbers. Deepen the overlay to fix a ratio; never shrink
 * the video.
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
       * The scrim. From lg the type occupies the left 70 percent at 1024
       * and the left half at 1440, so the gradient runs left to right: 82
       * percent black at the edge, 80 percent held to the 70 percent mark,
       * then falling to 30 percent at the far edge. Below lg the type spans
       * the frame, vertically centered, so the gradient runs bottom to top:
       * 85 at the foot, 82 held to the 70 percent mark, 55 at the top.
       * Measured 2026-09-18 against the graded footage's brightest frame
       * (90th percentile luminance 0.814): white body text at 80 percent
       * black is 4.93:1 and at 82 percent 5.34:1; the headline clears 3:1
       * at every stop the type touches.
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/82 via-70% to-black/55 lg:hidden" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/82 via-black/80 via-70% to-black/30 lg:block" />

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
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
