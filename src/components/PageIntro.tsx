import { Container } from '@/components/Container'
import { Heading, Eyebrow } from '@/components/Text'

/**
 * Interior pages open with a title in the white below the header. No
 * band, no photo behind the title. The intro paragraph, when there is one,
 * holds a reading measure under the heading.
 */
export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="pt-14 pb-10 sm:pt-20 sm:pb-14">
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading as="h1" className={eyebrow ? 'mt-4 max-w-4xl' : 'max-w-4xl'}>
          {title}
        </Heading>
        {children ? <div className="mt-8 max-w-2xl space-y-6 text-lg/8 text-ink-soft">{children}</div> : null}
      </Container>
    </section>
  )
}
