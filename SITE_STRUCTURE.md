# Site Structure & Route Mapping

This file maps the requested pages to routes, suggested component names, file locations, and notes for content/design owners.

Pages

1. Home
   - URL: https://www.gardenia.homes/
   - Route: `/`
   - Component: `Home`
   - File: `src/pages/Home.jsx`
   - Owner: Digital Marketing (content), Design (hero/layout)
   - Notes: Hero with main CTA, overview sections, quick links to floor plans.

2. About Us
   - URL: https://www.gardenia.homes/about-us
   - Route: `/about-us`
   - Component: `AboutUs`
   - File: `src/pages/AboutUs.jsx`
   - Notes: Project story, timelines, credentials, trust signals.

3. Amenities
   - URL: https://www.gardenia.homes/amenities
   - Route: `/amenities`
   - Component: `Amenities`
   - File: `src/pages/Amenities.jsx`
   - Notes: Grid/list of amenity cards with images and descriptions.

4. Gallery
   - URL: https://www.gardenia.homes/gallery
   - Route: `/gallery`
   - Component: `Gallery`
   - File: `src/pages/Gallery.jsx`
   - Notes: Lazily loaded images, lightbox view.

5. Blogs
   - URL: https://www.gardenia.homes/blogs
   - Route: `/blogs`
   - Component: `Blogs`
   - File: `src/pages/Blogs.jsx`
   - Notes: List of posts; tag filters; single post route `/blogs/:slug` (component: `BlogPost`).

6. 2 BHK Flats
   - URL: https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar
   - Route: `/2-bhk-flats-in-bhubaneswar`
   - Component: `Flats2BHK`
   - File: `src/pages/Flats2BHK.jsx`
   - Notes: Floorplan gallery, download brochure CTA, pricing grid.

7. 3 BHK Flats
   - URL: https://www.gardenia.homes/3-bhk-flats-in-bhubaneswar
   - Route: `/3-bhk-flats-in-bhubaneswar`
   - Component: `Flats3BHK`
   - File: `src/pages/Flats3BHK.jsx`

8. 4 BHK Flats
   - URL: https://www.gardenia.homes/4-bhk-flats-in-bhubaneswar
   - Route: `/4-bhk-flats-in-bhubaneswar`
   - Component: `Flats4BHK`
   - File: `src/pages/Flats4BHK.jsx`

9. 5 BHK Penthouse
   - URL: https://www.gardenia.homes/penthouse-for-sale-in-bhubaneswar
   - Route: `/penthouse-for-sale-in-bhubaneswar`
   - Component: `Penthouse`
   - File: `src/pages/Penthouse.jsx`

10. Contact Us
    - URL: https://www.gardenia.homes/contact-us
    - Route: `/contact-us`
    - Component: `Contact`
    - File: `src/pages/Contact.jsx`
    - Notes: Contact form, preferred visit scheduling, map embed.

11. Privacy Policy
    - URL: https://www.gardenia.homes/privacy-policy
    - Route: `/privacy-policy`
    - Component: `PrivacyPolicy`
    - File: `src/pages/PrivacyPolicy.jsx`

12. Terms and Conditions
    - URL: https://www.gardenia.homes/terms-and-conditions
    - Route: `/terms-and-conditions`
    - Component: `Terms`
    - File: `src/pages/Terms.jsx`

Shared Layout & Components
- `Header.jsx` (shared navigation)
- `Footer.jsx` (copyright, legal links)
- `MainLayout.jsx` (wraps route children)
- `Breadcrumb`, `SEO` helper, `ContactForm`, `BrochureForm`, `GalleryLightbox`

Routing implementation notes
- Use `react-router-dom` v6+ with `BrowserRouter`.
- Lazy-load heavy pages (`Gallery`, floorplan pages) with `React.lazy` + `Suspense`.
- Canonical URLs and meta tags provided via `SEO` helper per page.

File locations
- Page components: `src/pages/` (create this folder)
- Shared UI primitives: `src/components/ui/` (existing)
- Layouts: `src/components/layouts/`

Priorities for initial iteration
- High: Home, Contact, Floor plan pages (2/3/4/5 BHK), Header/Footer
- Medium: Gallery, Amenities
- Low: Blogs, Legal pages (can be static markdown initially)

Next actionable task
- Scaffold `src/pages/` and add route definitions in `src/App.js`.
- I can scaffold blank components now if you want — say `yes` to proceed.
