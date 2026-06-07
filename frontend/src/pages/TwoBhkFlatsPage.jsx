import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Building2, Leaf, MapPin, Sparkles, Star } from "lucide-react";
import { openSiteVisitModal } from "@/lib/openSiteVisit";
import { mockData } from "@/mock/data";

const features = [
  "Spacious Living & Dining Areas",
  "Elegant Bedrooms with Natural Lighting",
  "Modern Kitchen Layouts",
  "Large Balconies with Open Views",
  "Premium Flooring & Fittings",
  "Excellent Ventilation & Airflow",
  "Smart Space Utilization",
  "Contemporary Interior Design",
];

const PAGE_TITLE = "Premium 2 BHK Flats in Bhubaneswar Near Ghangapatna";
const PAGE_DESCRIPTION =
  "Explore premium 2 BHK flats in Bhubaneswar near Ghangapatna Kantabada at The Gardenia featuring spacious layouts, luxury amenities, green spaces, and modern living.";
const CANONICAL_URL = "https://www.gardenia.homes/2-bhk-flats-in-bhubaneswar";

function updateMetaTag(name, content) {
  if (typeof document === "undefined") return;
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateCanonical(url) {
  if (typeof document === "undefined") return;
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

const amenities = [
  "Swimming Pool",
  "Fully Equipped Gymnasium",
  "Yoga & Meditation Hall",
  "Kids’ Play Area",
  "Banquet Hall",
  "Indoor Games Room",
  "Jogging & Walking Tracks",
  "Wellness Lounge",
  "Landscaped Gardens",
  "Terrace Lounge",
  "Outdoor Sports Facilities",
  "Senior Citizen Seating Areas",
];

const nearby = [
  "AIIMS Bhubaneswar",
  "KIIT University",
  "SUM Hospital",
  "Airport",
  "Railway Station",
  "NH-16",
  "Schools & Educational Institutions",
  "Shopping & Entertainment Centers",
];

const faqs = [
  {
    q: "Why should I buy a 2 BHK flat in Bhubaneswar?",
    a: "Bhubaneswar is one of India’s fastest-growing smart cities with excellent infrastructure, connectivity, and investment opportunities, making it an ideal destination for residential property buyers.",
  },
  {
    q: "Is The Gardenia suitable for families?",
    a: "Yes, The Gardenia is designed as a family-focused luxury residential community with premium amenities, open spaces, wellness infrastructure, and excellent connectivity.",
  },
  {
    q: "Does The Gardenia offer modern lifestyle amenities?",
    a: "Yes, residents enjoy access to world-class amenities including a swimming pool, gymnasium, clubhouse, wellness zones, indoor games, landscaped gardens, and more.",
  },
  {
    q: "Is The Gardenia a good investment opportunity?",
    a: "Yes, its prime location, luxury positioning, premium amenities, and rapidly developing surroundings make it a strong investment choice in Bhubaneswar.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-gray-600">{description}</p> : null}
    </div>
  );
}

export default function TwoBhkFlatsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />

      <main className="pt-24">
        <section className="bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4 py-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  2 BHK Flats in Bhubaneswar
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Premium 2 BHK Flat in Bhubaneswar
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                  Discover thoughtfully designed 2 BHK flat at The Gardenia, where luxury, wellness, comfort, and modern living come together in one of Bhubaneswar’s fastest-growing residential destinations.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                    <a href="/floorplan.pdf" download>
                      Download Floor Plan
                    </a>
                  </Button>
                  <Button onClick={openSiteVisitModal} variant="outline" className="rounded-full border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    Schedule Your Visit
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[mockData.assets.gallery[0], mockData.assets.gallery[1], mockData.assets.gallery[2], mockData.assets.gallery[3]].map((src, index) => (
                  <div key={src} className={`overflow-hidden rounded-2xl border border-white/60 bg-white shadow-sm ${index === 0 ? 'row-span-2 min-h-[240px]' : 'min-h-[116px]'}`}>
                    <img src={src} alt={`2 BHK showcase ${index + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Experience Modern Family Living at The Gardenia"
              title="Finding the perfect home is about more than just square footage."
              description="It is about comfort, connectivity, lifestyle, and long-term value."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <p className="text-lg leading-8 text-gray-600">
                  At The Gardenia, our premium 2 BHK flats in Bhubaneswar are thoughtfully crafted to offer a balanced lifestyle surrounded by greenery, open spaces, and world-class amenities.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Located in the peaceful surroundings of Ghangapatna, The Gardenia offers residents a premium lifestyle community designed around wellness and elevated living. Every 2 BHK flat is planned with spacious layouts, modern interiors, natural ventilation, and elegant finishes that create a comfortable and sophisticated living experience.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Whether you are a young professional, newly married couple, growing family, or smart investor, The Gardenia offers the ideal 2 BHK flat in Bhubaneswar for modern urban living.
                </p>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <Star className="h-4 w-4" />
                  Smart Value
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Ideal for homeowners and investors looking for lifestyle value and future growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Why Choose Gardenia 2 BHK Flat"
              title="A well-designed 2 BHK flat in Bhubaneswar offers the perfect balance between affordability, luxury, functionality, and future appreciation."
              description="Bhubaneswar is rapidly emerging as one of India’s fastest-growing smart cities, making it an excellent destination for residential investment and modern family living."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                "Prime location connectivity",
                "Spacious modern homes",
                "Wellness-focused infrastructure",
                "Premium lifestyle amenities",
                "Green open surroundings",
                "Strong future investment potential",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium leading-6 text-gray-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Spacious 2 BHK Flat Designed for Comfortable Living"
              title="Every 2 BHK flat for sale in Bhubaneswar at The Gardenia is carefully planned to maximize comfort, functionality, and aesthetic appeal."
              description="The layouts are designed to create open and breathable living spaces that support modern family lifestyles."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium leading-6 text-gray-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Lifestyle Amenities That Elevate Everyday Living"
              title="Luxury extends far beyond your apartment walls."
              description="Residents have access to a wide range of premium lifestyle amenities designed to support wellness, recreation, and social interaction."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {amenities.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              These thoughtfully curated amenities create a vibrant and engaging community environment for families of all age groups.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="A Wellness-Focused Residential Community"
              title="The Gardenia is built around the concept of Lifestyle Wellness Quotient (LWQ)."
              description="A philosophy that promotes healthier, happier, and more meaningful living."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Open green spaces",
                    "Nature-integrated planning",
                    "Wellness-centric amenities",
                    "Community interaction",
                    "Peaceful surroundings",
                    "Elevated lifestyle experiences",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900">Own a Luxury 2 BHK flat in Bhubaneswar</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Experience premium living with spacious homes, modern amenities, and nature-inspired surroundings at The Gardenia.
                </p>
                <Button onClick={openSiteVisitModal} className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  Schedule Your Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Prime Location Advantage"
              title="The Gardenia is strategically located in Ghangapatna, one of Bhubaneswar’s rapidly developing residential corridors."
              description="The project offers seamless connectivity to educational institutions, hospitals, IT hubs, commercial centers, and transport networks."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {nearby.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-emerald-700">Nearby</div>
                  <div className="mt-2 text-base font-medium text-gray-900">{item}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              This excellent location enhances both lifestyle convenience and long-term property appreciation potential.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Floor Plans & Apartment Configurations"
              title="The Gardenia offers intelligently designed 2 BHK flats with layouts that prioritize spaciousness, privacy, ventilation, and functional living."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {[
                ["Smartly Designed Floor Plans", "Designed to make daily living simple and ergonomic."],
                ["Premium Interior Specifications", "Elegant finishes that keep the home feeling polished."],
                ["Spacious Balconies", "Open views and added breathing room."],
                ["Family-Friendly Layouts", "Comfortable planning for long-term use."],
                ["Modern Architectural Planning", "Clean, contemporary structure and flow."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="text-lg font-semibold text-gray-900">{title}</div>
                  <p className="mt-2 text-base leading-7 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                Book Your Dream 2 BHK flat in Bhubaneswar Today
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Discover a premium lifestyle community designed around luxury, wellness, and modern living.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Schedule your personalized site visit and explore spacious 2 BHK flats at The Gardenia.
              </p>
              <div className="mt-8">
                <Button onClick={openSiteVisitModal} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  Book Site Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle eyebrow="Frequently Asked Questions" title="Common questions about 2 BHK living at The Gardenia" />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="text-lg font-semibold text-gray-900">{item.q}</div>
                  <p className="mt-3 text-base leading-7 text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
