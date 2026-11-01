'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from './content-context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#713B19] text-white pt-24 pb-12 md:pt-20 md:pb-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:gap-12 xl:max-w-7xl">
        <div className="flex flex-col justify-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D5AB75]">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-2.5 font-serif text-[26px] font-extrabold tracking-tight text-white xs:text-[28px] sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.2]">
            {t.hero.headline}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#EDE1D1] sm:text-base lg:text-lg">
            {t.hero.subheadline}
          </p>
          <ul className="mt-6 flex flex-col gap-2.5 text-xs font-medium text-white/90 sm:text-sm lg:mt-7">
            {t.hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#D5AB75]/25 text-[#D5AB75]">
                  <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4 lg:mt-8">
            <a
              href="#shop"
              className="cta-btn inline-flex h-11 items-center justify-center rounded-full bg-[#D5AB75] px-7 text-xs font-bold text-[#35291F] transition-colors hover:bg-[#e2bb86] active:scale-95 active:translate-y-0.5 sm:h-12 sm:px-8 sm:text-sm"
            >
              {t.hero.primaryCTA}
            </a>
            <a
              href="#story"
              className="cta-outline inline-flex h-11 items-center justify-center rounded-full border border-[#D5AB75]/40 bg-transparent px-5 text-xs font-medium text-[#EDE1D1] transition-colors hover:border-[#D5AB75] hover:text-white active:scale-95 active:translate-y-0.5 sm:h-12 sm:px-6 sm:text-sm"
            >
              {t.hero.secondaryCTA}
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="group relative aspect-square w-full max-w-[380px] overflow-hidden rounded-3xl bg-white/5 p-4 ring-1 ring-white/15 transition-colors duration-500 hover:ring-[#D5AB75]/40 sm:max-w-[420px] md:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px]">
            <Image
              src="/images/maytredan/hero.png"
              alt="MAYTREDAN handmade natural rattan coaster set with matching round holder"
              fill
              priority
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 500px, (min-width: 768px) 440px, 90vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
