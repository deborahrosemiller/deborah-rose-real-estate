# Claude instructions for this repo

The code says how the site works. This file carries the decisions the code cannot express on its own. Read `README.md` for where things live.

## Constraints that a future session would otherwise break in good faith

**No star ratings, review widgets, or review markup anywhere.** Her Google Business Profile sits at 3.0 from 2 reviews. Surfacing that hurts her. Do not add `aggregateRating`, `review`, or a testimonials section with placeholder quotes. Her trust signals are her record: forty-five years in business, thirty-six in the financial industry, two Houston mayors, Fellow Rotarian, past chair of the Humble ISD Education Foundation, RENE, HAR Platinum. Set those as type.

**No em dashes in site copy.** Brett's standing rule. Rewrite into two sentences. Never an en dash or a double hyphen instead. Deborah said on 2026-09-09 that she likes them; the rule held and she should hear that from Brett, not from a session quietly reversing it.

**No client names and no street addresses in published body copy.** Agreed with Deborah on 2026-09-04. Everything else from a transaction is fair to use: neighborhood, city, county, prices, days on market, timelines, obstacles, structure, outcome. Street addresses ARE permitted in image filenames, alt text and metadata (Brett, 2026-09-17), though the story photos leave them out so the body rule is not undone by a screen reader. Names of third-party professionals (other agents, escrow officers, lenders) are left out by default pending Deborah's review.

**Fair housing.** Describe the property and the place, never the people who live there or who would fit. Name a school district as a fact; never rate it or make it a reason to buy. Nothing about "safe," "family-friendly," "quiet," "exclusive," "young professionals," "retirees," or a religious institution as an amenity. In alt text, never describe people. The copy gate blocks the common phrases; judgment covers the rest.

**Nothing unclickable may look clickable.** No decorative pills, badges or cards that read as buttons. Eyebrows and metadata are set as type. Stats blocks are set as type with a hairline, never as bordered cards. One standing exception, Brett's own call on the live review of 2026-09-18: the five process steps on Buyers and Sellers sit in rounded boxes with a faint shadow (`.card`), all the same height, with no hover or other affordance. Do not extend the card treatment to anything else without him asking.

**One accent, on labels only.** The garnet rose (`--color-rose`) marks eyebrows, icons, the header underline and selection. It never fills a button.

**One corner radius, `--radius-card`.** Brett, live review 2026-09-18: story photos above articles take rounded corners and a soft shadow (`.photo-card`), the step boxes take the same radius (`.card`), and the story page hero photo already had it. Nothing else is rounded. Every aesthetic change given for one page applies to Buyers, Sellers, Stories, Areas and About without being asked again; the system is the system.

**Never a grey line with the same color on both sides of it.** Brett, 2026-09-18. Sections alternate between the white tone (`bg-field`) and the paper tone (`bg-paper`), and the change of tone is the divide. A hairline between two identical backgrounds reads as an accident. The section before `ClosingAsk` is always paper; `ClosingAsk` is white; the footer is paper.

**Secondary page headers are headers, not heroes.** `INTRO_BAND` in PageIntro.tsx is a shared minimum height (24rem from lg) used by Buyers, Sellers, Stories, Areas and About. The homepage keeps its full viewport hero. Tighten the type before growing the band.

**No fee or commission language anywhere.** Brett: "We don't want Deborah's website to talk about where I earn my fee or how I earn my fee." Not in the pages, the FAQ answers or the case studies. The Porter pool home story was rebuilt around the contract for this reason.

**No "honest" and no words whose only work is implying someone else is not.** Brett: "it implies that other things aren't." Honest, truthful, candid, frank, real talk, straight talk, no nonsense. Same fault as define-by-contrast. Say the thing itself.

**The site never explains its own editorial rules to the reader.** Brett: "I told you to NOT USE the client's name or the street address. I didn't tell you to TELL PEOPLE that we're not using the client's name and the street address." No mentioning what was left out, no explaining why something is anonymized, no meta commentary about the content. Comply silently.

**Her words beat invented words, every time they compete.** Every line Brett and Deborah cut on 2026-09-18 was one the build wrote; every replacement they liked was a phrase she actually says ("In a perfect world, what are you wanting?", "I've been self-employed all of my adult life," "It's in your best interest," "Communication is the key," "The number we choose is a strategy," "Every transaction has a story"). Before writing new copy, mine her meeting transcripts and the Voice Corpus (Google Doc 14DJj63yqyCXjakeVmZnkAp4jQN1f-pY--AsBAKxv_PQ). Tidier is what makes it sound like a bot. Her contractions stay. She advises, she does not dictate ("I highly recommend it," never "I insist"). No town names in FAQ answers unless the town is the point; naming one makes a reader assume the capability is local to it.

## Where her voice comes from

Every sentence in her first person is derived from her own dictated case study articles, which she spoke into Claude through Wispr Flow in September 2026. They are the seventeen files in `content/stories/`. Read three of them before writing anything in her voice. The rhythm: open with a principle, earn it with a story, name the county alongside the town, quantify the outcome, close with the lesson addressed to the reader. Plainspoken. "We were able to." "Checked all their boxes." "Win-win." "Smooth transaction."

## Canonical facts, one place

`src/lib/site.ts` is the only file that types the business name, phone, email, license number, brokerage, hours, service area, coordinates, profile URLs or Google Business Profile IDs. Change a fact there and every page, the footer and the schema follow.

