⚙️ TECH STACK & IMPLEMENTATION DOCUMENT
1. Overview

This section defines exactly how the Tokimeki website will be built, deployed, and scaled.

The goal is to create a fast, aesthetic, scalable, and production-ready system while keeping development lean.

2. Core Tech Stack
Frontend
Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
Animations: Framer Motion
Backend (Lightweight)
Supabase (Auth + DB + Storage)
CMS / Content
Notion / JSON-based content (initial phase)
Optional: Sanity CMS (future scale)
Hosting & Infra
Hosting: Vercel
CDN: Vercel Edge Network
Domain: Custom domain (tokimeki.in or similar)
3. System Architecture
Architecture Type:

Hybrid Static + Dynamic

Flow:

User → Next.js Frontend → API Routes → Supabase

Key Principles:
Static generation for performance
Dynamic APIs for forms and interactions
4. Feature Implementation Breakdown
🛍 Product System

Data Source:

Initially: Static JSON
Later: Supabase DB

Fields:

name
price
images
description
category
scent notes

Rendering:

SSG (Static Site Generation)
📦 Order System (Phase 1)

Approach:

No full checkout
WhatsApp-based ordering

Flow:

User clicks “Buy” → Redirect to WhatsApp with prefilled message
📦 Order System (Phase 2 - Optional)
Add cart functionality
Stripe / Razorpay integration
📩 Contact & Bulk Orders

Implementation:

Form → API route → Supabase DB
Email notification (Resend / Nodemailer)
🎨 Animations

Library:

Framer Motion

Usage:

Page transitions
Scroll animations
Floating elements
5. Component Architecture
Folder Structure:

/app /components /ui /lib /data

Key Components:
Navbar (floating)
HeroSection
ProductCard
ProductGrid
Footer
AnimatedWrapper
6. Performance Optimization
Image optimization (Next/Image)
Lazy loading
Code splitting
Edge caching via Vercel

Target:

Lighthouse score: 90+
7. SEO Setup
Metadata via Next.js
Open Graph tags
Sitemap generation
Structured data (products)
8. Deployment Strategy
Steps:
Build project locally
Push to GitHub
Connect to Vercel
Auto-deploy on push
Domain Setup:
Buy domain
Connect via Vercel DNS
9. Scaling Plan
Phase 1 (Launch MVP):
Static product pages
WhatsApp ordering
Phase 2:
Database integration
Admin dashboard
Phase 3:
Full e-commerce
Personalization
10. Security & Reliability
HTTPS via Vercel
Input validation on forms
Rate limiting (basic)
11. Developer Workflow
GitHub for version control
Branching: main / dev
Component-based development
12. Launch Checklist
All pages responsive
Links working
Forms tested
WhatsApp integration working
SEO meta tags added
Performance optimized
13. Final Technical Vision

The system should remain:

Lightweight
Scalable
Easy to maintain

While delivering a premium, high-performance experience aligned with the Tokimeki brand.