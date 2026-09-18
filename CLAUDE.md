# Claude instructions for this repo

Read `README.md` first. It says where everything lives.

## Facts

`src/lib/site.ts` is the only place a phone number, email, license number, brokerage name, hour, city or Google profile ID is typed. If a fact changes, it changes there.

Two facts are still open as of 2026-09-17 and are marked in that file: which brokerage line is correct for public display (TREC shows Rose Realty LLC as her own broker company; HAR and her chamber press say "powered by eXp Realty LLC"), and the URL of her completed Information About Brokerage Services form. Do not resolve either by guessing.

## Copy

- No em dashes. Rewrite into two sentences. Never an en dash or a double hyphen instead.
- American spelling.
- No "it's not X, it's Y." No comma reframes. No triads for rhythm. No sentence that could be cut.
- Stories are in Deborah's first person. Plainspoken, numbers over adjectives, "we were able to," "checked all their boxes," "win-win," "smooth transaction."
- No client names, no street addresses, anywhere public. The internal interview brief in Drive has names; it never leaves Drive.
- Fair housing: describe the property and the place, never the people who live there or who would fit. Name the district; never rate the schools. No "safe." No "family-friendly."
- Run `pnpm check:copy` before committing.

## Design

- White ground, ink type, one accent (`--color-rose`) on labels only. Playfair Display for display, Geist for everything else.
- No radius on photos. No shadows on containers. No pills. A container that cannot be clicked must not look like a card that can.
- The hero video carries the section; the words sit on their own white panel. Never put type over moving footage.
- Every primary action goes to `/contact/`. There is one primary button per section.

## Do not

- Do not publish. `HIDE_FROM_SEARCH_ENGINES` stays `true` until Brett flips it.
- Do not add a star rating or review markup. The Google profile has two reviews at three stars; nothing about that goes on the site.
- Do not add a stats row to the homepage.
