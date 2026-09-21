import type { Metadata } from 'next'
import { Playfair_Display, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SchemaGraph } from '@/components/SchemaGraph'
import { agentNode, brokerageNode, personNode, websiteNode } from '@/lib/schema'
import { DEFAULT_OG_IMAGE } from '@/lib/metadata'
import { agent, business, siteUrl, HIDE_FROM_SEARCH_ENGINES } from '@/lib/site'

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

/**
 * The homepage title says who, what and where in one line, because it is
 * the line an answer engine quotes: the business, the person, the job and
 * the two markets, Lake Houston first because it is her main market
 * (Deborah, 2026-09-21). The five towns are in the description. Interior
 * pages get "<page> · Deborah Rose Real Estate Group".
 */
const homeTitle = `${business.name} · ${agent.name}, Real Estate Broker, Lake Houston Area and Montgomery County, Texas`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s · ${business.name}`,
  },
  description: business.description,
  applicationName: business.name,
  authors: [{ name: agent.name, url: `${siteUrl}/about/` }],
  creator: agent.name,
  publisher: business.name,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: business.name,
    locale: 'en_US',
    title: homeTitle,
    description: business.description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: 'summary_large_image', title: homeTitle, description: business.description },
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
