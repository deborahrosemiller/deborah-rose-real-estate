import { agent, areas, business, gbp, profiles, siteUrl } from '@/lib/site'

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

export function brokerageNode(): SchemaNode {
  return {
    '@type': 'Organization',
    '@id': BROKERAGE_ID,
    name: business.brokerage.name,
    url: business.brokerage.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One Riverway, Ste. 1700',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77056',
      addressCountry: 'US',
    },
  }
}

/**
 * The sitewide entity. One node typed as both RealEstateAgent and
 * LocalBusiness: the first says what the practice is, the second carries
 * hours, geo and the map in the form local search consumes. The Google
 * Business Profile is attached through hasMap and sameAs so the profile
 * and the site describe one business.
 */
export function agentNode(): SchemaNode {
  return {
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': AGENT_ID,
    name: business.name,
    alternateName: 'Deborah Rose Miller Real Estate Group',
    url: siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    image: absolute(agent.headshot),
    logo: absolute('/icon.svg'),
    description: business.description,
    priceRange: '$$',
    areaServed: areas.map((a) => cityNode(a.name, a.county)),
    geo: { '@type': 'GeoCoordinates', latitude: gbp.geo.latitude, longitude: gbp.geo.longitude },
    hasMap: gbp.mapsUrl,
    openingHoursSpecification: openingHours(),
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    parentOrganization: { '@id': BROKERAGE_ID },
    sameAs: [gbp.mapsUrl, profiles.har],
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
    image: absolute(agent.headshot),
    url: `${siteUrl}/about/`,
    telephone: business.phoneE164,
    email: business.email,
    worksFor: { '@id': AGENT_ID },
    memberOf: { '@id': BROKERAGE_ID },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Texas Real Estate Broker License',
      identifier: business.license,
      recognizedBy: { '@type': 'Organization', name: 'Texas Real Estate Commission' },
    },
    award: agent.awards,
    knowsAbout: [
      'Residential real estate in Kingwood, Humble, Porter, Conroe, Magnolia and Tomball, Texas',
      'Financial planning',
      'Municipal planning and zoning',
      'School district governance',
    ],
    sameAs: [profiles.har, profiles.linkedin],
    mainEntityOfPage: `${siteUrl}/about/`,
  }
}

export function websiteNode(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteUrl,
    name: business.name,
    publisher: { '@id': AGENT_ID },
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
