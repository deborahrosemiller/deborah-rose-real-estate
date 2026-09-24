import { Container } from '@/components/Container'
import { testimonials } from '@/content/testimonials'

/**
 * Tailwind Plus, Marketing, Testimonials, "Subtle grid" (React, v4.3),
 * from Brett's account 2026-09-17: the balanced columns and the
 * break-inside rule, which let quotes of very different lengths sit
 * together without a ragged bottom.
 *
 * Stripped: the card. The block sets each quote in a rounded grey panel,
 * and nothing on this site is a panel that is not a control. Each quote
 * takes a hairline above it and is set as type, the way the credentials
 * rows and the figures are. Also stripped: the avatar and the handle,
 * since there are no client photographs and no social accounts to point
 * at, and the name is a first name and a last initial by design.
 *
 * No stars, no scores, no rating of any kind, and no review markup in
 * the schema. That rule predates these quotes and outlives them.
 */
export function TestimonialColumns() {
  return (
    <section aria-label="What clients have written" className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="sm:columns-2 sm:gap-x-8 lg:columns-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="mb-12 break-inside-avoid border-t border-rule pt-6">
              <blockquote className="text-base/7 text-pretty text-ink">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-4 text-sm/6 font-semibold text-ink-soft">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
