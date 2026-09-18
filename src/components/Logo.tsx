import { clsx } from 'clsx'

/**
 * The wordmark. Playfair for the name, a small letterspaced sans for the
 * category in the rose. Built as type so it stays crisp at every size and
 * needs no asset. `tone="dark"` is for the footer band.
 */
export function Logo({ className, tone = 'ink' }: { className?: string; tone?: 'ink' | 'dark' }) {
  return (
    <span className={clsx(className, 'inline-flex items-baseline gap-x-2 whitespace-nowrap')}>
      <span className={clsx('font-display text-[22px] leading-none tracking-[-0.01em]', tone === 'dark' ? 'text-cream' : 'text-ink')}>
        Deborah Rose
      </span>
      <span className={clsx('hidden text-[10px] font-semibold uppercase leading-none tracking-[0.22em] sm:inline', tone === 'dark' ? 'text-cream/70' : 'text-rose')}>
        Real Estate
      </span>
    </span>
  )
}
