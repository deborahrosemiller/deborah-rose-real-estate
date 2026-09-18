# Open items for the call with Deborah, 2026-09-18

What the site currently says, and what needs her answer before launch. Every item here is marked in the code or the copy as a fact that was carried from a source rather than confirmed with her.

## Facts to confirm

1. **Brokerage line.** The site says "Deborah Rose Real Estate powered by eXp Realty LLC, One Riverway Ste 1700, Houston" in the footer, the About credentials and the schema. That is what HAR and the East Montgomery County Chamber publish. TREC's license record shows her as Broker (Individual), license 622917, designated broker for Rose Realty LLC, with no eXp sponsorship on file. Which line is correct for public display, and does eXp require its own display format?
2. **Information About Brokerage Services.** Texas requires a link to the broker's completed IABS form on every agent website. The footer links the TREC Consumer Protection Notice and leaves the IABS slot empty until she supplies the PDF or URL. `legal.iabsUrl` in `src/lib/site.ts`.
3. **Years at Rose Financial Group.** The site says twenty-five years, which is her HAR bio. Her Five Star bio says three decades; the September brief said two. One number, everywhere.
4. **Community titles.** The About page lists: past president of the Greater Magnolia Chamber (Houston Chronicle, 2016; her own bio says past board member), nine years on the Magnolia ISD board with two as president, past chair of the Humble ISD Education Foundation, founding member of the Magnolia Rotary Club, member of the Summer Creek Rotary Club, director of the Lake Houston Area Chamber, director and past chairman of the Magnolia-Tomball YMCA. Confirm each title and whether the current ones are still current.
5. **The Porter/New Caney community foundation** from the addendum could not be verified and is not on the site.
6. **Designations.** CLHMS and RENE are from HAR. Confirm both are current.
7. **Business name.** Google says "Deborah Rose Real Estate." The GoHighLevel account was set up as "Deborah Rose Miller Real Estate Group." The site uses the Google name and carries the Group name as an alternate in the schema.

## Assets still needed

8. **Headshot.** The only photo of Deborah anywhere in Drive is her 400 by 500 Google profile photo on a red background. It is on the site in grayscale at a size where it holds. A high resolution original, ideally on a neutral background, replaces `public/about/deborah-rose-miller.webp`.
9. **A photo for the Humble "under contract in a week" story.** There is no archive folder for that property, so the story runs without a hero image.
10. **The Magnolia new construction story** uses a builder representative photo from the HAR listing rather than a photo of the actual home.
11. **House numbers.** Seventeen hero photos were chosen from the archive by filename (aerials and backyards preferred). Not every one was inspected for a visible house number. Worth a two minute scroll through `/stories/`.
12. **Social profiles.** HAR and LinkedIn are in the schema. Facebook pages were found but not verified and are not linked. Instagram and YouTube unknown.

## Decisions Deborah made that the build did not follow

13. **Em dashes.** On September 9 she said she likes them and Brett agreed to keep them. Brett's standing rule for every site is no em dashes, and this build follows the rule. Every story was rewritten into two sentences where a dash had been. The copy gate (`pnpm check:copy`) fails on any em dash, so if she wants them back the gate changes first.
14. **Her own home as a client story.** The Humble "timing beat waiting" story is her own sale told in third person, as she chose on September 4. Her husband is going to leave the Google review for it. Flagging it because a reader who learns it was her own home could read the story as misleading.

## Technical, before launch

15. **Repository.** The build lives in `brettkmoore/deborah-rose-real-estate` (private) because her repo `deborahrosemiller/deborah-rose-real-estate` is read-only to Brett. Her Vercel project is wired to her repo. Either transfer this repo to her account and re-point Vercel, or connect Vercel to this one.
16. **Search visibility.** `HIDE_FROM_SEARCH_ENGINES` is `true`. Robots disallows everything and every page is noindex. Flip it at launch.
17. **Contact form.** `/api/contact` needs `CONTACT_WEBHOOK_URL` set on Vercel, pointed at a GoHighLevel inbound webhook. Until then the form tells the visitor it is not connected and shows the phone and email.
18. **Google Business Profile.** The profile's website field still points to HAR. At launch it changes to deborahroserealestate.com. The profile's service area should list the same six towns the site names. The profile pin sits near Conroe; that is fine for a service-area business.
19. **Reviews.** The site shows no star rating and carries no review markup on purpose. Two reviews at three stars stay off the site until the warm outreach lifts the count.
20. **Fair housing review.** The stories describe past clients' circumstances (a couple with children, newlyweds, grandparents, a medical move, a VA-eligible couple) as narrative, and every number is a transaction figure with HAR records in the Drive archive. The copy gate blocks the phrases that describe who a home is for. A pass by eXp's compliance desk before launch is still the right move.
21. **Tomball** has a page and no stories. The page says so plainly.
