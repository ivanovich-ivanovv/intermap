# InterMap - Landing Page

Landing page chuyên nghiệp cho ứng dụng điều hướng nội khu với hiệu ứng 3D và đa ngôn ngữ (Vi/En).

## Cấu trúc dự án

```
app/
├── page.tsx          # Trang chính - kết hợp các components
├── layout.tsx        # Layout chung
└── globals.css       # CSS toàn cục

components/
├── Navigation.tsx           # Thanh điều hướng + language switcher
├── HeroSection.tsx          # Phần hero với 3D scene và cover image
├── FeaturesSection.tsx      # Các tính năng nổi bật
├── HowItWorksSection.tsx    # Hướng dẫn 3 bước
├── BenefitsSection.tsx      # Lợi ích
├── CTASection.tsx           # Call-to-action
├── Footer.tsx               # Footer
└── Building3D.tsx           # Component 3D buildings (Three.js)

lib/
└── translations.ts    # File chứa nội dung đa ngôn ngữ

public/images/
├── logo.png          # Logo chính (dùng file PNG của bạn)
├── coverpage.jpg     # Ảnh bìa hero section (dùng file JPG của bạn)
├── logo.svg          # Logo SVG (tạm)
├── hero-cover.svg    # Hero cover SVG (tạm)
└── app-icon.svg      # App icon SVG (tạm)
```

## Công nghệ sử dụng

- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations & transitions
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers
- **Lucide React** - Icons

## Tính năng

✅ **Đa ngôn ngữ** - Vietnamese & English với language switcher  
✅ **3D Interactive** - 3D building models with animations  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Smooth Animations** - Parallax, hover effects, transitions  
✅ **Modern UI** - Gradient colors, glassmorphism, shadows  
✅ **Component-based** - Dễ dàng quản lý và mở rộng  

## Hướng dẫn

### 1. Thay thế hình ảnh

Đặt các file hình ảnh của bạn vào `public/images/`:
- `logo.png` - Logo (khuyến nghị: 200x200px, nền trong suốt)
- `coverpage.jpg` - Ảnh bìa hero section (khuyến nghị: 1200x800px)

### 2. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

### 3. Tùy chỉnh nội dung

Chỉnh sửa file `lib/translations.ts` để thay đổi nội dung tiếng Việt và tiếng Anh.

### 4. Tùy chỉnh màu sắc

Tất cả màu sắc sử dụng Tailwind classes. Tìm kiếm và thay thế:
- `orange-` - Màu cam chính
- `amber-` - Màu vàng cam
- `yellow-` - Màu vàng

### 5. Tùy chỉnh 3D scene

Chỉnh sửa `components/Building3D.tsx` để thay đổi:
- Số lượng tòa nhà
- Vị trí và kích thước
- Màu sắc
- Animation

## Build Production

```bash
npm run build
npm start
```

## Cấu trúc Component

Mỗi component được tách riêng để dễ quản lý:

```tsx
// app/page.tsx - Main page
<Navigation />
<HeroSection />      // Hero + 3D + Cover image
<FeaturesSection />  // 6 features grid
<HowItWorksSection /> // 3 steps process
<BenefitsSection />  // 4 benefits
<CTASection />       // Call-to-action
<Footer />
```

## Hiệu ứng

- **Parallax scrolling** - Hero section di chuyển theo scroll
- **Fade in on scroll** - Sections xuất hiện khi scroll đến
- **Hover animations** - Cards nâng lên khi hover
- **3D rotation** - Buildings quay tự động
- **Gradient blobs** - Background animation
- **Icon rotation** - Icons quay liên tục

## License

Copyright © 2026 InterMap. All rights reserved.
