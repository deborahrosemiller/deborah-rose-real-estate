import type { Metadata } from 'next'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'
import { SchemaGraph } from '@/components/SchemaGraph'
import { breadcrumb } from '@/lib/schema'
import { business, gbp, areaSentence } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Deborah Rose Miller',
  description: `Call or text ${business.phone}, email ${business.email}, or send a note. Serving ${areaSentence}, Texas.`,
  alternates: { canonical: '/contact/' },
}

/**
 * Tailwind Plus, Marketing, Contact sections, "Side-by-side grid" (React,
 * v4.3), from Brett's account 2026-09-17: the header on top on the narrow
 * measure, then the contact list with its icons beside the form as
 * content. The form lives in ContactForm so it can post. Stripped: the
 * rounded inputs and the indigo focus ring.
 */
export default function ContactPage() {
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])]} />
      <div className="bg-field py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-base/7 font-semibold text-rose">Contact</p>
            <h1 className="mt-2 font-display text-[2.5rem]/[1.05] tracking-[-0.01em] text-pretty text-ink sm:text-6xl/[1.04] lg:text-[3.75rem]/[1.03]">
              Call, text, or send a note.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-ink-soft sm:text-xl/8">
              The fastest way to reach me is my cell. If it is after hours, send a note here or by email and I will
              answer the next morning.
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-field pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-5">
            <dl className="space-y-4 text-base/7 text-ink-soft lg:col-span-2">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-ink-faint" />
                </dt>
                <dd>
                  <a href={`tel:${business.phoneE164}`} className="tap text-ink figure hover:underline hover:underline-offset-4">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-ink-faint" />
                </dt>
                <dd>
                  <a href={`mailto:${business.email}`} className="tap text-ink hover:underline hover:underline-offset-4">
                    {business.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Hours</span>
                  <ClockIcon aria-hidden="true" className="h-7 w-6 text-ink-faint" />
                </dt>
                <dd>
                  {gbp.hours.map((h) => (
                    <span key={h.label} className="block">
                      {h.label}, <span className="figure">{h.display}</span>
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Service area</span>
                  <MapPinIcon aria-hidden="true" className="h-7 w-6 text-ink-faint" />
                </dt>
                <dd>
                  {areaSentence}, Texas.{' '}
                  <a href={gbp.mapsUrl} target="_blank" rel="noopener noreferrer" className="tap text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                    Find me on Google
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Brokerage</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-ink-faint" />
                </dt>
                <dd>
                  {business.legalNote}
                  <br />
                  {business.brokerage.address}
                </dd>
              </div>
            </dl>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
