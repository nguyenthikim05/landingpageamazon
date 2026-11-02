import { LanguageProvider } from '@/components/landing/content-context'
import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { LimitedOffer } from '@/components/landing/limited-offer'
import { Features } from '@/components/landing/features'
import { LifestyleBanner } from '@/components/landing/lifestyle-banner'
import { HowToWear } from '@/components/landing/how-to-wear'
import { SizeGuide } from '@/components/landing/size-guide'
import { WhatsIncluded } from '@/components/landing/whats-included'
import { GalleryCarousel } from '@/components/landing/gallery-carousel'
import { BrandStory } from '@/components/landing/brand-story'
import { FAQ } from '@/components/landing/faq'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <LimitedOffer />
        <Features />
        <LifestyleBanner />
        <SizeGuide />
        <WhatsIncluded />
        <HowToWear />
        <GalleryCarousel />
        <BrandStory />
        <FAQ />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
