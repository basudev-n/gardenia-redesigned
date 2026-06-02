# The Gardenia — 2BHK Page Style Guide

Purpose: concise token and component patterns used across the 2 BHK product page to keep visual rhythm consistent with the home page.

## Color Palette
- Primary (emerald): #059669
- Primary-dark: #047857
- Primary-50 (soft bg): #f0fdf4
- Surface / near-white: #ffffff
- Muted text: #6b7280
- Heading text: #1f2937
- Border / subdued: #e6e9ee
- Shadow tint: rgba(2,6,23,0.06)

## Typography
- H1 / Page hero: 48–56px (text-5xl / custom as needed)
- Section heading: 30–40px (text-3xl -> md:text-5xl)
- Subheading / card titles: 16–18px (text-base / md:text-lg)
- Body: 16px (text-base)
- Leading: 1.6–1.7 for long copy

## Spacing & Rhythm
- Section vertical rhythm: `py-20` (mobile) → `md:py-24` (desktop)
- Container max width: 1200px for wide sections, 900px for focused content
- Grid gaps: small components `gap-6`, feature grids `gap-8`, highlights `gap-10`

## Corners & Surfaces
- Card radius: `rounded-2xl` for primary cards, `rounded-md` for small chips
- Media frames: `rounded-2xl` + subtle border `border-[#e6e9ee]` + shadow
- Shadows: use `shadow-[0_12px_30px_rgba(2,6,23,0.06)]` for lifted cards

## Buttons & CTAs
- Primary CTA (on emerald): white rounded-full, `px-6 py-3`, `shadow-[0_12px_40px_rgba(2,6,23,0.12)]`
- Secondary CTAs: white background, emerald text, rounded-full, clear focus ring `focus:ring-4 focus:ring-emerald-200`
- Hover: subtle translate `-translate-y-0.5` and shadow increase

## Icon Treatment
- Icon chips: `h-6 w-6` with text/fg color `#059669` placed inside small gap-left containers
- Use lucide-react icons; keep consistent sizing across cards

## Cards & Lists
- Use `rounded-2xl`, `p-6`/`p-8`, border `border-[#e6e9ee]`, and hover lift
- Lists: use icon-prefixed list items for connectivity / features; keep `gap-3` and `marker` color emerald

## Accessibility Notes
- Buttons: include `aria-label` for non-text CTAs
- Accordion: use `aria-expanded`, `aria-controls`, and `role=region` on content
- Motion: respect `prefers-reduced-motion` in reveal animations
- Focus: ensure visible focus rings on interactive elements

## Code Patterns
- Sections: simple functional components `SectionName.tsx` exporting default and named export
- Props: accept `className` for minimal composition and testability
- Images: prefer `loading="lazy"` and `alt` text

## Examples
- Section wrapper:

```jsx
<section className={`w-full bg-white py-20 md:py-24 px-4 sm:px-8 ${className}`}>
  <div className="mx-auto" style={{ maxWidth: '1200px' }}>
    {/* content */}
  </div>
</section>
```

## Where to find components
- 2 BHK components: `frontend/src/components/2bhk/`

---
Notes: keep copy/content unchanged; use this guide when adding or adjusting components for the 2 BHK product page.
