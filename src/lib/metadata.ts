import type { Metadata } from 'next'

import { business } from '@/lib/site'

/** The share image every page uses unless it has its own. */
export const DEFAULT_OG_IMAGE = { url: '/hero/porter-estate-poster.webp', width: 1600, height: 843 }

/**
 * One page's title, description, canonical and Open Graph block, built
 * together so they never disagree. Next.js does not merge a page's
 * openGraph into the layout's; a page that sets none inherits the
 * homepage's og:url and og:title, which is what every interior page did
 * before this helper. The title passed in is the short one; the layout's
 * template adds the business name to <title>, and this adds it to og:title
 * the same way, because Open Graph titles are not templated.
 */
export function pageMetadata(opts: {
  title: string
  description: string
  path: string
  image?: { url: string; width: number; height: number }
  openGraph?: Metadata['openGraph']
}): Metadata {
  const fullTitle = `${opts.title} · ${business.name}`
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: 'website',
      url: opts.path,
      siteName: business.name,
      locale: 'en_US',
      title: fullTitle,
      description: opts.description,
      images: [opts.image ?? DEFAULT_OG_IMAGE],
      ...opts.openGraph,
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: opts.description },
  }
}
