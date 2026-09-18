import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'
import { areaContent } from '@/content/areas'
import { areas } from '@/lib/site'

/**
 * Tailwind Plus, Marketing, Feature sections, "Simple 3x2 grid" (React,
 * v4.3), from Brett's account 2026-09-17. Five towns, one item each. Each
 * name is a link to its area page; the description is the first sentence
 * of that page. The icon is the same pin on every item, in the rose.
 */
export function AreaGrid({ tone = 'field', className = 'py-24 sm:py-32' }: { tone?: 'field' | 'paper'; className?: string }) {
  return (
    <section aria-labelledby="areas-heading" className={`${tone === 'paper' ? 'bg-paper' : 'bg-field'} ${className}`}>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="areas-heading" className="text-base/7 font-semibold text-rose">
            Where I work
          </h2>
          <p className="mt-2 font-display text-[2.25rem]/[1.1] text-pretty text-ink sm:text-5xl/[1.05]">
            The Lake Houston area and Montgomery County.
          </p>
          <p className="mt-6 text-lg/8 text-ink-soft">
            Five towns across two counties, and I have lived, worked or served in most of them. Each has its own page
            with the neighborhoods I have closed in and the stories from there.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-ink-soft sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {areas.map((a) => (
            <div key={a.slug} className="relative pl-9">
              <dt className="inline font-semibold text-ink">
                <MapPinIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-rose" />
                <Link href={`/areas/${a.slug}/`} className="tap underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  {a.name}
                </Link>
                <span className="font-normal text-ink-faint">, {a.county}.</span>
              </dt>{' '}
              <dd className="inline">{areaContent[a.slug].intro.split('. ')[0]}.</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
