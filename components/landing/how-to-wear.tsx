import Image from 'next/image'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: 'Bước 1',
    title: 'Xỏ Quai Đeo',
    desc: 'Xỏ hai tay vào quai đeo vai nhẹ nhàng như khi bạn đeo một chiếc ba lô thường ngày.',
  },
  {
    step: 'Bước 2',
    title: 'Căn Chỉnh Dây Đai',
    desc: 'Kéo nhẹ hai quai đai phía trước sao cho đệm vai ôm êm ái, kéo nhẹ bờ vai về phía sau tự nhiên.',
  },
  {
    step: 'Bước 3',
    title: 'Dán Chắc Khóa Đai',
    desc: 'Cố định phần khóa dán hook-and-loop phía trước sao cho vừa vặn với vòng thân người.',
  },
]

export function HowToWear() {
  return (
    <section id="huong-dan-mac" className="scroll-mt-16 bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            3 Bước Sử Dụng Đơn Giản
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Được thiết kế để bạn có thể tự mình mặc và điều chỉnh nhanh chóng chỉ trong vài giây, không cần người khác trợ giúp.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real image display */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200/80 lg:col-span-6">
            <Image
              src="/images/velnurio/how-to-wear.webp"
              alt="Minh họa 3 bước mặc đai VELNURIO: 1. Slip on, 2. Adjust straps, 3. Secure belt"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain"
            />
          </div>

          {/* Step explanations */}
          <div className="flex flex-col gap-8 lg:col-span-6 lg:pl-4">
            <div className="flex flex-col gap-6">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="flex h-8 shrink-0 items-center justify-center rounded-xl bg-sky-100 px-2.5 text-xs font-bold text-sky-800">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Wear Caution box directly from official product spec */}
            <div className="flex items-start gap-3 rounded-2xl bg-amber-50/80 p-5 ring-1 ring-amber-200/70">
              <AlertCircle className="size-5 shrink-0 text-amber-700" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-amber-900">
                <strong className="font-semibold">Lưu ý quan trọng từ VELNURIO:</strong>{' '}
                Tuyệt đối không siết đai quá chặt (<em>Do not overtighten</em>). Đai hoạt động như một công cụ hỗ trợ và nhắc nhở tư thế tự nhiên; việc siết quá mức có thể gây khó chịu khi thở hoặc hạn chế tuần hoàn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
