'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Ruler, Check, Info } from 'lucide-react'

export function SizeGuide() {
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm')
  const [chestValue, setChestValue] = useState<number>(85)

  // Determine size recommendation
  let recommendedSize: 'S/M' | 'L/XL' | 'OVERLAP' | 'OUT_OF_RANGE' = 'S/M'
  let sizeNote = ''

  const cmVal = unit === 'cm' ? chestValue : Math.round(chestValue * 2.54)
  const inVal = unit === 'inch' ? chestValue : Math.round(chestValue / 2.54)

  if (cmVal < 71) {
    recommendedSize = 'OUT_OF_RANGE'
    sizeNote = 'Vòng ngực nhỏ hơn ngưỡng khuyến nghị tối thiểu của bảng size (71 cm / 28 in).'
  } else if (cmVal === 102) {
    recommendedSize = 'OVERLAP'
    sizeNote = 'Mức 102 cm (40 in) là điểm giao nhau: Chọn S/M nếu muốn ôm khít hơn, hoặc L/XL để thoải mái hơn.'
  } else if (cmVal <= 102) {
    recommendedSize = 'S/M'
    sizeNote = 'Khuyến nghị: Size S/M ôm vừa vặn và nâng đỡ tối ưu cho vòng ngực 71 – 102 cm (28 – 40 in).'
  } else if (cmVal <= 132) {
    recommendedSize = 'L/XL'
    sizeNote = 'Khuyến nghị: Size L/XL mang lại độ che phủ và biên độ quai dán thoải mái cho vòng ngực 102 – 132 cm (40 – 52 in).'
  } else {
    recommendedSize = 'OUT_OF_RANGE'
    sizeNote = 'Vòng ngực vượt quá ngưỡng tối đa của bảng size tiêu chuẩn (132 cm / 52 in).'
  }

  return (
    <section id="huong-dan-size" className="scroll-mt-16 bg-slate-50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Bảng Size & Máy Tính Kích Thước Trực Tiếp
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Đo quanh phần nở nhất của ngực và giữ thước dây nằm ngang để chọn size đai vừa vặn nhất cho cơ thể bạn.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real official size chart image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-slate-200/80 lg:col-span-6">
            <Image
              src="/images/velnurio/size-guide.webp"
              alt="Bảng kích thước chính thức của đai VELNURIO: S/M (28-40 in / 71-102 cm) và L/XL (40-52 in / 102-132 cm)"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain"
            />
          </div>

          {/* Interactive Calculator (One Live Thing) */}
          <div className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/80 sm:p-8 lg:col-span-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900">
                <Ruler className="size-5 text-sky-600" aria-hidden="true" />
                <span className="font-bold">Công cụ tính size chuẩn</span>
              </div>
              <div className="inline-flex rounded-full bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => {
                    if (unit !== 'cm') {
                      setUnit('cm')
                      setChestValue(Math.round(chestValue * 2.54))
                    }
                  }}
                  className={`cta-btn rounded-full px-3 py-1 text-xs font-semibold transition-colors active:scale-95 ${
                    unit === 'cm'
                      ? 'bg-navy text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Centimet (cm)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (unit !== 'inch') {
                      setUnit('inch')
                      setChestValue(Math.round(chestValue / 2.54))
                    }
                  }}
                  className={`cta-btn rounded-full px-3 py-1 text-xs font-semibold transition-colors active:scale-95 ${
                    unit === 'inch'
                      ? 'bg-navy text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Inches (in)
                </button>
              </div>
            </div>

            {/* Range Slider & Input */}
            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <label htmlFor="chest-slider" className="text-sm font-medium text-slate-700">
                  Số đo vòng ngực của bạn:
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">{chestValue}</span>
                  <span className="text-sm font-semibold text-slate-500">{unit}</span>
                  <span className="ml-2 text-xs text-slate-400">
                    ({unit === 'cm' ? `${inVal} in` : `${cmVal} cm`})
                  </span>
                </div>
              </div>

              <input
                id="chest-slider"
                type="range"
                min={unit === 'cm' ? 65 : 26}
                max={unit === 'cm' ? 140 : 55}
                step={1}
                value={chestValue}
                onChange={(e) => setChestValue(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-sky-600"
              />
              <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                <span>{unit === 'cm' ? '65 cm (26 in)' : '26 in'}</span>
                <span>{unit === 'cm' ? '102 cm (Điểm giao)' : '40 in (Overlap)'}</span>
                <span>{unit === 'cm' ? '140 cm (55 in)' : '55 in'}</span>
              </div>
            </div>

            {/* Result Box (Clickable size cards with interactive feedback) */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setChestValue(unit === 'cm' ? 85 : 34)}
                className={`cta-btn relative text-left rounded-2xl p-4 transition-colors active:scale-95 ${
                  recommendedSize === 'S/M' || recommendedSize === 'OVERLAP'
                    ? 'bg-sky-50 ring-2 ring-sky-600'
                    : 'bg-slate-50 opacity-60 hover:opacity-90'
                }`}
              >
                {(recommendedSize === 'S/M' || recommendedSize === 'OVERLAP') && (
                  <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-sky-600 text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                )}
                <div className="text-xs font-semibold text-slate-500">Size phù hợp</div>
                <div className="mt-1 text-2xl font-black text-slate-900">S / M</div>
                <div className="mt-1 text-xs text-slate-600">
                  28 – 40 in <br />
                  (71 – 102 cm)
                </div>
              </button>

              <button
                type="button"
                onClick={() => setChestValue(unit === 'cm' ? 115 : 45)}
                className={`cta-btn relative text-left rounded-2xl p-4 transition-colors active:scale-95 ${
                  recommendedSize === 'L/XL' || recommendedSize === 'OVERLAP'
                    ? 'bg-sky-50 ring-2 ring-sky-600'
                    : 'bg-slate-50 opacity-60 hover:opacity-90'
                }`}
              >
                {(recommendedSize === 'L/XL' || recommendedSize === 'OVERLAP') && (
                  <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-sky-600 text-white">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                )}
                <div className="text-xs font-semibold text-slate-500">Size phù hợp</div>
                <div className="mt-1 text-2xl font-black text-slate-900">L / XL</div>
                <div className="mt-1 text-xs text-slate-600">
                  40 – 52 in <br />
                  (102 – 132 cm)
                </div>
              </button>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
              <Info className="size-4 shrink-0 text-sky-600" aria-hidden="true" />
              <span>{sizeNote}</span>
            </div>

            <div className="mt-6">
              <a
                href="#dat-hang"
                className="cta-btn flex h-12 w-full items-center justify-center rounded-full bg-navy text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-95 active:translate-y-0.5"
              >
                Đặt size của bạn ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
