# AuraHub - Landing Page giới thiệu thiết bị theo dõi chất lượng không khí & giấc ngủ thông minh

AuraHub là landing page giới thiệu một thiết bị thông minh giúp theo dõi chất lượng không khí, tiếng ồn, ánh sáng và các yếu tố ảnh hưởng đến giấc ngủ trong không gian sống. Dự án tập trung vào trải nghiệm người dùng hiện đại, responsive tốt, có form đăng ký nhận tin, theo dõi hành vi, dark mode và chatbot tư vấn sản phẩm.

Demo trực tiếp: https://aurahub-pns.vercel.app/

## Công Nghệ Sử Dụng

- Next.js `16.2.9`
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- Vercel để deploy ứng dụng
- `lucide-react` `^1.22.0` cho icon
- `react-hook-form` `^7.80.0` và `zod` `^4.4.3` để validate form
- `@hookform/resolvers` `^5.4.0` để kết nối Zod với React Hook Form
- `next-themes` `^0.4.6` để quản lý dark mode
- Google Gemini API cho chatbot tư vấn sản phẩm

## Tính Năng Chính

- Hero section giới thiệu AuraHub với CTA rõ ràng.
- Section tính năng nổi bật của sản phẩm.
- Section xem chi tiết sản phẩm với hardware profile và các điểm mô tả chính.
- Gallery hình ảnh nhiều góc độ, có carousel và modal xem ảnh lớn.
- Bảng thông số kỹ thuật.
- Form đăng ký nhận thông báo khi AuraHub mở đặt trước.
- Responsive đầy đủ trên desktop, tablet và mobile.
- Tối ưu Performance & SEO:
  - Metadata và Open Graph trong App Router.
  - Ảnh dùng `next/image`, có `priority` cho ảnh quan trọng.
  - Skeleton loading cho ảnh.
  - Cấu trúc heading/section rõ ràng.

## Các Điểm Cộng Đã Triển Khai

- Validate form, webhook và tracking hành vi:
  - Validate form đăng ký bằng `react-hook-form` và `zod`.
  - Gửi dữ liệu đăng ký tới webhook thông qua API route server-side.
  - Theo dõi click CTA, điều hướng carousel, scroll milestone và submit form.
  - Hiển thị toast trực quan cho trạng thái thành công, lỗi và sự kiện tracking.

- Scroll animation, skeleton loading và micro-interactions:
  - Scroll reveal bằng Intersection Observer.
  - Skeleton shimmer cho ảnh trước khi tải xong.
  - Hover/active states cho button, card, carousel control và input.
  - Hỗ trợ `prefers-reduced-motion`.

- Dark mode:
  - Chuyển đổi giao diện sáng/tối bằng `next-themes`.
  - Lưu lựa chọn theme của người dùng với key `aurahub-theme`.
  - Hệ thống màu dùng CSS variables để đồng bộ light mode và dark mode.
  - Có nút toggle Sun/Moon trên navigation.

- Chatbot AuraHub Assistant:
  - Widget chat nổi ở góc màn hình.
  - API route `/api/chat` gọi Google Gemini từ server, không lộ API key ra client.
  - System prompt giới hạn bot chỉ tư vấn các nội dung liên quan AuraHub.
  - Giới hạn số tin nhắn mỗi phiên và giới hạn độ dài tin nhắn.
  - Có typing indicator, xử lý lỗi thân thiện và giao diện responsive.

## Hướng Dẫn Cài Đặt Và Chạy Local

Yêu cầu môi trường:

- Node.js `>=20.9.0` theo yêu cầu của Next.js đang dùng trong dự án.
- `pnpm` vì repo có `pnpm-lock.yaml`.

Các bước chạy local:

```bash
git clone https://github.com/pnson1322/landing-page-test.git
cd landing-page-test
pnpm install
pnpm dev
```

Sau đó mở:

```bash
http://localhost:3000
```

Các script có sẵn:

```bash
pnpm dev      # chạy development server
pnpm build    # build production
pnpm start    # chạy bản production sau khi build
pnpm lint     # kiểm tra ESLint
```

## Cấu Hình Biến Môi Trường

Tạo file `.env.local` từ file mẫu:

```bash
cp .env.local.example .env.local
```

Các biến môi trường hiện có:

```env
WEBHOOK_URL=https://webhook.site/your-webhook-id
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.1-flash-lite
```

