'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from './content-context'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-[#713B19] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-8 md:px-6 md:py-24 lg:gap-12">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D5AB75]">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-3 font-serif text-[26px] font-extrabold tracking-tight text-white xs:text-[28px] sm:text-3xl md:text-[32px] lg:text-[42px] xl:text-5xl leading-[1.16]">
            {t.hero.headline.split('\n').map((line, i) => (
              <span key={i} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#EDE1D1] md:text-lg">
            {t.hero.subheadline}
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-white/90">
            {t.hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#D5AB75]/25 text-[#D5AB75]">
                  <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="cta-btn inline-flex h-12 items-center justify-center rounded-full bg-[#D5AB75] px-8 text-sm font-bold text-[#35291F] transition-colors hover:bg-[#e2bb86] active:scale-95 active:translate-y-0.5"
            >
              {t.hero.primaryCTA}
            </a>
            <a
              href="#story"
              className="cta-outline inline-flex h-12 items-center justify-center rounded-full border border-[#D5AB75]/40 bg-transparent px-6 text-sm font-medium text-[#EDE1D1] transition-colors hover:border-[#D5AB75] hover:text-white active:scale-95 active:translate-y-0.5"
            >
              {t.hero.secondaryCTA}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative aspect-square w-full max-w-[480px] overflow-hidden rounded-3xl bg-white/5 p-4 ring-1 ring-white/15">
            <Image
              src="/images/maytredan/hero.png"
              alt="MAYTREDAN handmade natural rattan coaster set with matching round holder"
              fill
              priority
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
