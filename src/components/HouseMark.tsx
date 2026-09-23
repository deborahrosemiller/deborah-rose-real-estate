import Image from 'next/image'

/**
 * The motif from her own "I need your listing" graphic, without the ad
 * copy: an open house outline with her rose standing inside it. Deborah,
 * 2026-09-22, sent that graphic as the look she wants behind the second
 * homepage section, "just that graphic treatment as a strong visual
 * backdrop element, not a literal ad."
 *
 * The outline is drawn here rather than lifted from the JPEG, which is
 * 520px, promotional, and carries her phone number burned into it. The
 * rose is the same PNG the logo uses.
 *
 * `tone="dark"` draws the outline in cream for a night panel, the way the
 * reference does. `tone="light"` draws it in ink for a pale band, where it
 * wants a low opacity on the wrapper so it reads as texture.
 */
export function HouseMark({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const stroke = tone === 'dark' ? 'var(--color-cream)' : 'var(--color-ink)'
  return (
    <div aria-hidden="true" className={`pointer-events-none relative ${className}`}>
      <svg viewBox="0 0 220 200" fill="none" className="h-full w-full">
        {/* The roof, then the two walls, open at the foot as the reference is. */}
        <path
          d="M14 92 L110 16 L206 92"
          stroke={stroke}
          strokeWidth="11"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path d="M32 106 L32 186" stroke={stroke} strokeWidth="11" strokeLinecap="square" />
        <path d="M188 106 L188 186" stroke={stroke} strokeWidth="11" strokeLinecap="square" />
      </svg>
      <Image
        src="/brand/deborah-rose-mark.png"
        alt=""
        width={512}
        height={512}
        className="absolute top-[26%] left-1/2 h-[62%] w-auto -translate-x-1/2"
      />
    </div>
  )
}
