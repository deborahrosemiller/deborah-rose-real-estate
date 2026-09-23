/**
 * Tailwind Plus, Marketing, Stats sections, "Two-column description"
 * (React, v4.3), from Brett's account 2026-09-17. Only the <dl> from it:
 * a hairline on the left of each figure, set as type. No card, no pill,
 * nothing that reads as a control. Brett's rule for any stats block.
 *
 * Each column is its own two-row grid rather than the block's
 * `flex flex-col-reverse`. Brett, 2026-09-23: the four figures sat at
 * different heights. In a column-reverse flex the items pack from the
 * bottom, so the figure floats on top of however many lines its label
 * runs, and the labels here run one, two and three lines. Placing the
 * figure in row one and the label in row two tops the figures at the
 * same line at every width, and the <dt> still precedes the <dd> in the
 * markup, which a definition list requires.
 */
export function Credentials({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4">
      {items.map((stat) => (
        <div key={stat.label} className="grid grid-rows-[auto_1fr] gap-y-3 border-l border-rule pl-6">
          <dt className="row-start-2 text-base/7 text-ink-soft">{stat.label}</dt>
          <dd className="row-start-1 font-display text-3xl text-ink figure">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
