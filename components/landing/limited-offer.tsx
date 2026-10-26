'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitOrder, type OrderState } from '@/app/actions'
import { Countdown } from './countdown'

const initialState: OrderState = { status: 'idle', message: '' }

export function LimitedOffer() {
  const [state, formAction, pending] = useActionState(submitOrder, initialState)

  return (
    <section id="uu-dai" className="scroll-mt-16 bg-[#faf8f5] px-4 py-20 text-center md:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8642c] sm:text-sm">
          ƯU ĐÃI GIỚI HẠN
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#23150e] sm:text-4xl md:text-5xl text-balance">
          Giảm 34% – Chỉ trong hôm nay
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6e5a4c] sm:text-base text-pretty">
          Đặt hàng trước khi đồng hồ về 0 để nhận giá <strong className="font-bold text-[#23150e]">390.000₫</strong> (giá gốc 590.000₫), miễn phí vận chuyển toàn quốc và bảo hành chính hãng.
        </p>

        {/* Countdown Timer Display */}
        <div className="mt-10 sm:mt-12">
          <Countdown />
        </div>

        {/* Inline Order Form */}
        <div className="mt-10 sm:mt-12">
          {state.status === 'success' ? (
            <div
              role="status"
              className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-left text-emerald-950"
            >
              <CheckCircle2 className="size-6 shrink-0 text-emerald-600" aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="quick-name">
                  Họ và tên
                </label>
                <input
                  id="quick-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Họ và tên"
                  className="h-13 w-full rounded-full border border-slate-300 bg-white px-6 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#a8642c] focus:outline-none focus:ring-2 focus:ring-[#a8642c]/20 sm:w-64"
                />
                <label className="sr-only" htmlFor="quick-phone">
                  Số điện thoại
                </label>
                <input
                  id="quick-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Số điện thoại"
                  className="h-13 w-full rounded-full border border-slate-300 bg-white px-6 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#a8642c] focus:outline-none focus:ring-2 focus:ring-[#a8642c]/20 sm:w-64"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="cta-btn inline-flex h-13 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#2a170d] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#3d2417] active:scale-95 active:translate-y-0.5 disabled:opacity-70 sm:w-auto"
                >
                  {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                  Đặt hàng ngay
                </button>
              </div>
              {state.status === 'error' && (
                <p role="alert" className="mt-3 text-sm font-medium text-red-600">
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

