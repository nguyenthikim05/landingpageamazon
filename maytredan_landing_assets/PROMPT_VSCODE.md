# PROMPT CHO VS CODE (COPILOT / AI CODING AGENT)

Bạn là senior frontend developer đồng thời là UI designer chuyên tối ưu landing page thương mại điện tử. Hãy CHỈNH SỬA TRỰC TIẾP dự án landing page tôi đang mở trong VS Code, chuyển nhận diện và nội dung hiện tại thành MAYTREDAN Handmade Rattan Coaster Set, tập trung khách hàng US.

## Dữ liệu nguồn cần đọc trước
- `maytredan_landing_assets/landing-content.en.json`: NGUỒN DUY NHẤT cho copywriting, giá bán, thông số và brand story.
- `maytredan_landing_assets/brand-tokens.css`: bộ màu thương hiệu.
- `maytredan_landing_assets/assets/maytredan-logo-original.png`: logo CHÍNH THỨC; không tự thiết kế lại.
- `maytredan_landing_assets/assets/favicon-64.png`: favicon.
- Tôi đã có ảnh sản phẩm thật trong dự án. Hãy dò thư mục images/assets/public và dùng ảnh thật có sẵn, KHÔNG tạo ảnh giả, KHÔNG sử dụng ảnh đối thủ, KHÔNG thay bằng ảnh stock không đúng sản phẩm.

## Yêu cầu tối quan trọng
1. BẮT ĐẦU bằng việc quét cấu trúc dự án và xác định framework, entry point, components, CSS variables, thư mục ảnh, routing, buttons, cart/order links và responsive breakpoints. Trước khi sửa, lập bảng ngắn các file cần sửa và phần tử cần thay.
2. BẢO TOÀN 100% bố cục khung, thứ tự section, hệ lưới, spacing quan trọng, animations, responsive behavior, chức năng CTA, form, tracking và checkout. Không viết lại trang từ đầu; không đổi framework; không cài thư viện nếu không cần.
3. Thay tên/logo/thông điệp sản phẩm cũ bằng thương hiệu `MAYTREDAN`, sản phẩm `Handmade Rattan Coaster Set`, slogan `Vietnamese Craftsmanship, Natural Living`, giá dự kiến `$23.59` (USD). Không tự tạo giá gạch ngang, % giảm, khan hiếm, fake testimonials hoặc chính sách không có thật.
4. Thay hệ màu cũ bằng brand tokens: primary #713B19, hover #562C13, accent #D5AB75, background #FBF8F2, alternate #EDE1D1, heading/text #35291F, muted #6B5849. Dùng có chọn lọc theo selector/token thực tế, bảo đảm tương phản văn bản. Không thay xanh olive, navy hoặc turquoise làm màu chủ đạo.
5. Giữ nguyên vị trí ảnh trong layout nhưng thay đường dẫn tới hình ảnh sản phẩm THẬT do tôi cung cấp. Dùng object-fit thích hợp để sản phẩm không bị méo/cắt; thêm alt tiếng Anh mô tả đúng ảnh. Nếu thiếu ảnh cần thiết, giữ placeholder hợp lý và liệt kê tên vị trí cần ảnh; tuyệt đối không bịa ảnh.
6. Copy toàn bộ bằng English (US), tham khảo JSON. Map nội dung vào CÁC SECTION ĐANG CÓ, không tự thêm section lớn. Nếu template có ít section hơn, ưu tiên hero, 4 lợi ích, product details, brand story, care, FAQs và CTA. Nếu template có section testimonial/guarantee/discount chưa có chứng cứ, thay bằng nội dung giới thiệu hoặc ẩn một cách an toàn mà không hỏng bố cục.
7. Chỉ một SKU được xác nhận cho landing page: 6 coasters ~10 cm + 1 matching holder, $23.59. Combo có 2 decor mats chưa được chốt, KHÔNG hiển thị như sản phẩm đang bán. 4 inches là khoảng 10 cm, không khẳng định chính xác 10.16 cm. Không khẳng định chịu nhiệt/chống nước/chống nấm mốc/được chứng nhận khi chưa có kiểm chứng.
8. Không làm hỏng links đang chạy. Nếu CTA cũ liên kết sai sản phẩm và chưa có URL Amazon/checkout mới, KHÔNG tự bịa link; để TODO rõ ràng, hoặc giữ hành vi nội bộ phù hợp, và báo vị trí chờ liên kết.
9. Sửa SEO title, meta description, Open Graph (nếu có), favicon, alt text. Bảo đảm mobile 375px, tablet 768px, desktop 1440px; không tràn ngang; ảnh được lazy-load ngoài hero khi phù hợp.
10. Chạy typecheck/lint/build nếu dự án có scripts. Sửa lỗi phát sinh do thay đổi. Báo cáo file đã sửa, trước/sau, vị trí thiếu ảnh hoặc links, và kết quả kiểm tra.

## Quy trình
A. Đọc project & các tài nguyên nguồn, báo ngắn kế hoạch.
B. Thực hiện sửa file trực tiếp, không chỉ đưa code ví dụ.
C. So sánh thay đổi (diff), loại bỏ tên thương hiệu cũ và claim chưa kiểm chứng.
D. Chạy kiểm tra, báo kết quả + danh sách TODO tối thiểu.

## Chú ý
Không sửa nội dung các file gốc trong thư mục `maytredan_landing_assets`. Nếu đường dẫn assets không phù hợp kiến trúc, hãy copy chúng vào public/assets của dự án và cập nhật đúng đường dẫn. Hình logo là hình nền kem; đừng tự động xóa nền hoặc crop thành logo khác. Ưu tiên lấy đúng ảnh sản phẩm đã có và hỏi tôi đường dẫn nếu không thể tìm được.


FAVICON UPDATE: Thay favicon cũ bằng `maytredan_landing_assets/assets/favicon.ico`, dùng biểu tượng đã căn giữa, không bóp méo, không dùng toàn bộ wordmark. Thêm apple-touch-icon từ `favicon-180.png` nếu dự án hỗ trợ. Kiểm tra cache trình duyệt khi xác nhận thay đổi.
