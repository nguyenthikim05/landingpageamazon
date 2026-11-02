'use client'

import Image from 'next/image'
import { AlertCircle } from 'lucide-react'
import { useLanguage } from './content-context'

export function HowToWear() {
  const { t } = useLanguage()

  return (
    <section id="care" className="scroll-mt-16 bg-[#FBF8F2] px-4 py-20 text-[#35291F] md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {t.care.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-extrabold tracking-tight text-[#35291F] sm:text-3xl md:text-[32px] lg:text-[36px] leading-[1.2]">
            {t.care.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B5849] md:text-lg">
            {t.care.description}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real image display */}
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-[#FBF8F2] p-4 ring-1 ring-[#E3D5C4] transition-colors duration-500 hover:ring-[#713B19]/30 lg:col-span-6">
            <Image
              src="/images/maytredan/care-steps.png"
              alt="MAYTREDAN product care guide: Place on table, set drinkware, wipe & dry, and store in holder"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
            />
          </div>

          {/* Step explanations */}
          <div className="flex flex-col gap-8 lg:col-span-6 lg:pl-4">
            <div className="flex flex-col gap-6">
              {t.care.steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="flex h-8 shrink-0 items-center justify-center rounded-xl bg-[#EDE1D1] px-2.5 text-xs font-bold text-[#713B19]">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#35291F]">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#6B5849] md:text-base">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Natural Craftsmanship Note */}
            <div className="flex items-start gap-3 rounded-2xl bg-[#FBF8F2] p-5 ring-1 ring-[#E3D5C4]">
              <AlertCircle className="size-5 shrink-0 text-[#713B19]" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-[#6B5849]">
                <strong className="font-semibold text-[#35291F]">{t.care.noteTitle}</strong>{' '}
                {t.care.noteDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
