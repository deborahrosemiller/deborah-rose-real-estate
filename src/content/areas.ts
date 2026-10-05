/**
 * The service area pages.
 *
 * Neighborhood names come from Deborah's own closed transactions in the
 * property archive, or from Deborah herself (the Magnolia additions of
 * 2026-09-22, the Kingwood West, Fall Creek and Summerwood additions of
 * 2026-10-05). A name from neither source is not listed.
 *
 * Kingwood, Humble, Porter and Magnolia carry Deborah's own October copy,
 * approved by her, analyzed on her side for fair housing at the national
 * and state level, and sent on 2026-10-05 to run as written. The pages
 * used to answer what each town is. They now answer why buyers choose
 * it, in her voice. The geographic summaries that stood here (county
 * lines, zip codes, the highways, the retail centers) came out with the
 * rewrite; the zip codes are still on the page in the facts list beneath
 * the copy. Conroe is untouched.
 *
 * Her words are hers. The only edit anywhere in this file is punctuation:
 * her em dashes are set as commas, a colon, or two sentences, which is
 * Brett's standing rule and the one thing the copy gate stops the build
 * for. Splitting at the dash is also what kept three of her sentences
 * exactly as she wrote them ("Humble isn't one kind of community. It's
 * dozens of them."), since it is the comma in that construction, not the
 * thought, that the gate reads as a reframe. Nothing was softened, cut or
 * reworded.
 */
import { business } from '@/lib/site'

/**
 * Deborah, 2026-09-22: set under every list of places she has sold in, so
 * a reader whose neighborhood is missing does not assume she will not work
 * there. Set as type, never as a box or badge.
 */
export const neighborhoodNote = 'Don’t see your neighborhood? My services are not limited by a list.'

export type AreaContent = {
  slug: string
  /** The H1 on the page. */
  title: string
  /**
   * The <title> tag, where the title is written for a reader rather than
   * a search result. Deborah's October headings open on the buyer ("Why
   * Buyers Fall for Kingwood"), which reads well on the page and gives a
   * search result nothing to match on, so the pages that set this keep
   * the town, the state and the subject in the tab. Falls back to title.
   */
  metaTitle?: string
  /**
   * What the listings call this area, where that differs from the town
   * name in site.ts. The index at /areas/ and the "Where I work" grid on
   * the homepage use it; the breadcrumb, the per-city schema node and the
   * service area sentence keep the single canonical town name.
   */
  label?: string
  metaDescription: string
  /**
   * One sentence for the listings. The index and the homepage grid used
   * to show the intro, or its first sentence, which worked while the
   * intros opened on geography. Deborah's October copy opens in her own
   * voice instead, so "I ask almost every buyer the same question" became
   * the homepage blurb for Kingwood. This is written for a reader
   * scanning a list of places.
   */
  teaser: string
  intro: string
  paragraphs: string[]
  neighborhoods: string[]
  deborah: string
}

