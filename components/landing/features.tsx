import Image from 'next/image'

const materials = [
  {
    title: 'Lưới Tổ Ong Thoáng Khí (Back Panel)',
    detail: 'Chất liệu polyester dệt tổ ong đa tầng giúp không khí lưu thông tối đa, giảm tích tụ mồ hôi và giữ lưng luôn khô thoáng dù đeo suốt nhiều giờ làm việc.',
    tag: 'Breathable Mesh',
  },
  {
    title: 'Đệm Mút Êm Giảm Áp Lực Vai',
    detail: 'Khu vực quai đeo tiếp xúc vai và nách được gia cố lớp đệm xốp mềm dẻo, ngăn ngừa hiện tượng cấn rát hay tì đè khi cử động.',
    tag: 'Soft Foam Padding',
  },
  {
    title: 'Dây Đai Nylon Co Giãn & Khóa Dán',
    detail: 'Dây dán hook-and-loop chịu lực cao cho phép tùy chỉnh lực kéo vừa vặn với từng vóc dáng mà không bị xê dịch khi hoạt động.',
    tag: 'Flexible & Secure Fit',
  },
  {
    title: 'Công Thái Học Định Hình Tự Nhiên',
    detail: 'Tác động kéo nhẹ nhàng vào hai bên vai giúp cơ thể tự động căn chỉnh trục cột sống trên một cách tự nhiên, không gò bó.',
    tag: 'Upper-Back Support',
  },
]

export function Features() {
  return (
    <section id="dac-diem" className="scroll-mt-16 bg-slate-50 px-4 py-20 text-slate-900 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Thiết Kế Thoáng Khí & Êm Ái Cho Thường Nhật
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Mỗi chi tiết trên đai VELNURIO đều được chế tác từ vật liệu bền nhẹ, ưu tiên trải nghiệm đeo êm dịu và tính tiện dụng cao nhất.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          {/* Real image display */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-slate-200/80 lg:col-span-6">
            <Image
              src="/images/velnurio/product-features.webp"
              alt="Cận cảnh các chi tiết lưới thoáng khí, đệm mút và quai dán đai VELNURIO"
              fill
              sizes="(min-width: 1024px) 540px, 90vw"
              className="object-contain"
            />
          </div>

          {/* Asymmetrical feature specifications */}
          <div className="flex flex-col gap-8 lg:col-span-6 lg:pl-4">
            {materials.map((item, index) => (
              <div key={item.title} className="group">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold text-sky-600">[{index + 1}]</span>
                  <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
