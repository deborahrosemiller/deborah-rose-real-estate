import { clsx } from 'clsx'

/**
 * An ordered process. The numbers are real: each step happens after the
 * one before it, which is the only reason they are numbered.
 */
export function Steps({ items, className }: { items: { name: string; body: string }[]; className?: string }) {
  return (
    <ol className={clsx(className, 'divide-y divide-rule border-y border-rule')}>
      {items.map((item, i) => (
        <li key={item.name} className="grid gap-x-8 gap-y-3 py-8 sm:grid-cols-12">
          <span className="text-sm text-ink-faint figure sm:col-span-1">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="font-display text-2xl text-ink sm:col-span-4">{item.name}</h3>
          <p className="text-base/7 text-ink-soft sm:col-span-7">{item.body}</p>
        </li>
      ))}
    </ol>
  )
}