- Business name: **Deborah Rose Real Estate Group**, everywhere. Brett and Deborah, 2026-09-21: "that's our official name that we want to use everywhere." It is what her logo says. Descriptive form: Deborah Rose Real Estate Group powered by eXp Realty LLC. Not "Deborah Rose Miller Real Estate Group." The older "Deborah Rose Real Estate" stays only as the schema alternateName while the Google Business Profile, Facebook Page and YouTube are renamed to match. Her business card reads Deborah Rose Miller, her full name.
- **Never publish her home address or coordinates.** The Google Business Profile is a service-area business whose hidden address is her home (Brett, 2026-09-21). No `address`, no `geo` on her business node, no street address in the footer. `business.mailingAddress` stays null until she supplies a PMB. Her main market is the Lake Houston area.
- **Rose Realty LLC is never public.** It is her LLC's legal name from when she was her own broker, kept for tax purposes. She does not use it publicly because it conflicts with eXp's rules now that eXp is her broker. No page, no alternateName, no legalName, even though TREC and her old Facebook Page name carry it.
- Phone: (281) 380-0332. Email: deborahroserealtor@gmail.com.
- Service area: Kingwood and Humble (the Lake Houston area), Porter, Conroe and Magnolia (Montgomery County). Five area pages, one each.
- Texas Real Estate Commission license 622917. Deborah confirmed it out loud on the live review of 2026-09-18.

## Facts Deborah corrected in person, live review 2026-09-18

These override her Brand and Website Copywriting Brief and her HAR bio where they disagree. She is the source of truth.

**Tomball is out.** The brief lists Tomball under Montgomery County. Deborah: "Technically Tomball is in Harris County, not Montgomery County. Let's remove Tomball from this list because I'm so out of touch with it and it doesn't fit within the Lake Houston and Montgomery County." Do not put it back from the brief. The only "Tomball" left on the site is inside the proper name of an organization she served, the Magnolia-Tomball YMCA. `/areas/tomball/` redirects to `/areas/`.

**Three different numbers, never interchangeable.** (1) **Fifty plus years** is her total career, in her words: "fifty plus years across the financial industry, which incorporates financial planning, school trustee, and municipal government." 1972 to today is fifty-four, so it is conservative and never needs a January update. Use it for the headline career claim. (2) **Thirty-six years in the financial industry, 1972 to 2008**, a banker first, then a financial planner, both years confirmed by her. Use it only where the financial credential is the point. Never imply fifty plus years of financial planning. (3) How long she owned Rose Financial Group is NOT stated. Her HAR bio says twenty-five years as owner; she herself was unsure ("probably 20 years at least") and is checking her resume. Until she confirms, the firm's duration is not stated anywhere: say she owned and ran it and sold it in 2008. Never write "ran a financial planning firm for thirty-six years." Read what each sentence is claiming before touching a number.

**Closing speed is a possibility, never a promise.** "A close can come in ten days to three weeks." "And part of that can include fast closes." Deborah: "it says it CAN, it doesn't guarantee that it will." Brett said "two days to three weeks" on the call; her brief says ten days to three weeks and that is what the site says until she confirms otherwise.

**The geography reads big to specific.** A hero eyebrow names the two markets (the Lake Houston area and Montgomery County); the paragraph under the headline names the five towns. Every town still appears on the page.

**No "Find me on Google" section.** Removed by Brett. The schema and the footer carry the local search signals.

**Her introduction is not "I am Deborah Rose Miller."** Brett: no human introduces themselves that way. The homepage About band opens on the maiden name. "Relevance is my mission" (her HAR tagline) does not sit under her name as a subhead.

**FAQ answers run three lines or fewer on desktop.** Brett's layout rule. About 240 characters.

**Never show a count that a reader could mistake for the size of her business.** Deborah, 2026-09-18: "if people see the count they may think that is all the sales she has." No "all seventeen stories," no "5 stories" beside an area. "Read more stories," "Read a few of the stories." Her HAR record is 38 sold and 9 leased; the site tells seventeen of them.

**Story photos: hero exterior, native size, never a screenshot, never upscaled.** Brett, 2026-09-18. The Property Archive on Drive holds HAR thumbnails (296 to 958 pixels) and screenshot PNGs, which is why the first build's 1600-pixel exports were soft. Check native pixel size before selecting; a card needs about 800 pixels, an article hero about 1,800. Where no acceptable source exists the story runs without a photo and the gap is listed in docs/story-photos.md for Deborah to fill. A stand-in photo of a different property is never acceptable (the Scolty Reach story carried a Skene Bend photo for a day).

## The Tailwind Plus components

`vendor/tailwind-plus/` holds the Marketing UI Blocks download from Brett's Tailwind Plus account (2026-09-17). Each site component names the block it came from in its header comment. When a new section is needed, start from a block there rather than hand-rolling one. The repo is private, which is what keeps the license clean.

## Launch checklist, not yet done

- The Google Business Profile's website field still points at har.com. At launch it changes to deborahroserealestate.com. That is a direct Map Pack signal currently handed to HAR.
- `HIDE_FROM_SEARCH_ENGINES` in `src/lib/site.ts` is `true`. Flip it to `false` at launch.
- Every host except deborahroserealestate.com answers `X-Robots-Tag: noindex, nofollow` (next.config.mjs, keyed on the request host). Review links on *.vercel.app stay out of Google without anything to undo at launch.
- `CONTACT_WEBHOOK_URL` must be set on Vercel before the contact form delivers anything.
- Deploy is push to `main`; Vercel builds. Nothing else.
