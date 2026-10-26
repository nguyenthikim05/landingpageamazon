import Image from 'next/image'
import { Check } from 'lucide-react'

const highlights = [
  'Lưới polyester thoáng khí, thoát ẩm êm mát',
  'Đệm mút êm ái giảm thiểu tối đa áp lực vai',
  'Quai dán Hook-and-Loop tùy chỉnh linh hoạt',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            Thoải Mái & Định Hình Tư Thế Tự Nhiên
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
            Đai hỗ trợ vai và lưng trên VELNURIO với cấu trúc lưới tổ ong thoáng khí và đệm tiếp xúc êm ái. Thiết kế nâng cao nhận thức tư thế khi làm việc, học tập và hoạt động hàng ngày.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-slate-200">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                  <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#huong-dan-size"
              className="cta-btn inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-navy transition-colors hover:bg-slate-100 active:scale-95 active:translate-y-0.5"
            >
              Chọn size phù hợp
            </a>
            <a
              href="#trong-hop"
              className="cta-outline inline-flex h-12 items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 text-sm font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white active:scale-95 active:translate-y-0.5"
            >
              Chi tiết bộ sản phẩm
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative aspect-square w-full max-w-[480px] overflow-hidden rounded-3xl bg-slate-900/60 p-4 ring-1 ring-white/10">
            <Image
              src="/images/velnurio/product-main.webp"
              alt="Đai hỗ trợ tư thế VELNURIO màu đen với đệm vai và lưới thoáng khí"
              fill
              priority
              sizes="(min-width: 768px) 480px, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
