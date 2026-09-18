import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Heading, Eyebrow } from '@/components/Text'
import { Button } from '@/components/Button'
import { StoryCard } from '@/components/StoryCard'
import { GoogleProfile } from '@/components/GoogleProfile'
import { FAQList } from '@/components/FAQList'
import { SchemaGraph } from '@/components/SchemaGraph'
import { faqNode } from '@/lib/schema'
import { homeFaq } from '@/content/faq'
import { areaContent } from '@/content/areas'
import { agent, areas } from '@/lib/site'
import { getStories } from '@/lib/stories'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const HOW = [
  {
    name: 'The numbers first.',
    body: 'I owned Rose Financial Group for twenty-five years before I held a real estate license. I read loan products the way other people read listings. I know which lenders close in ten days to three weeks and which ones understand a self-employed borrower, and that conversation happens before we look at a single house.',
  },
  {
    name: 'City hall, from the inside.',
    body: 'I spent two years as Economic Development Coordinator for the City of Magnolia and helped write its first comprehensive plan. I served nine years on the Magnolia ISD school board, two of them as president. When you ask about zoning, an HOA or a school district, the answer comes from someone who has sat on the other side of that table.',
  },
  {
    name: 'Built through the community.',
    body: 'I built my financial planning firm through the Chamber of Commerce and Rotary, and I built this business the same way. Most of the people I work with arrive through someone I already know. That is how I intend to keep it.',
  },
]

export default async function Home() {
  const stories = await getStories()
  const featured = stories.filter((s) => s.featured).slice(0, 3)
  const shown = featured.length === 3 ? featured : stories.slice(0, 3)

  return (
    <>
      <SchemaGraph nodes={[faqNode(homeFaq)]} />
      <Hero />

      <section id="how" className="py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>How I work</Eyebrow>
            <Heading className="mt-6">What twenty-five years of financial planning taught me about buying a house.</Heading>
          </div>
          <ul role="list" className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            {HOW.map((item) => (
              <li key={item.name} className="panel flex h-full flex-col p-8 sm:p-10">
                <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                <p className="mt-4 text-base/7 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="stories-heading" className="border-t border-rule py-20 lg:py-28">
        <Container>
          <div className="sm:flex sm:items-end sm:justify-between sm:gap-x-8">
            <div className="max-w-2xl">
              <Eyebrow>Stories from the field</Eyebrow>
              <Heading id="stories-heading" className="mt-6">
                Real deals in real neighborhoods.
              </Heading>
              <p className="mt-6 text-lg/8 text-ink-soft">
                Each one is a transaction I handled, told without the client&rsquo;s name or the street address, with the
                numbers that mattered and what I would do again.
              </p>
            </div>
            <p className="mt-8 sm:mt-0 sm:shrink-0">
              <Button variant="quiet" href="/stories/">
                All stories
              </Button>
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="areas-heading" className="band py-20 lg:py-28">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-5">
              <Eyebrow>Where I work</Eyebrow>
              <Heading id="areas-heading" className="mt-6">
                The Lake Houston area and Montgomery County.
              </Heading>
              <p className="mt-6 text-lg/8 text-ink-soft">
                Six towns, two counties, one person who has lived, worked and served in most of them. Each area has its
                own page with the neighborhoods I have closed in and the stories from there.
              </p>
            </div>
            <ul role="list" className="mt-12 divide-y divide-rule border-y border-rule lg:col-span-7 lg:mt-0">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}/`} className="group flex items-baseline justify-between gap-x-6 py-5">
                    <span>
                      <span className="font-display text-2xl text-ink group-hover:underline group-hover:decoration-ink/30 group-hover:underline-offset-4">
                        {a.name}
                      </span>
                      <span className="ml-3 text-sm text-ink-faint">{a.county}</span>
                    </span>
                    <span className="hidden max-w-sm text-right text-sm/6 text-ink-soft sm:block">
                      {areaContent[a.slug].neighborhoods.slice(0, 3).join(', ')}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-heading" className="py-20 lg:py-28">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12">
            <div className="lg:col-span-4">
              <Image
                src={agent.headshot}
                alt={agent.headshotAlt}
                width={400}
                height={500}
                sizes="(min-width: 1024px) 360px, 100vw"
                className="w-full max-w-sm grayscale"
              />
            </div>
            <div className="mt-10 max-w-xl lg:col-span-7 lg:col-start-6 lg:mt-0">
              <Eyebrow>About</Eyebrow>
              <Heading id="about-heading" className="mt-6">
                I am Deborah Rose Miller.
              </Heading>
              <p className="mt-6 text-lg/8 text-ink-soft">
                Rose is my maiden name and it has been on the door of every business I have run. I sold my financial
                planning firm in 2008, spent two years helping the City of Magnolia plan its next twenty, and then went
                into residential real estate because I had bought and sold enough of my own homes to know I could do
                the job well.
              </p>
              <p className="mt-4 text-lg/8 text-ink-soft">
                I co-founded the Magnolia Education Foundation in 2001 and serve on the board of the Humble ISD
                Education Foundation today. Education foundations are the cause I give my time to.
              </p>
              <p className="mt-8">
                <Button variant="quiet" href="/about/">
                  More about me
                </Button>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <GoogleProfile />

      <section id="questions" className="py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Questions</Eyebrow>
            <Heading className="mt-6">Things people ask on the first call.</Heading>
          </div>
          <div className="mt-12">
            <FAQList items={homeFaq} />
          </div>
        </Container>
      </section>
    </>
  )
}
