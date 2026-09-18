# Open items for the review pass with Deborah, 2026-09-18

Updated after the second build on 2026-09-17. What the site currently says, where it came from, and what needs an answer before launch. Numbered so the call can walk it top to bottom.

## Settled since the first build

- Brokerage line: **Deborah Rose Real Estate powered by eXp Realty LLC**, One Riverway Ste 1700, Houston 77056. From her own HAR profile. TREC's record still lists her as designated broker for Rose Realty LLC; that is now a footnote for her, not a build question.
- Phone (281) 380-0332, confirmed on her Google Business Profile and HAR.
- Google Business Profile located and wired in: name, phone, hours, coordinates, place ID, Maps link, review link.
- Two markets confirmed: Lake Houston area and Montgomery County. Six towns per the brand brief: Kingwood, Humble, Porter, Conroe, Magnolia, Tomball.
- Facebook (facebook.com/deborahrose.miller.9) and LinkedIn (linkedin.com/in/roserealty) from her HAR profile, in the footer and the schema.
- Information About Brokerage Services: linked in the footer, on every page including the homepage, using the IABS page HAR generates for license 622917 (the same link her HAR profile carries). Consumer Protection Notice linked to TREC. Brokerage displayed. Equal Housing statement and mark in the footer.
- TREC license number 622917 is on the site (footer legal block, About credentials, schema). Source: the TREC license holder record in the public research summary, corroborated by her HAR profile, which uses the same number as her agent key. **Deborah confirms it on the call.** It is a compliance-bearing number and it has not yet been read back to her.
- Footer rebuilt to the yournextstepteam.com pattern (another eXp agent): service area in prose, three link columns, a trust row set as type, and the legal block with agent identification, brokerage identification, both TREC links, the REALTOR mark sentence, the opinions line and Equal Housing.
- Seventeen articles, eighteen properties with a narrative, twenty-two properties in the interview brief. Reconciled 2026-09-18 against the Interview Prep Brief line by line: the brief lists 22 properties; Deborah gave a narrative for 18 of them; those 18 became 17 articles because one article (the Humble sell-then-buy story) covers two properties, the Lake Prince Lane sale and the Blackstone River Drive purchase, which were the same clients three weeks apart. Nothing is missing. **The four properties with no article**, all marked "skipped, not covered in interview" in the brief: Opal Stone Court in Kingwood (a 2021 buyer-side purchase, 4 bed, photos archived); Skene Bend Drive in Humble (a 2021 listing in Balmoral, sold in 11 days, photos archived); Splintwood Court in Kingwood (no archive folder, no records found); and the second Lake Prince Lane home in Houston 77044 (a 2022 listing sold two weeks apart from its neighbor, two photos archived). If Deborah wants to reach twenty-one stories, those four are the interview list, and Opal Stone and Skene Bend already have the photos and the HAR numbers on file.
- The voice corpus (Google Doc 14DJj63yqyCXjakeVmZnkAp4jQN1f-pY--AsBAKxv_PQ) was read in the first pass and re-checked against the built copy on 2026-09-18. None of its banned filler ("stunning," "must-see," "dream come true") appears anywhere on the site. Its go-to phrase "checked all their boxes" had been paraphrased in five stories and is now restored in her wording. "We were able to," "win-win," "smooth transaction," "heavy buyer's market," "heavy seller's market," "referral from an existing client" and "patience and creativity made it a win-win" are all in use where the stories earned them.
- Photo folders: 22 property folders exist in the archive. Every story has a hero photo except one (below).

## Facts for Deborah to confirm

0. **TREC license number 622917.** Read it back to her. See above. The public research summary (Google Doc 1J06UDbmrkeNVl-AU1RMpB0RjIz2_rMA2UE_HulE7PnM) records the TREC License Holder Search result as "Deborah Rose Miller, License #622917-B, Broker (Individual), Status: Active, expires 10/31/2026," business address in Porter, designated broker for Rose Realty LLC. Two things follow: the sourcing note above is accurate, and **the license shows an expiry of October 31, 2026**, six weeks out. Renewal is routine, and it belongs on the call.
1. **Years at Rose Financial Group.** Site says twenty-five (her HAR bio). Her Five Star bio says three decades; the September brief said two. One number, everywhere.
2. **Community titles on the About page.** Past president of the Greater Magnolia Chamber (Houston Chronicle, 2016; her own bio says past board member). Nine years on the Magnolia ISD board, two as president. Past chair, Humble ISD Education Foundation. Founding member, Magnolia Rotary Club. Member, Summer Creek Rotary Club. Director, Lake Houston Area Chamber. Director and past chairman, Magnolia-Tomball YMCA. "Served two Houston mayors" is her HAR bio's phrase and is on the About page as written.
3. **The Porter/New Caney community foundation** from the addendum could not be verified and is not on the site.
4. **Designations.** RENE is visible on HAR. CLHMS appears on her HAR About Me page. Both are listed. Confirm both are current.
5. **Production figures on the About page**, set as type: 45+ years business leadership, 25 years Rose Financial Group, 10+ years real estate, 38 sold per HAR. All from her HAR profile.
6. **The numbers table on each story.** List price, sold price, days on market, beds, baths, square feet, year built, neighborhood and closing month, from the HAR records in the archive. Two conflicts worth her eye: the Magnolia new construction story shows list price only because the archive's sold figure ($399,990) and the email record ($390,522) disagree; the Porter pool home story shows no prices because the HAR listing in the archive is a 2026 resale of the same address by different agents, not her 2024 transaction.
7. **Third-party names.** Lenders, title companies, escrow officers and other agents from the interview brief are left out of every story by default. Deborah decides whether any belong.

