# The Gardenia — Frontend Style Guide

Purpose
- Single-source design guidance for components, spacing, colors, and accessibility used across the project.

Design Tokens & Colors
- Primary brand: Tailwind `emerald` palette (use `bg-emerald-600` / `text-emerald-600` / `hover:bg-emerald-700`).
- Accent/Muted backgrounds: `bg-emerald-50`, `bg-emerald-100`, `bg-white/10`, `bg-white/20` for overlays.
- Neutrals: use Tailwind `gray-50`..`gray-900` for text and borders (e.g., `text-gray-600`, `border-gray-100`).

Typography
- Headings: large, bold, tight tracking.
  - Hero H1: `text-5xl md:text-7xl font-bold`.
  - Section H2: `text-2xl font-semibold`.
- Body: `text-base` or `text-lg` for lead paragraphs; use `prose` utility for rich content blocks.

Spacing & Layout
- Page container: `container mx-auto px-4` (or `px-6` in header).
- Max widths: content `max-w-3xl` for hero, `max-w-5xl` for pages.
- Section spacing: `py-8` / `mb-8` between major sections.

Radius & Elevation
- Rounded corners: `rounded-xl` and `rounded-2xl` for cards and large elements.
- Slight shadows for CTAs and cards: `shadow-sm` / `shadow-2xl` on hover for emphasis.

Buttons
- Use the shared component `Button` from `src/components/ui/button.jsx` to ensure consistent variants and sizes.
- Recommended:
  - Primary CTA: `<Button variant="default" size="lg">` (green background, white text)
  - Secondary CTA: `<Button variant="secondary" size="lg">` or `variant="outline"` for ghost look
  - Link-style: `variant="link"`
- When a button should be an anchor, use `asChild` and wrap an `<a>` inside the `Button`.

Cards & Lists
- Use `Card`, `CardHeader`, `CardContent` primitives from `src/components/ui/card.jsx` for amenity tiles, feature cards, and floorplan teasers.

Icons
- Use `lucide-react` for small icons. Size 4-6 (e.g., `w-4 h-4` in inputs, `w-5 h-5` in CTAs).

Forms
- Inputs: `rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20`.
- Validation messages: red text on `bg-red-50` with subtle rounded corners.

Accessibility
- Ensure buttons/anchors have accessible labels (`aria-label`) and keyboard focus styles.
- Use semantic headings (H1–H3) and landmarks (`main`, `header`, `footer`).

Patterns
- Hero: background image + dark gradient overlay + large H1 + lead + CTAs in a vertical stack on mobile.
- Feature lists: use a 2–4 column responsive grid with `Card` and an icon on the left.
- FAQ: use `Accordion` primitive for collapsible answers.

How to use
- Follow this guide when creating components and pages. Prefer existing primitives (`Button`, `Card`, `Accordion`) rather than adding new ad-hoc classes.
- Add new tokens to `tailwind.config.js` only when necessary and document them here.

Files of interest
- `frontend/src/components/ui/button.jsx`
- `frontend/src/components/ui/card.jsx`
- `frontend/src/components/ui/accordion.jsx`
- `frontend/src/App.css` and `frontend/tailwind.config.js`
