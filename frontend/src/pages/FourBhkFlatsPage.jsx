import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Building2, Leaf, MapPin, Sparkles, Star } from "lucide-react";

const highlights = [
  "Expansive Living & Dining Spaces",
  "Premium Master Bedrooms",
  "Elegant Modern Interiors",
  "Large Balconies with Scenic Views",
  "Dedicated Utility & Storage Areas",
  "Excellent Natural Ventilation",
  "Sophisticated Flooring & Finishes",
  "Smart & Functional Space Planning",
];

const amenities = [
  "Grand Clubhouse",
  "Swimming Pool",
  "Modern Gymnasium",
  "Yoga & Meditation Hall",
  "Indoor Games Lounge",
  "Banquet Hall",
  "Kids’ Play Area",
  "Outdoor Sports Facilities",
  "Jogging & Walking Tracks",
  "Terrace Lounge",
  "Wellness Zones",
  "Landscaped Green Spaces",
];

const connectivity = [
  "AIIMS Bhubaneswar",
  "KIIT University",
  "SUM Hospital",
  "NH-16",
  "Airport Connectivity",
  "Railway Station",
  "Leading Schools & Colleges",
  "Retail & Entertainment Centers",
];

const faqItems = [
  {
    q: "Why choose 4 BHK flats in Bhubaneswar?",
    a: "4 BHK flats offer spacious living environments ideal for larger families seeking comfort, luxury, privacy, and long-term flexibility.",
  },
  {
    q: "Does The Gardenia offer modern luxury amenities?",
    a: "Yes, the project includes premium amenities such as a clubhouse, swimming pool, wellness zones, gymnasium, indoor games, landscaped gardens, and more.",
  },
  {
    q: "Is The Gardenia suitable for luxury family living?",
    a: "Absolutely. The project is designed around spacious family homes, wellness-focused infrastructure, and premium lifestyle experiences.",
  },
  {
    q: "Is investing in 4 BHK Flats in Bhubaneswar for Sale a good decision?",
    a: "Yes, Bhubaneswar’s rapid growth, infrastructure expansion, and increasing demand for premium housing make it a strong real estate investment market.",
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

export default function FourBhkFlatsPage() {
  useEffect(() => {
    document.title = "Premium 4 BHK Flats in Bhubaneswar | The Gardenia";
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
                  4 BHK Flats in Bhubaneswar
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Premium 4 BHK Flats in Bhubaneswar
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                  Step into a world of refined luxury with spacious 4 BHK flats at The Gardenia, thoughtfully designed for families who seek elegance, exclusivity, comfort, and elevated modern living in Bhubaneswar.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                    <a href="/brochure.pdf" download>
                      Download Floor Plan
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    <Link to="/contact-us">Book Your Site Visit</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Building2, title: "Grand Living", text: "Premium family-centered spaces" },
                  { icon: Leaf, title: "Wellness", text: "Open green and breathable living" },
                  { icon: MapPin, title: "Ghangapatna", text: "Strategic city connectivity" },
                  { icon: Sparkles, title: "Luxury Finish", text: "Elegant materials and detailing" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                      <Icon className="h-5 w-5 text-emerald-600" />
                      <div className="mt-4 text-sm font-semibold text-gray-900">{item.title}</div>
                      <div className="mt-1 text-sm leading-6 text-gray-600">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Experience Grand Living at The Gardenia"
              title="Luxury is truly experienced when space, comfort, and lifestyle come together effortlessly."
              description="At The Gardenia, our thoughtfully crafted 4 BHK flats in Bhubaneswar offer an exceptional residential experience designed for modern families who desire more space, privacy, and sophistication."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <p className="text-lg leading-8 text-gray-600">
                  Located in the peaceful surroundings of Ghangapatna, The Gardenia combines premium architecture, wellness-inspired planning, expansive green landscapes, and world-class amenities to create one of the most desirable residential destinations in the city.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Our spacious 4 BHK flats are designed for homeowners who appreciate elegant living environments with a perfect balance of luxury, functionality, and tranquility.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Whether you are upgrading your lifestyle or searching for premium 4 BHK Flats for Sale in Bhubaneswar, The Gardenia offers residences that redefine contemporary luxury living.
                </p>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <Star className="h-4 w-4" />
                  Exclusive Family Homes
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  A premium setting for families seeking comfort, privacy, and long-term lifestyle value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Spacious Interiors Crafted for Elevated Comfort"
              title="Every residence at The Gardenia reflects thoughtful planning and architectural excellence."
              description="The layouts are designed to offer openness, natural light, privacy, and seamless functionality for modern family lifestyles."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium leading-6 text-gray-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Our 4 BHK flats in Bhubaneswar feature expansive living spaces that create a sense of grandeur while maintaining warmth and comfort for everyday living.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Live in a Community Designed Around Wellness"
              title="Luxury extends beyond interiors at The Gardenia."
              description="The entire project is planned around the concept of Lifestyle Wellness Quotient, promoting healthier, more peaceful, and more fulfilling living experiences."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Open green landscapes",
                    "Wellness-oriented infrastructure",
                    "Community interaction zones",
                    "Peaceful surroundings",
                    "Recreational lifestyle spaces",
                    "Family-friendly environments",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900">Looking for Spacious 4 BHK Flats in Bhubaneswar?</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Explore premium residences at The Gardenia designed for families seeking luxury, comfort, wellness, and long-term value in Bhubaneswar.
                </p>
                <Button asChild className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  <Link to="/contact-us">Download brochure</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Luxury Amenities That Enhance Everyday Life"
              title="An exceptional collection of modern amenities thoughtfully designed to enrich every aspect of daily living."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {amenities.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm font-medium text-gray-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              These amenities create a vibrant lifestyle ecosystem where families can relax, socialize, and enjoy quality time together.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Prime Connectivity with Peaceful Surroundings"
              title="The Gardenia enjoys a strategic location in Ghangapatna, one of Bhubaneswar’s rapidly developing residential corridors."
              description="The project offers seamless access to key educational institutions, healthcare centers, commercial hubs, and transportation networks."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {connectivity.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-emerald-700">Nearby</div>
                  <div className="mt-2 text-base font-medium text-gray-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Why The Gardenia is Ideal for Luxury Family Living"
              title="Choosing a premium home is about more than just location."
              description="It is about lifestyle quality, design excellence, and long-term comfort."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {[
                ["Elegant Architectural Design", "Contemporary design that blends luxury aesthetics with practical functionality."],
                ["Spacious Family Homes", "Large layouts designed for modern family comfort and privacy."],
                ["Wellness-Inspired Community", "Nature-integrated planning with open green spaces and lifestyle amenities."],
                ["Premium Residential Environment", "A peaceful and sophisticated atmosphere for elevated living."],
                ["Excellent Investment Potential", "Located in one of Bhubaneswar’s promising growth corridors."],
                ["Modern Lifestyle Amenities", "Comprehensive recreational and wellness facilities within the community."],
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
              eyebrow="Thoughtfully Designed Floor Plans"
              title="The 4 BHK Flats in Bhubaneswar for Sale at The Gardenia are designed with intelligent layouts."
              description="Every floor plan emphasizes spacious room dimensions, better privacy, open movement flow, natural lighting, cross ventilation, and functional living spaces."
            />
          </div>
        </section>

        <section className="bg-emerald-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                A Premium Investment Opportunity in Bhubaneswar
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Bhubaneswar continues to emerge as one of India’s fastest-growing residential and infrastructure destinations.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Investing in 4 BHK Flats for Sale in Bhubaneswar offers strong future appreciation potential along with an elevated standard of living.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                The Gardenia combines prime location advantage, luxury positioning, wellness-focused planning, modern infrastructure, and premium community living, making it an excellent choice for both homeowners and investors.
              </p>
              <div className="mt-8">
                <Button asChild className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  <Link to="/contact-us">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle eyebrow="Frequently Asked Questions" title="Common questions about 4 BHK living at The Gardenia" />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
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
