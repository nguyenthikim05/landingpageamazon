'use server'

export type OrderState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfvhprk_mYdzCEyTcET1sffyh6EE7432bJscTk0l0y8_FlXgA/formResponse'

export async function submitOrder(_prev: OrderState, formData: FormData): Promise<OrderState> {
  const name = String(formData.get('name') ?? '').trim()
  const contact = String(formData.get('phone') ?? '').trim()
  const quantity = String(formData.get('quantity') ?? '1').trim()
  const note = String(formData.get('note') ?? '').trim()

  if (name.length < 2 || name.length > 80) {
    return { status: 'error', message: 'Vui lòng nhập họ và tên hợp lệ (từ 2 đến 80 ký tự).' }
  }
  if (contact.length < 5 || contact.length > 60) {
    return { status: 'error', message: 'Vui lòng cung cấp số điện thoại hoặc email liên hệ hợp lệ.' }
  }

  // 1. Gửi trực tiếp vào Google Form đã liên kết với Google Trang Tính của bạn
  const formPayload = new URLSearchParams()
  formPayload.append('entry.1010751395', name)
  formPayload.append('entry.220478753', contact)
  formPayload.append('entry.1361136669', `${quantity} bộ (Giá ưu đãi mở bán: $19.32)`)
  formPayload.append(
    'entry.1770700990',
    note
      ? `${note} | [Landing Page MAYTREDAN - Giá mở bán: $19.32, Giá gốc $23, Giá gạch $39]`
      : '[Landing Page MAYTREDAN - Khách đặt trước giá mở bán: $19.32]'
  )

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formPayload.toString(),
      redirect: 'follow',
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
  } catch (err) {
    console.error('Lỗi khi gửi dữ liệu sang Google Form:', err)
  }

  // 2. Dự phòng: Gửi qua Webhook bổ sung nếu có cấu hình biến môi trường GOOGLE_SHEET_WEBHOOK_URL
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          quantity: `${quantity} bộ`,
          price: '$19.32',
          note,
          timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
        }),
      })
    } catch (e) {
      // ignore
    }
  }

  return {
    status: 'success',
    message: `Cảm ơn ${name}! Thông tin đặt mua trước của bạn (Số lượng: ${quantity} bộ, Đơn giá ưu đãi: $19.32) đã được ghi nhận vào hệ thống thành công. Chuyên viên MAYTREDAN sẽ liên hệ tư vấn qua "${contact}" trong thời gian sớm nhất!`,
  }
}
