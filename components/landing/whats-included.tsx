'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from './content-context'

export function WhatsIncluded() {
  const { t } = useLanguage()

  return (
    <section id="set" className="scroll-mt-16 bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="group relative overflow-hidden rounded-3xl bg-[#FBF8F2] ring-1 ring-[#E3D5C4] transition-colors duration-500 hover:ring-[#713B19]/30 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:col-span-5 min-h-[460px]">
          <Image
            src="/images/maytredan/whats-included.png"
            alt="MAYTREDAN What's Included: 1 Matching Holder and 6 Rattan Coasters"
            fill
            sizes="(min-width: 1024px) 460px, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 lg:col-span-7">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
              {t.whatsIncluded.eyebrow}
            </span>
            <h2 className="mt-2 font-serif text-2xl font-extrabold tracking-tight text-[#35291F] sm:text-[28px] lg:text-[30px] xl:text-[34px] leading-[1.2]">
              {t.whatsIncluded.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#6B5849]">
              {t.whatsIncluded.description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {t.whatsIncluded.items.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-3 rounded-2xl bg-[#FBF8F2] p-3.5 ring-1 ring-[#E3D5C4]"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EDE1D1] text-[#713B19]">
                  <Check className="size-4 stroke-[3]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#35291F] md:text-base">{item.name}</h3>
                  <p className="text-xs text-[#6B5849] md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
