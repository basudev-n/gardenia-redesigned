import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import HeroSection2BHK from '../src/components/2bhk/HeroSection';
import ExperienceModernLivingSection from '../src/components/2bhk/ExperienceSection';
import WhyChooseSection from '../src/components/2bhk/WhyChooseSection';
import OwnLuxuryCtaSection from '../src/components/2bhk/OwnCtaSection';
import PrimeLocationSection from '../src/components/2bhk/LocationSection';
import FloorPlanSection from '../src/components/2bhk/FloorPlanSection';
import BookDreamCtaSection from '../src/components/2bhk/BookCtaSection';

const SpaciousFeatureSection = dynamic(() => import('../src/components/2bhk/FeaturesSection'));
const AmenitiesSection = dynamic(() => import('../src/components/2bhk/AmenitiesSection'));
const WellnessSection = dynamic(() => import('../src/components/2bhk/WellnessSection'));
const FAQSection = dynamic(() => import('../src/components/2bhk/FAQSection'));

type ProductPageProps = {
  heroImage: string;
  floorPlanImage: string;
  locationMapUrl: string;
  contactForm?: boolean;
};

const pageData: ProductPageProps = {
  heroImage: '/images/hero-2bhk.webp',
  floorPlanImage: '/images/floorplan-2bhk.webp',
  locationMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29948.082271395764!2d85.79274629999999!3d20.2441929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7fbdf1f8e47%3A0x8df2f2f9f31fe8a1!2sGhangapatna%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin',
  contactForm: true,
};

const jsonLdLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'The Gardenia',
  url: 'https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar',
  image: 'https://www.gardenia.homes/images/og-2bhk-1200x630.jpg',
  description:
    'Discover thoughtfully designed 2 BHK apartments at The Gardenia in Bhubaneswar with wellness amenities and green spaces.',
  areaServed: 'Bhubaneswar, Odisha, India',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    addressCountry: 'IN',
  },
};

const jsonLdProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Premium 2 BHK Flats in Bhubaneswar | The Gardenia',
  image: ['https://www.gardenia.homes/images/og-2bhk-1200x630.jpg'],
  description:
    'Thoughtfully designed 2 BHK apartments at The Gardenia in Bhubaneswar. Luxury living with wellness amenities and green spaces.',
  brand: {
    '@type': 'Brand',
    name: 'The Gardenia',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '8200000',
    availability: 'https://schema.org/InStock',
    url: 'https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar',
  },
};

export default function TwoBhkFlatsInBhubaneswarPage() {
  const { heroImage, floorPlanImage, locationMapUrl } = pageData;

  return (
    <>
      <Head>
        <title>Premium 2 BHK Flats in Bhubaneswar | The Gardenia</title>
        <meta
          name="description"
          content="Discover thoughtfully designed 2 BHK apartments at The Gardenia in Bhubaneswar. Luxury living with wellness amenities, green spaces, and prime location. Starting ₹82 Lacs."
        />
        <link rel="canonical" href="https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Premium 2 BHK Flats in Bhubaneswar | The Gardenia" />
        <meta
          property="og:description"
          content="Discover thoughtfully designed 2 BHK apartments at The Gardenia in Bhubaneswar. Luxury living with wellness amenities, green spaces, and prime location."
        />
        <meta property="og:url" content="https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar" />
        <meta property="og:image" content="https://www.gardenia.homes/images/og-2bhk-1200x630.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium 2 BHK Flats in Bhubaneswar | The Gardenia" />
        <meta
          name="twitter:description"
          content="Discover thoughtfully designed 2 BHK apartments at The Gardenia in Bhubaneswar. Luxury living with wellness amenities and green spaces."
        />
        <meta name="twitter:image" content="https://www.gardenia.homes/images/og-2bhk-1200x630.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />
      </Head>

      <div className="bg-white text-[#1f2937] antialiased">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-200">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-4 flex items-center justify-between gap-6">
            <a href="/" className="text-lg font-bold tracking-wide text-[#1f2937]">
              The Gardenia
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
              <a href="#experience" className="hover:text-[#059669]">Experience</a>
              <a href="#amenities" className="hover:text-[#059669]">Amenities</a>
              <a href="#location" className="hover:text-[#059669]">Location</a>
              <a href="#faq" className="hover:text-[#059669]">FAQ</a>
            </nav>

            <a
              href="#book"
              className="rounded-[4px] bg-[#059669] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#047857]"
            >
              Schedule Visit
            </a>
          </div>
        </header>

        <main className="scroll-smooth">
          <section id="hero" aria-label="2 BHK hero section">
            <HeroSection2BHK
              heroImage={heroImage}
              headline="Premium 2 BHK Flat in Bhubaneswar"
              subheading="Discover thoughtfully designed 2 BHK apartments at The Gardenia with premium amenities, open green spaces, and exceptional connectivity."
              primaryCTAText="Download Floor Plan"
            />
          </section>

          <section id="experience" aria-label="Experience modern family living section">
            <ExperienceModernLivingSection image="/images/experience-2bhk.webp" imageAlt="Family living space at The Gardenia" />
          </section>

          <section id="why-choose" aria-label="Why choose section">
            <WhyChooseSection />
          </section>

          <section id="features" aria-label="Spacious features section">
            <SpaciousFeatureSection />
          </section>

          <section id="amenities" aria-label="Lifestyle amenities section">
            <AmenitiesSection />
          </section>

          <section id="wellness" aria-label="Wellness-focused community section">
            <WellnessSection />
          </section>

          <section id="contact" aria-label="Own luxury CTA section">
            <OwnLuxuryCtaSection />
          </section>

          <section id="location" aria-label="Prime location section">
            <PrimeLocationSection mapEmbedUrl={locationMapUrl} locationImage="/images/location-gardenia.webp" />
          </section>

          <section id="floor-plans" aria-label="Floor plans and apartment configuration section">
            <FloorPlanSection floorPlanImage={floorPlanImage} floorPlanPdf="/floorplan.pdf" />
          </section>

          <section id="book" aria-label="Book dream CTA section">
            <BookDreamCtaSection />
          </section>

          <section id="faq" aria-label="Frequently asked questions section">
            <FAQSection />
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-bold text-[#1f2937]">The Gardenia</h2>
              <p className="mt-3 text-sm text-slate-600 leading-6">
                Premium 2 BHK flats in Bhubaneswar designed for modern family living.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Property Pages</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/about-us" className="text-slate-600 hover:text-[#059669]">About Us</a></li>
                <li><a href="/2-bhk-flats-in-bhubaneswar" className="text-slate-600 hover:text-[#059669]">2 BHK Flats</a></li>
                <li><a href="/" className="text-slate-600 hover:text-[#059669]">Home</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Ghangapatna, Bhubaneswar, Odisha</li>
                <li>+91 98765 43210</li>
                <li>sales@gardenia.homes</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
