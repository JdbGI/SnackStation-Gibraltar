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
- Hero section with animated vending machine
- Service offerings with three business models
- Brand showcase with major snack/drink brands
- Location highlights with real deployment photos
- Contact form for lead generation

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