/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      /* The case studies live at /stories/. /blog/ is the name people guess. */
      { source: '/blog', destination: '/stories/', permanent: true },
      { source: '/blog/:slug*', destination: '/stories/:slug*', permanent: true },
      { source: '/case-studies', destination: '/stories/', permanent: true },
      { source: '/neighborhoods', destination: '/areas/', permanent: true },
      { source: '/neighborhoods/:slug*', destination: '/areas/:slug*', permanent: true },
    ]
  },
}

export default nextConfig
