import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, areaSentence } from '@/lib/site'

/**
 * Tailwind Plus, Marketing, Heroes, "Split with image" (React, v4.3), from
 * Brett's account 2026-09-17. The image slot carries Deborah's own listing
 * video of a one story estate on nearly two acres in Porter, cut to forty
 * seconds and muted. The copy column is the component's own: white, a
 * reading measure, one primary action and one quiet link. That is the
 * whole point of choosing this hero over a full-bleed one: the headline
 * and the button sit on their own surface and nothing is read over moving
 * footage.
 *
 * Stripped from the component: the rounded-full announcement pill (a
 * decoration that reads as a control), the indigo button, the arrow glyph.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="relative bg-field">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-16 sm:pb-24 lg:col-span-7 lg:px-0 lg:pt-32 lg:pb-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-rose">{areaSentence}</p>
            <h1 className="mt-6 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:mt-8 sm:text-6xl/[1.03] xl:text-[4.25rem]/[1.02]">
              A real estate agent who thinks like a financial planner.
            </h1>
            <p className="mt-8 text-lg/8 text-pretty text-ink-soft sm:text-xl/8">
              I ran a financial planning firm for twenty-five years before I sold a single home. Every deal I handle in
              the Lake Houston area and Montgomery County starts with the numbers in front of you, and closes in ten
              days to three weeks when the lender is right.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contact/">Talk with Deborah</Button>
              <a href={`tel:${business.phoneE164}`} className="tap text-sm/6 text-ink-soft hover:text-ink figure">
                Call or text {business.phone}
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="relative aspect-3/2 w-full overflow-hidden bg-paper lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
            <HeroVideo />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-still absolute inset-0 h-full w-full object-cover"
              src="/hero/porter-estate-poster.webp"
              alt="Mediterranean style one story home on a wooded lot with a wide lawn, Riverwalk, Porter, Texas"
              width={1600}
              height={843}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
