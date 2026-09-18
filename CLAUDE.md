# Claude instructions for this repo

The code says how the site works. This file carries the decisions the code cannot express on its own. Read `README.md` for where things live.

## Constraints that a future session would otherwise break in good faith

**No star ratings, review widgets, or review markup anywhere.** Her Google Business Profile sits at 3.0 from 2 reviews. Surfacing that hurts her. Do not add `aggregateRating`, `review`, or a testimonials section with placeholder quotes. Her trust signals are her record: forty-five years in business, thirty-six in the financial industry, two Houston mayors, Fellow Rotarian, past chair of the Humble ISD Education Foundation, RENE, HAR Platinum. Set those as type.

**No em dashes in site copy.** Brett's standing rule. Rewrite into two sentences. Never an en dash or a double hyphen instead. Deborah said on 2026-09-09 that she likes them; the rule held and she should hear that from Brett, not from a session quietly reversing it.

**No client names and no street addresses in published body copy.** Agreed with Deborah on 2026-09-04. Everything else from a transaction is fair to use: neighborhood, city, county, prices, days on market, timelines, obstacles, structure, outcome. Street addresses ARE permitted in image filenames, alt text and metadata (Brett, 2026-09-17), though the story photos leave them out so the body rule is not undone by a screen reader. Names of third-party professionals (other agents, escrow officers, lenders) are left out by default pending Deborah's review.

**Fair housing.** Describe the property and the place, never the people who live there or who would fit. Name a school district as a fact; never rate it or make it a reason to buy. Nothing about "safe," "family-friendly," "quiet," "exclusive," "young professionals," "retirees," or a religious institution as an amenity. In alt text, never describe people. The copy gate blocks the common phrases; judgment covers the rest.

**Nothing unclickable may look clickable.** No decorative pills, badges or cards that read as buttons. Eyebrows and metadata are set as type. Stats blocks are set as type with a hairline, never as bordered cards.

**One accent, on labels only.** The garnet rose (`--color-rose`) marks eyebrows, icons, the header underline and selection. It never fills a button. Photos take no radius, with one exception: the story page hero photo, which follows buddybuck.com's article layout at Brett's request (2026-09-18), sits in a rounded, shadowed frame straddling the dark band and the white body.

## Where her voice comes from

Every sentence in her first person is derived from her own dictated case study articles, which she spoke into Claude through Wispr Flow in September 2026. They are the seventeen files in `content/stories/`. Read three of them before writing anything in her voice. The rhythm: open with a principle, earn it with a story, name the county alongside the town, quantify the outcome, close with the lesson addressed to the reader. Plainspoken. "We were able to." "Checked all their boxes." "Win-win." "Smooth transaction."

## Canonical facts, one place

`src/lib/site.ts` is the only file that types the business name, phone, email, license number, brokerage, hours, service area, coordinates, profile URLs or Google Business Profile IDs. Change a fact there and every page, the footer and the schema follow.

- Business name: Deborah Rose Real Estate. Descriptive form: Deborah Rose Real Estate powered by eXp Realty LLC.
- Phone: (281) 380-0332. Email: deborahroserealtor@gmail.com.
- Service area: Kingwood and Humble (the Lake Houston area), Porter, Conroe and Magnolia (Montgomery County). Five area pages, one each.
- Texas Real Estate Commission license 622917. Deborah confirmed it out loud on the live review of 2026-09-18.

## Facts Deborah corrected in person, live review 2026-09-18

These override her Brand and Website Copywriting Brief and her HAR bio where they disagree. She is the source of truth.

**Tomball is out.** The brief lists Tomball under Montgomery County. Deborah: "Technically Tomball is in Harris County, not Montgomery County. Let's remove Tomball from this list because I'm so out of touch with it and it doesn't fit within the Lake Houston and Montgomery County." Do not put it back from the brief. The only "Tomball" left on the site is inside the proper name of an organization she served, the Magnolia-Tomball YMCA. `/areas/tomball/` redirects to `/areas/`.

**Thirty-six years in the financial industry, 1972 to 2008.** A banker first, then a financial planner. Both years confirmed by her. This is her career figure and it is the one the site states. It is NOT how long she owned Rose Financial Group. Her HAR bio says twenty-five years as owner; she herself was unsure ("probably 20 years at least") and is checking her resume. Until she confirms, the firm's duration is not stated anywhere: say she owned and ran it and sold it in 2008. Never write "ran a financial planning firm for thirty-six years." Read what each sentence is claiming before touching a number.

**Closing speed is a possibility, never a promise.** "A close can come in ten days to three weeks." "And part of that can include fast closes." Deborah: "it says it CAN, it doesn't guarantee that it will." Brett said "two days to three weeks" on the call; her brief says ten days to three weeks and that is what the site says until she confirms otherwise.

**The geography reads big to specific.** A hero eyebrow names the two markets (the Lake Houston area and Montgomery County); the paragraph under the headline names the five towns. Every town still appears on the page.

**No "Find me on Google" section.** Removed by Brett. The schema and the footer carry the local search signals.

**Her introduction is not "I am Deborah Rose Miller."** Brett: no human introduces themselves that way. The homepage About band opens on the maiden name. "Relevance is my mission" (her HAR tagline) does not sit under her name as a subhead.

**FAQ answers run three lines or fewer on desktop.** Brett's layout rule. About 240 characters.

## The Tailwind Plus components

`vendor/tailwind-plus/` holds the Marketing UI Blocks download from Brett's Tailwind Plus account (2026-09-17). Each site component names the block it came from in its header comment. When a new section is needed, start from a block there rather than hand-rolling one. The repo is private, which is what keeps the license clean.

## Launch checklist, not yet done

- The Google Business Profile's website field still points at har.com. At launch it changes to deborahroserealestate.com. That is a direct Map Pack signal currently handed to HAR.
- `HIDE_FROM_SEARCH_ENGINES` in `src/lib/site.ts` is `true`. Flip it to `false` at launch.
- Every host except deborahroserealestate.com answers `X-Robots-Tag: noindex, nofollow` (next.config.mjs, keyed on the request host). Review links on *.vercel.app stay out of Google without anything to undo at launch.
- `CONTACT_WEBHOOK_URL` must be set on Vercel before the contact form delivers anything.
- Deploy is push to `main`; Vercel builds. Nothing else.
