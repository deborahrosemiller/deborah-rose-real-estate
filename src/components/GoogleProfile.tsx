import { Container } from '@/components/Container'
import { Heading, Eyebrow } from '@/components/Text'
import { Button } from '@/components/Button'
import { business, gbp, areaSentence } from '@/lib/site'

/**
 * The Google Business Profile, on the page. Hours, phone, service area
 * and the two links Google cares about: the map listing and the review
 * form. The same facts the profile publishes, so the two never disagree.
 * No star rating is shown or marked up: a rating is only shown when it is
 * real and current, and it is read from the profile, never typed here.
 */
export function GoogleProfile() {
  return (
    <section aria-labelledby="gbp-heading" className="band py-20 lg:py-28">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          <div className="max-w-xl">
            <Eyebrow>Find me on Google</Eyebrow>
            <Heading id="gbp-heading" className="mt-6">
              Deborah Rose Real Estate, on the map.
            </Heading>
            <p className="mt-6 text-lg/8 text-ink-soft">
              I serve {areaSentence} from the field rather than from a storefront, so my Google profile lists a service
              area instead of an address. Search my name or the business name and you will find the same phone, the same
              hours and the same person.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={gbp.mapsUrl}>Open the Google listing</Button>
              <a href={gbp.reviewUrl} target="_blank" rel="noopener noreferrer" className="tap text-[13px] font-semibold tracking-[0.14em] uppercase text-ink border-b border-ink/25 pb-1 hover:border-ink">
                Leave a review
              </a>
            </div>
          </div>
          <div className="panel mt-12 p-8 sm:p-10 lg:mt-0">
            <dl className="divide-y divide-rule text-base/7">
              <div className="flex justify-between gap-x-6 py-4">
                <dt className="text-ink-soft">Phone</dt>
                <dd>
                  <a href={`tel:${business.phoneE164}`} className="tap text-ink figure hover:underline hover:underline-offset-4">
                    {business.phone}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-x-6 py-4">
                <dt className="text-ink-soft">Email</dt>
                <dd className="text-right">
                  <a href={`mailto:${business.email}`} className="tap text-ink hover:underline hover:underline-offset-4">
                    {business.email}
                  </a>
                </dd>
              </div>
              {gbp.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-x-6 py-4">
                  <dt className="text-ink-soft">{h.label}</dt>
                  <dd className="text-ink figure">{h.display}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-x-6 py-4">
                <dt className="text-ink-soft">Service area</dt>
                <dd className="max-w-[16rem] text-right text-ink">{areaSentence}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
