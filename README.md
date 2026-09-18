# Deborah Rose Real Estate

The website for Deborah Rose Miller, deborahroserealestate.com. Residential real estate across the Lake Houston area and Montgomery County, Texas: Kingwood, Humble, Porter, Conroe, Magnolia and Tomball.

Built 2026-09-17 by Best Known Brand. Next.js 16, React 19, Tailwind CSS 4, deployed on Vercel.

## Run it

```
pnpm install
pnpm dev
```

Then open http://localhost:3000.

```
pnpm typecheck      # tsc
pnpm lint           # eslint
pnpm check:copy     # the copy gate, see below
pnpm build          # production build
```

## Where things live

| What | Where |
|---|---|
| Every fact about the business: name, phone, email, license, brokerage, hours, service area, Google profile IDs | `src/lib/site.ts` |
| The seventeen client stories, one Markdown file each with front matter | `content/stories/` |
| The six service area pages' copy | `src/content/areas.ts` |
| The FAQ blocks on the home, buyers and sellers pages | `src/content/faq.ts` |
| JSON-LD builders (RealEstateAgent + LocalBusiness, Person, WebSite, BlogPosting, BreadcrumbList, FAQPage) | `src/lib/schema.ts` |
| Design tokens and the few CSS rules utilities cannot carry | `src/styles/tailwind.css` |
| Hero video and poster | `public/hero/` |
| One hero photo per story, 1600px WebP | `public/stories/` |
| Headshot, used only at 40px on story bylines and in the schema | `public/about/` |
| Her logo (from her listing video end card) and the rose mark | `public/brand/` |
| Tailwind Plus Marketing UI Blocks, the source for every section component | `vendor/tailwind-plus/` |

## Components

Every section is built from a Tailwind Plus Marketing block, rethemed to the tokens in `src/styles/tailwind.css`. Each component's header comment names its block. The mapping:

| Site component | Tailwind Plus block |
|---|---|
| `Navbar` | Elements, Headers, With call-to-action |
| `Hero` | Heroes, Simple centered with background image (the video plays full bleed behind a white copy panel) |
| `FeatureThree` | Feature sections, Simple three column with small icons |
| `FeatureSplit` | Feature sections, Centered 2x2 grid (left aligned, header on top) |
| `Timeline` | Stats sections, Timeline (used for a process) |
| `AreaGrid` | Feature sections, Simple 3x2 grid |
| `StoryCard` | Blog sections, Three-column with images |
| `Credentials` | Stats sections, Two-column description (the list only, as type) |
| `PageIntro` | Heroes, Simple centered with background image (full-bleed graded footage, directional scrim, white type, fixed height) |
| `FAQList` | FAQ sections, Two columns |
| `ClosingAsk` | CTA sections, Simple centered |
| `Footer` | Footers, 4-column with company mission |
| Contact page | Contact sections, Side-by-side grid (header on top) |
| About page | Header sections, Simple with eyebrow, with a circle portrait beside the H1 |
| 404 | Feedback, 404 pages, Simple |

What was stripped from every block, on purpose: rounded corners on photos and panels, drop shadows, the indigo accent, announcement pills, arrow glyphs on links, and any container that reads as a button without being one.

## Routes

`/` home, `/buyers/`, `/sellers/`, `/about/`, `/stories/` and `/stories/<slug>/`, `/areas/` and `/areas/<slug>/`, `/contact/`, `/sitemap.xml`, `/robots.txt`. `/blog/` and `/neighborhoods/` redirect to `/stories/` and `/areas/`.

## Search visibility

`HIDE_FROM_SEARCH_ENGINES` in `src/lib/site.ts` is `true`. Robots disallows everything and every page carries noindex. Flip it to `false` at launch.

## The contact form

`/api/contact` forwards submissions as JSON to `CONTACT_WEBHOOK_URL` (a GoHighLevel inbound webhook). Until that environment variable is set on Vercel, the form tells the visitor it is not connected and shows the phone number and email instead.

## Adding a story

Copy any file in `content/stories/`, change the front matter, write the body in Markdown, run `pnpm check:copy`. The date decides the order. `area` must be one of the six slugs in `src/lib/site.ts` or `null`. The hero photo goes in `public/stories/<slug>.webp` at 1600px wide; the alt text follows the pattern feature, property, neighborhood, city, Texas, and never contains a street address.

## The copy gate

`scripts/check-copy.mjs` fails on em dashes, en dashes, double hyphens in prose, the "not X, it's Y" reframe, British spellings, fair housing phrases that describe people rather than property, and any client surname or street address from the internal interview brief. It runs on `content/` and `src/`. Run it before every commit.

## Rules that are not negotiable

- No client names and no street addresses in any story, alt text or metadata. Agreed with Deborah on 2026-09-04.
- Every number in marketing copy has a record behind it. The HAR records for each transaction are in the Google Drive property archive.
- Nothing that cannot be clicked may look clickable. No pills, no badges, no decorative cards.
- Photos take no border radius. The one accent, the garnet rose, never fills a button.
- American spelling. No em dashes.
