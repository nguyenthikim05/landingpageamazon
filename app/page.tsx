import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { LimitedOffer } from '@/components/landing/limited-offer'
import { Features } from '@/components/landing/features'
import { LifestyleBanner } from '@/components/landing/lifestyle-banner'
import { HowToWear } from '@/components/landing/how-to-wear'
import { SizeGuide } from '@/components/landing/size-guide'
import { WhatsIncluded } from '@/components/landing/whats-included'
import { GalleryCarousel } from '@/components/landing/gallery-carousel'
import { FAQ } from '@/components/landing/faq'
import { GetStarted } from '@/components/landing/get-started'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LimitedOffer />
        <Features />
        <LifestyleBanner />
        <HowToWear />
        <SizeGuide />
        <WhatsIncluded />
        <GalleryCarousel />
        <FAQ />
      </main>
      <GetStarted />
    </>
  )
}
