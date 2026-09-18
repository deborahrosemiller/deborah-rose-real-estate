import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { HeroVideo } from '@/components/HeroVideo'
import { business, areaSentence } from '@/lib/site'

/**
 * ===================================================================
 *  THE HERO. THE VIDEO CARRIES THE SECTION. THE WORDS SIT ON WHITE.
 * ===================================================================
 *
 * The idea comes from yournextstepteam.com's video hero. What is not
 * copied is its mistake: dark type floating over a busy photograph. Here
 * the footage runs full bleed and the headline, one sentence and one
 * action sit on their own white panel at the foot of the frame, so
 * nothing is read over moving pixels.
 *
 * The footage is Deborah's own listing video of a one story estate on
 * nearly two acres in Porter, Montgomery County, cut to forty seconds,
 * muted, at 720 and 1080. The poster is a frame from it. Reduced motion
 * shows the poster only.
 *
 * On phones the video is a 16:10 block and the panel follows it in the
 * flow. From `sm` up the panel overlays the frame.
 */
export function Hero() {
  return (
    <section aria-label="Introduction" className="bg-field">
      <div className="relative sm:h-[calc(100svh-var(--nav-h))] sm:min-h-[600px] sm:max-h-[900px]">
        <div className="relative aspect-[16/10] overflow-hidden bg-paper sm:absolute sm:inset-0 sm:aspect-auto">
          <HeroVideo />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-still absolute inset-0 h-full w-full object-cover"
            src="/hero/porter-estate-poster.webp"
            alt="One story home on a wooded lot in Porter, Montgomery County, Texas"
            width={1600}
            height={843}
          />
        </div>

        <div className="sm:absolute sm:inset-x-0 sm:bottom-0">
          <Container>
            <div className="max-w-xl border border-rule bg-field px-6 py-8 sm:mb-10 sm:px-10 sm:py-10">
              <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-rose">{areaSentence}</p>
              <h1 className="mt-4 font-display text-[2.25rem]/[1.05] tracking-[-0.01em] text-ink sm:text-[2.75rem]/[1.04] lg:text-[3.25rem]/[1.04]">
                A real estate agent who thinks like a financial planner.
              </h1>
              <p className="mt-5 text-lg/7 text-ink-soft">
                I ran a financial planning firm for twenty-five years before I sold a single home. Every deal I handle in the
                Lake Houston area and Montgomery County starts with the numbers in front of you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button href="/contact/">Talk with Deborah</Button>
                <a href={`tel:${business.phoneE164}`} className="tap text-sm text-ink-soft hover:text-ink figure">
                  Call or text {business.phone}
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
