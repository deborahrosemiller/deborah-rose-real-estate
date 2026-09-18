import { Container } from '@/components/Container'

export type SplitItem = {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * Tailwind Plus, Marketing, Feature sections, "Centered 2x2 grid" (React,
 * v4.3), from Brett's account 2026-09-17, left aligned. Header on top on
 * the narrow measure, the four items below on the full plate width in two
 * columns. It replaced "With product screenshot on left" on 2026-09-18:
 * Brett rejected the header-beside-content split, and the photo went with
 * it. The icons take the rose, the headings are Playfair.
 */
export function FeatureSplit({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string
  heading: string
  intro: string
  items: SplitItem[]
}) {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-base/7 font-semibold text-rose">{eyebrow}</h2>
          <p className="mt-2 font-display text-[2.25rem]/[1.1] text-pretty text-ink sm:text-5xl/[1.05]">{heading}</p>
          <p className="mt-6 text-lg/8 text-ink-soft">{intro}</p>
        </div>
        <dl className="mt-16 grid max-w-xl grid-cols-1 gap-x-12 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {items.map((item) => (
            <div key={item.name} className="relative pl-12">
              <dt className="font-display text-2xl text-ink">
                <item.icon aria-hidden="true" className="absolute top-1 left-0 size-6 text-rose" />
                {item.name}
              </dt>
              <dd className="mt-3 text-base/7 text-ink-soft">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
