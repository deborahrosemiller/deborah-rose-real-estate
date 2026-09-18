import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/**
 * Tailwind Plus, Marketing, CTA sections, "Simple centered" (React,
 * v4.3), from Brett's account 2026-09-17. One per page, last before the
 * footer. Heading centered, the optional sentence under it, the primary
 * and the quiet link beneath. Brett, 2026-09-18: centered, with the call
 * to action under the header, replacing the justified version.
 */
export function ClosingAsk({
  heading = 'Tell me what you are trying to do.',
  children,
  secondaryHref = '/stories/',
  secondaryLabel = 'Read the stories first',
}: {
  heading?: string
  children?: React.ReactNode
  secondaryHref?: string | null
  secondaryLabel?: string
}) {
  return (
    <section aria-label="Next step" className="border-t border-rule bg-field">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2rem]/[1.1] text-balance text-ink sm:text-5xl/[1.05]">{heading}</h2>
          {children ? <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-ink-soft">{children}</p> : null}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-x-8">
            <Button href="/contact/">Contact Deborah</Button>
            {secondaryHref ? (
              <Button variant="quiet" href={secondaryHref}>
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
