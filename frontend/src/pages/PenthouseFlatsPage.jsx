import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Building2, Leaf, MapPin, Sparkles, Star } from "lucide-react";
import { openSiteVisitModal } from "@/lib/openSiteVisit";

const highlights = [
  "Spacious 5 BHK Layouts",
  "Expansive Living & Dining Areas",
  "Private Terrace Spaces",
  "Panoramic Skyline & Hill Views",
  "Elegant Double-Height Living Experience",
  "Premium Interior Specifications",
  "Large Balconies with Open Views",
  "Natural Light & Cross Ventilation",
  "Modern Architectural Design",
  "Exclusive Privacy & Comfort",
];

const amenities = [
  "Grand Clubhouse",
  "Swimming Pool",
  "Wellness Lounge",
  "Yoga & Meditation Hall",
  "Fully Equipped Gymnasium",
  "Indoor Games Lounge",
  "Banquet Hall",
  "Kids’ Activity Areas",
  "Outdoor Sports Facilities",
  "Landscaped Gardens",
  "Terrace Lounge Spaces",
  "Senior Citizen Seating Areas",
];

const nearby = [
  "AIIMS Bhubaneswar",
  "KIIT University",
  "SUM Hospital",
  "NH-16",
  "Airport",
  "Railway Station",
  "Educational Institutions",
  "Shopping & Entertainment Centers",
];

const faqItems = [
  {
    q: "Does The Gardenia offer 5 BHK penthouses in Bhubaneswar?",
    a: "Yes, The Gardenia offers exclusive luxury 5 BHK Penthouse for Sale in Bhubaneswar with spacious layouts and premium lifestyle features.",
  },
  {
    q: "What makes The Gardenia penthouses unique?",
    a: "The penthouses feature expansive living spaces, private terraces, panoramic views, luxury amenities, wellness-focused planning, and elegant architecture.",
  },
  {
    q: "Is The Gardenia suitable for luxury family living?",
    a: "Absolutely. The project is designed to provide spacious family homes within a premium wellness-focused residential community.",
  },
  {
    q: "Is investing in a penthouse in Bhubaneswar a good decision?",
    a: "Yes, Bhubaneswar’s growing infrastructure and rising demand for luxury housing make penthouses a strong long-term investment opportunity.",
  },
];

const PAGE_TITLE = "5 BHK Penthouse For Sale in Bhubaneswar Near Ghangapatna";
const PAGE_DESCRIPTION =
  "Discover exclusive 5 BHK penthouse for sale in Bhubaneswar near Ghangapatna at The Gardenia with luxury interiors, skyline views, and premium amenities. Book now.";
const CANONICAL_URL = "https://www.gardenia.homes/penthouse-for-sale-in-bhubaneswar";

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

