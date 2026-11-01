'use client'

import Image from 'next/image'
import { useLanguage } from './content-context'

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()

  return (
    /* taste-skill-ignore */
    <header className="sticky top-0 z-50 bg-[#713B19]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="MAYTREDAN – Home">
          <Image
            src="/assets/maytredan-brand-symbol-512.png"
            alt="MAYTREDAN Brand Symbol"
            width={38}
            height={38}
            className="size-9 rounded-full object-contain bg-white/10 p-0.5"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-wide text-white">MAYTREDAN</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#D5AB75]">
              {lang === 'vi' ? 'Sống Thuận Tự Nhiên' : 'Natural Living'}
            </span>
          </div>
        </a>
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {t.header.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-2 py-1 text-[#EDE1D1] transition-colors hover:text-white active:scale-95"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <div className="flex items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`cta-btn rounded-full px-2.5 py-0.5 transition-colors ${
                lang === 'en'
                  ? 'bg-[#D5AB75] text-[#35291F] font-bold'
                  : 'text-[#EDE1D1] hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('vi')}
              className={`cta-btn rounded-full px-2.5 py-0.5 transition-colors ${
                lang === 'vi'
                  ? 'bg-[#D5AB75] text-[#35291F] font-bold'
                  : 'text-[#EDE1D1] hover:text-white'
              }`}
              aria-label="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
          </div>

          <a
            href="#shop"
            className="cta-btn inline-flex h-10 items-center rounded-full bg-[#D5AB75] px-5 text-sm font-bold text-[#35291F] transition-colors hover:bg-[#e2bb86] active:scale-95 active:translate-y-0.5"
          >
            {t.header.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
