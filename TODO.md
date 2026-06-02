# Project Blueprint — Website Rebuild

Purpose
- Central blueprint for the full redesign and rebuild of The Gardenia website.
- Capture goals, scope, structure, design direction, content strategy, technical requirements, and milestones.

Stakeholders
- Digital Marketing Team: Product/Content/SEO owners
- Design Team: Visual/interaction designers
- Engineering Team: Frontend, Backend, DevOps
- QA and Accessibility
- Project Manager

Project Goals
- Modernize visual design and brand consistency.
- Improve conversion paths for brochure downloads and contact scheduling.
- Rework information architecture and page structure.
- Improve SEO and Core Web Vitals.
- Achieve WCAG 2.1 AA accessibility baseline.

Success Metrics
- Increase brochure lead conversions by X% (define baseline)
- Reduce bounce rate on key pages by Y%
- Lighthouse performance score >= 90 (desktop/mobile targets)
- Accessibility score meeting automated checks + manual audit

Audience & Messaging
- Primary: Homebuyers/Investors searching for apartments
- Secondary: Brokers and partners
- Tone: Professional, approachable, modern

High-level Site Map (Recommended)
- Home
- About / Project Overview
- Floor Plans
- Gallery
- Amenities
- Location
- Contact / Schedule Visit
- Brochure (download / lead form)
- Admin dashboard (internal)

Design & UX Direction
- Use consistent spacing, typography, and color tokens (Tailwind variables)
- Hero components with clear CTAs
- Card system for floor plans and gallery
- Responsive-first, mobile-first interactions
- Microinteractions for form submits and toasts

Content Strategy
- Each page: Purpose, primary CTA, target keywords, hero copy, 3–5 supporting sections
- Editorial owner per page
- Image & asset list (source, alt text, compression targets)

SEO & Analytics
- Canonical URLs, meta title/description templates
- Structured data for listings and breadcrumbs
- Google Analytics / GTM and Tagging plan
- Sitemap + robots

Accessibility
- Keyboard navigable components
- Proper semantic markup and landmarks
- Color contrast >= AA
- Form labels and ARIA where necessary

Technical Requirements
- Frontend: React (current repo), Tailwind CSS, craco
- Backend: FastAPI + MongoDB (existing), API routes for leads
- Dev tooling: ESLint, Prettier (if used), CI (GitHub Actions)
- Hosting: Vercel/Netlify (frontend) + cloud VM / containers for backend or serverless
- CI/CD: build preview environments for PRs

Components & Patterns
- `Hero`, `Header`, `Footer`, `Card`, `Gallery`, `FloorPlanList`, `ContactForm`, `BrochureForm`, `Toasts`
- Reusable UI primitives in `src/components/ui/`

Phases & Milestones
1. Discovery & Requirements (content, SEO, assets) — 1–2 weeks
2. Design (mockups, responsive specs) — 2–3 weeks
3. Core Development (layout, components, pages) — 4–6 weeks
4. Content Population & QA — 1–2 weeks
5. Performance Tuning & Accessibility Audit — 1 week
6. Launch & Monitoring — ongoing

Task Template (for each task)
- Title:
- Owner:
- Description:
- Acceptance Criteria:
- Dependencies:
- ETA / Sprint:

How to use this file
- The Digital Marketing team fills content and priorities.
- Engineering breaks features into PR-sized tasks and references this blueprint.
- Keep this file updated as scope or priorities change.

References
- Repo root: `frontend/`, `backend/` (current codebase)
- Dev servers: local dev ports (documented in `PROGRESS.md`)

Proposed Pages & Routes
- Home: https://www.gardenia.homes/ — component: `Home` — route: `/`
- About Us: https://www.gardenia.homes/about-us — component: `AboutUs` — route: `/about-us`
- Amenities: https://www.gardenia.homes/amenities — component: `Amenities` — route: `/amenities`
- Gallery: https://www.gardenia.homes/gallery — component: `Gallery` — route: `/gallery`
- Blogs: https://www.gardenia.homes/blogs — component: `Blogs` — route: `/blogs`
- 2 BHK Flats: https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar — component: `Flats2BHK` — route: `/2-bhk-flats-in-bhubaneswar`
- 3 BHK Flats: https://www.gardenia.homes/3-bhk-flats-in-bhubaneswar — component: `Flats3BHK` — route: `/3-bhk-flats-in-bhubaneswar`
- 4 BHK Flats: https://www.gardenia.homes/4-bhk-flats-in-bhubaneswar — component: `Flats4BHK` — route: `/4-bhk-flats-in-bhubaneswar`
- 5 BHK Penthouse: https://www.gardenia.homes/penthouse-for-sale-in-bhubaneswar — component: `Penthouse` — route: `/penthouse-for-sale-in-bhubaneswar`
- Contact Us: https://www.gardenia.homes/contact-us — component: `Contact` — route: `/contact-us`
- Privacy Policy: https://www.gardenia.homes/privacy-policy — component: `PrivacyPolicy` — route: `/privacy-policy`
- Terms and Conditions: https://www.gardenia.homes/terms-and-conditions — component: `Terms` — route: `/terms-and-conditions`

Routing notes
- Use `react-router-dom` to add route-based pages.
- Keep shared layout in `Header` / `Footer` and wrap routes with a `MainLayout`.
- Place page components under `src/pages/` and small shared UI in `src/components/ui/`.

Next steps
- Create `src/pages/` skeleton components for each page and add routes to `src/App.js`.
- Populate each page with content stubs from the Digital Marketing team.
- Contact Us page completed at `/contact-us` with homepage-style form, office details, and shared site header/footer.

Style Guide
- See `STYLE_GUIDE.md` for the canonical design tokens, button and card usage, typography, and accessibility guidance. Use these rules when implementing all pages and components.
