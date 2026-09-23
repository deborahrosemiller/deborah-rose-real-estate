import { HeroVideo } from '@/components/HeroVideo'

/**
 * ===================================================================
 *  THE INTERIOR HERO. FULL-BLEED FOOTAGE, A LIGHT WASH, A BAND BEHIND THE TYPE.
 * ===================================================================
 *
 * Brett, 2026-09-18: the homepage footage runs full bleed behind the
 * eyebrow, the H1 and the intro paragraph on Buyers, Sellers, Stories and
 * Areas, with white type. The band's height is the shared token
 * INTRO_BAND below (a secondary page header, not a hero, since the live
 * review). Everything below the band is text on white.
 *
 * THE OVERLAY IS TWO LAYERS, SAME AS THE HOMEPAGE HERO, AND FROM lg ONLY.
 * On the live review of 2026-09-18 Brett cut the overlay by half: "we
 * really want to see the background." Layer 1 is the ambient wash at half
 * its former density. Layer 2 is a narrower band directly behind the copy.
 * A soft text shadow (`.hero-copy`) does the rest. Measured against the
 * brightest frame of the graded footage; see docs/hero-contrast.md. Never
 * put the global darkness back to fix a ratio; tighten the band, then the
 * shadow, then the weight, in that order.
 *
 * BELOW lg THERE IS NO OVERLAY AT ALL. Deborah, 2026-09-22, on her phone:
 * the footage was "practically black." The header now matches the homepage
 * hero on phones: the footage plays in a band at the top at full
 * brightness, and the eyebrow, H1 and paragraph sit under it on the white
 * field in ink. White type over footage is the only thing the overlay was
 * for. Brett's system says an aesthetic change given for one page applies
 * to the others, which is why this followed the homepage the same night;
 * both are for his review on 2026-09-23.
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
 * THE BAND IS A HEADER, NOT A HERO. Brett, live review 2026-09-18: "we need
 * to decrease the amount of vertical height on the background video so
 * that it actually feels like a header on a secondary page... very likely
 * less than half of the size." This supersedes the 16:9 band. The token is
 * a minimum height, shared by Buyers, Sellers, Stories, Areas and About so
 * the five pages match: 25rem from lg (was about 810px at 1440, now 400),
 * 22rem from md, 18rem on phones. The copy is top aligned at a fixed
 * offset so the eyebrow lands at the same height on every page. If a page
 * ever needs more room, tighten the type here; do not grow the band.
 */
export const INTRO_BAND = 'min-h-[18rem] md:min-h-[22rem] lg:min-h-[25rem]'

/**
 * The same band, from lg only. Below lg the interior header is a photo band
 * with the copy under it (Deborah, 2026-09-22: the footage was too dark to
 * read on a phone), so the header's height there is the photo plus the copy
 * and no minimum is wanted. Written out in full because Tailwind reads
 * class names from the source, not from what the code builds at runtime.
 */
export const INTRO_BAND_LG = 'lg:min-h-[25rem]'

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className={`relative isolate overflow-hidden bg-field lg:bg-night ${INTRO_BAND_LG}`}>
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
      </div>
      {/*
       * Layer 1, the ambient wash, at half the density that shipped that
       * morning. Below lg the copy spans the frame, top aligned, so the
       * wash runs bottom to top: 42 at the foot, 41 held to the 70 percent
       * mark, 28 at the top. From lg the copy sits in the left 55 to 70
       * percent, so the wash runs left to right: 41, 40 held to 70 percent,
       * 15 at the far edge.
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/41 via-black/40 via-70% to-black/15 lg:block" />
      {/*
       * Layer 2, the band behind the copy. From lg the copy runs to the 53
       * percent mark at 2054 wide and to 70 percent at 1024, so the band is
       * 55 percent black held to 55 percent and gone by 75. Below lg the copy
       * hangs from the top and can reach the foot, so the band runs top to
       * bottom: clear at the very top, 55 from the 10 percent mark down.
       * 55 is the measured minimum for the intro paragraph at 4.5:1 on the
       * brightest frame with only the horizontal wash under it
       * (docs/hero-contrast.md).
       */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/55 via-black/55 via-55% to-transparent to-75% lg:block" />

      <div className={`mx-auto flex max-w-7xl flex-col justify-start px-6 pt-10 pb-12 lg:px-8 lg:pb-10 ${INTRO_BAND_LG}`}>
        <div className="hero-copy max-w-2xl">
          {eyebrow ? <p className="text-sm/6 font-semibold text-rose lg:text-rose-soft/90">{eyebrow}</p> : null}
          <h1 className="mt-2 font-display text-[2rem]/[1.1] tracking-[-0.01em] text-pretty text-ink sm:text-[2.5rem]/[1.08] lg:text-[2.75rem]/[1.06] lg:text-cream">
            {title}
          </h1>
          {children ? (
            <div className="mt-5 max-w-xl space-y-4 text-base/7 text-pretty text-ink-soft sm:text-lg/8 lg:max-w-2xl lg:text-cream">{children}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