export default function PenthouseFlatsPage() {
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
                  5 BHK Penthouse in Bhubaneswar
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Exclusive 5 BHK Penthouse for Sale in Bhubaneswar
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                  Experience the pinnacle of luxury living at The Gardenia with ultra-premium penthouses crafted for those who seek unmatched space, elegance, privacy, and elevated lifestyle experiences in Bhubaneswar.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                    <a href="/brochure.pdf" download>
                      Download Penthouse Brochure
                    </a>
                  </Button>
                  <Button onClick={openSiteVisitModal} variant="outline" className="rounded-full border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    Schedule Your Site Visit
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Building2, title: "Exclusive Space", text: "Designed for elevated family living" },
                  { icon: Leaf, title: "Wellness", text: "Nature-inspired lifestyle planning" },
                  { icon: MapPin, title: "Ghangapatna", text: "Strong urban connectivity" },
                  { icon: Sparkles, title: "Prestige", text: "Refined luxury with privacy" },
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
              eyebrow="Discover Elevated Penthouse Living at The Gardenia"
              title="Luxury reaches a new level with premium penthouses that deliver sophistication, comfort, and breathtaking living experiences."
              description="Located in the serene surroundings of Ghangapatna, these residences redefine modern luxury through expansive layouts, panoramic views, wellness-inspired spaces, and world-class architecture."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
                <p className="text-lg leading-8 text-gray-600">
                  Our 5 BHK Penthouse for Sale in Bhubaneswar offers an extraordinary lifestyle for homeowners who desire more than just a residence. Every penthouse is crafted to provide privacy, openness, and refined elegance while seamlessly connecting residents with nature, skyline views, and premium community living.
                </p>
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  Designed around the philosophy of Lifestyle Wellness Quotient, The Gardenia creates a living experience where luxury, wellness, and modern architecture exist in perfect harmony.
                </p>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <Star className="h-4 w-4" />
                  A Rare Blend
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Space, privacy, sophistication, and elevated lifestyle, all in one address.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="A Rare Blend of Space, Privacy & Sophistication"
              title="Every detail reflects thoughtful craftsmanship, premium finishes, and intelligent planning."
              description="The penthouses at The Gardenia are designed for those who appreciate spacious living environments and timeless architectural elegance."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {highlights.map((item) => (
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
              eyebrow="Experience Luxury Above the Ordinary"
              title="Penthouse living is not simply about owning a larger home."
              description="It is about experiencing a lifestyle that reflects prestige, comfort, and elevated well-being."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Sky lounges",
                    "Wellness zones",
                    "Terrace seating areas",
                    "Open recreational spaces",
                    "Scenic relaxation decks",
                    "Nature-inspired environments",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-gray-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900">Looking for a Luxury Penthouse for Sale in Bhubaneswar?</h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Explore exclusive penthouse residences at The Gardenia with spacious layouts, private terraces, premium amenities, and breathtaking skyline views.
                </p>
                <Button onClick={openSiteVisitModal} className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  Get Penthouse Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Wellness-Inspired Living with Open Green Spaces"
              title="The project is carefully planned to create a balanced and peaceful residential environment."
              description="With over 60% open green spaces, landscaped surroundings, and thoughtfully integrated wellness infrastructure, residents experience better air circulation, peaceful surroundings, nature-integrated living, enhanced lifestyle quality, relaxing community spaces, and elevated emotional well-being."
            />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Premium Amenities Crafted for Elite Living"
              title="Residents enjoy access to an exceptional collection of lifestyle amenities."
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

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Prime Location with Excellent Connectivity"
              title="Strategically located in Ghangapatna, The Gardenia offers excellent connectivity across Bhubaneswar."
              description="The location offers the perfect balance between urban convenience and peaceful residential living."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {nearby.map((item) => (
                <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-emerald-700">Nearby</div>
                  <div className="mt-2 text-base font-medium text-gray-900">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Architectural Excellence Designed for Modern Luxury"
              title="Every residence is designed to maximize spaciousness, natural lighting, ventilation, privacy, scenic views, and functional elegance."
              description="The project combines premium aesthetics with practical family living to create homes that remain timeless in both design and comfort."
            />
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              eyebrow="Why Choose The Gardenia Penthouse Residences?"
              title="A premium wellness-focused community with a lifestyle reserved for the few."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {[
                ["Exclusive Luxury Living", "Experience privacy, elegance, and spacious living in one of Bhubaneswar’s premium residential communities."],
                ["Panoramic Views", "Enjoy breathtaking skyline and natural landscape views from expansive balconies and terraces."],
                ["Wellness-Centric Community", "Live in a thoughtfully designed environment focused on wellness and open living."],
                ["Premium Lifestyle Amenities", "Access world-class recreational, wellness, and social facilities within the community."],
                ["Prime Residential Location", "Stay connected to the city while enjoying peaceful surroundings."],
                ["Long-Term Investment Value", "Benefit from premium real estate appreciation in one of Bhubaneswar’s growing luxury corridors."],
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
              eyebrow="A Lifestyle Reserved for the Few"
              title="Owning a penthouse at The Gardenia is more than a real estate investment."
              description="It is a statement of refined living, whether you are entertaining guests, enjoying quiet family moments, or simply relaxing in your private terrace space overlooking the skyline."
            />
            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              If you are searching for a Penthouse for Sale in Bhubaneswar that combines luxury, wellness, space, and modern architecture, The Gardenia offers an address unlike any other.
            </p>
          </div>
        </section>

        <section className="bg-emerald-600 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                Own a Premium 5 BHK Penthouse in Bhubaneswar
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Step into a world of elevated luxury with spacious penthouse residences.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/90">
                Designed for comfort, exclusivity, and modern lifestyle experiences.
              </p>
              <div className="mt-8">
                <Button onClick={openSiteVisitModal} className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  Schedule Your site Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle eyebrow="Frequently Asked Questions" title="Common questions about penthouse living at The Gardenia" />
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
