# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**llc-registration-website** is a React-based informational website for LLC formation services, targeting Vietnamese-speaking entrepreneurs. The site includes service pages, pricing, FAQs, testimonials, and an extensive blog with business guidance in Vietnamese.

## Development Setup

### Quick Start
```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:23000)
npm run dev

# Build for production
npm run build

# Type checking only
npm run type-check
```

### Environment
- **Node runtime**: ESNext module system
- **Dev server**: Vite on port 23000 (auto-opens browser)
- **Build process**: TypeScript compilation → Vite bundling
- **Styling**: Tailwind CSS 3.3 with PostCSS

## Architecture

### Component Structure
- **Page components** ([src/App.tsx](src/App.tsx)): HomePage, About, Blog, BlogPost, legal pages (Terms, Refund, Privacy), and NotFound (404)
- **Feature components** ([src/components/](src/components/)): Hero, Benefits, Pricing, Process, AdditionalServices, FAQ, Testimonials, Contact, Header, Footer
- **Blog system**: Blog list page with filtering + individual BlogPost pages using slug-based routing

### Data Management
- **Static data**: [src/data/blogPosts.ts](src/data/blogPosts.ts) maintains a central `blogPosts` array indexed by slug
- **Blog content**: Each post references content from [src/data/blogContent/](src/data/blogContent/) (imported separately to keep data layer clean)
- **Types**: [src/types/index.ts](src/types/index.ts) defines BlogPost, Benefit, ProcessStep, PricingPlan, Testimonial, FAQ, and FormData interfaces

### Key Patterns
- **Scroll animations**: `useScrollAnimation` hook ([src/hooks/useScrollAnimation.ts](src/hooks/useScrollAnimation.ts)) triggers fade/scale animations on scroll using Intersection Observer; elements added to the DOM get initial `animate-hidden` class, then `animate-visible` when in viewport
- **Contact form**: Uses Formspree for form submission (no backend required)
- **Routing**: React Router v6 with dynamic blog slug routes (`/blog/:slug`)
- **Icons**: Lucide React for consistent icon library

## TypeScript Configuration

Strict mode enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`). All components typed as `React.FC`.

## Common Tasks

### Adding a Blog Post
1. Create new content file in [src/data/blogContent/](src/data/blogContent/) (export as named constant)
2. Import at top of [src/data/blogPosts.ts](src/data/blogPosts.ts)
3. Add BlogPost object to the `blogPosts` array with unique `id`, `slug`, and import the content
4. Blog List and BlogPost components auto-discover via the central array

### Styling
- Tailwind classes applied directly to JSX (no separate CSS files for components)
- Global styles in [src/index.css](src/index.css)
- Animations defined in Tailwind config

### Form Handling
Contact form ([src/components/Contact.tsx](src/components/Contact.tsx)) uses `@formspree/react` with form ID from environment. Ensure Formspree endpoint is configured.

## Testing & Validation

- **Type checking**: `npm run type-check` (recommended before commit)
- **No test suite**: Currently test manually after changes
- **Before committing**: Run type check and visually verify affected pages in dev server (especially routing, animations, form submission)

## Branch & Deployment

- **Main branch**: `main` (production)
- **Dev branch**: `develop` (working branch)
- **Build output**: `dist/` directory (gitignored)
