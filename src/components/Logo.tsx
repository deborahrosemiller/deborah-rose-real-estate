import Image from 'next/image'
import { clsx } from 'clsx'

/**
 * Her real mark. Brett, 2026-09-18: "let's find Deborah's real logo." The
 * only logo on record is the end card of her own listing videos: a red
 * rose with a grey stem and leaf over "DEBORAH ROSE, REAL ESTATE GROUP" in
 * a geometric sans. It was lifted from the 1080p end card, trimmed and
 * keyed to transparency; a vector original from her would replace
 * `public/brand/`.
 *
 * `header`: the rose beside the name set in the site's type, so the mark
 * is hers and the wordmark matches the rest of the page.
 * `full`: the complete stacked logo, for the footer and the schema.
 */
export function Logo({ className, variant = 'header' }: { className?: string; variant?: 'header' | 'full' }) {
  if (variant === 'full') {
    return (
      <Image
        src="/brand/deborah-rose-real-estate-group-logo.png"
        alt="Deborah Rose Real Estate Group"
        width={788}
        height={721}
        sizes="160px"
        className={clsx(className, 'h-auto w-40')}
      />
    )
  }
  return (
    <span className={clsx(className, 'inline-flex items-center gap-x-2.5 whitespace-nowrap')}>
      <Image src="/brand/deborah-rose-mark.png" alt="" width={512} height={512} sizes="40px" priority className="size-10 shrink-0" />
      <span className="inline-flex items-baseline gap-x-2">
        <span className="font-display text-[22px] leading-none tracking-[-0.01em] text-ink">Deborah Rose</span>
        <span className="hidden text-[10px] font-semibold uppercase leading-none tracking-[0.22em] text-rose sm:inline">Real Estate</span>
      </span>
    </span>
  )
}
