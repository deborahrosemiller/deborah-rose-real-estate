import { Container } from '@/components/Container'

export type TimelineItem = { label: string; name: string; description: string }

/**
 * Started as Tailwind Plus, Marketing, Stats sections, "Timeline" (React,
 * v4.3). On the live review of 2026-09-18 Brett asked for each step,
 * heading and paragraph together, in a box with rounded edges and a slight
 * shadow, all five the same size. That cuts against the site's rule that
 * nothing unclickable may look clickable; it is his rule and his call, so
 * the shadow is kept faint enough to read as a surface, there is no hover
 * lift and no other affordance. `.card` in tailwind.css is the one card
 * treatment on the site; the radius is `--radius-card`, shared with the
 * story photos so the page has one radius.
 *
 * Equal size means equal height: the grid stretches every cell and each
 * card fills its cell. The paragraphs are written to the same number of
 * lines at desktop width so no card ends on an orphan line.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="bg-field py-16 sm:py-24">
      <Container>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {items.map((item) => (
            <li key={item.name} className="card flex h-full flex-col p-6">
              <p className="text-sm/6 font-semibold text-rose">{item.label}</p>
              <p className="mt-4 font-display text-xl/7 text-ink">{item.name}</p>
              <p className="mt-3 text-base/7 text-ink-soft">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )
}
