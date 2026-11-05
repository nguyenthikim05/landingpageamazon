'use client'

import { useActionState, useState } from 'react'
import { CheckCircle2, Loader2, Sparkles, Tag, ShieldCheck } from 'lucide-react'
import { submitOrder, type OrderState } from '@/app/actions'
import { Countdown } from './countdown'
import { useLanguage } from './content-context'

const initialState: OrderState = { status: 'idle', message: '' }

export function LimitedOffer() {
  const { lang, t } = useLanguage()
  const [state, formAction, pending] = useActionState(submitOrder, initialState)
  const [qty, setQty] = useState('1')

  return (
    <section id="shop" className="scroll-mt-16 bg-[#FBF8F2] px-4 py-20 text-center md:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#713B19] sm:text-sm">
          {t.limitedOffer.badge}
        </p>
        <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#35291F] sm:text-3xl md:text-4xl">
          {t.limitedOffer.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B5849] sm:text-base">
          {t.limitedOffer.subheadline.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* Pricing Offer Card (Tone-shift #EDE1D1, No 1px hairlines, No static shadow) */}
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-[#EDE1D1]/60 p-6 sm:p-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pb-6">
            <div>
              <span className="text-sm font-semibold text-[#713B19]">
                {t.limitedOffer.cardBadge}
              </span>
              <h3 className="mt-2 font-serif text-xl font-bold text-[#35291F] sm:text-2xl">
                {t.limitedOffer.cardTitle}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#6B5849]">
                {t.limitedOffer.cardDesc}
              </p>
            </div>
            <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 items-baseline shrink-0">
              <div className="flex items-baseline gap-2.5">
                <span className="text-sm font-semibold text-[#6B5849] line-through">
                  {t.limitedOffer.priceList}
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#713B19] tracking-tight">
                  {t.limitedOffer.priceSale}
                </span>
              </div>
              <span className="rounded-full bg-[#713B19] px-2.5 py-0.5 text-xs font-bold text-white">
                {t.limitedOffer.saveBadge}
              </span>
              <p className="text-xs text-[#6B5849] font-medium">
                {lang === 'vi' ? 'Giá bán chuẩn:' : 'Regular retail:'} {t.limitedOffer.priceRegular}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#6B5849]">
            {t.limitedOffer.priceNote}
          </p>
        </div>

        {/* Counter */}
        <div className="mt-10 sm:mt-12">
          <Countdown />
        </div>

        {/* Pre-order / Inquiry Form */}
        <div className="mt-10 sm:mt-12">
          {state.status === 'success' ? (
            <div
              role="status"
              className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-3xl bg-[#EDE1D1] p-6 text-center text-[#35291F] sm:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-[#713B19] text-white">
                <CheckCircle2 className="size-7" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#713B19]">
                {lang === 'vi' ? 'Đặt Mua Trước Thành Công!' : 'Pre-Order Request Received!'}
              </h3>
              <p className="text-sm leading-relaxed text-[#5A483B]">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="mx-auto max-w-2xl text-left">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="preorder-name" className="block text-xs font-semibold text-[#35291F] mb-1.5">
                    {t.limitedOffer.formName} *
                  </label>
                  <input
                    id="preorder-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={lang === 'vi' ? 'Ví dụ: Nguyễn Văn A' : 'e.g., Jane Doe'}
                    className="h-12 w-full rounded-2xl border border-[#E3D5C4] bg-white px-4 text-sm text-[#35291F] placeholder:text-[#6B5849]/50 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20"
                  />
                </div>

                <div>
                  <label htmlFor="preorder-phone" className="block text-xs font-semibold text-[#35291F] mb-1.5">
                    {t.limitedOffer.formContact} *
                  </label>
                  <input
                    id="preorder-phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder={lang === 'vi' ? 'Số điện thoại hoặc Email' : 'Phone number or Email'}
                    className="h-12 w-full rounded-2xl border border-[#E3D5C4] bg-white px-4 text-sm text-[#35291F] placeholder:text-[#6B5849]/50 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20"
                  />
                </div>

                <div>
                  <label htmlFor="preorder-qty" className="block text-xs font-semibold text-[#35291F] mb-1.5">
                    {t.limitedOffer.formQty}
                  </label>
                  <select
                    id="preorder-qty"
                    name="quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-[#E3D5C4] bg-white px-4 text-sm text-[#35291F] focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20"
                  >
                    <option value="1">{lang === 'vi' ? '1 Bộ (6 lót + 1 khay) - $19.32' : '1 Set (6 coasters + 1 holder) - $19.32'}</option>
                    <option value="2">{lang === 'vi' ? '2 Bộ (12 lót + 2 khay) - $38.64' : '2 Sets (12 coasters + 2 holders) - $38.64'}</option>
                    <option value="3">{lang === 'vi' ? '3 Bộ (Tiết kiệm thêm) - $57.96' : '3 Sets (Best Value) - $57.96'}</option>
                    <option value="4+">{lang === 'vi' ? 'Từ 4 Bộ trở lên (Báo giá sỉ/quà tặng)' : '4+ Sets (Bulk / Gift inquiry)'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preorder-note" className="block text-xs font-semibold text-[#35291F] mb-1.5">
                    {t.limitedOffer.formNote}
                  </label>
                  <input
                    id="preorder-note"
                    name="note"
                    placeholder={lang === 'vi' ? 'Ghi chú thời gian nhận cuộc gọi...' : 'e.g., Preferred contact time...'}
                    className="h-12 w-full rounded-2xl border border-[#E3D5C4] bg-white px-4 text-sm text-[#35291F] placeholder:text-[#6B5849]/50 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <button
                  type="submit"
                  disabled={pending}
                  className="cta-btn inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#713B19] px-8 text-sm font-bold text-white transition-colors hover:bg-[#562C13] active:scale-95 active:translate-y-0.5 disabled:opacity-70 sm:w-auto sm:min-w-[280px]"
                >
                  {pending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      <span>{lang === 'vi' ? 'Đang gửi thông tin...' : 'Recording your pre-order...'}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4" aria-hidden="true" />
                      <span>{t.limitedOffer.formSubmit}</span>
                    </>
                  )}
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#6B5849]/80 text-center">
                  <ShieldCheck className="size-3.5 text-[#713B19]" aria-hidden="true" />
                  <span>
                    {lang === 'vi'
                      ? 'Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn xác nhận đơn hàng.'
                      : 'Your information is kept confidential and used solely for order consultation.'}
                  </span>
                </p>
              </div>

              {state.status === 'error' && (
                <p role="alert" className="mt-3 text-center text-sm font-medium text-red-700">
                  {state.message}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
