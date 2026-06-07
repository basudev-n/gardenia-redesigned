import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Building2, Leaf, MapPin, Star, Sparkles } from "lucide-react";
import { openSiteVisitModal } from "@/lib/openSiteVisit";
import { mockData } from "@/mock/data";

const features = [
  "Spacious Living & Dining Areas",
  "Large Bedrooms with Premium Finishes",
  "Modern Kitchen Layouts",
  "Wide Balconies with Open Views",
  "Natural Ventilation & Sunlight",
  "Elegant Flooring & Fixtures",
  "Smart Space Planning",
  "Contemporary Interior Design",
];

const amenities = [
  "Swimming Pool",
  "Fully Equipped Gymnasium",
  "Yoga & Meditation Hall",
  "Clubhouse & Lounge Areas",
  "Kids’ Play Zone",
  "Indoor Games Room",
  "Banquet Hall",
  "Landscaped Gardens",
  "Outdoor Seating Spaces",
  "Jogging & Walking Tracks",
  "Multipurpose Sports Court",
  "Terrace Lounge & Wellness Zones",
];

const nearby = [
  "AIIMS Bhubaneswar",
  "KIIT University",
  "SUM Hospital",
  "NH-16",
  "Airport",
  "Railway Station",
  "Leading Schools & Colleges",
  "Shopping & Entertainment Hubs",
];

const faqs = [
  {
    q: "Why are 3 BHK flats in Bhubaneswar in high demand?",
    a: "3 BHK flats are ideal for modern families looking for additional space, comfort, and long-term flexibility in a growing urban environment.",
  },
  {
    q: "Does The Gardenia offer luxury amenities?",
    a: "Yes, residents enjoy access to premium amenities including a clubhouse, swimming pool, gymnasium, wellness zones, landscaped gardens, indoor games, and more.",
  },
  {
    q: "Is The Gardenia suitable for family living?",
    a: "Absolutely. The project is designed as a family-friendly luxury community with spacious homes, open green areas, recreational spaces, and wellness infrastructure.",
  },
  {
    q: "Is investing in 3 BHK Flats in Bhubaneswar for Sale a good decision?",
    a: "Yes, Bhubaneswar’s rapid infrastructure growth and increasing demand for premium housing make it an excellent real estate investment destination.",
  },
];

const PAGE_TITLE = "3 BHK Flats in Bhubaneswar Near Ghangapatna Kantabada";
const PAGE_DESCRIPTION =
  "Discover luxury 3 BHK flats in Bhubaneswar near Ghangapatna Kantabada at The Gardenia with spacious homes, premium amenities, green spaces & modern family living.";
const CANONICAL_URL = "https://www.gardenia.homes/3-bhk-flats-in-bhubaneswar";

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

