'use client'

import Image from 'next/image'
import { useLanguage } from './content-context'

export function LifestyleBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="group relative mx-auto aspect-[16/10] max-w-6xl overflow-hidden rounded-3xl bg-[#35291F] sm:aspect-[16/9]">
        <Image
          src="/images/maytredan/lifestyle-living.png"
          alt="MAYTREDAN Natural Beauty for Everyday Living - Living room coffee table setting"
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          style={{ objectPosition: 'center bottom' }}
          className="object-cover object-bottom opacity-90 transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-[#20140D]/65" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5AB75]">
            {t.lifestyle.eyebrow}
          </span>
          <h2 className="mt-2 max-w-4xl font-serif text-xl font-bold leading-tight text-white sm:text-2xl md:text-[28px] lg:text-[32px]">
            {t.lifestyle.heading}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#EDE1D1] md:text-base">
            {t.lifestyle.body}
          </p>
        </div>
      </div>
    </section>
  )
}
