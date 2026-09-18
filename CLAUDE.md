# Claude instructions for this repo

The code says how the site works. This file carries the decisions the code cannot express on its own. Read `README.md` for where things live.

## Constraints that a future session would otherwise break in good faith

**No star ratings, review widgets, or review markup anywhere.** Her Google Business Profile sits at 3.0 from 2 reviews. Surfacing that hurts her. Do not add `aggregateRating`, `review`, or a testimonials section with placeholder quotes. Her trust signals are her record: forty-five years in business, twenty-five owning Rose Financial Group, two Houston mayors, Fellow Rotarian, past chair of the Humble ISD Education Foundation, RENE, HAR Platinum. Set those as type.

**No em dashes in site copy.** Brett's standing rule. Rewrite into two sentences. Never an en dash or a double hyphen instead. Deborah said on 2026-09-09 that she likes them; the rule held and she should hear that from Brett, not from a session quietly reversing it.

**No client names and no street addresses in published body copy.** Agreed with Deborah on 2026-09-04. Everything else from a transaction is fair to use: neighborhood, city, county, prices, days on market, timelines, obstacles, structure, outcome. Street addresses ARE permitted in image filenames, alt text and metadata (Brett, 2026-09-17), though the story photos leave them out so the body rule is not undone by a screen reader. Names of third-party professionals (other agents, escrow officers, lenders) are left out by default pending Deborah's review.

**Fair housing.** Describe the property and the place, never the people who live there or who would fit. Name a school district as a fact; never rate it or make it a reason to buy. Nothing about "safe," "family-friendly," "quiet," "exclusive," "young professionals," "retirees," or a religious institution as an amenity. In alt text, never describe people. The copy gate blocks the common phrases; judgment covers the rest.

**Nothing unclickable may look clickable.** No decorative pills, badges or cards that read as buttons. Eyebrows and metadata are set as type. Stats blocks are set as type with a hairline, never as bordered cards.

**One accent, on labels only.** The garnet rose (`--color-rose`) marks eyebrows, icons, the header underline and selection. It never fills a button. Photos take no radius.

## Where her voice comes from

Every sentence in her first person is derived from her own dictated case study articles, which she spoke into Claude through Wispr Flow in September 2026. They are the seventeen files in `content/stories/`. Read three of them before writing anything in her voice. The rhythm: open with a principle, earn it with a story, name the county alongside the town, quantify the outcome, close with the lesson addressed to the reader. Plainspoken. "We were able to." "Checked all their boxes." "Win-win." "Smooth transaction."

## Canonical facts, one place

`src/lib/site.ts` is the only file that types the business name, phone, email, license number, brokerage, hours, service area, coordinates, profile URLs or Google Business Profile IDs. Change a fact there and every page, the footer and the schema follow.

- Business name: Deborah Rose Real Estate. Descriptive form: Deborah Rose Real Estate powered by eXp Realty LLC.
- Phone: (281) 380-0332. Email: deborahroserealtor@gmail.com.
- Service area: Kingwood, Humble, Porter, Conroe, Magnolia, Tomball. Six area pages, one each.
- Texas Real Estate Commission license 622917, sourced from the TREC record and her HAR agent key; awaiting Deborah's own confirmation as of 2026-09-18.

## The Tailwind Plus components

`vendor/tailwind-plus/` holds the Marketing UI Blocks download from Brett's Tailwind Plus account (2026-09-17). Each site component names the block it came from in its header comment. When a new section is needed, start from a block there rather than hand-rolling one. The repo is private, which is what keeps the license clean.

## Launch checklist, not yet done

- The Google Business Profile's website field still points at har.com. At launch it changes to deborahroserealestate.com. That is a direct Map Pack signal currently handed to HAR.
- `HIDE_FROM_SEARCH_ENGINES` in `src/lib/site.ts` is `true`. Flip it to `false` at launch.
- Every host except deborahroserealestate.com answers `X-Robots-Tag: noindex, nofollow` (next.config.mjs, keyed on the request host). Review links on *.vercel.app stay out of Google without anything to undo at launch.
- `CONTACT_WEBHOOK_URL` must be set on Vercel before the contact form delivers anything.
- Deploy is push to `main`; Vercel builds. Nothing else.
