import type { Metadata } from 'next'

import { PageIntro } from '@/components/PageIntro'
import { TestimonialColumns } from '@/components/TestimonialColumns'
import { ClosingAsk } from '@/components/ClosingAsk'
import { SchemaGraph } from '@/components/SchemaGraph'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumb } from '@/lib/schema'
import { regionSentence } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'What clients have written',
  description:
    'Clients of Deborah Rose Miller, writing through the Houston Association of REALTORS after their sale or purchase closed, across the Lake Houston area and Montgomery County.',
  path: '/testimonials/',
})

/**
 * Their words, on their own page. Brett and Deborah sent the entries on
 * 2026-09-24 from her Client Experience Rating on HAR.
 *
 * Why a page and not a band on About: every section on this site
 * alternates between the white tone and the paper tone, and the section
 * before ClosingAsk is always paper. About runs field, paper, field,
 * paper, white from top to bottom, so one more section anywhere in it
 * inverts the rest of the page. Here the sequence is the header band,
 * one paper section and the white ask, which is the same shape Areas
 * and Stories already have.
 *
 * What is deliberately absent: stars, a score, a count of reviews, and
 * any aggregateRating or review markup in the schema. None of that has
 * ever been on this site and none of it arrived with these.
 */
export default function TestimonialsPage() {
  return (
    <>
      <SchemaGraph
        nodes={[breadcrumb([{ name: 'Home', path: '/' }, { name: 'Testimonials', path: '/testimonials/' }])]}
      />
      <PageIntro eyebrow={regionSentence} title="What clients have written">
        <p>
          Each of these was written by a client through the Houston Association of REALTORS once their sale or purchase
          had closed. Every transaction has a story, and these are the parts only the client can tell.
        </p>
      </PageIntro>

      <TestimonialColumns />

      <ClosingAsk heading="Tell me what you are trying to do" secondaryHref="/stories/" secondaryLabel="Read the stories">
        Buying, selling, or both at once. The first call is twenty minutes and costs nothing.
      </ClosingAsk>
    </>
  )
}
