# TODO — About Us Page

Purpose
- Implement the About Us page exactly using the curated content in `CONTENT.md`.
- Do not auto-generate or replace curated copy; use only the text provided in `CONTENT.md`.

Acceptance Criteria
- All section headings, paragraphs, and CTA labels match `CONTENT.md` verbatim.
- Page passes basic accessibility checks (semantic headings, alt text for images) but content text must remain unchanged.
- SEO meta title and description should be authored separately by the marketing team; the page should only render meta values if provided in `CONTENT.md` (do not auto-generate).

Page Sections (implement in this order)
1. Hero Section
   - H1: "About The Gardenia"
   - Subheading: "A premium residential destination where luxury, wellness, nature, and modern living come together to create an elevated lifestyle experience in Bhubaneswar."
   - Primary CTA: "Download Brochure"
2. Welcome / Intro
   - Use the exact paragraph starting with: "At The Gardenia, we believe a home should be more than just a place to live..."
3. Vision / Lifestyle Wellness Quotient
   - Render the section with heading: "A New Standard of Luxury Living in Bhubaneswar" and the following bullet list items exactly as in `CONTENT.md`.
4. Experience / CTA
   - Section heading: "Experience Luxury Beyond Expectations"
   - CTA: "Schedule a Site Visit"
5. Wellness & Open Living
   - Heading: "Designed Around Wellness & Open Living"
   - Bulleted features: use exact list from `CONTENT.md`.
6. Elegant Homes
   - Heading: "Elegant Homes Crafted for Modern Families"
   - Sub-list: include the offered residential types exactly as in `CONTENT.md`.
7. Amenities
   - Heading: "World-Class Amenities for Elevated Living"
   - List the key amenities exactly as in `CONTENT.md`.
8. Discover / CTA
   - Heading: "Discover Your Dream Apartment in Bhubaneswar"
   - CTA: "Book Your Visit"
9. Location
   - Heading: "Prime Location with Excellent Connectivity"
   - Bulleted proximity list: include exact items.
10. Architecture
    - Heading: "Architecture Inspired by Modern Elegance"
    - Content: include the exact bullet list describing architectural philosophy.
11. Why Choose / Closing
    - Heading: "Why Choose The Gardenia"
    - List summary points from `CONTENT.md`.
12. Final CTA
    - Heading/closing paragraph: "Build Your Future at The Gardenia" and final CTA: "Schedule Site Visit"

Implementation Notes
- File path for page component: `src/pages/AboutUs.jsx`.
- Use `MainLayout` for shared header/footer.
- Use `src/pages/about-us/CONTENT.md` as the single source of truth for all copy — import or fetch at build time as needed.
- Do not include placeholder or lorem text anywhere on the page.
- Provide alt text placeholders for images but coordinate final alt text with Marketing; any image alt text must be reviewed and approved by the marketing team.

Testing
- QA should verify displayed text matches `pages/about-us/CONTENT.md` exactly.
- Include a manual checklist in the PR description that references each section from this TODO.

Deployment
- No content transformations during build; content served as-is from compiled assets or static markdown.
