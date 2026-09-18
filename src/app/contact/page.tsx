import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactForm } from '@/components/ContactForm'
import { SchemaGraph } from '@/components/SchemaGraph'
import { breadcrumb } from '@/lib/schema'
import { business, gbp, areaSentence } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Deborah Rose Miller',
  description: `Call or text ${business.phone}, email ${business.email}, or send a note. Serving ${areaSentence}, Texas.`,
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <SchemaGraph nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])]} />
      <PageIntro eyebrow="Contact" title="Call, text, or send a note.">
        <p>
          The fastest way to reach me is my cell. If it is after hours, send a note here or by email and I will answer
          the next morning.
        </p>
      </PageIntro>
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-4">
              <dl className="divide-y divide-rule border-y border-rule text-base/7">
                <div className="py-4">
                  <dt className="text-sm text-ink-soft">Phone</dt>
                  <dd>
                    <a href={`tel:${business.phoneE164}`} className="tap text-xl text-ink figure hover:underline hover:underline-offset-4">
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm text-ink-soft">Email</dt>
                  <dd>
                    <a href={`mailto:${business.email}`} className="tap text-ink hover:underline hover:underline-offset-4">
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm text-ink-soft">Hours</dt>
                  <dd className="text-ink">
                    {gbp.hours.map((h) => (
                      <span key={h.label} className="block">
                        {h.label}, {h.display}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm text-ink-soft">Service area</dt>
                  <dd className="text-ink">{areaSentence}, Texas</dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm text-ink-soft">Brokerage</dt>
                  <dd className="text-ink">
                    {business.legalNote}
                    <span className="block text-sm text-ink-soft">{business.brokerage.address}</span>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
