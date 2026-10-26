'use server'

export type OrderState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const PHONE_PATTERN = /^(0|\+84)[0-9]{9,10}$/

export async function submitOrder(_prev: OrderState, formData: FormData): Promise<OrderState> {
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').replace(/[\s.-]/g, '')

  if (name.length < 2 || name.length > 80) {
    return { status: 'error', message: 'Vui lòng nhập họ tên hợp lệ.' }
  }
  if (!PHONE_PATTERN.test(phone)) {
    return { status: 'error', message: 'Số điện thoại chưa đúng định dạng.' }
  }

  return {
    status: 'success',
    message: `Cảm ơn ${name}! Chúng tôi sẽ gọi lại cho bạn trong ít phút để xác nhận đơn hàng.`,
  }
}
