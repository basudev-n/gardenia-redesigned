# PROGRESS — Website Rebuild

Last updated: 2026-05-26

Summary
- Current phase: Initial setup and discovery.
- Notes: Project blueprint created and dev servers started locally.

Completed
- Created `TODO.md` (project blueprint).
- Created `PROGRESS.md` (this file).
- Local dev servers started:
  - Backend: http://127.0.0.1:8001 (FastAPI)
  - Frontend: http://localhost:3000 (React / craco)

In Progress
- Define detailed page content strategy (owner: Digital Marketing)
- Design mockups for Home and Floor Plans

Blocked / Risks
- MongoDB connection: ensure local or remote Mongo instance available at `MONGO_URL`.

Build Log (add an entry per successful build)
- 2026-06-10 — Fixed TeleCRM serverless function 404 — consolidated api handler, added vercel.json rewrites.
- 2026-05-26 — Initial setup: created blueprint and started dev servers. (backend on 8001, frontend on 3000)

- 2026-05-27 — Documented full site structure and route mapping (`SITE_STRUCTURE.md`) and added pages/routes to `TODO.md`.
 
- 2026-05-27 — Added page-specific TODO and verbatim content files for About Us (`pages/about-us/TODO.md`, `pages/about-us/CONTENT.md`).

- 2026-05-27 — Scaffolded `AboutUs` page component at `frontend/src/pages/AboutUs.jsx`, added public content at `frontend/public/pages/about-us/CONTENT.md`, and wired route `/about-us` in `frontend/src/App.js`.

- 2026-05-27 — Converted About Us verbatim content into structured module `frontend/src/content/aboutUsContent.js` and updated `AboutUs.jsx` to render structured sections (verbatim text preserved).

- 2026-05-27 — Completed About Us page build: replaced CTAs with accessible links, added QA checklist at `pages/about-us/QA_CHECKLIST.md`, and verified route serves HTTP 200.

- 2026-05-27 — Enhanced About Us UI: rendered wellness features as cards, homes offerings as cards, and amenities as a grid using UI primitives; preserved verbatim marketing text.

- 2026-05-27 — Added `STYLE_GUIDE.md` and updated `AboutUs.jsx` to use shared `Button` component and follow project design tokens for consistent UI.

- 2026-05-27 — Cleared About Us page content and replaced the page with a blank-canvas scaffold. Original content archived under `pages/about-us/archive/` and `frontend/public/pages/about-us/archive_ARCHIVE_CONTENT.md`.

- 2026-05-27 — Added `WelcomeSection` component for About Us at `frontend/src/components/WelcomeSection.jsx` (container, heading, three paragraphs with responsive sizing and exact copy).

- 2026-05-27 — Added `WellnessSection` component at `frontend/src/components/WellnessSection.jsx` (Lifestyle Wellness Quotient section with feature icons and responsive grid).

- 2026-05-27 — Placed `WellnessSection` on the About Us page (`frontend/src/pages/AboutUs.jsx`) below `WelcomeSection` for visual verification.

- 2026-05-27 — Added `CTASection` component at `frontend/src/components/CTASection.jsx` (full-width CTA with gradient, heading, subheading, and CTA button).

- 2026-05-27 — Placed `CTASection` on the About Us page below `WellnessSection` so the page now contains: `HeroSection`, `WelcomeSection`, `WellnessSection`, and `CTASection` for verification.

- 2026-05-27 — Added `WellnessAndOpenLivingSection` component at `frontend/src/components/WellnessAndOpenLivingSection.jsx` (two-column layout, text+image, and feature list with leaf icons).

- 2026-05-27 — Placed `WellnessAndOpenLivingSection` on the About Us page below `WellnessSection` and above the CTA for visual verification.

- 2026-05-27 — Added `ElegantHomesSection` component at `frontend/src/components/ElegantHomesSection.jsx` (card-based offerings grid with icons and hover effects).

- 2026-05-27 — Placed `ElegantHomesSection` on the About Us page between `WellnessAndOpenLivingSection` and `CTASection` for verification.

- 2026-05-27 — Added `AmenitiesSection` component at `frontend/src/components/AmenitiesSection.jsx` (responsive amenity cards grid with icons and hover effects).

How to update
- After any successful build or deploy, add a Build Log entry with date, what changed, and link to PR or artifact.
- Move items from "In Progress" to "Completed" when merged and verified.

Contact
- Project Manager / owner: add contact details here.
