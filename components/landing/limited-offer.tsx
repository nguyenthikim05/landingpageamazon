'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitOrder, type OrderState } from '@/app/actions'
import { Countdown } from './countdown'
import { useLanguage } from './content-context'

const initialState: OrderState = { status: 'idle', message: '' }

export function LimitedOffer() {
  const { t } = useLanguage()
  const [state, formAction, pending] = useActionState(submitOrder, initialState)

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
          {t.limitedOffer.subheadline}
        </p>

        {/* Counter */}
        <div className="mt-10 sm:mt-12">
          <Countdown />
        </div>

        {/* Order Form */}
        <div className="mt-10 sm:mt-12">
          {state.status === 'success' ? (
            <div
              role="status"
              className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-[#D5AB75] bg-[#EDE1D1] p-5 text-left text-[#35291F]"
            >
              <CheckCircle2 className="size-6 shrink-0 text-[#713B19]" aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="quick-name">
                  {t.limitedOffer.formName}
                </label>
                <input
                  id="quick-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t.limitedOffer.formName}
                  className="h-13 w-full rounded-full border border-[#E3D5C4] bg-white px-6 text-sm text-[#35291F] placeholder:text-[#6B5849]/60 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20 sm:w-64"
                />
                <label className="sr-only" htmlFor="quick-phone">
                  {t.limitedOffer.formContact}
                </label>
                <input
                  id="quick-phone"
                  name="phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder={t.limitedOffer.formContact}
                  className="h-13 w-full rounded-full border border-[#E3D5C4] bg-white px-6 text-sm text-[#35291F] placeholder:text-[#6B5849]/60 focus:border-[#713B19] focus:outline-none focus:ring-2 focus:ring-[#713B19]/20 sm:w-64"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="cta-btn inline-flex h-13 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#713B19] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#562C13] active:scale-95 active:translate-y-0.5 disabled:opacity-70 sm:w-auto"
                >
                  {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                  {t.limitedOffer.formSubmit}
                </button>
              </div>
              {state.status === 'error' && (
                <p role="alert" className="mt-3 text-sm font-medium text-red-700">
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
