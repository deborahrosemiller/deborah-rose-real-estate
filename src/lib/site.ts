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
  /**
   * TREC license number. From the TREC license holder record (public
   * research summary, 2026-09-04) and confirmed by her own HAR profile,
   * which uses it as her agent key in the showings and IABS links.
   */
  license: '622917',
  licenseState: 'TX',
  /**
   * A mailing address for the footer. Null until Deborah supplies one. An
   * agent without a storefront usually uses a PMB rather than a home
   * address. The eXp corporate address is the brokerage's, not hers, and
   * is never used in this slot.
   */
  mailingAddress: null as string | null,
  description:
    'Deborah Rose Miller helps buyers and sellers across the Lake Houston area and Montgomery County: Kingwood, Humble, Porter, Conroe, Magnolia and Tomball. Twenty-five years running a financial planning firm, two years inside Magnolia city hall, and every deal handled with the numbers in front of you.',
} as const

export const agent = {
  name: 'Deborah Rose Miller',
  firstName: 'Deborah',
  jobTitle: 'Owner and Broker, Deborah Rose Real Estate',
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

/** Her public profiles, each read from her own HAR page on 2026-09-17. */
export const profiles = {
  har: 'https://www.har.com/deborah-rose-miller/agent_drmiller',
  harListings: 'https://www.har.com/realestatepro/forsale-by-agent/drmiller',
  linkedin: 'https://www.linkedin.com/in/roserealty/',
  facebook: 'https://www.facebook.com/deborahrose.miller.9',
  googleMaps: gbp.mapsUrl,
} as const

/**
 * Her own line, from her HAR profile. Used once, on the About page.
 */
export const tagline = 'Real estate pro. Connector. Lifelong learner. Community is my business. Relevance is my mission.'

/**
 * Production, from her HAR profile on 2026-09-17. Set as type, in context,
 * on the About page. Never as a card, a pill or a homepage stat row.
 */
export const production = {
  sold: 38,
  leased: 9,
  yearsRealEstate: '10+',
  yearsBusiness: '45+',
  yearsRoseFinancial: 25,
  harTier: 'HAR Platinum agent',
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

/**
 * The footer's compliance copy. The IABS and CPN links are TREC rules.
 * The "Brokered by" lockup, the "opinions are my own" line and the REALTOR
 * mark sentence follow the pattern on another eXp agent's live site
 * (yournextstepteam.com) and NAR's mark usage; Deborah should confirm the
 * exact wording against eXp's own agent guidelines before launch.
 */
export const legal = {
  brokeredBy: 'Brokered by eXp Realty LLC',
  brokerageSentence: 'eXp Realty LLC is a licensed Texas real estate brokerage.',
  opinions: 'Opinions expressed are my own and not the views of eXp Realty.',
  realtorMark:
    'REALTOR\u00ae is a registered collective membership mark that identifies real estate professionals who are members of the National Association of REALTORS\u00ae and subscribe to its Code of Ethics.',
  membership: 'Member, Houston Association of REALTORS\u00ae',
  serviceAreaSentence:
    'Serving the Lake Houston area of Kingwood and Humble, and Montgomery County including Porter, Conroe, Magnolia and Tomball, and the surrounding communities.',
  trecConsumerProtectionNotice: 'https://www.trec.texas.gov/forms/consumer-protection-notice',
  /**
   * Her Information About Brokerage Services form, as HAR generates it for
   * license 622917 (the link her own HAR profile carries). TREC Rule
   * 531.20(b) requires this link on the homepage; the footer is on every
   * page. A PDF hosted on this domain would be sturdier than a HAR page;
   * flagged in docs/open-items.
   */
  iabsUrl: 'https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=622917' as string | null,
}
