# 🏢 InterMap - Enterprise Landing Page

Landing page chuyên nghiệp cấp doanh nghiệp cho ứng dụng điều hướng nội khu.

## ✨ Tính năng Pro

### 🎨 Design Cao Cấp
- **Typography chuyên nghiệp** - Font Inter với font-smoothing
- **Gradient tinh tế** - Màu cam sang trọng
- **Animations mượt mà** - Framer Motion với parallax
- **3D Interactive** - Three.js buildings với auto-rotate
- **Glassmorphism** - Hiệu ứng kính mờ hiện đại

### 📊 Sections Đầy Đủ

1. **Navigation** - Logo lớn, status indicator, hover effects
2. **Hero** - 3D scene + cover image, parallax scrolling
3. **Trust Badges** - ISO, GDPR, certifications
4. **Features** - 6 tính năng với animations
5. **Stats** - 4 chỉ số ấn tượng với counters
6. **How It Works** - 3 bước với rotating icons
7. **Benefits** - 4 lợi ích chính
8. **Testimonials** - 3 đánh giá từ khách hàng lớn
9. **CTA** - Call-to-action với benefits list
10. **Footer** - Đầy đủ thông tin công ty, social links

### 🚀 Social Proof
- Thống kê: 500+ tòa nhà, 1M+ users, 99.9% uptime
- Đánh giá 5 sao từ VinGroup, AEON, Singapore Hospital
- Trust badges: Vincom, Lotte, Crescent Mall
- Certifications: ISO 27001, GDPR, awards

### 💼 Enterprise Features
- **Professional Footer** - 4 columns: Company, Products, Contact, Social
- **Contact Info** - Địa chỉ Landmark 81, phone, email
- **Social Media** - Facebook, LinkedIn, Twitter, Youtube
- **Legal Links** - Privacy, Terms, Cookies
- **Multi-language** - VI/EN với smooth transition

## 🎯 Cảm nhận Enterprise

### Visual Identity
✅ Logo lớn với status indicator (green dot)  
✅ Tagline "Indoor Navigation" dưới logo  
✅ Navigation bar cao hơn (h-20) với shadow-lg  
✅ Hover effects tinh tế với underline animation  

### Color Scheme
🟠 Orange (#ff6b35) - Primary  
🟡 Amber (#f7931e) - Secondary  
⚫ Dark (#1f2937) - Professional sections  
⚪ White - Clean backgrounds  

### Typography
📝 Font: Inter (Google Fonts)  
📝 Font smoothing: antialiased  
📝 Font features: cv02, cv03, cv04, cv11  
📝 Weights: 300-900  

### Micro-interactions
- Smooth scroll behavior
- Custom scrollbar với gradient
- Float animations
- Glow effects
- Scale on hover
- Slide in on scroll

## 📱 Responsive
- Mobile: Stack layout, hamburger menu
- Tablet: 2 columns
- Desktop: Full layout, auto-rotate 3D

## 🔧 Tech Stack
- Next.js 16 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js + React Three Fiber
- Lucide Icons
- Inter Font

## 🎨 Professional Elements

### Header
- Height: 80px (h-20)
- Backdrop blur: XL
- Shadow: Large
- Border: Bottom 1px
- Logo size: 48x48px
- Status dot: Green (online)

### Sections
- Padding: 80-96px vertical
- Max-width: 7xl (1280px)
- Spacing: Consistent 32-48px
- Borders: Subtle gray-200

### Buttons
- Primary: Gradient orange to amber
- Secondary: White/10 with backdrop blur
- Hover: Scale 1.05, shadow increase
- Border radius: Full (rounded-full)
- Padding: Large (px-10 py-5)

### Cards
- Shadow: lg to 2xl on hover
- Border: Subtle gray-100
- Border radius: 2xl to 3xl
- Hover: Lift -10px
- Background: Gradient gray-50 to white

## 📂 Structure

```
components/
├── Navigation.tsx        ⭐ Enhanced with status dot
├── HeroSection.tsx       🎨 3D + cover image
├── TrustSection.tsx      🏅 NEW - Badges & certs
├── FeaturesSection.tsx   ✨ 6 features
├── StatsSection.tsx      📊 NEW - Impressive numbers
├── HowItWorksSection.tsx 🔄 3 steps
├── BenefitsSection.tsx   💎 4 benefits
├── TestimonialsSection.tsx 💬 NEW - Reviews
├── CTASection.tsx        🚀 Enhanced with benefits
├── Footer.tsx            📧 Full enterprise footer
└── Building3D.tsx        🏗️ Three.js 3D scene
```

## 🎯 Best Practices

### Performance
- Image optimization with Next/Image
- Lazy loading components
- Viewport animations (once: true)
- Minimal re-renders

### Accessibility
- Semantic HTML
- Alt texts
- Focus states
- Keyboard navigation

### SEO
- Proper heading hierarchy
- Meta descriptions
- Clean URLs
- Fast loading

## 🚀 Commands

```bash
npm run dev    # Development
npm run build  # Production build
npm start      # Production server
```

## 📝 Customization

### Thay đổi màu:
Search & replace trong toàn bộ project:
- `orange-` → your primary color
- `amber-` → your secondary color

### Thay đổi nội dung:
Edit `lib/translations.ts`

### Thay đổi logo:
Replace `public/images/logo.png` (200x200px)

### Thay đổi cover:
Replace `public/images/coverpage.jpg` (1200x800px)

## 💡 Pro Tips

1. **Animations** - Giữ duration 0.3-0.8s
2. **Spacing** - Dùng multiples của 8px
3. **Colors** - Stick to 2-3 colors chính
4. **Typography** - Max 3 font weights
5. **Shadows** - Subtle, không quá đậm

## 📞 Support

Website: www.intermap.vn  
Email: contact@intermap.vn  
Phone: +84 (028) 1234 5678  

---

© 2026 InterMap. All rights reserved.
