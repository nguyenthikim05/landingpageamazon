'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { useLanguage } from './content-context'

function FoliageShadow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M420 -20 C320 60, 240 160, 180 260 C150 310, 120 370, 90 420"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M330 65 C300 40, 260 50, 240 75 C250 100, 290 100, 330 65Z"
        fill="currentColor"
      />
      <path
        d="M290 105 C250 90, 215 110, 205 140 C225 155, 265 145, 290 105Z"
        fill="currentColor"
      />
      <path
        d="M250 155 C210 135, 175 160, 170 190 C190 205, 225 190, 250 155Z"
        fill="currentColor"
      />
      <path
        d="M220 205 C180 190, 150 220, 145 250 C165 260, 195 240, 220 205Z"
        fill="currentColor"
      />
      <path
        d="M180 260 C145 250, 120 280, 115 310 C135 320, 160 300, 180 260Z"
        fill="currentColor"
      />
      <path
        d="M290 105 C340 120, 380 150, 410 190"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M340 120 C370 115, 395 130, 400 150 C380 160, 355 150, 340 120Z"
        fill="currentColor"
      />
      <path
        d="M380 155 C410 160, 425 180, 425 205 C405 210, 385 190, 380 155Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#713B19] text-white pt-24 pb-12 md:pt-20 md:pb-8">
      {/* 1. Ambient Warm Sunlight Drift */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[550px] w-[550px] rounded-full bg-[#D5AB75]/15 blur-[100px] animate-sun-drift"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-[480px] w-[480px] rounded-full bg-[#3B2416]/50 blur-[90px]"
        aria-hidden="true"
      />

      {/* 2. Gentle Foliage Shadow (Bóng lá tre/lá mây lay động chậm trong gió) */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 z-0 h-[380px] w-[380px] text-black/15 animate-foliage sm:h-[480px] sm:w-[480px] md:h-[540px] md:w-[540px]"
        aria-hidden="true"
      >
        <FoliageShadow className="size-full" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:gap-12 xl:max-w-7xl">
        <div className="flex flex-col justify-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D5AB75]">
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-2.5 font-serif text-[28px] font-extrabold tracking-tight text-white xs:text-[30px] sm:text-3xl md:text-[34px] lg:text-[42px] xl:text-[46px] leading-[1.18]">
            {t.hero.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
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

          {/* Pricing Highlight */}
          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="font-serif text-3xl font-extrabold text-[#D5AB75] tracking-tight sm:text-4xl">
              {t.hero.launchPrice}
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D5AB75]">
                {t.hero.saleLabel}
              </span>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-[#EDE1D1]/85">
                <span>{lang === 'vi' ? 'Giá bán' : 'Reg.'} {t.hero.regularPrice}</span>
                <span>·</span>
                <span className="line-through text-[#EDE1D1]/55">{t.hero.listPrice}</span>
                <span className="rounded-full bg-[#D5AB75]/25 px-2 py-0.5 text-[10px] font-bold text-[#D5AB75]">
                  {t.hero.saleBadge}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 lg:mt-8">
            <a
              href={t.footer.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
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
