/**
 * ===================================================================
 *  EVERY NAMEABLE FACT ABOUT THE BUSINESS, IN ONE FILE.
 * ===================================================================
 *
 * Metadata, the footer, the contact page, the Google Business Profile
 * block and every JSON-LD node read from here. Nothing else in the repo
 * types a phone number, an email or a city name.
 *
 * SOURCES, so a future session knows what is verified and what is not:
 *
 *   Google Business Profile, read 2026-09-17 via Outscraper:
 *     name "Deborah Rose Real Estate", category Real estate agent,
 *     service-area business with no street address shown, phone
 *     +1 281-380-0332, hours below, place ID and CID below, verified.
 *   HAR.com About Me page, read 2026-09-17:
 *     "Deborah Rose Real Estate powered by eXp", office eXp Realty LLC,
 *     One Riverway Ste 1700, Houston TX 77056; designations CLHMS, RENE.
 *   TREC license search, per the public research summary of 2026-09-04:
 *     Deborah Rose Miller, license 622917, Broker (Individual), active,
 *     designated broker for Rose Realty LLC. No eXp sponsorship on file.
 *   Brand brief, 2026-09-04: service area is the Lake Houston area
 *     (Kingwood, Humble) and Montgomery County (Porter, Conroe, Magnolia,
 *     Tomball).
 *
 * OPEN, marked [unknown] in the build report: which brokerage line is
 * correct for public display (eXp Realty LLC vs Rose Realty LLC), the
 * IABS form URL, the social profiles, and a higher resolution headshot.
 */

export const siteUrl = 'https://deborahroserealestate.com'

/**
 * Review build. While true, robots.txt turns crawlers away and every
 * page carries noindex. Flip to false at launch and nothing else changes.
 */
export const HIDE_FROM_SEARCH_ENGINES = true

export const business = {
  name: 'Deborah Rose Real Estate',
  legalNote: 'Deborah Rose Real Estate powered by eXp Realty LLC',
  brokerage: {
    name: 'eXp Realty LLC',
    url: 'https://www.exprealty.com',
    address: 'One Riverway, Ste. 1700, Houston, TX 77056',
  },
  phone: '(281) 380-0332',
  phoneE164: '+12813800332',
  email: 'deborahroserealtor@gmail.com',
  license: '622917',
  licenseState: 'TX',
  description:
    'Deborah Rose Miller helps buyers and sellers across the Lake Houston area and Montgomery County: Kingwood, Humble, Porter, Conroe, Magnolia and Tomball. Twenty-five years running a financial planning firm, two years inside Magnolia city hall, and every deal handled with the numbers in front of you.',
} as const

export const agent = {
  name: 'Deborah Rose Miller',
  firstName: 'Deborah',
  jobTitle: 'Real Estate Broker, Deborah Rose Real Estate',
  headshot: '/about/deborah-rose-miller.webp',
  headshotAlt: 'Deborah Rose Miller, real estate broker serving Kingwood, Humble, Porter, Conroe, Magnolia and Tomball, Texas',
  designations: ['CLHMS', 'RENE'],
  awards: ['Five Star Real Estate Agent, Houston, 2023'],
} as const

/** Google Business Profile. Everything here was read from the live profile. */
export const gbp = {
  placeId: 'ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  cid: '17717898701727853447',
  mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  reviewUrl: 'https://g.page/r/CYfr1-r-nuL1EBM/review',
  reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  geo: { latitude: 30.2655718, longitude: -95.4617644 },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], label: 'Monday to Friday', opens: '08:00', closes: '20:00', display: '8 a.m. to 8 p.m.' },
    { days: ['Saturday'], label: 'Saturday', opens: '10:00', closes: '18:00', display: '10 a.m. to 6 p.m.' },
    { days: ['Sunday'], label: 'Sunday', opens: '13:00', closes: '18:00', display: '1 p.m. to 6 p.m.' },
  ],
} as const

export const profiles = {
  har: 'https://www.har.com/deborah-rose-miller/agent_drmiller',
  linkedin: 'https://www.linkedin.com/in/roserealty',
  googleMaps: gbp.mapsUrl,
} as const

export type Area = {
  slug: string
  name: string
  county: 'Harris County' | 'Montgomery County'
  region: 'Lake Houston area' | 'Montgomery County'
  zip: string[]
}

/**
 * The service area, in the order Deborah names it. Kingwood is the master
 * planned community that straddles the Harris and Montgomery county line;
 * Humble is its neighbor on the Harris side. The four Montgomery County
 * towns follow. Each has a page at /areas/<slug>/.
 */
export const areas: Area[] = [
  { slug: 'kingwood', name: 'Kingwood', county: 'Harris County', region: 'Lake Houston area', zip: ['77339', '77345', '77346', '77365'] },
  { slug: 'humble', name: 'Humble', county: 'Harris County', region: 'Lake Houston area', zip: ['77338', '77346', '77396'] },
  { slug: 'porter', name: 'Porter', county: 'Montgomery County', region: 'Montgomery County', zip: ['77365'] },
  { slug: 'conroe', name: 'Conroe', county: 'Montgomery County', region: 'Montgomery County', zip: ['77301', '77302', '77303', '77304', '77384', '77385'] },
  { slug: 'magnolia', name: 'Magnolia', county: 'Montgomery County', region: 'Montgomery County', zip: ['77354', '77355'] },
  { slug: 'tomball', name: 'Tomball', county: 'Harris County', region: 'Montgomery County', zip: ['77375', '77377'] },
]

export const areaNames = areas.map((a) => a.name)
export const areaSentence = 'Kingwood, Humble, Porter, Conroe, Magnolia and Tomball'

export const nav = {
  header: [
    { title: 'Buyers', href: '/buyers/' },
    { title: 'Sellers', href: '/sellers/' },
    { title: 'Stories', href: '/stories/' },
    { title: 'Areas', href: '/areas/' },
    { title: 'About', href: '/about/' },
  ],
  action: { title: 'Contact', href: '/contact/' },
} as const

export const legal = {
  trecConsumerProtectionNotice: 'https://www.trec.texas.gov/forms/consumer-protection-notice',
  /** The broker's completed Information About Brokerage Services form. Null until Deborah supplies it. */
  iabsUrl: null as string | null,
}
