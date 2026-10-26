import Image from 'next/image'

export function LifestyleBanner() {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="relative mx-auto aspect-[4/5] max-w-6xl overflow-hidden rounded-3xl bg-slate-900 sm:aspect-[16/9]">
        <Image
          src="/images/velnurio/lifestyle-work.webp"
          alt="Người dùng đeo đai hỗ trợ tư thế VELNURIO khi ngồi làm việc bên laptop"
          fill
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-slate-950/65" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12">
          <h2 className="max-w-2xl text-2xl font-bold leading-tight text-balance text-white md:text-4xl">
            Đồng Hành Cùng Bạn Trong Từng Giờ Làm Việc & Học Tập
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Một giải pháp nhắc nhở tư thế công thái học kín đáo, êm dịu, giúp bạn duy trì phong thái thẳng thắn và tập trung suốt ngày dài.
          </p>
        </div>
      </div>
    </section>
  )
}