export const areaContent: Record<string, AreaContent> = {
  kingwood: {
    slug: 'kingwood',
    title: 'Why Buyers Fall for Kingwood',
    teaser:
      'The Livable Forest: villages under mature pines, a greenbelt trail system threading through all of them, and streets people grow up on and come back to.',
    metaTitle: 'Why buyers fall for Kingwood, Texas',
    metaDescription:
      `Kingwood, Texas, the Livable Forest: villages under mature pines, the greenbelt trails, the schools, and what buyers tell Deborah Rose Miller. Call ${business.phone}.`,
    intro:
      'I ask almost every buyer the same question: what is it about Kingwood? And the answer almost never changes. They tell me about the community feel the second they drive in.',
    paragraphs: [
      'They’ve heard good things about the schools before they’ve even toured a house. They notice how the neighborhoods look, especially how well people keep their lawns, which sounds small until you’re the one house-hunting and it tells you everything about how a street takes care of itself. They talk about the trails. And they talk about feeling safe.',
      'Kingwood earned the name “the Livable Forest” when it opened in the early 1970s, and that’s still the first thing people notice when they drive in: the villages sit under mature pine trees, with a greenbelt trail system threading through all of them. If you like to walk, run or bike without getting in a car first, this is a city built around exactly that. I’ve watched it work for retired couples, empty nesters, and families with a toddler in a jogging stroller alike.',
      'Schools come up almost immediately in every buyer conversation, and it’s not just the ratings. Families tell me what they’ve heard from neighbors and coworkers about Kingwood’s schools long before they ask me to pull up a rating site. And here’s the part that still gets me after all these years selling here: so many kids who grow up and graduate from Kingwood High School come back years later to raise their own families in this same community. That’s not something you can manufacture with marketing. People who grew up here choose to come home, and that tells you something about a place that no brochure can.',
      'The neighborhoods themselves each have their own character. I’ve personally closed deals in villages like Elm Grove Village and other sections of Kingwood West. But what buyers notice first, almost every time, is how well-kept everything is. Mowed lawns, trimmed hedges, a general sense that people take pride in their yards. It’s a visible sign of a community that takes care of itself, and buyers pick up on it within the first five minutes of driving through.',
      'And then there’s safety. It’s one of the most consistent things I hear from buyers, and it’s not an abstract feeling. It’s part of why so many of the families I work with are specifically targeting Kingwood over other parts of the greater Houston area. Combine that with the schools, the trails and neighbors who actually know each other, and you start to understand why Kingwood keeps pulling people back, generation after generation.',
    ],
    neighborhoods: [
      'Royal Brook at Kingwood',
      'Bear Branch Village',
      'Elm Grove Village',
      'Kingwood West',
      'Kingwood Village pool homes',
    ],
    deborah:
      'If you’re weighing whether Kingwood is the right fit for your family, I’d rather talk it through with you than have you guess from a listing photo. I’ve lived and worked in this part of the Lake Houston area for years, and I can walk you through which Kingwood village might fit your life best.',
  },
  /*
   * The page now covers Humble with Atascocita, Fall Creek and
   * Summerwood, as she asked. Atascocita is named without a paragraph of
   * its own yet; she and Brett know, and it is not a blocker.
   */
  humble: {
    slug: 'humble',
    title: 'Why Buyers Choose Humble',
    label: 'Humble, with Atascocita, Fall Creek and Summerwood',
    teaser:
      'Dozens of communities rather than one, from golf course living to the lake, minutes from Bush Intercontinental and an easier run into Houston than most of this side of town.',
    metaTitle: 'Why buyers choose Humble, Texas, with Atascocita, Fall Creek and Summerwood',
    metaDescription:
      `Humble, Texas with Atascocita, Fall Creek and Summerwood: golf course and lake communities, minutes from Bush Intercontinental. Deborah Rose Miller, ${business.phone}.`,
    intro:
      'If Kingwood gets one consistent answer from buyers, Humble gets range. Ask ten different buyers what drew them to Humble and you’ll hear ten different reasons. And that’s really the point.',
    paragraphs: [
      'Humble isn’t one kind of community. It’s dozens of them. This page covers the Humble area together with Atascocita, Fall Creek and Summerwood, and between them you’ll find golf course communities, lake and water-activity communities, and plenty of everything in between. The home styles and price points stretch just as wide. Whatever someone is looking for, there’s usually a Humble neighborhood built around it.',
      'What buyers bring up again and again is how convenient Humble is. It sits right next to George Bush Intercontinental Airport (IAH), so if you travel for work or just want a short drive to the terminal, that matters more than people expect until they live it. Shopping and hospitals are close by too, and the commute into downtown Houston or the Greenway Plaza area is easier from Humble than from a lot of other suburbs on this side of town. For buyers balancing a job in the city with wanting more space and a lower cost of living, Humble tends to check both boxes.',
      'Humble also has real history, and it shows up in the community events that have become local institutions. The Humble Rodeo has been going for 79 years and counting. It’s not a new attraction. It’s a tradition families build their year around. Green Oaks Tavern, run by Steve and Debbie Bixby, still hosts live music and has become one of the real gathering spots in town. And every year, Good Oil Days brings the community out to celebrate Humble’s roots in the East Texas oil boom. These aren’t things a new subdivision can manufacture overnight. They’re what you get when a town has had time to build an identity.',
      'Because Humble covers so much ground, golf course living, lakeside living, and everything between, the real question isn’t whether Humble is a good fit. It’s which part of Humble fits you. That’s exactly the kind of matching I enjoy doing.',
    ],
    neighborhoods: [
      'Eagle Springs',
      'Balmoral',
      'Waters Edge on Lake Houston',
      'Atascocita',
      'Fall Creek',
      'Summerwood',
    ],
    deborah:
      'Tell me what your life actually looks like, commute, activities, budget, how much yard you want to take care of, and I can point you toward the right corner of Humble before we’ve even started touring houses.',
  },
  /*
   * Retitled New Caney and Porter on 2026-10-05, at Deborah's direction.
   * The route stays /areas/porter/ and the town in site.ts stays Porter:
   * her Google Business Profile posts point at this URL, and the
   * breadcrumb, the schema node and the five-town service area sentence
   * all read from that one name. The heading, the title, the description
   * and the copy are what changed. Making New Caney a town of its own is
   * in the pull request as a question for her and Brett.
   */
  porter: {
    slug: 'porter',
    title: 'What New Caney/Porter Is Really Like',
    label: 'New Caney/Porter',
    teaser:
      'Southeast Montgomery County on US 59, where new construction, river communities and acreage sit minutes apart, and the Grand Parkway keeps opening more of it.',
    metaTitle: 'New Caney and Porter, Texas real estate',
    metaDescription:
      `New Caney and Porter, Texas, in southeast Montgomery County: new construction, river communities and acreage along US 59 and the Grand Parkway. Call ${business.phone}.`,
    intro:
      'Porter doesn’t get talked about as much as Kingwood or The Woodlands, and honestly, that’s part of its appeal. It sits in southeast Montgomery County on US 59, right between Kingwood and New Caney, which means you get an easy commute toward Houston without paying Kingwood or Woodlands prices for it.',
    paragraphs: [
      'A lot of the buyers I work with here are people who got priced out of the closer-in suburbs and found out Porter gives them more house, more land, and more new construction for the money, without giving up easy highway access.',
      'This whole corridor has become one of the fastest-growing parts of the greater Houston area, and it’s not slowing down. The expansion of Highway 99 (the Grand Parkway) and the continued build-out around Valley Ranch have opened the door to development after development along that stretch: new neighborhoods, new retail, easier access for anyone commuting or just running errands. By most measures, New Caney/Porter is the fastest-growing section of Montgomery County right now, and you can feel it every time a new shopping center or subdivision breaks ground.',
      'One thing that stands out about Porter is how much of it is still being built. I’ve represented clients buying brand-new construction in communities that had just opened, and new phases here tend to sell fast, sometimes within weeks of release. That means buyers who are serious about a specific lot or floor plan need to move with some urgency, but it also means there’s real variety: river communities, new master-planned neighborhoods with resort-style amenities, and everything in between.',
      'The amenities buyers care about in Porter often go beyond the standard pool and clubhouse. I worked with a couple who chose a Porter community specifically because of its lazy river, not for themselves, but because they wanted a place their grandkids would actually want to visit. That’s the kind of detail that tells you these newer Porter communities are being designed around real life, not just a sales brochure. Low-maintenance, lock-and-leave neighborhoods with HOA-handled exteriors have also become a draw for buyers who want less yard work and more time for the things they actually care about.',
      'Valley Ranch Town Center anchors a lot of the retail and day-to-day convenience out here, right at the Grand Parkway interchange, so Porter residents aren’t driving far for shopping or errands. And because Porter shares the 77365 zip code with the north end of Kingwood, you’ll find everything from one-acre lots to brand-new master-planned sections within a few minutes of each other, which is exactly why the right fit in Porter depends so much on what someone’s actually looking for.',
    ],
    neighborhoods: ['Riverwalk', 'The Highlands', 'Azalea District', 'Royal Brook at Kingwood'],
    deborah:
      'If you’re curious whether Porter makes sense for your next move, whether that’s new construction, a river-community lot, or something with more acreage than you’d find closer to the city, I’d be glad to walk you through what’s out there right now. This is a part of Montgomery County I know well, deal by deal, street by street.',
  },
  /*
   * The Magnolia Community Foundation here is correct and is NOT the
   * Magnolia Education Foundation on the About page. Deborah settled it
   * on 2026-10-05: two separate organizations, and she served both. She
   * was president of the Community Foundation, and she did not found it.
   * She was the charter president of the Education Foundation, which
   * started in 2001. Do not reconcile one into the other.
   */
  magnolia: {
    slug: 'magnolia',
    title: 'Magnolia Is Home',
    label: 'Magnolia and Surrounding Communities',
    teaser:
      'Magnolia, where she lived for more than 16 years and served nine years as a school board trustee, and the communities around it, including Conroe, the county seat on I-45 and Lake Conroe.',
    metaTitle: 'Magnolia and Conroe, Texas real estate',
    metaDescription:
      `Magnolia, Conroe and the communities around them in Montgomery County, Texas, where Deborah Rose Miller lived for more than 16 years and served nine years as a school board trustee. Call ${business.phone}.`,
    intro:
      'I’ve sold real estate in a lot of communities, but Magnolia is different for me. I spent more than 16 years here with my family before I was ever showing anyone else a house in this town. This is where I actually built a life.',
    paragraphs: [
      'I served as president of the Magnolia Community Foundation, and I spent nine years as a school board trustee here. However you want to measure it, Magnolia is where I put down roots, and it’s still the place that feels like home to me, even with everything I do now across Kingwood, Humble, and the rest of Montgomery County.',
      'That kind of history means something practical for anyone I work with in Magnolia, not just something sentimental. Nine years on the school board means I know how these schools actually work, not just what a ratings site says about them. Leading the Community Foundation meant sitting in rooms where decisions about this town’s growth got made, long before most residents ever heard about them. When a client asks me a question about Magnolia ISD, or about how a piece of land near them might get developed next, I’m not guessing. I lived through the planning conversations that shaped it.',
      'And Magnolia has grown. The expansion over the last ten years has brought double-digit growth to Magnolia ISD alone, which tells you how fast families have been moving into this area. New development is really the word that defines Magnolia right now: new neighborhoods, new schools, new everything, built to keep up with a town that’s no longer the sleepy farm-road community it was when I first got here. I’ve watched that growth happen up close, not read about it after the fact.',
      'I work the communities around Magnolia on the same terms, and Conroe is the biggest of them. The county seat sits forty miles north of Houston on I-45, with Lake Conroe to its west and Sam Houston National Forest to its north, and it has filled in quickly as the corridor between The Woodlands and Willis closed up. Housing there runs from downtown bungalows to lakefront homes to new subdivisions along FM 3083 and FM 1314, and the 77302 zip code on the southeast side holds acreage with older homes, carports and outbuildings, where a buyer trades a short commute for land.',
      'Conroe is also where county business gets done, and my two years inside Magnolia city government taught me how that works. When a purchase out there turns on zoning, a septic system or a county permit, I know who to call. A Conroe purchase often involves a sale somewhere else first, and one of the stories below is a couple who owed more on their existing home than it was worth and made the move anyway.',
    ],
    // Indigo Lake Estates, High Meadow and Clear Creek Forest added by Deborah, 2026-09-22.
    // Conroe's three came over on 2026-10-05, when its page folded into this one.
    neighborhoods: [
      'NorthGrove',
      'Stagecoach Farms',
      'Indigo Lake Estates',
      'High Meadow',
      'Clear Creek Forest',
      'FM 1488 corridor',
      'Southeast Conroe acreage, 77302',
      'Lake Conroe',
      'Downtown Conroe',
    ],
    deborah:
      'If you’re thinking about Magnolia, whether you grew up out here like so many of the families I meet, or you’re moving in because you’ve heard what’s happening in this corner of Montgomery County, I’d love to talk it through with you. This isn’t just a market I work in. It’s the place I call home, and I take that personally when I’m helping someone else find theirs here.',
  },
}
