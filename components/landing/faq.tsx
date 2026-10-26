'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Đai VELNURIO có những kích cỡ (size) nào?',
    a: 'Sản phẩm có 2 nhóm size chuẩn: Size S/M phù hợp cho vòng ngực từ 28 – 40 in (71 – 102 cm) và Size L/XL phù hợp cho vòng ngực từ 40 – 52 in (102 – 132 cm). Bạn nên dùng thước dây đo quanh phần nở nhất của ngực và giữ thước song song mặt đất để chọn đúng size.',
  },
  {
    q: 'Tôi nên mặc và sử dụng đai như thế nào?',
    a: 'Đeo đai qua 3 bước: Xỏ quai qua vai như đeo ba lô, kéo dây đai để căn chỉnh độ ôm vừa vặn, sau đó dán khóa cố định phía trước. Lưu ý: Tuyệt đối không siết đai quá chặt để đảm bảo sự thoải mái tối đa cho tuần hoàn và nhịp thở.',
  },
  {
    q: 'Trong hộp sản phẩm bao gồm những phụ kiện gì?',
    a: 'Mỗi bộ sản phẩm chính hãng gồm: 01 Đai hỗ trợ tư thế VELNURIO màu đen, 01 Túi rút bảo quản màu xanh Navy sang trọng, 01 Sách hướng dẫn sử dụng nhanh (Quick Start Guide) và 01 Hộp bao bì bán lẻ chính hãng VELNURIO.',
  },
  {
    q: 'Đai có tự điều chỉnh được lực kéo ôm không?',
    a: 'Có. Hệ thống dây đai nylon co giãn kết hợp khóa dán Hook-and-Loop cho phép bạn chủ động nới lỏng hoặc thắt chặt theo form người và cảm giác dễ chịu của riêng bạn.',
  },
  {
    q: 'Đai VELNURIO được thiết kế dành cho đối tượng nào?',
    a: 'Sản phẩm phù hợp cho người trưởng thành làm việc văn phòng, ngồi máy tính nhiều giờ, học sinh sinh viên hoặc bất kỳ ai muốn nâng cao nhận thức giữ thẳng vai và lưng trên trong các hoạt động thường nhật.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Thông tin chi tiết và xác thực về đai hỗ trợ tư thế VELNURIO.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-slate-50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cta-btn flex w-full items-center justify-between p-6 text-left select-none active:scale-[0.99] transition-transform"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 md:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 md:text-base">
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

