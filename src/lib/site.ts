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
 *     "Deborah Rose Real Estate powered by eXp", office eXp Realty LLC;
 *     designations CLHMS, RENE.
 *   TREC license search, per the public research summary of 2026-09-04:
 *     Deborah Rose Miller, license 622917, Broker (Individual), active,
 *     designated broker for Rose Realty LLC. No eXp sponsorship on file.
 *   Brand brief, 2026-09-04: service area is the Lake Houston area
 *     (Kingwood, Humble) and Montgomery County (Porter, Conroe, Magnolia,
 *     Tomball). SUPERSEDED on Tomball: on the live review of 2026-09-18
 *     Deborah removed it herself. Tomball is in Harris County, sits
 *     between her two markets, and she no longer works it. Five towns.
 *   Deborah, live review 2026-09-18: thirty-six years in the financial
 *     industry, 1972 to 2008, a banker first and then a financial planner.
 *     She confirmed 1972 (the year she finished high school and started
 *     in banking). How long she owned Rose Financial Group is unconfirmed;
 *     she is checking her resume, so the firm's duration is not stated.
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
  /**
   * The official name, everywhere. Brett and Deborah, 2026-09-21: "that's
   * our official name that we want to use everywhere: Deborah Rose Real
   * Estate Group." It is what her logo says. The Google Business Profile,
   * the Facebook Page and the YouTube channel are being renamed to match.
   */
  name: 'Deborah Rose Real Estate Group',
  legalNote: 'Deborah Rose Real Estate Group powered by eXp Realty LLC',
  /**
   * No address, on purpose. Deborah, 2026-09-21: eXp's Houston office
   * address (One Riverway, in the Galleria area) is not to be shown; she
   * does not want the business tied to that part of Houston, which is
   * outside her markets. The brokerage is named wherever the rules require
   * it; its address appears nowhere on the site or in the schema.
   */
  brokerage: {
    name: 'eXp Realty LLC',
    url: 'https://www.exprealty.com',
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
  /**
   * The name the Google Business Profile, HAR and the first build used.
   * Kept as a schema alternateName so every listing still carrying it
   * resolves to the same business while the renames catch up.
   *
   * NEVER PUBLIC: Rose Realty LLC. Deborah, 2026-09-21: it is her LLC's
   * legal name from when she was her own broker, kept for tax purposes, and
   * she does not use it publicly because it conflicts with eXp's rules now
   * that eXp is her broker. It goes in no page, no alternateName and no
   * legalName.
   */
  alternateNames: ['Deborah Rose Real Estate'],
  description:
    'Deborah Rose Miller is a Texas real estate broker who helps buyers and sellers across the Lake Houston area and Montgomery County: Kingwood, Humble, Porter, Conroe and Magnolia. Fifty plus years across the financial industry, school trustee and municipal government, and every deal handled with the numbers in front of you.',
} as const

export const agent = {
  name: 'Deborah Rose Miller',
  firstName: 'Deborah',
  jobTitle: 'Owner and Broker, Deborah Rose Real Estate Group',
  headshot: '/about/deborah-rose-miller.webp',
  headshotAlt: 'Deborah Rose Miller, real estate broker serving Kingwood, Humble, Porter, Conroe and Magnolia, Texas',
  designations: ['CLHMS', 'RENE'],
  /** Deborah, 2026-09-21: an eleven-year consecutive winner. Replaced the single-year "Houston, 2023" entry. */
  awards: ['Five Star Professional award, eleven consecutive years'],
} as const

/** Google Business Profile. Everything here was read from the live profile. */
export const gbp = {
  placeId: 'ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  cid: '17717898701727853447',
  mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  /** The CID form of the same profile, the URL Google itself uses for the entity. Built from the cid above. */
  cidUrl: 'https://maps.google.com/?cid=17717898701727853447',
  reviewUrl: 'https://g.page/r/CYfr1-r-nuL1EBM/review',
  reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ4bMfCd4dPiQRh-vX6v6e4vU',
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], label: 'Monday to Friday', opens: '08:00', closes: '20:00', display: '8 a.m. to 8 p.m.' },
    { days: ['Saturday'], label: 'Saturday', opens: '10:00', closes: '18:00', display: '10 a.m. to 6 p.m.' },
    { days: ['Sunday'], label: 'Sunday', opens: '13:00', closes: '18:00', display: '1 p.m. to 6 p.m.' },
  ],
} as const

/**
 * Her public profiles. The first four were read from her own HAR page on
 * 2026-09-17. A null is a profile known to exist (or likely) whose URL has
 * not been confirmed; it stays out of the footer and the schema until a
 * real URL replaces it. Never fill one in by guessing a handle.
 */
