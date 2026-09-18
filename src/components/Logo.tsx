import Image from 'next/image'
import { clsx } from 'clsx'

/**
 * Her real logo. Deborah emailed `LOGO BLACK.png` on 2026-09-18 during the
 * live review: the rose with a grey stem and leaf over "DEBORAH ROSE" and
 * a rule with "REAL ESTATE GROUP", black type, on an opaque white square
 * at 6400 by 6400. The white was keyed to transparency and the file was
 * trimmed and split into the three assets in `public/brand/`:
 *
 *   deborah-rose-mark.png       the rose alone, 512 square (also the icon)
 *   deborah-rose-wordmark.png   the type block with its rule, 1600 by 299
 *   deborah-rose-real-estate-group-logo.png   the whole lockup, 1200 wide
 *
 * `header`: the rose beside the wordmark, both hers, in a row that fits
 * the tightened bar (56px on phones, 64px from sm). The stacked lockup at
 * that height would be illegible, so the header is her logo re-set on one
 * line, not re-drawn.
 * `full`: the complete stacked logo, for the footer and the schema.
 *
 * The type is black, so this only sits on light surfaces. A reversed
 * version is on the open items list before it can go on anything dark.
 */
export function Logo({ className, variant = 'header' }: { className?: string; variant?: 'header' | 'full' }) {
  if (variant === 'full') {
    return (
      <Image
        src="/brand/deborah-rose-real-estate-group-logo.png"
        alt="Deborah Rose Real Estate Group"
        width={1200}
        height={1087}
        sizes="160px"
        className={clsx(className, 'h-auto w-40')}
      />
    )
  }
  return (
    <span className={clsx(className, 'inline-flex items-center gap-x-2 whitespace-nowrap sm:gap-x-2.5')}>
      <Image src="/brand/deborah-rose-mark.png" alt="" width={512} height={512} sizes="40px" priority className="size-8 shrink-0 sm:size-10" />
      {/* 22px tall on phones so the row clears the Contact button at 375; 30px from sm. */}
      <Image
        src="/brand/deborah-rose-wordmark.png"
        alt="Deborah Rose Real Estate Group"
        width={1600}
        height={299}
        sizes="(min-width: 640px) 160px, 118px"
        priority
        className="h-[22px] w-auto sm:h-[30px]"
      />
    </span>
  )
}
