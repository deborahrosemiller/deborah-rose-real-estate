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
