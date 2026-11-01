'use server'

export type OrderState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitOrder(_prev: OrderState, formData: FormData): Promise<OrderState> {
  const name = String(formData.get('name') ?? '').trim()
  const contact = String(formData.get('phone') ?? '').trim()

  if (name.length < 2 || name.length > 80) {
    return { status: 'error', message: 'Vui lòng nhập họ và tên hợp lệ.' }
  }
  if (contact.length < 5 || contact.length > 50) {
    return { status: 'error', message: 'Vui lòng cung cấp số điện thoại hoặc email liên hệ hợp lệ.' }
  }

  return {
    status: 'success',
    message: `Cảm ơn ${name}! Yêu cầu của bạn cho Bộ lót ly mây đan MAYTREDAN đã được ghi nhận thành công. Đội ngũ chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.`,
  }
}
