'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './content-context'

export function GalleryCarousel() {
  const { t } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('li')
    const step = item ? item.getBoundingClientRect().width + 24 : track.clientWidth
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="scroll-mt-16 bg-[#EDE1D1]/40 py-20 md:py-28" aria-roledescription="carousel" aria-label="Product Gallery">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
              {t.gallery.eyebrow}
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-[#35291F] md:text-4xl">
              {t.gallery.heading}
            </h2>
            <p className="mt-2 text-base text-[#6B5849]">
              {t.gallery.description}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="cta-btn flex size-11 items-center justify-center rounded-full bg-white text-[#35291F] ring-1 ring-[#E3D5C4] transition-colors hover:bg-[#713B19] hover:text-white active:scale-90 active:translate-y-0.5"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="cta-btn flex size-11 items-center justify-center rounded-full bg-white text-[#35291F] ring-1 ring-[#E3D5C4] transition-colors hover:bg-[#713B19] hover:text-white active:scale-90 active:translate-y-0.5"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="Product image list"
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 focus:outline-none"
        >
          {t.gallery.slides.map((slide) => (
            <li
              key={slide.title}
              className="w-[82vw] shrink-0 snap-start sm:w-[360px] md:w-[420px]"
            >
              <div className="group relative aspect-square overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-[#E3D5C4] transition-colors duration-500 hover:ring-[#713B19]/30">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 420px, 82vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-bold text-[#35291F]">{slide.title}</h3>
                <p className="mt-1 text-sm text-[#6B5849]">{slide.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
