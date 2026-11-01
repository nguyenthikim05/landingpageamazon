'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useLanguage } from './content-context'

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    /* taste-skill-ignore */
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-md py-3.5 md:py-4 transition-colors duration-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo & Tên thương hiệu */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          aria-label="MAYTREDAN – Trang chủ"
        >
          <div className="relative size-10 overflow-hidden rounded-full bg-white/10 p-1 ring-1 ring-[#D5AB75]/60 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/maytredan-brand-symbol-512.png"
              alt="MAYTREDAN Brand Symbol"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#D5AB75]">
              MAYTREDAN
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D5AB75]">
              {lang === 'vi' ? 'Sống Thuận Tự Nhiên' : 'Natural Living'}
            </span>
          </div>
        </a>

        {/* Menu Điều hướng Desktop (Luôn trong suốt, chữ sáng màu) */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-8">
            {t.header.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-serif text-sm font-semibold tracking-wide text-[#EDE1D1] transition-colors duration-200 hover:text-[#D5AB75] active:scale-95 inline-block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nút Ngôn ngữ & CTA bên phải */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Bộ chọn ngôn ngữ */}
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
            className="cta-btn inline-flex h-10 items-center justify-center rounded-full bg-[#D5AB75] px-5 text-xs font-bold text-[#35291F] transition-colors hover:bg-[#e2bb86] active:scale-95 active:translate-y-0.5"
          >
            {t.header.cta}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language Switcher on Mobile Header */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 ring-1 ring-white/15 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-2 py-0.5 transition-colors ${
                lang === 'en'
                  ? 'bg-[#D5AB75] text-[#35291F] font-bold'
                  : 'text-[#EDE1D1]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('vi')}
              className={`rounded-full px-2 py-0.5 transition-colors ${
                lang === 'vi'
                  ? 'bg-[#D5AB75] text-[#35291F] font-bold'
                  : 'text-[#EDE1D1]'
              }`}
            >
              VI
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-[#EDE1D1] transition-colors hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="bg-[#713B19]/98 px-6 py-6 text-white md:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {t.header.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-serif text-lg text-[#EDE1D1] transition-colors hover:text-[#D5AB75]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4">
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="cta-btn flex h-11 w-full items-center justify-center rounded-full bg-[#D5AB75] text-sm font-bold text-[#35291F]"
            >
              {t.header.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