export const profiles = {
  har: 'https://www.har.com/deborah-rose-miller/agent_drmiller',
  harListings: 'https://www.har.com/realestatepro/forsale-by-agent/drmiller',
  /** Her personal LinkedIn profile (the slug is "roserealty", the profile is hers). */
  linkedin: 'https://www.linkedin.com/in/roserealty/',
  /** Her personal Facebook profile, as HAR links it. */
  facebook: 'https://www.facebook.com/deborahrose.miller.9',
  /**
   * TODO(Deborah): the business Facebook Page, "Rose Realty - Deborah Rose
   * Miller". The Page URL (facebook.com/<page-handle> or
   * facebook.com/profile.php?id=<number>) is not on file.
   */
  facebookPage: null as string | null,
  /**
   * Her canonical YouTube channel, @Deborahroserealtor (9 videos), named by
   * Deborah on 2026-09-21. Linked by channel ID so a handle or name change
   * never breaks it. A second channel, @DEBORAHROSEMILLER (two Shorts,
   * channel UCdFTVD4Kxeo3pyVCBN5WZ4A), was made by accident and is never
   * linked. When this channel is renamed to the business name, move it from
   * the Person sameAs to the business sameAs in schema.ts.
   */
  youtube: 'https://www.youtube.com/channel/UCRtq39RkmqcwJykYrvg2xcw' as string | null,
  /** TODO(Deborah): her Zillow agent profile URL, if claimed. */
  zillow: null as string | null,
  /** TODO(Deborah): her Realtor.com agent profile URL, if claimed. */
  realtorDotCom: null as string | null,
  /** TODO(Deborah): her eXp Realty agent page URL, if eXp publishes one. */
  expAgentPage: null as string | null,
  googleMaps: gbp.mapsUrl,
}

/** Drops the unconfirmed (null) profiles, so a TODO never reaches the markup. */
export function confirmed(urls: (string | null | undefined)[]): string[] {
  return urls.filter((u): u is string => Boolean(u))
}

/**
 * Her own line, from her HAR profile, minus its last sentence. Brett cut
 * "Relevance is my mission" on the live review of 2026-09-18; it does not
 * sit under her name as a subhead. Used once, on the About page.
 */
export const tagline = 'Real estate pro. Connector. Lifelong learner. Community is my business.'

/**
 * Production, from her HAR profile on 2026-09-17. Set as type, in context,
 * on the About page. Never as a card, a pill or a homepage stat row.
 */
export const production = {
  /**
   * Her total career sales volume. Deborah, 2026-09-22: $41 million+, her
   * total HAR production since she started in 2012 (the $15 million+ of
   * 2026-09-21 was from a sample of about forty transactions). It
   * replaced the HAR closing count on the About page: she wants the dollar
   * figure shown, never a transaction count.
   */
  careerVolume: '$41 Million+',
  /** HAR counts, 2026-09-17. Not shown anywhere since 2026-09-21; see careerVolume. */
  sold: 38,
  leased: 9,
  yearsRealEstate: '10+',
  /**
   * Her total career, in her own framing (live review 2026-09-18): "fifty
   * plus years across the financial industry, which incorporates financial
   * planning, school trustee, and municipal government." 1972 to today is
   * fifty-four, so "fifty plus" is conservative and never needs a January
   * update. Replaces the HAR profile's "45+ years business leadership."
   */
  yearsCareer: '50+',
  /**
   * Her whole career in the financial industry, 1972 to 2008, a banker
   * first and then a financial planner. Deborah confirmed both years on
   * the live review of 2026-09-18. This is NOT how long she owned Rose
   * Financial Group; that number is unconfirmed and is not stated anywhere.
   */
  yearsFinancialIndustry: 36,
  financialCareer: '1972 to 2008',
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
 * Humble is its neighbor on the Harris side. Together they are the Lake
 * Houston area. The three Montgomery County towns follow. Each has a page
 * at /areas/<slug>/. Tomball was removed by Deborah on 2026-09-18.
 */
export const areas: Area[] = [
  { slug: 'kingwood', name: 'Kingwood', county: 'Harris County', region: 'Lake Houston area', zip: ['77339', '77345', '77346', '77365'] },
  { slug: 'humble', name: 'Humble', county: 'Harris County', region: 'Lake Houston area', zip: ['77338', '77346', '77396'] },
  { slug: 'porter', name: 'Porter', county: 'Montgomery County', region: 'Montgomery County', zip: ['77365'] },
  { slug: 'conroe', name: 'Conroe', county: 'Montgomery County', region: 'Montgomery County', zip: ['77301', '77302', '77303', '77304', '77384', '77385'] },
  { slug: 'magnolia', name: 'Magnolia', county: 'Montgomery County', region: 'Montgomery County', zip: ['77354', '77355'] },
]

export const areaNames = areas.map((a) => a.name)
export const areaSentence = 'Kingwood, Humble, Porter, Conroe and Magnolia'
/**
 * The two markets, big to specific. Brett, 2026-09-18: the eyebrow above a
 * hero headline names the two larger areas; the towns move down into the
 * paragraph beneath it, so a reader goes from the region to the detail and
 * every town name still appears on the page.
 */
export const regionSentence = 'The Lake Houston area and Montgomery County'

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
  /**
   * The paragraph under the wordmark in the footer, sent by Deborah on
   * 2026-09-22. Her words, with the em dash before "and beyond" set as a
   * comma (site rule). It replaced the build's own service-area line there;
   * serviceAreaSentence still runs in the footer's legal block and in
   * /llms.txt.
   */
  footerIntro:
    'Serving Kingwood, Humble and the greater Lake Houston area, along with Montgomery County communities including Porter, Conroe and Magnolia, and beyond. I work with buyers and sellers across relocations, new construction, acreage and lakefront properties, and can seamlessly coordinate the sale of your current home with the purchase of your next.',
  serviceAreaSentence:
    'Serving the Lake Houston area of Kingwood and Humble, and Montgomery County including Porter, Conroe and Magnolia, and the surrounding communities.',
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
