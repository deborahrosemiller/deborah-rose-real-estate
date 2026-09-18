import type { Metadata } from 'next'
import { Playfair_Display, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SchemaGraph } from '@/components/SchemaGraph'
import { agentNode, brokerageNode, personNode, websiteNode } from '@/lib/schema'
import { business, siteUrl, HIDE_FROM_SEARCH_ENGINES } from '@/lib/site'

import '@/styles/tailwind.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name}. Kingwood, Humble, Porter, Conroe, Magnolia and Tomball.`,
    template: `%s · ${business.name}`,
  },
  description: business.description,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: business.name,
    title: business.name,
    description: business.description,
    images: [{ url: '/hero/porter-estate-poster.webp', width: 1600, height: 843 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: HIDE_FROM_SEARCH_ENGINES ? { index: false, follow: false } : { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${geist.variable}`}>
      <body className="flex min-h-full flex-col bg-field font-sans text-ink">
        <SchemaGraph nodes={[websiteNode(), agentNode(), personNode(), brokerageNode()]} />
        <Navbar />
        <main className="flex-auto">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
