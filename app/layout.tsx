import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CtaRippleListener } from '@/components/landing/cta-ripple'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'VELNURIO – Đai Hỗ Trợ Tư Thế Lưng & Vai Công Thái Học',
  description:
    'Đai hỗ trợ tư thế VELNURIO chính hãng với lưới thoáng khí, đệm mút êm ái, đai dán điều chỉnh linh hoạt. Giúp duy trì tư thế ngồi thẳng tự nhiên khi làm việc và học tập.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'VELNURIO – Smart Solutions for Everyday Living',
    description: 'Đai hỗ trợ tư thế lưng trên và vai thoáng khí, thiết kế công thái học hiện đại.',
    images: ['/images/velnurio/product-main.webp'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0c1929',
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
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
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
