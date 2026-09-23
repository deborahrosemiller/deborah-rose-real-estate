# Hero overlay and contrast, measured 2026-09-18

Brett, on the live review with Deborah: the dark overlay over the hero footage was "way too dark." Cut it by half; the words must stay readable, but "we really want to see the background." This note records what shipped and the numbers behind it, so the next change starts from measurement rather than taste.

## What shipped

The overlay is two layers on every hero (homepage and the four interior heroes on Buyers, Sellers, Stories and Areas), plus a text shadow.

**Layer 1, the ambient wash.** Exactly half of the previous values, across the whole frame.

| Hero | Before | After |
| --- | --- | --- |
| Homepage, bottom to top | 85 / 80 at 65% / 30 | 42 / 40 at 65% / 15 |
| Homepage, left to right | 60 / 30 at 55% / 0 | 30 / 15 at 55% / 0 |
| Interior, below lg, bottom to top | 85 / 82 at 70% / 55 | 42 / 41 at 70% / 28 |
| Interior, from lg, left to right | 82 / 80 at 70% / 30 | 41 / 40 at 70% / 15 |

**Layer 2, a band directly behind the copy.** New. It carries the density the type needs without dimming the rest of the frame.

| Hero | Band |
| --- | --- |
| Homepage, from lg, left to right | 50 held to the 50% mark, gone by 72% |
| Homepage, below lg, top to bottom | 15 at the top, 50 from the 12% mark, held to 80%, 18 at the foot (2026-09-22) |
| Interior, from lg, left to right | 55 held to the 55% mark, gone by 75% |
| Interior, below lg, top to bottom | 15 at the top, 52 from the 10% mark to the foot (2026-09-22) |

**Text shadow** on the headline and paragraph (`.hero-copy` in `src/styles/tailwind.css`): `0 1px 2px rgb(0 0 0 / 0.6), 0 0 28px rgb(0 0 0 / 0.5)`. The paragraphs went from 90 percent white to solid white.

Combined, the overlay behind the copy is about 70 to 75 percent (it was 86). Outside the band it is 15 to 40 percent (it was 30 to 85). The house on the right of the frame sits under the wash alone.

## How it was measured

1. **The brightest frame.** `ffmpeg signalstats` on the graded 1080 file, cropped to the region of the frame that sits behind the copy block on a desktop viewport, per frame. The 90th percentile luma (YHIGH) peaks at 217 of 255 (tv range) at 4.6 seconds; the whole-frame peak is 216 at 2.7 seconds. Converted from BT.709 to linear that is a background luminance of 0.823. This is the brightest tenth of the pixels behind the copy at the brightest moment of the loop, which is the standard the first build used. The average luma behind the copy peaks at 171 (linear 0.46), so most of the type sits over something much darker than the number used here.
2. **The overlay at the type.** The gradient stops above, evaluated at every point of each text box (from `getBoundingClientRect` on the live page), taking the lightest point.
3. **The shadow.** Rendered on a canvas in the browser with the same fonts (Playfair Display 72px, Geist 20px) and the same two shadows, then the mean shadow alpha in the pixels immediately touching a glyph. Measured: 0.274 behind the headline, 0.243 behind the paragraph. The shadow is treated as darkening only at the glyph edge, which is where contrast is read.
4. **Contrast** is WCAG relative luminance contrast of white over `background × overlay transmission × (1 − shadow)`.

Script: the Python block in the session that produced this file is reproduced in spirit by the table below; rerun it by re-evaluating the stops in `Hero.tsx` and `PageIntro.tsx` if any of them change.

## Results, lightest point of each text box, brightest frame

| Hero | Text | Overlay at that point | With shadow | Without shadow |
| --- | --- | --- | --- | --- |
| Homepage, desktop 2054 wide | Headline | 70% | **4.57:1** | 3.53:1 |
| Homepage, desktop 2054 wide | Paragraph | 75% | **5.14:1** | 4.14:1 |
| Homepage, phone 375 wide | Headline | 65% | **4.12:1** | 3.16:1 |
| Homepage, phone 375 wide | Paragraph | 71% | **4.57:1** | 3.66:1 |
| Buyers, desktop 2054 wide | Headline | 73% | **4.98:1** | 3.87:1 |
| Buyers, desktop 2054 wide | Paragraph | 73% | **4.83:1** | 3.87:1 |
| Buyers, phone 375 wide | Headline | 72% | **4.93:1** | 3.82:1 |
| Buyers, phone 375 wide | Paragraph | 74% | **5.03:1** | 4.04:1 |

Targets: 4.5:1 for the paragraph, 3:1 for the headline. Every cell passes with the shadow. The interior numbers hold for Sellers, Stories and Areas, which share the same band and the same copy widths.

For reference, the pure 50 percent cut on its own, with no band and no shadow, puts the homepage paragraph at **2.29:1** on the same frame. That is why the band and the shadow exist.

## The order of remedies, if a ratio ever fails again

Set on the live review of 2026-09-18. Never put the global darkness back.

1. Tighten the band behind the type (narrower, denser). Leave the ambient wash alone.
2. Strengthen the text shadow.
3. Increase the type weight.
4. Only then add overlay density, and say so out loud, with the tradeoff.

## Lightened for phones, 2026-09-22

Deborah, reviewing on her phone: the photos were too dark to make out. Measured against the same brightest frame and the same shadow alphas, with the text boxes read off the live page at 375 wide.

**Homepage.** The copy block ends at 79 percent of the band, so the band now holds 50 percent to the 80 percent mark and lifts to 18 by the foot. No type sits over the lighter part, so no ratio moves: the headline stays 4.12:1 and the paragraph 4.57:1. Below the buttons the footage goes from 29 percent showing to 48.

**Interior headers.** The type fills 17 to 91 percent of a 434px band, so there is no empty region to lift. The band came down from 55 to 52, which is what the 4.5:1 paragraph target allows: the paragraph moves from 4.87:1 to 4.64:1 and the headline from 5.03:1 to 4.79:1 by the formula in this note. 52 lets 6 percent more of the footage through; 50 would put the paragraph at 4.49:1 and fail.

If she needs the interior headers brighter than this, the overlay is not the lever any more. The options are a brighter passage of footage behind those bands, or type large or bold enough to take the 3:1 large-text target instead of 4.5:1. Both are Brett's calls.

## The overlay came off the phones entirely, 2026-09-22 (evening)

Deborah, checking the homepage again on her phone after the afternoon change: still "practically black," she could not tell what the photos were, and she asked for the dark overlay off. She is open to changing the backdrop image as well.

The overlay exists for one reason: white type over moving footage. So below lg the type came off the footage instead of the overlay coming off the type.

**Both heroes, below lg.** The footage plays in a band at the top of the page at full brightness, with no ambient wash and no copy band at all, and the eyebrow, headline and paragraph sit under it on the white field in ink. Contrast goes from 4.12:1 and 4.57:1 on the homepage, and 4.79:1 and 4.64:1 on the interior pages, to roughly 16:1 and 9:1: ink `#111111` and ink-soft `#454545` on `#ffffff`. The text shadow is scoped to lg for the same reason.

**From lg nothing changed.** The full-screen hero, the two overlay layers, the band behind the copy, the white type and the shadow are all exactly as Brett set them on 2026-09-18, and the numbers in the table above still describe them.

The band is 44svh on phones, floor 14rem, ceiling 26rem, in `.hero-media`. Brett's rule that an aesthetic change given for one page applies to the rest is why Buyers, Sellers, Stories and Areas took the same treatment the same night. Both are for his review on 2026-09-23; reverting is one commit.
