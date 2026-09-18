import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Text'

/** One per interior page, last before the footer. A hairline on top. */
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
    <section aria-label="Next step" className="border-t border-rule py-20 lg:py-28">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-x-16">
          <div className="max-w-2xl">
            <Heading>{heading}</Heading>
            {children ? <p className="mt-6 text-lg/8 text-ink-soft">{children}</p> : null}
          </div>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-x-10 lg:mt-0 lg:shrink-0">
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
