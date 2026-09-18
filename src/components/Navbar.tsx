'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { nav, business } from '@/lib/site'

const linkClass = 'nav-link text-sm tracking-[0.04em] uppercase text-ink-soft hover:text-ink'
const actionClass =
  'btn-shine inline-flex min-h-11 items-center justify-center border border-night bg-night px-4 text-[12px] font-semibold tracking-[0.16em] text-cream uppercase hover:bg-ink-hover sm:px-6'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = () => setOpen(false)

  const current = (href: string) => (pathname === href || pathname.startsWith(href) ? 'page' : undefined)

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-field">
      <Container>
        <nav aria-label="Main" className="flex h-[var(--nav-h)] items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex min-h-11 items-center hover:opacity-70">
            <span className="sr-only">{business.name}, home</span>
            <Logo />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-x-10 lg:justify-self-center">
            {nav.header.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass} aria-current={current(item.href)}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-4 lg:justify-self-end">
            <a href={`tel:${business.phoneE164}`} className="tap hidden text-sm text-ink-soft hover:text-ink xl:inline-flex figure">
              {business.phone}
            </a>
            <Link href={nav.action.href} className={actionClass}>
              {nav.action.title}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="-mr-2.5 inline-flex size-11 items-center justify-center text-ink lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>
      </Container>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <DialogPanel transition className="drawer fixed inset-y-0 right-0 z-50 w-full overflow-y-auto p-6 sm:max-w-sm sm:border-l sm:border-rule">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={close} className="flex min-h-11 items-center">
              <span className="sr-only">{business.name}, home</span>
              <Logo />
            </Link>
            <button type="button" onClick={close} className="inline-flex size-11 items-center justify-center text-ink">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 space-y-1">
            {nav.header.map((item) => (
              <Link key={item.href} href={item.href} onClick={close} className="block py-3 font-display text-2xl text-ink">
                {item.title}
              </Link>
            ))}
            <Link href={nav.action.href} onClick={close} className={`${actionClass} mt-6 w-full`}>
              {nav.action.title}
            </Link>
            <a href={`tel:${business.phoneE164}`} className="mt-6 block text-base text-ink-soft figure">
              Call or text {business.phone}
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
