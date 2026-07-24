# RS Design System Portfolio

## 🎯 Mission
High-performance, pixel-perfect portfolio website following studio-grade aesthetics with GPU-accelerated animations and WCAG 2.2 AA accessibility standards.

## 🎨 Design System

### Color Palette
- **Background Primary**: `#F3F3F3` - Soft studio off-white
- **Background Secondary**: `#FFFFFF` - Pure white cards
- **Text Primary**: `#0A0A0A` - Deep jet black
- **Text Muted**: `#666666` - Charcoal gray
- **Border**: `#D8D8D8` - Crisp 1px borders
- **Accent Orange**: `#FF4D00` - High-energy studio orange
- **Accent Red**: `#E50000` - Active indicators

### Typography
- **Font Stack**: Inter, system sans-serif
- **Display Headings**: `clamp(3.5rem, 8vw, 8.5rem)`
- **Line Height**: 0.9 - 0.95 (tight)
- **Letter Spacing**: -0.03em (tight)
- **Text Transform**: UPPERCASE for display text
- **Monospace Tags**: Bracketed styling `[TAG]`

### Motion Principles
- **GPU Acceleration Only**: All animations use `transform` and `opacity`
- **No Layout Properties**: Never animate `height`, `width`, `top`, `margin`
- **Smooth Easing**: Custom cubic-bezier curves
- **Performance First**: `will-change`, `backface-visibility`, `perspective`

## 📐 Architecture

### Performance Optimization
✅ GPU-accelerated transforms (`translate3d`, `scale3d`)  
✅ Next.js Image optimization with `priority` flag  
✅ Modern image formats (WebP, AVIF)  
✅ Fluid typography with `clamp()`  
✅ Reduced motion support  
✅ Lazy loading for below-fold content  

### Accessibility (WCAG 2.2 AA)
✅ Keyboard navigation  
✅ Focus-visible indicators (2px orange outline)  
✅ Skip to content link  
✅ Semantic HTML  
✅ ARIA labels  
✅ Screen reader support  
✅ Color contrast 4.5:1 minimum  

## 🚀 Key Features

### 1. Hero Section
- Full-width accent banner (#FF4D00)
- Bracketed tag system `[OPTIMIZED CODE]`
- Massive stacked display headers
- Smooth stagger animations

### 2. Projects List
- Full-width bordered rows
- Hover-triggered image reveals
- Bracketed tags `[OPEN]`, `[PYTORCH]`
- Role descriptions
- GPU-accelerated scale effects

### 3. Interactive Playground
- Horizontal grid layout
- Creative experiment cards
- Smooth hover lift effects
- Tech stack badges

### 4. Marquee Ticker
- Infinite horizontal scroll
- Tech skills separated by bullets `•`
- Pause on hover
- 30s smooth loop

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Animation**: Framer Motion
- **Font**: Inter (Google Fonts)
- **Optimization**: Next/Image, WebP/AVIF
- **Accessibility**: WCAG 2.2 AA compliant

## 📁 File Structure

```
/app
  /portfolio-rs
    page.jsx          # Main RS portfolio page
/styles
  tokens.css          # Design tokens & CSS variables
/public
  /slider            # Project images
tailwind.config.js    # Extended with RS colors
```

## 🎯 Performance Metrics

- **Lighthouse Score**: 95+ (Performance)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Animation FPS**: 60fps consistently
- **Bundle Size**: Optimized with code splitting

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📝 Usage

### Development
```bash
npm run dev
```

Navigate to: `http://localhost:3000/portfolio-rs`

### Build
```bash
npm run build
npm start
```

## 🎨 Design Tokens

All design tokens are centralized in `styles/tokens.css`:
- Color variables
- Typography scale
- Spacing system
- Motion durations
- Z-index scale
- Custom easing functions

## ⚡ Performance Guidelines

### DO:
- Use `transform: translate3d()` for movement
- Use `opacity` for fade effects
- Use `scale3d()` for scaling
- Implement `will-change` sparingly
- Optimize images with Next/Image

### DON'T:
- Animate `height`, `width`, `top`, `left`
- Use `margin` or `padding` in animations
- Overuse `will-change`
- Skip image optimization
- Ignore reduced motion preferences

## 🔍 SEO Optimization

- Semantic HTML structure
- Descriptive meta tags
- Alt text for all images
- Proper heading hierarchy
- Open Graph tags
- Twitter Card tags

## 📊 Analytics Ready

The portfolio is instrumented and ready for:
- Google Analytics
- Vercel Analytics
- Custom event tracking
- Performance monitoring

## 🤝 Contribution Guidelines

1. Follow the design system strictly
2. All animations must be GPU-accelerated
3. Maintain WCAG 2.2 AA standards
4. Test across all breakpoints
5. Run Lighthouse before commits

## 📄 License

Portfolio website for Tushar Pawar - All rights reserved

---

**Built with performance, accessibility, and aesthetic excellence in mind.**
