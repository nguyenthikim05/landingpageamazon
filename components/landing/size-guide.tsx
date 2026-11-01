'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Ruler, Check, Info } from 'lucide-react'
import { useLanguage } from './content-context'

export function SizeGuide() {
  const { lang, t } = useLanguage()
  const [unit, setUnit] = useState<'inch' | 'cm'>('inch')
  const [cupValue, setCupValue] = useState<number>(3.2)

  const inVal = unit === 'inch' ? cupValue : Number((cupValue / 2.54).toFixed(1))
  const cmVal = unit === 'cm' ? cupValue : Number((cupValue * 2.54).toFixed(1))

  let fitStatus: 'PERFECT' | 'FLUSH' | 'OVERSIZE' = 'PERFECT'
  let fitNote = t.dimensions.fitIdeal

  if (inVal <= 3.8) {
    fitStatus = 'PERFECT'
    fitNote = t.dimensions.fitIdeal
  } else if (inVal <= 4.1) {
    fitStatus = 'FLUSH'
    fitNote = t.dimensions.fitFlush
  } else {
    fitStatus = 'OVERSIZE'
    fitNote = t.dimensions.fitOversize
  }

  return (
    <section id="details" className="scroll-mt-16 bg-[#FBF8F2] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {t.dimensions.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#35291F] md:text-4xl leading-[1.2]">
            {t.dimensions.heading.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6B5849] md:text-lg">
            {t.dimensions.description}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real image display */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-[#E3D5C4] lg:col-span-6">
            <Image
              src="/images/maytredan/dimensions-4inch.png"
              alt="MAYTREDAN 4-inch (10.16 cm) coaster diameter dimensions with coffee mugs, tea cups and glasses"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain"
            />
          </div>

          {/* Interactive Calculator */}
          <div className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-[#E3D5C4] sm:p-8 lg:col-span-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#35291F]">
                <Ruler className="size-5 text-[#713B19]" aria-hidden="true" />
                <span className="font-serif font-bold">{t.dimensions.checkerTitle}</span>
              </div>
              <div className="inline-flex rounded-full bg-[#EDE1D1]/60 p-1">
                <button
                  type="button"
                  onClick={() => {
                    if (unit !== 'inch') {
                      setUnit('inch')
                      setCupValue(3.2)
                    }
                  }}
                  className={`cta-btn rounded-full px-3 py-1 text-xs font-semibold transition-colors active:scale-95 ${
                    unit === 'inch'
                      ? 'bg-[#713B19] text-white'
                      : 'text-[#6B5849] hover:text-[#35291F]'
                  }`}
                >
                  {t.dimensions.inchesLabel}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (unit !== 'cm') {
                      setUnit('cm')
                      setCupValue(8.0)
                    }
                  }}
                  className={`cta-btn rounded-full px-3 py-1 text-xs font-semibold transition-colors active:scale-95 ${
                    unit === 'cm'
                      ? 'bg-[#713B19] text-white'
                      : 'text-[#6B5849] hover:text-[#35291F]'
                  }`}
                >
                  {t.dimensions.cmLabel}
                </button>
              </div>
            </div>

            {/* Range Slider & Input */}
            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <label htmlFor="cup-slider" className="text-sm font-medium text-[#6B5849]">
                  {t.dimensions.sliderLabel}
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#35291F]">{cupValue}</span>
                  <span className="text-sm font-semibold text-[#6B5849]">{unit}</span>
                  <span className="ml-2 text-xs text-[#6B5849]/70">
                    ({unit === 'inch' ? `${cmVal} cm` : `${inVal} in`})
                  </span>
                </div>
              </div>

              <input
                id="cup-slider"
                type="range"
                min={unit === 'inch' ? 2.0 : 5.0}
                max={unit === 'inch' ? 4.5 : 11.5}
                step={0.1}
                value={cupValue}
                onChange={(e) => setCupValue(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#EDE1D1] accent-[#713B19]"
              />
              <div className="mt-2 flex justify-between text-[11px] font-medium text-[#6B5849]">
                <span className="whitespace-nowrap">{unit === 'inch' ? '2.0 in (Espresso)' : '5.0 cm'}</span>
                <span className="whitespace-nowrap">{lang === 'vi' ? (unit === 'inch' ? '3.2 in (Cốc chuẩn)' : '8.0 cm') : (unit === 'inch' ? '3.2 in (Standard)' : '8.0 cm')}</span>
                <span className="whitespace-nowrap">{lang === 'vi' ? (unit === 'inch' ? '4.0 in (Viền mây)' : '10.0 cm') : (unit === 'inch' ? '4.0 in (Coaster rim)' : '10.0 cm')}</span>
              </div>
            </div>

            {/* Spec Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setCupValue(unit === 'inch' ? 3.2 : 8.0)}
                className={`cta-btn relative text-left rounded-2xl p-4 transition-colors active:scale-95 ${
                  fitStatus === 'PERFECT' || fitStatus === 'FLUSH'
                    ? 'bg-[#EDE1D1]/60 ring-2 ring-[#713B19]'
                    : 'bg-[#FBF8F2] opacity-70'
                }`}
              >
                <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-[#713B19] text-white">
                  <Check className="size-3 stroke-[3]" />
                </span>
                <div className="text-xs font-semibold text-[#6B5849]">{t.dimensions.coasterTitle}</div>
                <div className="mt-1 font-serif text-2xl font-black text-[#35291F]">~4.0 in</div>
                <div className="mt-1.5 flex flex-col gap-0.5 text-xs text-[#6B5849]">
                  {t.dimensions.coasterDesc.split('\n').map((line, i) => (
                    <span key={i} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setCupValue(unit === 'inch' ? 3.5 : 9.0)}
                className="cta-btn relative text-left rounded-2xl bg-[#EDE1D1]/30 p-4 transition-colors active:scale-95 ring-1 ring-[#E3D5C4]"
              >
                <div className="text-xs font-semibold text-[#6B5849]">{t.dimensions.holderTitle}</div>
                <div className="mt-1 font-serif text-2xl font-black text-[#35291F]">
                  {lang === 'vi' ? '6 Miếng Lót' : '6 Coasters'}
                </div>
                <div className="mt-1.5 flex flex-col gap-0.5 text-xs text-[#6B5849]">
                  {t.dimensions.holderDesc.split('\n').map((line, i) => (
                    <span key={i} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </div>
              </button>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#FBF8F2] p-4 text-xs leading-relaxed text-[#6B5849]">
              <Info className="size-4 shrink-0 text-[#713B19] mt-0.5" aria-hidden="true" />
              <div>
                {fitNote.includes(':') ? (
                  <>
                    <strong className="font-semibold text-[#35291F]">
                      {fitNote.split(':')[0]}:
                    </strong>{' '}
                    <span>{fitNote.split(':').slice(1).join(':').trim()}</span>
                  </>
                ) : (
                  <span>{fitNote}</span>
                )}
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#shop"
                className="cta-btn flex h-12 w-full items-center justify-center rounded-full bg-[#713B19] text-sm font-semibold text-white transition-colors hover:bg-[#562C13] active:scale-95 active:translate-y-0.5"
              >
                {t.dimensions.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
