# Club 7 Fitness — Premium Gym Website

A modern, production-ready fitness website with a balanced light + dark design, smooth animations, and a clean component architecture.

## Design System

- **Primary**: #5589c4 (soft premium blue) with blue glow accents
- **Surfaces**: Dark hero/header on entry, white throughout the rest
- **Typography**: Montserrat across the site, balanced scale (no oversized text)
- **UI**: Rounded-xl corners, soft shadows, generous spacing, minimal premium look

## Tech Approach

- Tailwind for styling, Framer Motion for component/page animations, GSAP + ScrollTrigger for scroll-driven counters and parallax
- TanStack Router file-based routes (one route per page) for proper SEO + per-page metadata
- Montserrat loaded via Google Fonts

## Pages & Routes

- `/` Home
- `/about` About
- `/services` Services
- `/contact` Contact

Shared layout (header + footer) lives in `__root.tsx`.

## Global UI

- **Header/Navbar**: Transparent over hero, becomes solid dark with white text on scroll. Active link gets animated underline. Sticky. Mobile hamburger drawer.
- **Scroll progress bar** fixed at top
- **Footer**: Minimal with brand, quick links, contact, socials

## Home Page Sections

1. **Hero** — Dark animated background, content **left-aligned with reduced width**, high-quality gym image on the right, subtle parallax, two CTAs with hover animation
2. **Stats Strip** — Horizontal strip with GSAP animated counters (Members, Trainers, Years Experience, Classes/Week)
3. **About Preview** — White bg, image left + content right, fade/slide on scroll
4. **Services Preview** — Card grid with tilt + blue glow hover
5. **Trainers** — Grid with depth/lift hover
6. **Testimonials** — Framer Motion slider
7. **CTA Section** — Blue gradient accent panel
8. **Footer**

## About Page

- Intro hero (light), Mission & Vision (two-column), Achievements (animated counters), Trainers grid

## Services Page

- **Equipment Showcase** (each with unique image): Treadmill, Dumbbells, Bench Press, Cross Trainer, Cable Machine, Strength Machines
- **Training Programs**: Weight Training, Cardio, Personal Training, Fat Loss, Muscle Gain
- Card hover animations throughout

## Contact Page

- Modern form with floating labels (Name, Email, Phone, Message)
- Contact info block (address, phone, email, hours)
- Embedded map section
- Form is front-end only (toast on submit) unless backend is requested later

## Imagery

- All images **unique**, gym-themed, consistent premium tone
- Generated via AI image generation, stored in `src/assets/images/`
- Used for: hero, about, each equipment item, each trainer, each program, testimonial avatars

## Project Structure

```
src/
  components/
    layout/      (Header, Footer, ScrollProgress)
    sections/    (Hero, Stats, AboutPreview, ServicesPreview, Trainers, Testimonials, CTA, Equipment, Programs, ContactForm, etc.)
    ui/          (existing shadcn components)
  hooks/         (useScrollPosition, useCounter)
  utils/         (animation helpers)
  routes/        (index, about, services, contact, __root)
  assets/images/
```

Each section is its own component with clear `{/* ===== SECTION ===== */}` comments.

## Animations Summary

- Framer Motion: page transitions, fade/slide on scroll, testimonial slider, hover effects
- GSAP + ScrollTrigger: counters, parallax on hero image, reveal animations
- Tilt + blue glow on service/equipment cards

## Out of Scope (can add later)

- Real backend for contact form
- CMS for trainers/testimonials
- Booking/membership checkout
- React Three Fiber (kept optional; will skip unless requested to keep bundle lean)  
  
  
Ensure all animations are GPU-optimized, use will-change and transform instead of heavy properties. Avoid layout shifts and keep Lighthouse score above 90.  
  
All images must be optimized (WebP format), lazy-loaded, and properly sized to avoid performance issues.  
  
Create reusable design tokens for colors, spacing, and typography to maintain consistency across all components.  
  
Ensure mobile-first design. All sections must adapt perfectly to smaller screens with optimized spacing and touch-friendly UI.