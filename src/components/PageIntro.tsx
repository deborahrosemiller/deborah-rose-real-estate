import { Container } from '@/components/Container'
import { HeroVideo } from '@/components/HeroVideo'

/**
 * ===================================================================
 *  THE INTERIOR HERO. TYPE ON WHITE, THE VIDEO BESIDE IT, BOUNDED.
 * ===================================================================
 *
 * Brett, 2026-09-18: the interior pages get the homepage footage, and
 * only across the eyebrow, the H1 and the intro paragraph. The sections
 * below stay text on white. This is that band.
 *
 * WHY SIDE BY SIDE AND NOT BEHIND THE TYPE. The footage was measured
 * frame by frame (ffmpeg signalstats). Its brightest frames carry sky and
 * white cabinetry at a 90th percentile luminance of 0.93, so white body
 * text needs a black scrim above 80 percent to clear 4.5:1 at the pixel
 * level, and at 80 percent the video no longer reads as video. Type on
 * white beside the footage clears every ratio with nothing to tune: ink
 * on white is 18.9:1 and the paragraph 9.7:1.
 *
 * Built from Tailwind Plus, Marketing, Heroes, "Split with image"
 * (React, v4.3): copy column, media column that fills the band's height
 * from lg. Below lg the footage is a 16:9 block under the copy, still
 * inside the band. The poster still sits under the video at all times
 * and is the LCP candidate; the video loads metadata only until it plays.
 */
export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="relative bg-field">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:col-span-7 lg:px-0 lg:py-28 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {eyebrow ? <p className="text-base/7 font-semibold text-rose">{eyebrow}</p> : null}
            <h1 className="mt-2 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:text-6xl/[1.04] lg:text-[3.75rem]/[1.03]">
              {title}
            </h1>
            {children ? <div className="mt-8 space-y-6 text-lg font-medium text-pretty text-ink-soft sm:text-xl/8">{children}</div> : null}
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 xl:mr-0">
          <div className="relative aspect-video w-full overflow-hidden bg-paper lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
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
        </div>
      </div>
    </div>
  )
}
