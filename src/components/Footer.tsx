import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { EqualHousing } from '@/components/EqualHousing'
import { areas, business, gbp, legal, nav } from '@/lib/site'

const heading = 'text-sm font-medium text-ink'
const link = 'tap inline-block text-sm/6 text-ink-soft hover:text-ink'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-paper text-ink">
      <Container className="pt-10 pb-8 sm:pt-14">
        <div className="bg-night px-6 py-12 text-center text-cream sm:px-10 sm:py-14">
          <h2 className="font-display text-3xl sm:text-4xl">Tell me about your move.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base/7 text-cream/75">
            Buying, selling, or both at once. A first conversation costs nothing and comes with no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Button variant="onDark" href="/contact/">
              Contact Deborah
            </Button>
            <a href={`tel:${business.phoneE164}`} className="tap text-sm text-cream/80 hover:text-cream figure">
              Call or text {business.phone}
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm/6 text-ink-soft">
              Residential real estate in the Lake Houston area and Montgomery County, Texas.
            </p>
          </div>
          <nav aria-label="Pages">
            <h3 className={heading}>Pages</h3>
            <ul role="list" className="mt-4 space-y-3">
              {[...nav.header, nav.action].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Areas">
            <h3 className={heading}>Areas</h3>
            <ul role="list" className="mt-4 space-y-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}/`} className={link}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2">
            <h3 className={heading}>Contact</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a href={`tel:${business.phoneE164}`} className={`${link} figure`}>
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className={link}>
                  {business.email}
                </a>
              </li>
              <li>
                <a href={gbp.mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  Find Deborah on Google
                </a>
              </li>
              <li>
                <a href={gbp.reviewUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  Leave a Google review
                </a>
              </li>
            </ul>
            <dl className="mt-6 space-y-1 text-sm/6 text-ink-soft">
              {gbp.hours.map((h) => (
                <div key={h.label} className="flex gap-x-3">
                  <dt className="w-32 shrink-0">{h.label}</dt>
                  <dd>{h.display}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 border-t border-rule pt-8 text-sm/6 text-ink-soft">
          <div className="flex flex-col gap-y-4 sm:flex-row sm:items-start sm:justify-between sm:gap-x-8">
            <div className="max-w-2xl space-y-2">
              <p>
                {year} {business.name}. Deborah Rose Miller, Texas Real Estate Commission license {business.license}.{' '}
                {business.legalNote}, {business.brokerage.address}.
              </p>
              <p>
                <a href={legal.trecConsumerProtectionNotice} target="_blank" rel="noopener noreferrer" className="tap underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  Texas Real Estate Commission Consumer Protection Notice
                </a>
                {legal.iabsUrl ? (
                  <>
                    {' '}
                    <span aria-hidden="true">&middot;</span>{' '}
                    <a href={legal.iabsUrl} target="_blank" rel="noopener noreferrer" className="tap underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                      Information About Brokerage Services
                    </a>
                  </>
                ) : null}
              </p>
            </div>
            <EqualHousing />
          </div>
        </div>
      </Container>
    </footer>
  )
}