export default function ThreeBhkFlatsPage() {
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
                  3 BHK Flats in Bhubaneswar
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Luxury 3 BHK Flats in Bhubaneswar
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                  Experience spacious family living at The Gardenia with thoughtfully designed luxury 3 BHK flats in Bhubaneswar crafted for comfort, elegance, wellness, and modern urban lifestyles.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                    <a href="/brochure.pdf" download>
                      Download brochure
                    </a>
                  </Button>
                  <Button onClick={openSiteVisitModal} variant="outline" className="rounded-full border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    Book Your Site Visit
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[mockData.assets.gallery[4], mockData.assets.gallery[5], mockData.assets.gallery[6], mockData.assets.gallery[7]].map((src, index) => (
                  <div key={src} className={`overflow-hidden rounded-2xl border border-white/60 bg-white shadow-sm ${index === 1 ? 'row-span-2 min-h-[240px]' : 'min-h-[116px]'}`}>
                    <img src={src} alt={`3 BHK showcase ${index + 1}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Discover Premium 3 BHK Flats in Bhubaneswar"
              title="A home should give your family the space to grow, relax, and create meaningful moments together."
              description="At The Gardenia, our premium 3 BHK flats in Bhubaneswar are designed to offer a perfect combination of luxury, functionality, and peaceful living within a modern lifestyle community."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <p className="text-lg leading-8 text-gray-600">
                  Located in the serene surroundings of Ghangapatna, The Gardenia presents an elevated residential experience where open green spaces, contemporary architecture, wellness-focused amenities, and thoughtfully planned homes come together beautifully.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Whether you are upgrading your lifestyle, searching for a larger family home, or investing in premium real estate, The Gardenia offers some of the finest 3 BHK flats in Bhubaneswar for Sale designed around comfort and long-term value.
                </p>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <Star className="h-4 w-4" />
                  Family-Centric Living
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Premium living with a clear balance of elegance, privacy, and day-to-day convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Spacious Homes Designed for Modern Families"
              title="Every family deserves a home that feels open, comfortable, and future-ready."
              description="Our luxury 3 BHK flats are intelligently planned to maximize space utilization, natural light, ventilation, and everyday convenience."
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
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              These residences are ideal for growing families looking for a refined lifestyle in one of Bhubaneswar’s rapidly developing residential destinations.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Experience Wellness-Focused Community Living"
              title="Luxury is not limited to your apartment alone."
              description="The entire community is designed around the philosophy of Lifestyle Wellness Quotient (LWQ), creating an environment that promotes healthier, happier, and more balanced living."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Open and breathable surroundings",
                    "Wellness-focused infrastructure",
                    "Community interaction spaces",
                    "Nature-integrated living",
                    "Premium recreational amenities",
                    "Safe and family-friendly environments",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900">Searching for Premium 3 BHK Flats</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Explore spacious luxury residences at The Gardenia with world-class amenities, elegant interiors, and peaceful green surroundings.
                </p>
                <Button onClick={openSiteVisitModal} className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  Book Your Site Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Luxury Amenities That Redefine Everyday Living"
              title="A carefully curated collection of lifestyle amenities designed to elevate your everyday experiences."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {amenities.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Prime Location Advantage"
              title="One of the key advantages of investing in 3 BHK Flats for Sale in Bhubaneswar at The Gardenia is its strategic location in Ghangapatna."
              description="The project offers excellent connectivity to important destinations across the city while maintaining a peaceful residential environment."
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
              This location offers residents the convenience of urban accessibility along with the comfort of serene surroundings.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Why Choose The Gardenia for 3 BHK Flats"
              title="More than a residential project, it is a thoughtfully planned luxury lifestyle destination."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {[
                ["Spacious Family-Centric Layouts", "Designed to provide maximum comfort and functionality for modern families."],
                ["Premium Architectural Design", "Contemporary architecture inspired by elegant and practical living."],
                ["Wellness-Focused Lifestyle", "Open green spaces and wellness amenities designed for healthier living."],
                ["Luxury Amenities", "Modern facilities that enhance recreation, fitness, and social experiences."],
                ["Excellent Connectivity", "Easy access to educational institutions, healthcare, and commercial hubs."],
                ["High Future Investment Potential", "Located in one of Bhubaneswar’s fast-growing residential corridors."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="text-lg font-semibold text-gray-900">{title}</div>
                  <p className="mt-2 text-base leading-7 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Elegant Floor Plans with Smart Space Utilization"
              title="Our 3 BHK flats are designed with intelligent layouts that combine spaciousness, privacy, and modern aesthetics."
              description="Every floor plan is carefully created to ensure better movement flow, enhanced ventilation, natural lighting, spacious family interaction areas, and comfortable bedroom layouts."
            />
          </div>
        </section>

        <section className="bg-emerald-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                A Smart Investment for the Future
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Bhubaneswar’s real estate market continues to grow rapidly.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Investing in luxury 3 BHK flats in Bhubaneswar at The Gardenia offers both lifestyle benefits and strong future appreciation potential.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Whether you are buying your dream home or making a long-term property investment, The Gardenia offers exceptional value in a premium residential segment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={openSiteVisitModal} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  Schedule a site Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle eyebrow="Frequently Asked Questions" title="Common questions about 3 BHK living at The Gardenia" />
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
