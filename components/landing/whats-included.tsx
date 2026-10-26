import Image from 'next/image'
import { Check } from 'lucide-react'

const items = [
  { name: '01 Đai Hỗ Trợ Tư Thế VELNURIO', desc: 'Màu đen, lưới polyester thoáng khí & đệm mút vai' },
  { name: '01 Túi Rút Bảo Quản Màu Navy', desc: 'Túi vải dây rút tiện lợi khi mang theo đi làm hoặc du lịch' },
  { name: '01 Sổ Hướng Dẫn Sử Dụng Nhanh', desc: 'Quick Start Guide chi tiết các bước đeo và chọn size' },
  { name: '01 Hộp Bán Lẻ Thương Hiệu VELNURIO', desc: 'Bao bì chuẩn bán lẻ cao cấp, chỉn chu và sang trọng' },
]

export function WhatsIncluded() {
  return (
    <section id="trong-hop" className="scroll-mt-16 bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200/80 lg:col-span-6">
          <Image
            src="/images/velnurio/whats-included.webp"
            alt="Trọn bộ sản phẩm trong hộp: đai VELNURIO, túi rút navy, sổ hướng dẫn và hộp đựng"
            fill
            sizes="(min-width: 1024px) 540px, 90vw"
            className="object-contain"
          />
        </div>
        <div className="lg:col-span-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Trọn Bộ Sản Phẩm Trong Hộp
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Mỗi bộ đai VELNURIO được đóng gói đồng bộ, chu đáo với phụ kiện bảo quản chuyên dụng sẵn sàng để bạn sử dụng ngay.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Check className="size-4 stroke-[3]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 md:text-base">{item.name}</h3>
                  <p className="text-xs text-slate-500 md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
