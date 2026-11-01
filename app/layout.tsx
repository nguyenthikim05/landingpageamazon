import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CtaRippleListener } from '@/components/landing/cta-ripple'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Bộ Lót Ly Mây Đan Thủ Công Kèm Khay Đựng | MAYTREDAN',
  description:
    'Khám phá bộ lót ly mây đan tự nhiên MAYTREDAN. Bộ 6 miếng lót ly kèm khay đựng đồng bộ, đan thủ công tại Việt Nam, mang vẻ đẹp mộc mạc và ấm áp cho không gian sống.',
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
    title: 'Bộ Lót Ly Mây Đan Thủ Công Kèm Khay Đựng | MAYTREDAN',
    description:
      'Mang nét mộc mạc tự nhiên và vẻ đẹp vượt thời gian vào từng khoảnh khắc thưởng trà, cà phê mỗi ngày với bộ 6 miếng lót ly mây đan thủ công và khay đựng đồng bộ.',
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
    <html lang="vi">
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
