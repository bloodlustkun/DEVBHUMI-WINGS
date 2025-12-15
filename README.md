npm run build
npm run preview
# Devbhoomi Wings - Premium Travel Website

A fully upgraded, modern travel website for Devbhoomi Wings Travels Pvt. Ltd., built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## 🚀 Features

### Design & Animations
- **Animated Mesh Gradients** - Dynamic, GPU-optimized background animations with pulsing color transitions
- **Glass Morphism UI** - Consistent glass card components with backdrop blur effects
- **Motion Animations** - Smooth fade, slide, and scale animations on scroll using Motion (Framer Motion)
- **Particle Effects** - Lightweight particle system in hero section with interactive connections
- **Premium Navbar** - Sticky navigation with blur effect, shadow, and smooth hover animations
- **Parallax Effects** - Multi-layer background animations for depth and engagement

### Components
- `GlassCard` - Reusable glass morphism card with hover effects
- `AnimatedMeshBackground` - Animated gradient background with floating orbs
- `ParticleBackground` - Canvas-based particle system with connections
- `HeroSection` - Premium hero with animated logo, stats, and CTAs
- `Navbar` - Responsive navigation with blur effect and mobile menu
- `Footer` - Multi-column footer with social links and animations
- All major sections: Why Choose Us, About, Services, Special Offers, Trips, Reviews, Contact

### SEO Optimization
- **Meta Tags** - Comprehensive meta tags for description, keywords, author
- **Open Graph** - Full OG tags for social media sharing (Facebook, LinkedIn)
- **Twitter Cards** - Twitter-specific meta tags for rich previews
- **Structured Data** - JSON-LD schema for TravelAgency, services, and ratings
- **Geo Tags** - Location-based SEO for Delhi NCR targeting
- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Mobile Optimization** - Fully responsive with proper viewport settings

### Performance
- **GPU-friendly Animations** - Hardware-accelerated transforms and opacity changes
- **Lightweight Particles** - Optimized particle count based on screen size
- **Lazy Loading** - Animations trigger on viewport entry
- **Smooth Scrolling** - Native smooth scroll behavior

## 🎨 Color System

The design uses a premium dark theme with cyan/blue accents:

```css
--color-navy-dark: #04121f      /* Background base */
--color-navy-medium: #071d29    /* Sections */
--color-navy-light: #0f2233     /* Cards */
--color-cyan-glow: #06b6d4      /* Primary accent */
--color-blue-primary: #0ea5e9   /* Secondary accent */
--color-blue-accent: #2563eb    /* Tertiary accent */
```

## 📱 Responsive Design

- Mobile-first approach with breakpoints at:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Mobile hamburger menu with smooth animations
- Responsive grid layouts (1/2/3/4 columns)
- Fluid typography and spacing

## 🔧 Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1** - Utility-first styling
- **Motion 12.23** - Animation library (formerly Framer Motion)
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── GlassCard.tsx                 # Reusable glass card
│   │   ├── AnimatedMeshBackground.tsx    # Animated backgrounds
│   │   ├── ParticleBackground.tsx        # Particle system
│   │   ├── Logo.tsx                      # Animated logo
│   │   ├── Navbar.tsx                    # Navigation
│   │   ├── Footer.tsx                    # Footer
│   │   ├── HeroSection.tsx               # Hero
│   │   ├── WhyChooseUs.tsx               # Features
│   │   ├── AboutSection.tsx              # About
│   │   ├── ServicesSection.tsx           # Services
│   │   ├── SpecialOffersSection.tsx      # Offers
│   │   ├── TripsSection.tsx              # Trips
│   │   ├── ReviewsSection.tsx            # Reviews
│   │   ├── ContactSection.tsx            # Contact
│   │   ├── SEO.tsx                       # SEO component
│   │   └── ScrollIndicator.tsx           # Scroll hint
│   └── App.tsx                           # Main app
└── styles/
    ├── theme.css                         # Design system
    ├── tailwind.css                      # Tailwind config
    └── index.css                         # Global styles
```

## 🎯 Key Improvements Over Original

1. **Mesh Gradients** - Replaced static dark backgrounds with animated mesh gradients
2. **Glass UI** - Unified design system with consistent glass cards
3. **Animations** - Added Motion animations throughout (scroll, hover, entrance)
4. **Navbar** - Enhanced with blur, shadow, and smooth transitions
5. **Particles** - Added lightweight particle effects in hero
6. **Typography** - Improved with better scale, spacing, and letter-spacing
7. **SEO** - Maxed out with meta tags, OG tags, structured data
8. **Responsiveness** - Fully responsive with proper mobile menu
9. **Performance** - GPU-optimized animations and lazy loading
10. **Design System** - Centralized colors, spacing, and components

## 🚦 Getting Started

The project is ready to run. All dependencies are already installed.

### Build for Production
```bash
npm run build
```

## 📊 SEO Features

- **Title Tag**: Optimized with primary keywords
- **Meta Description**: Compelling, keyword-rich description
- **Keywords**: Comprehensive keyword list for travel services
- **OG Tags**: Full Open Graph implementation for social sharing
- **Twitter Cards**: Large image cards for Twitter
- **Structured Data**: TravelAgency schema with services and ratings
- **Geo Tags**: Location targeting for Delhi NCR
- **Canonical URL**: Proper canonical URL setup

## 🎨 Design Features

- **Mesh Gradient Animation**: 15s pulsing animation with 4 gradient layers
- **Glass Cards**: Consistent styling across all cards with hover effects
- **Gradient Buttons**: Premium gradient buttons with hover ripple effects
- **Icon Animations**: Rotating, scaling, and glowing effects on icons
- **Scroll Animations**: Fade + slide animations with stagger delays
- **Particle System**: Canvas-based with dynamic connections
- **Typography**: Professional scale with proper line-height and letter-spacing

## 📞 Contact Information

- **Phone**: +91 98765 43210
- **Email**: info@devbhoomiwings.com
- **Location**: Delhi NCR, India
- **Service Areas**: Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, Uttarakhand

## 🌟 Services

- Delhi NCR Cab Services
- Pithoragarh Travel Specialists
- Group Tour Packages
- Luxury SUV Rentals
- Tempo Traveller Bookings
- Corporate Travel Solutions
- 24/7 Customer Support

## 🏔️ Popular Destinations

- Haridwar & Rishikesh
- Pithoragarh
- Nainital & Mussoorie
- Dehradun & Dhanaulti
- Jim Corbett National Park
- Auli & Joshimath

---

Built with ❤️ for Devbhoomi Wings Travels Pvt. Ltd.