## Assets still needed

7a. **Logo source file.** The logo on the site was lifted from the 1080p end card of her Riverwalk listing video, trimmed and keyed to transparency. It is clean at header and footer sizes. A vector or high resolution original from whoever designed it (the video editor may have it) would replace the two files in `public/brand/`.

8. **Headshot.** The only photo of Deborah in Drive is her 400 by 500 Google profile photo. On 2026-09-18 Brett had it removed from the homepage About band and the About page, where it was upscaled and read soft; those sections are type only now and are no longer waiting on a photo. It survives at 40 pixels on the story bylines, where it is downscaled and sharp, and as the `image` in the Person and agent schema and Open Graph. A high resolution original is still wanted for those three uses and would replace `public/about/deborah-rose-miller.webp`.
9. **A photo for the Humble "under contract in a week" story.** There is no archive folder for that property. The card and page render without an image.
10. **The Magnolia new construction story** uses a builder representative photo from the HAR listing rather than the actual home.
11. **House numbers.** The seventeen hero photos were chosen by filename, aerials and backyards first. Not every one has been inspected for a visible house number. Two minutes on `/stories/` settles it.
12. **Video captions.** The hero video has music and no speech, so there is no transcript to attach. The VideoObject schema carries name, description, thumbnail and upload date.

## Decisions to raise

13. **Em dashes.** On September 9 she said she likes them. Brett's rule for every site is none, and this build follows it. The copy gate fails on any em dash.
14. **Her own home as a client story.** The Humble "timing beat waiting" story is her own sale told in third person, as she chose. A reader who learns it was her home could read it as misleading. Her husband is going to leave the Google review for it.
15. **Fair housing.** Stories describe past clients' circumstances (a couple with children, newlyweds, grandparents, a medical move, a VA-eligible couple) as narrative, and the two-week-close story reports the client's school priority in the client's frame and names Humble ISD as a fact. The copy gate blocks the phrases that describe who a home is for. Local ordinances beyond the federal seven were not checked. A pass by eXp's compliance desk before launch is the right move.

## Footer wording to confirm with eXp

- "Brokered by eXp Realty LLC", "eXp Realty LLC is a licensed Texas real estate brokerage," and "Opinions expressed are my own and not the views of eXp Realty" follow the pattern on another eXp agent's live footer. They are an observed example, not eXp's published brand policy. Deborah should confirm the required wording and any logo lockup against eXp's agent portal guidelines before launch.
- The REALTOR® mark and the NAR Code of Ethics sentence apply because she is a HAR member. Usage rules come from NAR; confirm the mark is set the way NAR asks.
- **Mailing address.** The footer's Get in touch column has a slot for a mailing address and it is empty. An agent without a storefront usually uses a PMB rather than a home address. The eXp corporate address is the brokerage's and is not used as hers. This is the one blocking gap in the footer.

## Technical, before launch

16. **Repository.** The build lives in `brettkmoore/deborah-rose-real-estate` (private) because her repo `deborahrosemiller/deborah-rose-real-estate` is read-only to Brett and is what her Vercel project points at. Transfer this repo to her account and re-point Vercel, or connect Vercel to this one.
17. **Search visibility.** `HIDE_FROM_SEARCH_ENGINES` is `true`. Flip it at launch.
18. **Contact form.** `CONTACT_WEBHOOK_URL` on Vercel, pointed at a GoHighLevel inbound webhook. Until then the form tells the visitor it is not connected and shows the phone and email.
19. **Google Business Profile website field** points at har.com. At launch it changes to deborahroserealestate.com. That is a direct Map Pack signal currently handed to HAR. The profile's service area should list the same six towns the site names.
20. **Her HAR "Website" tab** redirects to a HAR page that returns "We couldn't find your page." She has no working website today.
21. **IABS hosting.** The footer links HAR's generated IABS page. A PDF of eXp's IABS with her name, hosted on this domain, would be sturdier. HAR's page challenges some visitors with a bot check.
22. **Reviews.** No star rating, no review widget, no review markup anywhere, by decision. Two reviews at three stars stay off the site.
23. **Current listings** link out to her HAR listings page from the footer. A listings page on this site is a later addition if she wants one; the two active listings (Kingwood, Point Blank) are on HAR.
24. **Tomball** has a page and no stories. The page says so plainly.
