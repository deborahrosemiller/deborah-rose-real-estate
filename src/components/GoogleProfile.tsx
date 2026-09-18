import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { business, gbp, areaSentence } from '@/lib/site'

/**
 * The Google Business Profile, on the page. Header on top on the narrow
 * measure, then the profile's facts on the full plate width as a
 * definition list with hairlines: hours, phone, email, service area, and
 * the two links Google cares about, the map listing and the review form.
 * The same facts the profile publishes, so the two never disagree. No
 * star rating is shown or marked up.
 */
export function GoogleProfile() {
  const rows = [
    { label: 'Phone', value: <a href={`tel:${business.phoneE164}`} className="tap text-ink figure hover:underline hover:underline-offset-4">{business.phone}</a> },
    { label: 'Email', value: <a href={`mailto:${business.email}`} className="tap text-ink hover:underline hover:underline-offset-4">{business.email}</a> },
    ...gbp.hours.map((h) => ({ label: h.label, value: <span className="figure">{h.display}</span> })),
    { label: 'Service area', value: <span>{areaSentence}</span> },
  ]
  return (
    <section aria-labelledby="gbp-heading" className="bg-field py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-base/7 font-semibold text-rose">Find me on Google</p>
          <h2 id="gbp-heading" className="mt-2 font-display text-[2.25rem]/[1.1] text-ink sm:text-5xl/[1.05]">
            Deborah Rose Real Estate, on the map.
          </h2>
          <p className="mt-6 text-lg/8 text-ink-soft">
            I serve {areaSentence} from the field rather than from a storefront, so my Google profile lists a service
            area instead of an address. Search my name or the business name and you will find the same phone, the same
            hours and the same person.
          </p>
        </div>
        <dl className="mt-12 divide-y divide-rule border-y border-rule text-base/7">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-5">
              <dt className="text-ink-soft sm:col-span-2">{r.label}</dt>
              <dd className="text-ink sm:col-span-3">{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href={gbp.mapsUrl}>Open the Google listing</Button>
          <a href={gbp.reviewUrl} target="_blank" rel="noopener noreferrer" className="tap text-[13px] font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink/25 pb-1 hover:border-ink">
            Leave a review
          </a>
        </div>
      </Container>
    </section>
  )
}
