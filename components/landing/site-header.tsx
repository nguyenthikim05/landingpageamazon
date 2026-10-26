import Image from 'next/image'

const links = [
  { href: '#dac-diem', label: 'Đặc điểm' },
  { href: '#huong-dan-mac', label: 'Cách sử dụng' },
  { href: '#huong-dan-size', label: 'Chọn size' },
  { href: '#trong-hop', label: 'Quy cách đóng gói' },
  { href: '#faq', label: 'Hỏi đáp' },
]

export function SiteHeader() {
  return (
    /* taste-skill-ignore */
    <header className="sticky top-0 z-50 bg-navy/95 text-navy-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="VELNURIO – Trang chủ">
          <Image
            src="/images/velnurio/brand-logo.webp"
            alt="VELNURIO Logo"
            width={36}
            height={36}
            className="size-9 object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-white">VELNURIO</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
              Smart Solutions
            </span>
          </div>
        </a>
        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-2 py-1 text-slate-300 transition-colors hover:text-white active:scale-95"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#dat-hang"
          className="cta-btn inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-semibold text-navy transition-colors hover:bg-slate-100 active:scale-95 active:translate-y-0.5"
        >
          Đặt hàng ngay
        </a>
      </div>
    </header>
  )
}
