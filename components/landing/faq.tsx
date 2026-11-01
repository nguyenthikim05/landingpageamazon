'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from './content-context'

export function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#35291F] md:text-4xl">
            {t.faq.heading}
          </h2>
          <p className="mt-3 text-base text-[#6B5849]">
            {t.faq.description}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-[#FBF8F2] ring-1 ring-[#E3D5C4] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cta-btn flex w-full items-center justify-between p-6 text-left select-none active:scale-[0.99] transition-transform"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base font-bold text-[#35291F] md:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#713B19] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D5AB75]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#6B5849] md:text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
