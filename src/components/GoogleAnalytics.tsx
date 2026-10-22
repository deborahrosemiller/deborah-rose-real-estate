import Script from 'next/script'

import { analytics } from '@/lib/site'

/**
 * Google Analytics 4, the snippet Google hands out, adapted to the app
 * router. `afterInteractive` loads the tag once the page is interactive,
 * so it never blocks the first paint or the hero video, and gtag.js is
 * fetched async on top of that.
 *
 * It renders on every page and on every deployment. An earlier version
 * only rendered when VERCEL_ENV was "production", to keep review clicks
 * on *.vercel.app out of the reports. That is the wrong place to do it:
 * every page here is prerendered at build time, so the check runs during
 * the build and bakes its answer into static HTML, and a build that did
 * not happen to carry the variable would ship a site with no analytics
 * and nothing to show for it. Preview traffic is better excluded in GA4
 * itself, which can filter on hostname, than by a flag that fails quietly.
 *
 * Vercel's own Analytics and Speed Insights run alongside this in
 * layout.tsx. They measure different things and do not conflict.
 */
export function GoogleAnalytics() {
  if (!analytics.ga4) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analytics.ga4}');`}
      </Script>
    </>
  )
}
