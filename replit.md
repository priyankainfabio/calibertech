# Caliber Tech Solutions Website

## Overview
A React + TypeScript website for Caliber Tech Solutions, a structural steel company. The project has a custom Express backend with PostgreSQL database for managing projects.

## Project Structure
```
├── src/                    # Frontend React application
│   ├── components/         # React components (ImageCarousel, Header, Footer, etc.)
│   ├── contexts/           # React context providers (ThemeContext)
│   ├── pages/              # Page components (Projects, ProjectCategory, AdminDashboard, etc.)
│   └── utils/              # Utility functions (api.ts, auth.ts, seo.ts)
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database storage layer
│   ├── schema.ts          # Drizzle ORM schema
│   └── db.ts              # Database connection
├── public/                 # Static assets
└── drizzle.config.ts      # Drizzle configuration
```

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, React Router DOM
- **Backend**: Express, Drizzle ORM, PostgreSQL (Neon)
- **Icons**: Lucide React

## Database Schema
- **projects** table: id, title, category, location, year, description, image, images (JSONB array), services (JSONB), stats (JSONB), highlights (JSONB)

## Features
- **Multiple Photos per Project**: Each project supports a main image plus a gallery of additional images stored in the `images` JSONB array
- **Image Carousel/Slider**: Projects display images in an interactive carousel with:
  - Navigation arrows (prev/next)
  - Dot indicators for each image
  - Image counter (e.g., "1/3")
  - Touch/swipe support for mobile devices
  - Click-to-navigate (left/right thirds of image area)
  - Smooth fade transitions between images
- **Image Upload**: Admin dashboard supports uploading images from local device (max 10MB, jpeg/jpg/png/gif/webp/svg) via POST /api/upload endpoint using multer. Uploaded files stored in /uploads directory and served at /api/uploads/
- **Gallery Management**: In the admin dashboard, you can add, remove, and reorder gallery images for each project. Supports both URL input and file upload
- **Auto-seeding**: When the database is empty, it automatically seeds with 8 default projects on first admin dashboard load
- **Edit vs Create**: The system properly tracks whether you're editing an existing project or creating a new one
- **Category Pages**: Separate pages for each project type (Commercial, Industrial, Infrastructure, Residential) with dedicated URLs and filtered project listings
- **QA & Technical Requirements Section**: Home page section (below Blog, above CTA) showcasing 8 QA/technical items — AISC/OSHA compliance, multi-level QC checks, dimensional accuracy, licensed software stack, BIM LOD 300-400, CNC/DXF/KISS outputs, RFI tracking, on-time delivery

## SEO Implementation (Feb 2026)
- **SEO Utility (src/utils/seo.ts)**: Centralized SEO functions - setMetaTags, setCanonical, setStructuredData, plus schema generators (Organization, Breadcrumb, FAQ, Service, WebPage)
- **Meta Tags**: Every page has unique keyword-rich title, description, Open Graph, Twitter Card tags
- **Canonical URLs**: All pages set canonical URLs pointing to calibertechsolutions.com
- **Structured Data**: Multiple JSON-LD schemas per page (Organization, BreadcrumbList, FAQPage, Service, WebPage, WebSite)
- **Sitemap & Robots**: Server-side /sitemap.xml and /robots.txt routes covering all 15+ pages
- **FAQ Section**: Services page has interactive FAQ accordion with FAQSchema markup targeting all 10 SEO keywords
- **Image Optimization**: All images have descriptive keyword-rich alt tags and loading="lazy" (except hero images)
- **H1/H2 Hierarchy**: Every page has single H1 tag with proper H2 subheadings
- **Target Keywords**: Structural Steel Detailing Services, Shop Drawings & 3D Modeling, Miscellaneous Metal Detailing, Tekla Steel Detailing Experts, BIM & 3D Steel Modeling, Steel Connection Design Coordination, Fabrication-Ready Steel Drawings, CNC/DXF/E-Sheet Deliverables, Commercial & Institutional Steel Projects, North America Steel Detailing Partner

## Blog System (Feb 2026)
- **Shared Blog Data (src/data/blogData.ts)**: Centralized blog data with 3 real articles including full content
- **Home Blog Section**: Displays 3 blog cards matching company design with red arrow buttons, 4:3 aspect ratio images
- **Blog Listing Page (/blog)**: Featured article layout + grid of remaining articles with tags, dates, excerpts
- **Blog Detail Page (/blog/:slug)**: Full article view with table of contents, structured content rendering (headings, paragraphs, bold text), related articles sidebar, CTA section, BlogPosting schema markup
- **Blog Slugs**: outsourcing-design-detailing-infographic, why-steel-shop-drawings-detailing-critical, outsourcing-design-detailing-global-phenomenon

## Steel Detailing Portfolio (Feb 2026)
- **Tekla Models Page (/steel-detailing-portfolio/models)**: 6 projects with downloadable 3D PDF models, BIM capabilities sidebar, SEO optimized
- **Isometric Views Page (/steel-detailing-portfolio/isometric-views)**: Image gallery with 5 isometric view images, lightbox viewer with keyboard navigation, grid layout, SEO optimized
- **Portfolio Banners on All Service Pages**: Both Tekla Models and Isometric Views banners appear at the bottom of every service detail page
- **Static Assets**: Images served from `/public/images/isometric/`, PDFs from `/public/pdfs/`

## Routes
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog article
- `/projects` - All projects listing
- `/projects/commercial` - Commercial Buildings category
- `/projects/industrial` - Industrial Facilities category
- `/projects/infrastructure` - Infrastructure Projects category
- `/projects/residential` - Residential Projects category
- `/steel-detailing-portfolio/models` - Tekla Structure 3D Models portfolio
- `/steel-detailing-portfolio/isometric-views` - Isometric Views portfolio

## API Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/seed` - Seed database with default projects

## Running the Project
- Development: `npm run dev` (runs both Express on port 3001 and Vite on port 5000)
- The Vite dev server proxies `/api` requests to the Express server

## Admin Access
- URL: `/admin/login`
- Username: `Caliber`
- Password: `Project@edit#back`
