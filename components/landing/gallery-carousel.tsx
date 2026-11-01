'use client'

import Image from 'next/image'
import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from './content-context'

export function GalleryCarousel() {
  const { t } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = t.gallery.slides.length

  const getStep = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const item = track.querySelector('li')
    return item ? item.getBoundingClientRect().width + 24 : track.clientWidth
  }, [])

  const scroll = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current
      if (!track) return
      const step = getStep()
      const maxScroll = track.scrollWidth - track.clientWidth

      // Nếu đang ở cuối mà cuộn tiếp -> tự động quay về đầu
      if (direction === 1 && track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else if (direction === -1 && track.scrollLeft <= 10) {
        track.scrollTo({ left: maxScroll, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: step * direction, behavior: 'smooth' })
      }
    },
    [getStep]
  )

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const step = getStep()
    track.scrollTo({ left: step * index, behavior: 'smooth' })
    setActiveIndex(index)
  }

  // Cập nhật activeIndex khi cuộn
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const step = getStep()
    if (step > 0) {
      const idx = Math.round(track.scrollLeft / step)
      setActiveIndex(Math.min(Math.max(idx, 0), totalSlides - 1))
    }
  }

  // Tự động chạy (Auto-play) mỗi 3.5 giây, tự tạm dừng khi rê chuột hoặc chạm
  useEffect(() => {
    if (isPaused) return

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const interval = setInterval(() => {
      scroll(1)
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused, scroll])

  return (
    <section
      id="gallery"
      className="scroll-mt-16 bg-[#EDE1D1]/40 py-20 md:py-28"
      aria-roledescription="carousel"
      aria-label="Product Gallery"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19]">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-[#35291F] md:text-4xl">
            {t.gallery.heading}
          </h2>
          <p className="mx-auto mt-2 max-w-4xl text-balance text-base text-[#6B5849]">
            {t.gallery.description}
          </p>
        </div>

        {/* Carousel Container - tự dừng khi hover / chạm */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Nút Prev bên mép trái ảnh */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous slide"
            style={{ top: '38%' }}
            className="absolute left-1 sm:-left-3 lg:-left-6 -translate-y-1/2 z-30 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#35291F] ring-1 ring-[#E3D5C4] transition-colors hover:bg-[#713B19] hover:text-white active:scale-95"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
          </button>

          {/* Nút Next bên mép phải ảnh */}
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next slide"
            style={{ top: '38%' }}
            className="absolute right-1 sm:-right-3 lg:-right-6 -translate-y-1/2 z-30 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#35291F] ring-1 ring-[#E3D5C4] transition-colors hover:bg-[#713B19] hover:text-white active:scale-95"
          >
            <ChevronRight className="size-6" aria-hidden="true" />
          </button>
          <ul
            ref={trackRef}
            tabIndex={0}
            onScroll={handleScroll}
            aria-label="Product image list"
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 focus:outline-none"
          >
            {t.gallery.slides.map((slide) => (
              <li
                key={slide.title}
                className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="group relative aspect-square overflow-hidden rounded-3xl bg-white p-3 sm:p-4 ring-1 ring-[#E3D5C4] transition-colors duration-500 hover:ring-[#713B19]/30">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
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

          {/* Dots Pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {t.gallery.slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                  activeIndex === idx ? 'w-6 bg-[#713B19]' : 'w-2 bg-[#D5AB75]/50 hover:bg-[#713B19]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
