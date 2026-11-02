'use client'

import Image from 'next/image'
import { ExternalLink, MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from './content-context'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12C24.017 5.367 18.644 0 12.017 0z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function SiteFooter() {
  const { lang, t } = useLanguage()
  const f = t.footer

  return (
    <footer className="bg-[#2B190E] text-[#EDE1D1]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {/* Cột 1: Favicon Emblem & Slogan */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-full bg-[#FBF8F2] p-1.5 ring-1 ring-[#D5AB75]">
                <Image
                  src="/assets/favicon-64.png"
                  alt="MAYTREDAN Favicon"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  MAYTREDAN
                </span>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#D5AB75]">
                  {lang === 'vi' ? 'Đan thủ công tại Việt Nam' : 'Handcrafted in Vietnam'}
                </p>
              </div>
            </div>

            <p className="mt-5 font-serif text-lg font-medium italic text-[#EDE1D1] leading-snug">
              {f.slogan.split('\n').map((line, idx, arr) => (
                <span key={idx} className="block">
                  {idx === 0 ? '“' : ''}{line}{idx === arr.length - 1 ? '”' : ''}
                </span>
              ))}
            </p>

            <p className="mt-3 text-xs leading-relaxed text-[#EDE1D1]/75">
              {f.brandBio}
            </p>
          </div>

          {/* Cột 2: Thông Tin Liên Hệ */}
          <div className="flex flex-col">
            <h3 className="font-serif text-base font-bold text-white">
              {f.contactTitle}
            </h3>

            <ul className="mt-5 flex flex-col gap-4 text-xs text-[#EDE1D1]/90">
              {/* Số điện thoại */}
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3B2416] text-[#D5AB75]">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[11px] text-[#D5AB75] uppercase tracking-wider font-semibold">
                    {lang === 'vi' ? 'Số điện thoại' : 'Phone'}
                  </span>
                  <a
                    href={`tel:${f.phone}`}
                    className="text-sm font-medium text-white hover:text-[#D5AB75] transition-colors"
                  >
                    {f.phone}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3B2416] text-[#D5AB75]">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[11px] text-[#D5AB75] uppercase tracking-wider font-semibold">
                    Email
                  </span>
                  <a
                    href={`mailto:${f.email}`}
                    className="text-sm font-medium text-white hover:text-[#D5AB75] transition-colors"
                  >
                    {f.email}
                  </a>
                </div>
              </li>

              {/* Địa chỉ */}
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3B2416] text-[#D5AB75]">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[11px] text-[#D5AB75] uppercase tracking-wider font-semibold">
                    {lang === 'vi' ? 'Địa chỉ' : 'Address'}
                  </span>
                  <span className="text-xs leading-relaxed text-[#EDE1D1]/90">
                    {f.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Cột 3: Kết Nối Với MAYTREDAN & Mua Hàng Chính Hãng */}
          <div className="flex flex-col">
            <h3 className="font-serif text-base font-bold text-white">
              {f.connectTitle}
            </h3>

            {/* Social Media Links with Icons */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href={f.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook MAYTREDAN"
                className="flex size-9 items-center justify-center rounded-full bg-[#3B2416] text-[#EDE1D1] transition-colors hover:bg-[#D5AB75] hover:text-[#2B190E] active:scale-95"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={f.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MAYTREDAN"
                className="flex size-9 items-center justify-center rounded-full bg-[#3B2416] text-[#EDE1D1] transition-colors hover:bg-[#D5AB75] hover:text-[#2B190E] active:scale-95"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={f.pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest MAYTREDAN"
                className="flex size-9 items-center justify-center rounded-full bg-[#3B2416] text-[#EDE1D1] transition-colors hover:bg-[#D5AB75] hover:text-[#2B190E] active:scale-95"
              >
                <PinterestIcon className="size-4" />
              </a>
              <a
                href={f.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X MAYTREDAN"
                className="flex size-9 items-center justify-center rounded-full bg-[#3B2416] text-[#EDE1D1] transition-colors hover:bg-[#D5AB75] hover:text-[#2B190E] active:scale-95"
              >
                <XIcon className="size-3.5" />
              </a>
            </div>

            {/* Official Amazon US purchase block (formatted exactly like user image) */}
            <div className="mt-7 flex flex-col">
              <h4 className="font-serif text-base font-bold text-[#D5AB75]">
                {f.amazonCardTitle}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#EDE1D1]/90">
                {f.amazonCardDesc}
              </p>

              <div className="mt-4">
                <a
                  href={f.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#D5AB75] px-5 text-sm font-bold text-[#35291F] transition-colors hover:bg-[#e2bb86] active:scale-95 active:translate-y-0.5"
                >
                  <span>{f.amazonCTA}</span>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-[#EDE1D1]/65">
                {f.amazonCardNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tone shift legal bar (No 1px hairline border) */}
      <div className="bg-[#1C0E07]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-[#EDE1D1]/60 md:flex-row md:px-6">
          <p>{f.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              {f.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {f.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {f.shipping}
            </a>
          </div>

          <p className="text-xs font-medium text-[#D5AB75]/90">
            {f.taglineBadge}
          </p>
        </div>
      </div>
    </footer>
  )
}
