'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitOrder, type OrderState } from '@/app/actions'
import { useLanguage } from './content-context'

const initialState: OrderState = { status: 'idle', message: '' }

const inputClass =
  'h-12 w-full rounded-full border border-[#E3D5C4] bg-white px-5 text-sm text-[#35291F] placeholder:text-[#6B5849]/60 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20'

export function OrderForm() {
  const { t } = useLanguage()
  const [state, formAction, pending] = useActionState(submitOrder, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-[#D5AB75] bg-[#EDE1D1] p-5 text-left text-[#35291F]"
      >
        <CheckCircle2 className="size-6 shrink-0 text-[#713B19]" aria-hidden="true" />
        <p className="text-sm font-medium leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-3 md:flex-row">
        <label className="sr-only" htmlFor="order-name">
          {t.story.formName}
        </label>
        <input
          id="order-name"
          name="name"
          required
          autoComplete="name"
          placeholder={t.story.formName}
          className={inputClass}
        />
        <label className="sr-only" htmlFor="order-phone">
          {t.story.formContact}
        </label>
        <input
          id="order-phone"
          name="phone"
          required
          autoComplete="email"
          placeholder={t.story.formContact}
          className={inputClass}
        />
        <label className="sr-only" htmlFor="order-qty">
          Quantity
        </label>
        <select
          id="order-qty"
          name="quantity"
          className="h-12 rounded-full border border-[#E3D5C4] bg-white px-4 text-sm font-medium text-[#35291F] focus:border-[#713B19] focus:outline-none md:w-40"
        >
          <option value="1">{t.story.formQty1}</option>
          <option value="2">{t.story.formQty2}</option>
          <option value="3">{t.story.formQty3}</option>
        </select>
        <button
          type="submit"
          disabled={pending}
          className="cta-btn inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#713B19] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#562C13] active:scale-95 active:translate-y-0.5 disabled:opacity-70"
        >
          {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {t.story.formSubmit}
        </button>
      </div>
      {state.status === 'error' && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}
    </form>
  )
}
