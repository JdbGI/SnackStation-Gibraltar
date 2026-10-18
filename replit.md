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
- "Our machines" section for the Mini, Mighty and Mega: a showroom stage that turns between three views (hover, swipe or the Left/Front/Right buttons), a "What's inside" shelf list that lights up each shelf on the machine, and a to-scale spec comparison table. Specs, the standard shelf layout and the shelf/cabinet positions in the artwork are `MACHINES` and `MACHINE_SHELVES` in `site-data.ts`; images are `client/public/images/machines/<id>-<view>.webp` (plus a 432px `-432` copy), all drawn on the same 864 x 1428 canvas so the positions line up
- Brand logo marquees, benefits, "Why choose us", three service plans (Profit Sharing, by invitation only; Standard; Small Team), all with a one-off installation fee and no amounts shown, "How it works" steps
- Pinned horizontal location gallery on desktop (swipe carousel on mobile); locations without a photo get an illustrated card; add an `image` to a location in `site-data.ts` to show a photo instead
- "Sectors" homepage section, menu link and footer block linking to the sector landing pages below

### Sector landing pages
- A hub at `/vending-machines` and 18 sector pages at `/vending-machines/<slug>` (offices, hotels, gyms, marinas, warehouses, tourist attractions and so on), each written for search in Gibraltar
- The light index (slug, name, group, icon, one-line summary) is `client/src/lib/sectors.ts`; the homepage, menu and footer use it
- Each page's copy and FAQs live in `client/src/content/sectors/<slug>.ts` (shape in `types.ts`), registered in `content/sectors/index.ts`; hub copy is in `content/sectors/hub.ts`. Paragraphs can link to other pages with `[text](/path)`
- Page template: `client/src/pages/sector.tsx`; hub: `client/src/pages/sectors-hub.tsx`. Both load as one lazy chunk (`client/src/pages/vending-machines.tsx`), fetched before the first render (`client/src/lib/lazy-pages.tsx`) so the pre-rendered page isn't swapped for a spinner
- Customer photos and "already on site" cards come from `LOCATIONS` in `site-data.ts`, referenced by name
- To add a sector: add it to `SECTORS`, write `content/sectors/<slug>.ts`, register it in `content/sectors/index.ts` and add the URL to `client/public/sitemap.xml`
- WhatsApp contact and Partner Login links throughout
- Animations respect the visitor's reduced-motion setting

### SEO
- Homepage `<title>`, description, canonical (`https://www.snackstation.gi/`), Open Graph/Twitter tags and share image (`client/public/og-image.jpg`) live in `client/index.html`
- Structured data (LocalBusiness, Service, WebSite and FAQPage) is generated from `client/src/lib/site-data.ts` by `client/src/lib/seo.tsx`, so it always matches the page; the FAQ answers are in `FAQS`
- Sector pages get their own title, description, canonical URL, Open Graph tags and WebPage, Service, BreadcrumbList and FAQPage structured data; the hub gets CollectionPage and ItemList
- `npm run vercel-build` / `npm run build` pre-render every public page to static HTML (`scripts/prerender.mjs`): the homepage to `dist/public/index.html` and the others to `dist/public/<path>/index.html`, each with its own head tags, so crawlers, AI assistants and link previews get the full text without JavaScript; if a page fails it is client-rendered instead
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