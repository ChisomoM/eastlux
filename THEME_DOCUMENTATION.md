# Easttlux Brand Theme System

## Overview
Complete theming system for Easttlux Ventures corporate website with light/dark mode support, built on Tailwind CSS and Radix UI.

## Brand Colors

### Primary (Navy Blue #1c1e4e)
```css
brand-main-50:  #f4f5f9  /* Lightest */
brand-main-100: #e9ebf3
brand-main-200: #d3d7e7
brand-main-300: #adb5d5
brand-main-400: #808dbf
brand-main-500: #5f6ca8
brand-main-600: #4a5590
brand-main-700: #3d4474
brand-main-800: #353b61
brand-main-900: #1c1e4e  /* Main Brand Color */
brand-main-950: #0f1029  /* Darkest */
```

### Secondary (Light Blue #12a3dc)
```css
brand-secondary-50:  #f0f9fd  /* Lightest */
brand-secondary-100: #e0f2fb
brand-secondary-200: #bbe6f7
brand-secondary-300: #80d4f1
brand-secondary-400: #3dbfe7
brand-secondary-500: #12a3dc  /* Secondary Brand Color */
brand-secondary-600: #0a84bb
brand-secondary-700: #0a6998
brand-secondary-800: #0d597e
brand-secondary-900: #104a69
brand-secondary-950: #0a2f46  /* Darkest */
```

## Semantic Colors (CSS Variables)

### Light Mode
- **Background**: White (#ffffff)
- **Foreground**: brand-main-900 (#1c1e4e)
- **Primary**: brand-main-900 (Navy)
- **Secondary**: brand-secondary-500 (Light Blue)
- **Accent**: brand-secondary-500
- **Success**: Green (#22c55e)
- **Warning**: Orange (#f97316)
- **Destructive**: Red (#ef4444)

### Dark Mode
- **Background**: brand-main-950 (#0f1029)
- **Foreground**: Near white
- **Primary**: brand-secondary-500 (Blue becomes primary in dark)
- **Secondary**: Muted navy
- **Accent**: brand-secondary-500

## Usage

### Button Variants
```tsx
<Button variant="default">Default</Button>
<Button variant="brand">Brand Navy</Button>
<Button variant="accent">Light Blue</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon Only</Button>
```

### Badge Variants
```tsx
<Badge variant="default">Default</Badge>
<Badge variant="brand">Brand</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

### Brand Cards
```tsx
<BrandCard hover gradient>
  <BrandCardHeader>
    <BrandCardTitle>Title</BrandCardTitle>
    <BrandCardDescription>Description</BrandCardDescription>
  </BrandCardHeader>
  <BrandCardContent>
    Content
  </BrandCardContent>
  <BrandCardFooter>
    Footer
  </BrandCardFooter>
</BrandCard>
```

Props:
- `hover`: Adds hover scale and shadow effects
- `gradient`: Applies brand gradient background

## Gradients

### Brand Gradient
```css
bg-brand-gradient
/* Linear gradient from navy to light blue (135deg) */
```

### Reverse Gradient
```css
bg-brand-gradient-reverse
/* Light blue to navy */
```

### Radial Gradient
```css
bg-brand-radial
/* Radial from light blue to navy */
```

## Typography

### Font Sizes (Responsive)
```css
text-hero-title       /* 2.5rem - 5.75rem */
text-hero-subtitle    /* 1rem - 1.25rem */
text-section-title    /* 1.875rem - 3rem */
text-stats-number     /* 2rem - 2.25rem */
text-stats-label      /* 0.875rem - 1.25rem */
```

### Font Families
```css
font-sans           /* Inter (default) */
font-myriad         /* Myriad Pro */
font-montserrat     /* Montserrat */
font-outfit         /* Outfit */
font-poppins        /* Poppins */
font-space-grotesk  /* Space Grotesk */
```

## Animations

### Fade In
```tsx
<div className="animate-fade-in">Content</div>
```

### Slide In Right
```tsx
<div className="animate-slide-in-right">Content</div>
```

### Scale In
```tsx
<div className="animate-scale-in">Content</div>
```

### Counter (for stats)
```tsx
<div className="animate-counter">200</div>
```

## Components

### Theme Toggle
```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle'

<ThemeToggle />
```

### Smart Navigation
```tsx
import { SmartNavigation } from '@/components/SmartNavigation'

<SmartNavigation />
```
Features:
- Sticky header with scroll effects
- Mobile hamburger menu
- Mega-menu for services
- Scroll progress indicator
- Active state highlighting

### Footer
```tsx
import { Footer } from '@/components/Footer'

<Footer />
```
Features:
- 6-column responsive grid
- Newsletter subscription
- Social media links
- Contact information
- Legal links

## Accessibility

### Color Contrast
All color combinations meet WCAG AA standards (4.5:1 minimum contrast ratio).

### Dark Mode
- Automatically respects system preference
- Manual toggle available
- Smooth transitions disabled to prevent motion sickness

### Screen Readers
- Semantic HTML
- ARIA labels on all interactive elements
- Focus states visible

## Responsive Breakpoints
```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

## Best Practices

1. **Always use semantic color variables** (primary, secondary, accent) instead of direct brand colors for components that need to work in both light and dark modes.

2. **Use brand colors directly** (brand-main-900, brand-secondary-500) only for branding elements that should remain consistent across themes.

3. **Leverage hover effects** on cards and buttons using the `hover` prop or Tailwind hover utilities.

4. **Use gradient backgrounds sparingly** for hero sections and call-to-action elements.

5. **Maintain consistent spacing** using Tailwind's spacing scale.

## Files Modified
- `tailwind.config.mjs` - Color palette, typography, animations
- `src/app/globals.css` - CSS variables for light/dark themes
- `src/components/ui/button.tsx` - Brand button variants
- `src/components/ui/badge.tsx` - Brand badge variants
- `src/components/ui/brand-card.tsx` - New branded card component
- `src/components/ui/theme-provider.tsx` - Theme context provider
- `src/components/ui/theme-toggle.tsx` - Theme switcher
- `src/components/SmartNavigation.tsx` - Navigation component
- `src/components/Footer.tsx` - Footer component
- `src/app/layout.tsx` - Root layout with ThemeProvider

## Next Steps
Ready to proceed with Phase 2: Page implementation starting with the Home Page.
