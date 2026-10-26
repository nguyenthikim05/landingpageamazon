'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/images/velnurio/product-main.webp',
    alt: 'Đai hỗ trợ tư thế VELNURIO màu đen, thiết kế ôm sát vai và lưng trên',
    title: 'Kiểu Dáng Công Thái Học',
    desc: 'Lưng trên & vai thẳng tự nhiên',
  },
  {
    src: '/images/velnurio/product-features.webp',
    alt: 'Chi tiết lưới polyester tổ ong, đệm vai và quai dán điều chỉnh',
    title: 'Lưới Thoáng Khí & Đệm Mút',
    desc: 'Êm ái, giảm áp lực tì đè',
  },
  {
    src: '/images/velnurio/lifestyle-work.webp',
    alt: 'Đeo đai làm việc với máy tính tại văn phòng',
    title: 'Ứng Dụng Hàng Ngày',
    desc: 'Phù hợp khi làm việc, học tập',
  },
  {
    src: '/images/velnurio/how-to-wear.webp',
    alt: 'Hướng dẫn 3 bước mặc đai: xỏ quai, chỉnh dây, dán khóa',
    title: '3 Bước Mặc Đơn Giản',
    desc: 'Tự đeo dễ dàng không cần hỗ trợ',
  },
  {
    src: '/images/velnurio/size-guide.webp',
    alt: 'Bảng kích thước vòng ngực S/M và L/XL',
    title: 'Kích Cỡ Chuẩn Xác',
    desc: 'S/M (71-102 cm) & L/XL (102-132 cm)',
  },
  {
    src: '/images/velnurio/whats-included.webp',
    alt: 'Trọn bộ sản phẩm trong hộp: đai, túi rút navy, sách hướng dẫn, hộp đựng',
    title: 'Trọn Bộ Trong Hộp',
    desc: 'Đầy đủ phụ kiện bảo quản đi kèm',
  },
]

export function GalleryCarousel() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('li')
    const step = item ? item.getBoundingClientRect().width + 24 : track.clientWidth
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  return (
    <section id="hinh-anh" className="scroll-mt-16 bg-slate-100/70 py-20 md:py-28" aria-roledescription="carousel" aria-label="Hình ảnh sản phẩm">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Thư Viện Ảnh Thực Tế VELNURIO
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Chi tiết cấu tạo, cách đeo và trọn bộ phụ kiện thực tế từ nhà sản xuất.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="cta-btn flex size-11 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 transition-colors hover:bg-slate-900 hover:text-white active:scale-90 active:translate-y-0.5"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="cta-btn flex size-11 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 transition-colors hover:bg-slate-900 hover:text-white active:scale-90 active:translate-y-0.5"
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          tabIndex={0}
          aria-label="Danh sách hình ảnh"
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 focus:outline-none"
        >
          {slides.map((slide) => (
            <li
              key={slide.title}
              className="w-[82vw] shrink-0 snap-start sm:w-[360px] md:w-[420px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-slate-200">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 768px) 420px, 82vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-900">{slide.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{slide.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
