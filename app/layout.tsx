import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CtaRippleListener } from '@/components/landing/cta-ripple'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Handcrafted Natural Rattan Coasters with Matching Holder | MAYTREDAN',
  description:
    'Discover MAYTREDAN authentic handmade natural rattan coaster set. Complete 7-piece set including 6 round coasters and 1 matching circular holder, handcrafted in Vietnam for warm everyday living.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Handcrafted Natural Rattan Coasters with Matching Holder | MAYTREDAN',
    description:
      'Warm organic living essentials for coffee & tea rituals. 6 handwoven rattan coasters with matching circular holder made in Vietnam.',
    images: ['/images/maytredan/hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#713B19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700;900&family=Noto+Serif:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CtaRippleListener />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