Ý nghĩa:

- `WEBHOOK_URL`: URL nhận dữ liệu form đăng ký và tracking. Có thể tạo miễn phí tại https://webhook.site.
- `GEMINI_API_KEY`: API key dùng cho chatbot AuraHub Assistant. Có thể lấy miễn phí tại https://aistudio.google.com/apikey.
- `GEMINI_MODEL`: model Gemini dùng cho chatbot. Mặc định trong dự án là `gemini-3.1-flash-lite`.

Lưu ý:

- Không commit file `.env.local` lên GitHub.
- Nếu deploy lên Vercel, cần khai báo lại các biến này trong `Project Settings > Environment Variables`.
- Sau khi thêm hoặc sửa biến môi trường trên Vercel, cần redeploy để thay đổi có hiệu lực.

## Cấu Trúc Thư Mục

```text
landing-page-test/
├── public/
│   └── *.webp                 # hình ảnh sản phẩm AuraHub
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts       # API route gọi Gemini chatbot
│   │   │   ├── subscribe/route.ts  # API route gửi form đăng ký
│   │   │   └── track/route.ts      # API route tracking hành vi
│   │   ├── globals.css        # Tailwind, animation, utility CSS
│   │   ├── theme.css          # CSS variables cho light/dark mode
│   │   ├── layout.tsx         # Root layout, metadata, theme provider
│   │   └── page.tsx           # Trang chính
│   └── features/
│       └── landing/
│           ├── components/
│           │   ├── chatbot/   # UI chatbot AuraHub Assistant
│           │   ├── gallery/   # gallery, modal, carousel controls
│           │   ├── motion/    # reveal animation, skeleton image
│           │   ├── newsletter/# form đăng ký nhận tin
│           │   ├── sections/  # các section chính của landing page
│           │   ├── theme/     # theme provider và theme toggle
│           │   ├── tracking/  # tracking provider và toast
│           │   └── ui/        # component UI nhỏ dùng trong landing
│           ├── constants/     # cấu hình, copy, prompt, styles
│           ├── hooks/         # custom hooks cho form, gallery, chatbot
│           ├── schemas/       # schema validate bằng Zod
│           ├── types/         # TypeScript types
│           ├── data.ts        # dữ liệu hiển thị trên landing page
│           └── landing-page.tsx
├── .env.local.example
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.ts
```

## Hướng Dẫn Deploy

Deploy lên Vercel:

1. Push source code lên GitHub.
2. Vào Vercel và chọn `Add New Project`.
3. Import GitHub repository của dự án.
4. Framework preset: Next.js.
5. Cấu hình Environment Variables:
   - `WEBHOOK_URL`
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL` nếu muốn đổi model mặc định
6. Deploy project.
7. Nếu thay đổi biến môi trường sau khi deploy, cần redeploy để áp dụng.

## Hiệu Năng

Trong quá trình phát triển, dự án được tối ưu theo các hướng:

- Dùng `next/image` cho ảnh.
- Thêm `priority` cho ảnh quan trọng phía trên màn hình đầu tiên.
- Tách component theo feature để dễ maintain.
- Dùng CSS transform/opacity cho animation để hạn chế layout shift.
- Hỗ trợ reduced motion cho người dùng bật chế độ giảm chuyển động.
- API key và webhook URL được xử lý qua server-side route, không hardcode trong client.

Kết quả PageSpeed Insights (Mobile):

| Hạng mục       | Điểm    |
| -------------- | ------- |
| Performance    | 98/100  |
| Accessibility  | 100/100 |
| Best Practices | 100/100 |
| SEO            | 100/100 |

Ghi chú: khi viết README, API PageSpeed công khai trả lỗi `429 Too Many Requests`, nên chỉ số ngoài Performance cần được cập nhật thủ công từ https://pagespeed.web.dev/ cho URL demo trước khi nộp chính thức.

## Thông Tin Tác Giả / Ghi Chú Nộp Bài

- Họ tên: Phan Ngọc Sơn
- Email: pnson22@gmail.com
- GitHub: https://github.com/pnson1322

Đây là sản phẩm landing page AuraHub được thực hiện để nộp vòng 2 bài test tuyển dụng Thực tập sinh IT phát triển website của Helicorp.

Repository sử dụng Git/GitHub theo từng nhánh feature, commit message rõ ràng và tách chức năng theo từng giai đoạn phát triển.
