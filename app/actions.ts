'use server'

export type OrderState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const GOOGLE_SHEET_ID = '1QSvw7Th668NdE1Nb4ylCqqevdEgx3tt9svKmkBceO1U'

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

  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })

  const orderPayload = {
    timestamp,
    name,
    contact,
    quantity: `${quantity} bộ`,
    priceApplied: '$19.32 (Giá sale mở bán - Giá bán $23 - Giá gạch $39)',
    note: note || 'Không có ghi chú thêm',
    source: 'Landing Page Maytredan',
    sheetId: GOOGLE_SHEET_ID,
  }

  // 1. Tự động gửi tới Google Apps Script Webhook nếu đã cấu hình
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (webhookUrl) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
        redirect: 'follow',
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
    } catch (err) {
      console.error('Lỗi khi gửi dữ liệu sang Google Sheet Webhook:', err)
    }
  }

  return {
    status: 'success',
    message: `Cảm ơn ${name}! Thông tin đặt mua trước của bạn (Số lượng: ${quantity} bộ, Đơn giá ưu đãi: $19.32) đã được ghi nhận vào hệ thống. Chuyên viên MAYTREDAN sẽ liên hệ tư vấn qua "${contact}" trong thời gian sớm nhất!`,
  }
}
