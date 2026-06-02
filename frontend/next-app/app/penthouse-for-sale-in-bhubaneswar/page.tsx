import type { Metadata } from 'next';
import PentHouseHeroSection from '../../components/penthouse/HeroSection';
import ElevatedLivingSection from '../../components/penthouse/ElevatedLivingSection';
import PentHouseHighlightsSection from '../../components/penthouse/HighlightsSection';
import LuxuryAboveOrdinarySection from '../../components/penthouse/LuxurySection';
import PenthouseLookingCtaSection from '../../components/penthouse/LookingCtaSection';
import WellnessLivingSection from '../../components/penthouse/WellnessLivingSection';
import PremiumAmenitiesSection from '../../components/penthouse/AmenitiesSection';
import PrimeLocationSection from '../../components/penthouse/LocationSection';
import ArchitecturalExcellenceSection from '../../components/penthouse/ArchitectureSection';
import WhyChoosePenthouseSection from '../../components/penthouse/WhyChooseSection';
import LifestyleReservedSection from '../../components/penthouse/LifestyleReservedSection';
import OwnPentHouseCtaSection from '../../components/penthouse/OwnCtaSection';
import PentHouseFAQSection from '../../components/penthouse/FAQSection';
import SiteHeader from '../../components/site/SiteHeader';
import SiteFooter from '../../components/site/SiteFooter';

const PAGE_URL = 'https://www.gardenia.homes/penthouse-for-sale-in-bhubaneswar';
const OG_IMAGE = 'https://www.gardenia.homes/images/penthouse-exterior-skyline-1200x630.jpg';

type PenthousePageData = {
  heroImage: string;
  pentHouseImages: string[];
  contactForm?: boolean;
};

const pageData: PenthousePageData = {
  heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80',
  pentHouseImages: [
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1616594039964-3f6bf1f6400b?auto=format&fit=crop&w=1600&q=80',
  ],
  contactForm: true,
};

export const metadata: Metadata = {
  title: 'Exclusive 5 BHK Penthouse for Sale in Bhubaneswar | The Gardenia',
  description:
    'Discover ultra-premium 5 BHK penthouses at The Gardenia in Bhubaneswar. Luxury living with panoramic views, private terraces, wellness amenities, and modern architecture. Schedule your exclusive site visit.',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Exclusive 5 BHK Penthouse for Sale in Bhubaneswar | The Gardenia',
    description:
      'Discover ultra-premium 5 BHK penthouses at The Gardenia in Bhubaneswar. Luxury living with panoramic views, private terraces, wellness amenities, and modern architecture. Schedule your exclusive site visit.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Premium penthouse exterior with skyline at The Gardenia',
      },
    ],
  },
};

export default function PenthouseForSalePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The Gardenia',
    url: 'https://www.gardenia.homes/',
    telephone: '+91-9124619941',
    email: 'marketing@gardenia.homes',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ghangapatna',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '5 BHK Penthouse at The Gardenia',
    description:
      'Ultra-premium 5 BHK penthouses in Bhubaneswar with private terraces, panoramic views, and luxury wellness amenities.',
    brand: {
      '@type': 'Brand',
      name: 'The Gardenia',
    },
    image: pageData.pentHouseImages,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'The Gardenia',
      },
      url: PAGE_URL,
    },
  };

  const realEstateListingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: '5 BHK Penthouse for Sale in Bhubaneswar',
    description:
      'Exclusive penthouse residences at The Gardenia featuring wellness-focused planning, skyline views, and premium community amenities.',
    url: PAGE_URL,
    datePosted: '2026-05-27',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListingSchema) }} />

      <div className="w-full bg-white text-[#1f2937]">
        <SiteHeader />

        <div id="hero">
          <PentHouseHeroSection
            heroImage={pageData.heroImage}
            headline="Exclusive 5 BHK Penthouse for Sale in Bhubaneswar"
            subheading="Experience the pinnacle of luxury living at The Gardenia with ultra-premium penthouses crafted for those who seek unmatched space, elegance, privacy, and elevated lifestyle experiences in Bhubaneswar."
            primaryCTAText="Download Penthouse Brochure"
            secondaryCTAText="Schedule Exclusive Tour"
            showScrollIndicator
            enableParallax
          />
        </div>

        <div id="overview">
          <ElevatedLivingSection image={pageData.pentHouseImages[0]} imageAlt="Luxury penthouse lounge at The Gardenia" />
        </div>
        <div id="floor-plans">
          <PentHouseHighlightsSection className="border-t border-slate-100" />
        </div>
        <LuxuryAboveOrdinarySection className="border-t border-slate-100" />
        <PenthouseLookingCtaSection />
        <WellnessLivingSection className="border-t border-slate-100" />
        <div id="amenities">
          <PremiumAmenitiesSection className="border-t border-slate-100" />
        </div>
        <div id="location">
          <PrimeLocationSection className="border-t border-slate-100" />
        </div>
        <ArchitecturalExcellenceSection className="border-t border-slate-100" />
        <WhyChoosePenthouseSection className="border-t border-slate-100" />
        <div id="gallery">
          <LifestyleReservedSection className="border-t border-slate-100" />
        </div>
        <OwnPentHouseCtaSection />
        <PentHouseFAQSection className="border-t border-slate-100" />

        <SiteFooter />
      </div>
    </>
  );
}
