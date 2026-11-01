'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useLanguage } from './content-context'

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-[transform] duration-300">
      {/* 1. Top Utility Bar (Phong cách Sen: hiển thị hotline, email, ngôn ngữ khi ở đỉnh trang) */}
      <div
        className={`w-full text-xs transition-[max-height,opacity,padding] duration-300 ${
          isScrolled
            ? 'max-h-0 opacity-0 overflow-hidden py-0'
            : 'max-h-10 opacity-100 bg-black/25 text-[#EDE1D1] py-1.5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          {/* Thông tin liên hệ nhanh bên trái */}
          <div className="flex items-center gap-5 text-[11px]">
            <a
              href="tel:0365865481"
              className="flex items-center gap-1.5 transition-colors hover:text-[#D5AB75]"
            >
              <Phone className="size-3 text-[#D5AB75]" aria-hidden="true" />
              <span>Hotline: 0365865481</span>
            </a>
            <a
              href="mailto:contact@maytredan.com"
              className="hidden sm:flex items-center gap-1.5 transition-colors hover:text-[#D5AB75]"
            >
              <Mail className="size-3 text-[#D5AB75]" aria-hidden="true" />
              <span>contact@maytredan.com</span>
            </a>
          </div>

          {/* Slogan & Bộ chuyển đổi ngôn ngữ bên phải */}
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline font-medium tracking-wider text-[#D5AB75] uppercase">
              {lang === 'vi' ? 'Tinh hoa thủ công Việt' : 'Vietnamese Craftsmanship'}
            </span>
            <div className="flex items-center gap-1.5 font-bold">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`transition-colors ${
                  lang === 'vi' ? 'text-[#D5AB75]' : 'text-white/60 hover:text-white'
                }`}
                aria-label="Tiếng Việt"
              >
                VI
              </button>
              <span className="text-white/30">|</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`transition-colors ${
                  lang === 'en' ? 'text-[#D5AB75]' : 'text-white/60 hover:text-white'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Hiệu ứng đổi màu từ Trong Suốt -> Sáng Kem như Sen) */}
      {/* taste-skill-ignore */}
      <div
        className={`w-full transition-[background-color,color,padding] duration-300 ${
          isScrolled
            ? 'bg-[#FBF8F2]/95 text-[#35291F] py-2.5 backdrop-blur-md ring-1 ring-[#D5AB75]/30'
            : 'bg-transparent text-white py-4 md:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          {/* Logo & Tên thương hiệu */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label="MAYTREDAN – Trang chủ"
          >
            <div
              className={`relative size-10 overflow-hidden rounded-full p-1 transition-transform duration-300 group-hover:scale-105 ${
                isScrolled ? 'bg-[#713B19]/10 ring-1 ring-[#713B19]/30' : 'bg-white/10 ring-1 ring-[#D5AB75]/50'
              }`}
            >
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
              <span
                className={`font-serif text-xl font-bold tracking-tight transition-colors ${
                  isScrolled
                    ? 'text-[#713B19] group-hover:text-[#8B1D1D]'
                    : 'text-white group-hover:text-[#D5AB75]'
                }`}
              >
                MAYTREDAN
              </span>
              <span
                className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${
                  isScrolled ? 'text-[#8A5A36]' : 'text-[#D5AB75]'
                }`}
              >
                {lang === 'vi' ? 'Sống Thuận Tự Nhiên' : 'Natural Living'}
              </span>
            </div>
          </a>

          {/* Menu Điều hướng Desktop */}
          <nav aria-label="Main Navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {t.header.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-serif text-sm font-semibold tracking-wide transition-colors duration-200 active:scale-95 inline-block py-1 ${
                      isScrolled
                        ? 'text-[#35291F] hover:text-[#713B19]'
                        : 'text-[#EDE1D1]/90 hover:text-[#D5AB75]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nút Hành Động & Đặt Hàng bên phải */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#shop"
              className={`cta-btn inline-flex h-10 items-center justify-center rounded-full px-6 text-xs font-bold transition-colors active:scale-95 active:translate-y-0.5 ${
                isScrolled
                  ? 'bg-[#713B19] text-[#FBF8F2] hover:bg-[#8B1D1D]'
                  : 'bg-[#D5AB75] text-[#35291F] hover:bg-[#e2bb86]'
              }`}
            >
              {t.header.cta}
            </a>
          </div>

          {/* Nút Mobile Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              className={`flex size-10 items-center justify-center rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? 'bg-[#713B19]/10 text-[#35291F] hover:bg-[#713B19]/20'
                  : 'bg-white/10 text-[#EDE1D1] hover:text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`px-6 py-6 transition-colors md:hidden ${
            isScrolled ? 'bg-[#FBF8F2] text-[#35291F]' : 'bg-[#5c2e12] text-white'
          }`}
        >
          <ul className="flex flex-col gap-4 text-base font-medium">
            {t.header.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-serif text-lg transition-colors ${
                    isScrolled
                      ? 'text-[#35291F] hover:text-[#713B19]'
                      : 'text-[#EDE1D1] hover:text-[#D5AB75]'
                  }`}
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
