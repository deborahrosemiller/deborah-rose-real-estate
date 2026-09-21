/**
 * The service area pages. Every sentence here describes a place, its
 * geography and what is there. Nothing describes who lives in it or who
 * it would suit; that is the fair housing line and it is held on purpose.
 *
 * Neighborhood names come from Deborah's own closed transactions in the
 * property archive. If a name is not in the archive it is not listed.
 */
import { business } from '@/lib/site'

export type AreaContent = {
  slug: string
  title: string
  metaDescription: string
  intro: string
  paragraphs: string[]
  neighborhoods: string[]
  deborah: string
}

export const areaContent: Record<string, AreaContent> = {
  kingwood: {
    slug: 'kingwood',
    title: 'Real estate in Kingwood, Texas',
    metaDescription:
      `Deborah Rose Miller buys and sells homes in Kingwood, Texas: Royal Brook, Bear Branch Village, Elm Grove Village and the villages along Lake Houston. Call ${business.phone}.`,
    intro:
      'Kingwood is a master planned community on the north shore of Lake Houston, about twenty-five miles from downtown Houston along US 59. It has been called the Livable Forest since it opened in the early 1970s, and the name still fits: the villages are laid out under mature pines with a greenbelt trail system running between them.',
    paragraphs: [
      'The community straddles the Harris and Montgomery county line. The older villages on the Harris side sit inside Humble ISD and carry the 77339 and 77345 zip codes. The newer sections to the north, including Royal Brook, reach into Montgomery County and share the 77365 zip code with Porter.',
      'Housing here runs from 1970s and 1980s two-story homes on greenbelt lots to 2017 and later construction in the Royal Brook sections, with pool homes throughout. Kingwood Town Center and the retail along Kingwood Drive and Northpark Drive serve the villages, and the Grand Parkway gives the north end a direct route west to I-45.',
      'Foreclosure listings, relocations on a school-year deadline and remote purchases have all come across my desk here. Every story below happened in Kingwood.',
    ],
    neighborhoods: ['Royal Brook at Kingwood', 'Bear Branch Village', 'Elm Grove Village', 'Kingwood Village pool homes'],
    deborah:
      'I have represented buyers and sellers across Kingwood, from 1980s homes backing to the greenbelt in Bear Branch Village to new construction in Royal Brook. I am a director of the Lake Houston Area Chamber of Commerce and a member of the Summer Creek Rotary Club, which keeps me in the same rooms as the people who live and work here.',
  },
  humble: {
    slug: 'humble',
    title: 'Real estate in Humble, Texas',
    metaDescription:
      `Deborah Rose Miller buys and sells homes in Humble and Atascocita, Texas: Eagle Springs, Balmoral and the Lake Houston communities. Call ${business.phone}.`,
    intro:
      'Humble sits in northeast Harris County where US 59 meets Beltway 8, next to Bush Intercontinental Airport and a short drive from the west shore of Lake Houston. The city itself is small. The Humble mailing address reaches much further, across Atascocita and the master planned communities along West Lake Houston Parkway.',
    paragraphs: [
      'The 77346 zip code holds most of the newer development: Eagle Springs, Balmoral with its crystal lagoon, and the neighborhoods off Will Clayton Parkway. Homes here were largely built from the early 2000s onward, many on lots with water views or no rear neighbor, and a good share of them have pools.',
      'The Lake Houston communities on the Houston side of the line, Summerwood, Lakeshore and Waters Edge in 77044, work the same way for a buyer or seller and I treat them as part of this market.',
      'Humble has been a heavy seller’s market and a heavy buyer’s market within the same few years. Pricing from that week’s closed sales, not last year’s, is what has kept my listings here moving.',
    ],
    neighborhoods: ['Eagle Springs', 'Balmoral', 'Waters Edge on Lake Houston', 'Atascocita'],
    deborah:
      'Humble is home. I serve on the board of the Humble ISD Education Foundation, where I am a past chair, and I have listed and sold in Eagle Springs and Balmoral more than once, including a sale where three buyers competed and the home closed twenty thousand dollars over its list price.',
  },
  porter: {
    slug: 'porter',
    title: 'Real estate in Porter, Texas',
    metaDescription:
      `Deborah Rose Miller buys and sells homes in Porter, Texas: Riverwalk acreage, The Highlands, Azalea District and Royal Brook. Call ${business.phone}.`,
    intro:
      'Porter is an unincorporated community in southeast Montgomery County, on US 59 between Kingwood and New Caney. Valley Ranch Town Center anchors the retail at the Grand Parkway interchange, and the 77365 zip code it shares with the north end of Kingwood covers everything from one acre lots to new master planned sections.',
    paragraphs: [
      'On the east side toward the San Jacinto River, Riverwalk is an acreage community of one story custom homes on lots of an acre or more, often with a workshop or a second building. West of the highway, The Highlands is a newer master planned community with a lazy river, trails and a golf course. Azalea District and the Royal Brook sections sit between them.',
      'New construction is a large part of the Porter market, which means a resale here competes directly with the builder down the street. Knowing what the builder is offering that month is part of pricing a home in Porter correctly.',
      'My own business address is in Porter, and several of the stories below are from clients I already knew through the community before we ever talked about a house.',
    ],
    neighborhoods: ['Riverwalk', 'The Highlands', 'Azalea District', 'Royal Brook at Kingwood'],
    deborah:
      'I am a member of the Greater East Montgomery County Chamber of Commerce and I have handled purchases and sales in Porter for first-time buyers, downsizing couples and sellers who needed to move on short notice. The video on the homepage is a Riverwalk listing I sold in August 2026.',
  },
  conroe: {
    slug: 'conroe',
    title: 'Real estate in Conroe, Texas',
    metaDescription:
      `Deborah Rose Miller buys and sells homes in Conroe, Texas, the Montgomery County seat on I-45 and Lake Conroe. Call ${business.phone}.`,
    intro:
      'Conroe is the county seat of Montgomery County, forty miles north of downtown Houston on I-45. Lake Conroe lies to its west, Sam Houston National Forest to its north, and the city has grown quickly in the last decade as the corridor between The Woodlands and Willis filled in.',
    paragraphs: [
      'Housing in Conroe ranges from downtown bungalows to lakefront homes to new subdivisions along FM 3083 and FM 1314. The 77302 zip code on the southeast side holds acreage properties with older homes, carports and outbuildings, where a buyer trades a short commute for land.',
      'Conroe purchases often involve a sale somewhere else first. The story below is one where the clients owed more on their existing home than it was worth, and the move still happened.',
    ],
    neighborhoods: ['Southeast Conroe acreage, 77302', 'Lake Conroe', 'Downtown Conroe'],
    deborah:
      'Conroe is where county business gets done, and my two years inside Magnolia city government taught me how that works. When a Conroe purchase turns on zoning, a septic system or a county permit, I know who to call.',
  },
  magnolia: {
    slug: 'magnolia',
    title: 'Real estate in Magnolia, Texas',
    metaDescription:
      `Deborah Rose Miller buys and sells homes in Magnolia, Texas, where she helped write the city’s first comprehensive plan and co-founded the Magnolia Education Foundation. Call ${business.phone}.`,
    intro:
      'Magnolia sits in western Montgomery County where FM 1488 meets FM 1774, about fifteen miles west of The Woodlands. The city is small and the Magnolia address is large, covering acreage along the farm roads, new master planned communities like NorthGrove, and the Stagecoach area to the south.',
    paragraphs: [
      'New construction along FM 1488 has brought builders like Highland Homes to Magnolia, with one story plans on 6,000 square foot lots. Further out, Stagecoach Farms and similar communities offer 1970s homes on three quarters of an acre or more, with detached garages, RV carports and a community lake.',
      'I lived in Magnolia for years. I ran my financial planning firm here, served nine years on the Magnolia ISD school board, two as president, and spent two years as the city’s Economic Development Coordinator, where I helped write its first comprehensive plan and worked directly with developers on zoning and the city’s extraterritorial jurisdiction.',
      'I also co-founded the Magnolia Education Foundation in 2001. When a client asks what a piece of Magnolia is likely to become, I answer from having sat in the meetings.',
    ],
    neighborhoods: ['NorthGrove', 'Stagecoach Farms', 'FM 1488 corridor'],
    deborah:
      'Magnolia is the part of the map I know best. I was a founding member of the Magnolia Rotary Club, a past president of the Greater Magnolia Chamber of Commerce and a director of the Magnolia-Tomball YMCA. The people running the city today are people I served alongside.',
  },
}
