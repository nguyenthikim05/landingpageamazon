'use client'

import Image from 'next/image'
import { OrderForm } from './order-form'
import { useLanguage } from './content-context'

export function GetStarted() {
  const { t } = useLanguage()

  return (
    <section id="order" className="scroll-mt-16 bg-[#713B19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center md:px-6 md:py-28">
        <div className="relative mx-auto aspect-[3/1] w-48 overflow-hidden rounded-xl bg-[#FBF8F2] p-2 ring-1 ring-[#D5AB75]">
          <Image
            src="/assets/maytredan-logo-original.png"
            alt="MAYTREDAN Official Logo – Vietnamese Craftsmanship, Natural Living"
            fill
            sizes="192px"
            className="object-contain"
          />
        </div>

        <span className="mt-8 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D5AB75]">
          {t.story.eyebrow}
        </span>
        <h2 className="mt-3 font-serif text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
          {t.story.heading.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#EDE1D1] md:text-lg">
          {t.story.body}
        </p>

        {/* Gifting note */}
        <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 text-left text-sm text-[#EDE1D1]">
          <p className="font-serif font-bold text-white text-base">{t.story.giftingTitle}</p>
          <p className="mt-1 text-xs text-[#EDE1D1]/90 md:text-sm">
            {t.story.giftingBody}
          </p>
        </div>

        <div className="mt-12">
          <OrderForm />
        </div>
      </div>
    </section>
  )
}
