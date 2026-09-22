import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { EqualHousing } from '@/components/EqualHousing'
import { agent, areas, business, gbp, legal, profiles } from '@/lib/site'

/**
 * Tailwind Plus, Marketing, Footers, "4-column with company mission"
 * (React, v4.3), from Brett's account 2026-09-17, carrying the Texas
 * compliance block modeled on yournextstepteam.com, another eXp agent's
 * live footer (Brett, 2026-09-17).
 *
 * Top: wordmark, the service area in prose, social. Three link columns:
 * Working with Deborah, Learn more, Get in touch. Then a trust row set as
 * type with hairlines (never badges), and the legal block: agent
 * identification with license, brokerage identification, the TREC IABS
 * and CPN links, the REALTOR mark sentence, the opinions line, Equal
 * Housing. The wording of the eXp lines follows an observed example and
 * is flagged for confirmation in docs/open-items.
 */
const social = [
  {
    name: 'Facebook',
    href: profiles.facebook,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: profiles.linkedin,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Google Business Profile',
    href: gbp.mapsUrl,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    name: 'HAR.com profile',
    href: profiles.har,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3L12 3z" />
      </svg>
    ),
  },
]

const columns = [
  {
    title: 'Working with Deborah',
    items: [
      { title: 'Buying a home', href: '/buyers/' },
      { title: 'Selling a home', href: '/sellers/' },
      { title: 'Stories from the field', href: '/stories/' },
      { title: 'Areas served', href: '/areas/' },
    ],
  },
  {
    title: 'Learn more',
    items: [
      { title: 'About Deborah', href: '/about/' },
      { title: 'Questions people ask', href: '/#questions' },
      ...areas.map((a) => ({ title: a.name, href: `/areas/${a.slug}/` })),
    ],
  },
]

const columnHeading = 'text-sm/6 font-semibold text-ink'
const columnLink = 'tap text-sm/6 text-ink-soft hover:text-ink'
const legalLink = 'tap underline decoration-ink/25 underline-offset-4 hover:decoration-ink'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo variant="full" />
            <p className="text-sm/6 text-balance text-ink-soft">{legal.footerIntro}</p>
            <div className="flex gap-x-6">
              {social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink">
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {columns.map((column) => (
                <div key={column.title} className="first:mt-0 md:mt-0 [&:not(:first-child)]:mt-10 md:[&:not(:first-child)]:mt-0">
                  <h3 className={columnHeading}>{column.title}</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {column.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={columnLink}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className={columnHeading}>Get in touch</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href={`tel:${business.phoneE164}`} className={`${columnLink} figure`}>
                      Call or text {business.phone}
                    </a>
                  </li>
                  <li>
                    {/* break-all: the address is one long word and at 375px it made every page scroll sideways. */}
                    <a href={`mailto:${business.email}`} className={`${columnLink} break-all`}>
                      {business.email}
                    </a>
                  </li>
                  <li>
                    <Link href="/contact/" className={columnLink}>
                      Send a note
                    </Link>
                  </li>
                  {business.mailingAddress ? (
                    <li className="text-sm/6 text-ink-soft">
                      <span className="block">{agent.name}</span>
                      <span className="block whitespace-pre-line">{business.mailingAddress}</span>
                    </li>
                  ) : null}
                  <li>
                    <a href={profiles.harListings} target="_blank" rel="noopener noreferrer" className={columnLink}>
                      Current listings on HAR
                    </a>
                  </li>
                  <li>
                    <a href={gbp.reviewUrl} target="_blank" rel="noopener noreferrer" className={columnLink}>
                      Leave a Google review
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className={columnHeading}>Hours</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm/6 text-ink-soft">
                  {gbp.hours.map((h) => (
                    <li key={h.label}>
                      {h.label}
                      <span className="block figure">{h.display}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The trust row. Set as type with hairlines, never as badges. */}
        <div className="mt-16 border-t border-rule pt-8 sm:mt-20 lg:mt-24">
          <ul role="list" className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-ink-soft">
            <li>{legal.brokeredBy}</li>
            <li>REALTOR&reg;</li>
            <li>{legal.membership}</li>
            <li>Equal Housing Opportunity</li>
          </ul>
        </div>

        {/* The legal block. */}
        <div className="mt-8 border-t border-rule pt-8">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-start lg:justify-between lg:gap-x-12">
            <div className="max-w-3xl space-y-4 text-sm/6 text-ink-soft">
              <p className="text-ink">
                {agent.name}, REALTOR&reg;, RENE. Texas real estate license #{business.license}.
              </p>
              <p>
                {agent.name} is a licensed real estate broker in the State of Texas, affiliated with eXp Realty LLC.{' '}
                {legal.brokerageSentence} {legal.membership}.
                Equal Housing Opportunity.
              </p>
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-[13px]/6">
                {legal.iabsUrl ? (
                  <a href={legal.iabsUrl} target="_blank" rel="noopener noreferrer" className={legalLink}>
                    Texas Real Estate Commission Information About Brokerage Services
                  </a>
                ) : null}
                <a href={legal.trecConsumerProtectionNotice} target="_blank" rel="noopener noreferrer" className={legalLink}>
                  Texas Real Estate Commission Consumer Protection Notice
                </a>
              </p>
              <p>{legal.opinions}</p>
              <p>{legal.realtorMark}</p>
              <p>{legal.serviceAreaSentence}</p>
              <p>
                {year} {business.name}. All rights reserved.
              </p>
            </div>
            <EqualHousing />
          </div>
        </div>
      </div>
    </footer>
  )
}
