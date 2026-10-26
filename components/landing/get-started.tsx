import Image from 'next/image'
import { OrderForm } from './order-form'

export function GetStarted() {
  return (
    <footer id="dat-hang" className="scroll-mt-16 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center md:px-6 md:py-28">
        <div className="relative mx-auto aspect-square w-20">
          <Image
            src="/images/velnurio/brand-logo.webp"
            alt="Logo VELNURIO – Smart Solutions for Everyday Living"
            fill
            sizes="80px"
            className="object-contain"
          />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl text-balance">
          Sẵn Sàng Đồng Hành Cùng Tư Thế Chuẩn?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-slate-300 md:text-lg">
          Đăng ký thông tin để nhận tư vấn chọn kích cỡ và thông báo tình trạng sẵn hàng từ thương hiệu VELNURIO.
        </p>

        <div className="mt-10">
          <OrderForm />
        </div>
      </div>

      <div className="bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-slate-400 md:flex-row md:px-6 md:text-sm">
          <p>© 2026 VELNURIO. Smart Solutions for Everyday Living. Bảo lưu mọi quyền.</p>
          <p className="text-slate-400">
            Sản phẩm hỗ trợ thói quen tư thế thường nhật. Không thay thế chẩn đoán y khoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
