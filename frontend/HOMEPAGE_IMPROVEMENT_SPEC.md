# Homepage Improvement Spec — The Gardenia

Objective
- Convert the current single-page homepage into a lean entry surface that links to dedicated pages (`/amenities`, `/gallery`, property pages) while preserving the core conversion funnel (Book a Visit, Get e-Brochure).

Design Principles (aligns to STYLE_GUIDE.md)
- Colors: use Tailwind `emerald` tokens for primary CTAs; neutrals per the style guide.
- Typography: Hero `text-5xl md:text-7xl font-bold`; section H2 `text-2xl font-semibold`.
- Spacing: `container mx-auto px-4/6`; sections use `py-8`.
- Components: prefer existing primitives in `frontend/src/components/ui/` (`Button`, `Card`).
- Accessibility: keyboard focus, ARIA on dropdown and CTAs, semantic headings.

Scope (first pass)
- Replace large in-page `Amenities` and `Gallery` sections with compact teaser cards that link to `/amenities` and `/gallery`.
- Keep the Hero + Book a Visit CTA and a secondary Get e-Brochure CTA.
- Keep a short ‘Floor plans’ teaser (2/3/4 BHK) that links to the respective pages.
- Ensure `Header` and `SiteHeader` reflect new navigation order (About → Properties → other items).

Deliverables for Step 1 (this change — for your review)
- Add a reusable `TeaserCard` component in `frontend/src/components/ui/TeaserCard.jsx` with props: `title`, `subtitle`, `image`, `href`, `ctaLabel`.
- Replace `Amenities` and `Gallery` DOM in homepage `HomeLayout` with two `TeaserCard` instances (keeping original components untouched elsewhere).
- Ensure visual styling follows `STYLE_GUIDE.md` tokens and uses `Card` primitives where appropriate.
- Add unit test / smoke check by rendering the component in the CRA dev server and verifying the link targets.

Non-goals for Step 1
- Do NOT remove existing `Amenities` or `Gallery` pages.
- Do NOT change backend routes or analytics instrumentation yet.

Acceptance Criteria
- Homepage renders teaser cards for Amenities and Gallery in place of the full sections.
- Clicking a teaser navigates to the dedicated page (`/amenities`, `/gallery`).
- Visuals match the STYLE_GUIDE tokens: spacing, colors, typography.
- Mobile layout stacks the hero then teasers with readable CTA buttons.

Next steps after your approval
1. Implement `TeaserCard` and update homepage (`frontend/src/App.js` → `HomeLayout`).
2. Add ARIA attributes and keyboard navigation to `Properties` dropdown.
3. Replace other large sections with teasers (Floor Plans, Location) and add analytics hooks.
4. Performance: lazy-load teaser images and defer non-critical JS.

Notes
- Files to edit (planned):
  - `frontend/src/components/ui/TeaserCard.jsx` (new)
  - `frontend/src/App.js` (HomeLayout updates)
  - `frontend/src/components/Header.jsx` (minor spacing / order already updated)

Please confirm Step 1 (create `TeaserCard` and replace Amenities/Gallery on the homepage). I will implement it and then ask for your design approval before continuing.
