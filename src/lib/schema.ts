import { agent, areas, areaSentence, business, confirmed, gbp, profiles, siteUrl } from '@/lib/site'

export type SchemaNode = Record<string, unknown>

export const AGENT_ID = `${siteUrl}/#agent`
export const PERSON_ID = `${siteUrl}/about/#person`
export const WEBSITE_ID = `${siteUrl}/#website`
export const BROKERAGE_ID = `${siteUrl}/#brokerage`

export function absolute(path: string) {
  return path.startsWith('http') ? path : `${siteUrl}${path}`
}

export function cityNode(name: string, county: string) {
  return {
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'AdministrativeArea', name: `${county}, Texas` },
  }
}

export function openingHours() {
  return gbp.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }))
}

/** The brokerage, by name and URL only; see business.brokerage in site.ts for why there is no address. */
export function brokerageNode(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': BROKERAGE_ID,
    name: business.brokerage.name,
    url: business.brokerage.url,
  }
}

/**
 * The two markets as places, alongside the five towns. A reader (or an
 * answer engine) asking about "Montgomery County" or "Lake Houston" should
 * find the entity without having to know which towns sit inside them.
 */
export function regionNodes(): SchemaNode[] {
  return [
    { '@type': 'AdministrativeArea', name: 'Montgomery County, Texas' },
    { '@type': 'Place', name: 'Lake Houston area, Texas' },
  ]
}

/**
 * The sitewide entity. One node typed as both RealEstateAgent and
 * LocalBusiness: the first says what the practice is, the second carries
 * hours and the map in the form local search consumes. The Google
 * Business Profile is attached through hasMap and sameAs so the profile
 * and the site describe one business.
 *
 * No address and no geo coordinates, on purpose. The profile is a service
 * area business whose hidden address is Deborah's home (Brett,
 * 2026-09-21); the coordinates a scraper returns for it point at that
 * home, so they are never published. areaServed carries the location.
 */
export function agentNode(): SchemaNode {
  return {
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': AGENT_ID,
    name: business.name,
    alternateName: business.alternateNames,
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    image: absolute(agent.headshot),
    logo: absolute('/brand/deborah-rose-real-estate-group-logo.png'),
    description: business.description,
    priceRange: '$$',
    areaServed: [...areas.map((a) => cityNode(a.name, a.county)), ...regionNodes()],
    hasMap: gbp.mapsUrl,
    openingHoursSpecification: openingHours(),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: business.phoneE164,
      email: business.email,
      areaServed: 'US-TX',
      availableLanguage: 'English',
    },
    knowsAbout: [
      'Residential real estate',
      'Buying a home',
      'Selling a home',
      'New construction',
      'Relocation',
      'Mortgage financing for self-employed buyers',
    ],
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    parentOrganization: { '@id': BROKERAGE_ID },
    /*
     * The business's own profiles: the Google Business Profile (both URL
     * forms), HAR, and the business Facebook Page once its URL is on file.
     * Her personal profiles belong to the Person node below.
     */
    sameAs: confirmed([gbp.cidUrl, gbp.mapsUrl, profiles.har, profiles.facebookPage, profiles.zillow, profiles.realtorDotCom]),
    knowsLanguage: ['en-US'],
  }
}

export function personNode(): SchemaNode {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: agent.name,
    givenName: 'Deborah',
    familyName: 'Miller',
    jobTitle: agent.jobTitle,
    description: `${agent.name} is a Texas real estate broker (TREC license ${business.license}) serving ${areaSentence}, Texas, with ${business.name}, powered by ${business.brokerage.name}.`,
    image: absolute(agent.headshot),
    url: `${siteUrl}/about/`,
    telephone: business.phoneE164,
    email: business.email,
    worksFor: { '@id': AGENT_ID },
    memberOf: [
      { '@id': BROKERAGE_ID },
      { '@type': 'Organization', name: 'Houston Association of REALTORS', url: 'https://www.har.com' },
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Real estate broker',
      occupationLocation: [...areas.map((a) => cityNode(a.name, a.county)), ...regionNodes()],
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Texas Real Estate Broker License',
        identifier: business.license,
        recognizedBy: { '@type': 'Organization', name: 'Texas Real Estate Commission', url: 'https://www.trec.texas.gov' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'designation',
        name: 'Real Estate Negotiation Expert (RENE)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'designation',
        name: 'Certified Luxury Home Marketing Specialist (CLHMS)',
      },
    ],
    award: agent.awards,
    knowsAbout: [
      'Residential real estate in Kingwood, Humble, Porter, Conroe and Magnolia, Texas',
      'Financial planning',
      'Banking and mortgage lending',
      'Municipal planning and zoning',
      'School district governance',
    ],
    sameAs: confirmed([profiles.har, profiles.linkedin, profiles.facebook, profiles.youtube, profiles.expAgentPage]),
    mainEntityOfPage: `${siteUrl}/about/`,
  }
}

/**
 * The About page as a ProfilePage whose main entity is her. This is the
 * page type Google reads for "who is this person" and it ties the Person
 * node to one canonical URL.
 */
export function profilePageNode(): SchemaNode {
  return {
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/about/#webpage`,
    url: `${siteUrl}/about/`,
    name: `About ${agent.name}`,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
    inLanguage: 'en-US',
  }
}

export function websiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteUrl,
    name: business.name,
    alternateName: business.alternateNames,
    description: business.description,
    publisher: { '@id': AGENT_ID },
    about: { '@id': AGENT_ID },
    inLanguage: 'en-US',
  }
}

export function breadcrumb(items: { name: string; path: string }[]): SchemaNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  }
}

export function faqNode(items: { question: string; answer: string }[]): SchemaNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

export function graph(nodes: SchemaNode[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

/**
 * The hero video, as a VideoObject. Deborah's own listing footage, muted
 * and cut to forty seconds, with no speech, so there is no transcript to
 * attach. The poster is a frame from it.
 */
export function videoNode(): SchemaNode {
  return {
    '@type': 'VideoObject',
    '@id': `${siteUrl}/#hero-video`,
    name: 'A one story estate on nearly two acres in Riverwalk, Porter, Texas',
    description:
      'Listing video of a Mediterranean style one story home on 1.88 acres in the Riverwalk community of Porter, Montgomery County, Texas, sold by Deborah Rose Miller in August 2026.',
    thumbnailUrl: [absolute('/hero/porter-estate-poster.webp')],
    contentUrl: absolute('/hero/porter-estate-1080.mp4'),
    uploadDate: '2026-09-17',
    duration: 'PT40S',
    publisher: { '@id': AGENT_ID },
    contentLocation: { '@type': 'Place', name: 'Porter, Texas', address: { '@type': 'PostalAddress', addressLocality: 'Porter', addressRegion: 'TX', addressCountry: 'US' } },
  }
}

/** A property photograph, with where it was taken. */
export function imageNode(opts: { path: string; caption: string; city: string; id: string }): SchemaNode {
  return {
    '@type': 'ImageObject',
    '@id': opts.id,
    contentUrl: absolute(opts.path),
    url: absolute(opts.path),
    caption: opts.caption,
    description: opts.caption,
    contentLocation: { '@type': 'Place', name: `${opts.city}, Texas`, address: { '@type': 'PostalAddress', addressLocality: opts.city, addressRegion: 'TX', addressCountry: 'US' } },
    creditText: business.name,
    copyrightNotice: business.name,
  }
}
