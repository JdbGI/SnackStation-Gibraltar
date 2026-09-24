# SnackStation - Vending Machine Management System

## Overview

SnackStation is a full-stack web application for managing vending machines across Gibraltar. It provides a comprehensive solution for business owners to track their vending machine operations, including sales data, machine locations, and product catalogs. The application features a public-facing website for lead generation and a private dashboard for partners and administrators.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for client-side routing
- **Vite** for modern build tooling and development server
- **Tailwind CSS** with shadcn/ui components for styling
- **Framer Motion** for animations and transitions
- **React Hook Form** with Zod validation for form management
- **TanStack Query** for server state management and caching

### Backend Architecture
- **Express.js** server with TypeScript
- **Session-based authentication** with Passport.js
- **PostgreSQL** database with Drizzle ORM
- **Neon Database** for cloud PostgreSQL hosting
- **bcrypt** equivalent (scrypt) for password hashing
- **Express Session** with PostgreSQL store for session management

### Database Design
- **Users table**: Stores user credentials and admin flags
- **Machines table**: Vending machine information linked to users
- **Sales table**: Daily sales data with revenue and commission tracking
- **Products table**: Product catalog with brand, pricing, and stock info
- **Inquiries table**: Contact form submissions from the public website

## Key Components

### Authentication System
- Local strategy authentication with username/password
- Session-based authentication with PostgreSQL session store
- Role-based access control (regular users vs admins)
- Protected routes for dashboard access

### Public Website
- Brand system: hot pink `#FF80BF` + berry `#891F5E` on ink, taken from the logo/favicon (tokens in `tailwind.config.ts` and `client/src/index.css`)
- All copy, contact details, brands, service plans and locations live in `client/src/lib/site-data.ts` (plans follow the SnackStation Service Plans document)
- Intro preloader; a still halftone vending machine in the hero (click it and it drops a drink)
- Ticker bands, "What we offer" bento grid with live Gibraltar clock, animated stats
- "Local team" section with an illustrated SnackStation van
- Brand logo marquees, benefits, "Why choose us", three service plans (Free Placement, Standard, Small Team; no fee amounts shown), "How it works" steps
- Pinned horizontal location gallery on desktop (swipe carousel on mobile); locations without a photo get an illustrated card — add an `image` to a location in `site-data.ts` to show a photo instead
- WhatsApp contact and Partner Login links throughout
- Animations respect the visitor's reduced-motion setting

### SEO
- Homepage `<title>`, description, canonical (`https://www.snackstation.gi/`), Open Graph/Twitter tags and share image (`client/public/og-image.jpg`) live in `client/index.html`
- Structured data (LocalBusiness, Service, WebSite and FAQPage) is generated from `client/src/lib/site-data.ts` by `client/src/lib/seo.tsx`, so it always matches the page; the FAQ answers are in `FAQS`
- `npm run vercel-build` / `npm run build` pre-render the homepage to static HTML (`scripts/prerender.mjs`) so crawlers, AI assistants and link previews get the full text without JavaScript; if that step fails the normal page is kept
- `client/public/robots.txt` keeps partner/admin pages out of search; `client/public/sitemap.xml` lists the public pages (update `lastmod` after big content changes)
- Partner, login and 404 pages set `noindex`; fonts are self-hosted in `client/public/fonts`

### Partner Dashboard
- Machine-specific sales reporting
- Revenue and commission tracking
- Monthly/daily sales analytics
- Machine location management

### Admin Dashboard
- User management and machine assignments
- System-wide analytics and reporting
- Product catalog management
- Inquiry management

### Product Catalog
- Searchable product database
- Brand filtering and categorization
- Stock status tracking
- Pricing and SKU management

## Data Flow

1. **Public Users**: Browse website → Submit inquiry → Data stored in PostgreSQL
2. **Partners**: Login → View assigned machines → Access sales data
3. **Admins**: Login → Manage users/machines → View system analytics
4. **Database**: All data flows through Drizzle ORM to Neon PostgreSQL

## External Dependencies

- **Neon Database**: Cloud PostgreSQL hosting
- **Radix UI**: Unstyled UI components
- **Framer Motion**: Animation library
- **React Icons**: Icon library including WhatsApp integration
- **External Images**: Hosted on barton.gi domain for branding

## Deployment Strategy

- **Development**: Local development with Vite dev server
- **Production**: 
  - Frontend built with Vite and served statically
  - Backend bundled with esbuild
  - Database migrations handled by Drizzle Kit
  - Environment variables for database connection

## Changelog

- July 07, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.