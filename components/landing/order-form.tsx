'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitOrder, type OrderState } from '@/app/actions'

const initialState: OrderState = { status: 'idle', message: '' }

const inputClass =
  'h-12 w-full rounded-full border border-slate-300 bg-white px-5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20'

export function OrderForm() {
  const [state, formAction, pending] = useActionState(submitOrder, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-sky-300 bg-sky-50 p-5 text-left text-navy"
      >
        <CheckCircle2 className="size-6 shrink-0 text-sky-600" aria-hidden="true" />
        <p className="text-sm font-medium leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-3 md:flex-row">
        <label className="sr-only" htmlFor="order-name">
          Họ và tên
        </label>
        <input
          id="order-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Họ và tên của bạn"
          className={inputClass}
        />
        <label className="sr-only" htmlFor="order-phone">
          Số điện thoại
        </label>
        <input
          id="order-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="Số điện thoại liên hệ"
          className={inputClass}
        />
        <label className="sr-only" htmlFor="order-size">
          Chọn size
        </label>
        <select
          id="order-size"
          name="size"
          className="h-12 rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-800 focus:border-sky-600 focus:outline-none md:w-36"
        >
          <option value="S/M">Size S/M</option>
          <option value="L/XL">Size L/XL</option>
        </select>
        <button
          type="submit"
          disabled={pending}
          className="cta-btn inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-95 active:translate-y-0.5 disabled:opacity-70"
        >
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          Nhận tư vấn
        </button>
      </div>
      {state.status === 'error' && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-600">
          {state.message}
        </p>
      )}
    </form>
  )
}
