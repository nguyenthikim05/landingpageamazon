'use client'

import Image from 'next/image'
import { useLanguage } from './content-context'

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="scroll-mt-16 bg-[#EDE1D1]/40 px-4 py-20 text-[#35291F] md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {t.benefits.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-extrabold tracking-tight text-[#35291F] sm:text-3xl md:text-[32px] lg:text-[38px] leading-[1.2]">
            {t.benefits.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B5849] md:text-lg">
            {t.benefits.description}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real image display */}
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-[#E3D5C4] transition-colors duration-500 hover:ring-[#713B19]/30 lg:col-span-6">
            <Image
              src="/images/maytredan/features-craft.png"
              alt="MAYTREDAN natural rattan, handwoven texture and traditional weaving pattern details"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
            />
          </div>

          {/* Asymmetrical feature specifications */}
          <div className="flex flex-col gap-8 lg:col-span-6 lg:pl-4">
            {t.benefits.items.map((item, index) => (
              <div key={item.title} className="group">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold text-[#713B19]">[{index + 1}]</span>
                  <h3 className="font-serif text-lg font-bold text-[#35291F] md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5849] md:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
