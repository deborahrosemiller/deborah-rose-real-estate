import Link from 'next/link'
import { clsx } from 'clsx'

/**
 * Two controls. `primary` is ink on white with the pressed-object shine;
 * `quiet` is a letterspaced text link with a hairline. A second bordered
 * button beside the first makes both ordinary, so there is no outline
 * variant. Without an href this renders a real <button>.
 */
const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-7 py-[17px]',
    'border border-night bg-night text-cream btn-shine',
    'text-[13px] font-semibold tracking-[0.14em] uppercase',
    'hover:bg-ink-hover',
    'disabled:opacity-40',
  ),
  quiet: clsx(
    'tap inline-flex items-center',
    'text-[13px] font-semibold tracking-[0.14em] text-ink uppercase',
    'border-b border-ink/25 pb-1',
    'hover:border-ink',
  ),
  onDark: clsx(
    'inline-flex items-center justify-center px-7 py-[17px]',
    'border border-cream bg-cream text-ink btn-shine',
    'text-[13px] font-semibold tracking-[0.14em] uppercase',
    'hover:bg-paper',
  ),
}

type Props = { variant?: keyof typeof variants; className?: string; children: React.ReactNode } & (
  | { href: string; type?: never; onClick?: never; disabled?: never }
  | { href?: undefined; type?: 'submit' | 'button'; onClick?: () => void; disabled?: boolean }
)

export function Button({ variant = 'primary', className, children, ...props }: Props) {
  const cls = clsx(className, variants[variant])
  if (props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} disabled={props.disabled} className={cls}>
      {children}
    </button>
  )
}
