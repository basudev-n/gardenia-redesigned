import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeSection from "@/components/WelcomeSection";
import WellnessSection from "@/components/WellnessSection";
import WellnessAndOpenLivingSection from "@/components/WellnessAndOpenLivingSection";
import ElegantHomesSection from "@/components/ElegantHomesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import DreamApartmentCTASection from "@/components/DreamApartmentCTASection";
import PrimeLocationSection from "@/components/PrimeLocationSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BuildYourFutureSection from "@/components/BuildYourFutureSection";
import BeginJourneySection from "@/components/BeginJourneySection";

const PAGE_TITLE = "About Us | The Gardenia";
const PAGE_DESCRIPTION =
  "Discover The Gardenia About Us story, premium residences, wellness-focused design, prime location, and luxury living in Bhubaneswar.";
const CANONICAL_URL = "https://thegardenia.in/about-us";

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

export default function AboutUsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
  }, []);

  return (
    <div className="AboutUsPage bg-[#f8faf7] text-[#1f2937]">
      <Header />

      <main className="overflow-x-hidden pt-28">
        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[28px] border border-emerald-100 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                    About The Gardenia
                  </span>
                  <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    A premium residential destination in Bhubaneswar
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                    Discover The Gardenia About Us story, premium residences, wellness-focused design, prime location, and luxury living in Bhubaneswar.
                  </p>
                </div>

                <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-2xl border border-gray-100 bg-emerald-50 px-4 py-5">
                    <div className="text-2xl font-bold text-emerald-700">28+</div>
                    <div className="mt-1 text-sm font-medium text-gray-600">Premium facilities</div>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-slate-50 px-4 py-5">
                    <div className="text-2xl font-bold text-gray-900">Luxury</div>
                    <div className="mt-1 text-sm font-medium text-gray-600">Open living</div>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white px-4 py-5 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">Wellness</div>
                    <div className="mt-1 text-sm font-medium text-gray-600">Lifestyle focus</div>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white px-4 py-5 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">Prime</div>
                    <div className="mt-1 text-sm font-medium text-gray-600">Bhubaneswar location</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WelcomeSection />
        <WhyChooseUsSection />
        <WellnessSection />
        <WellnessAndOpenLivingSection />
        <ArchitectureSection />
        <PrimeLocationSection />
        <ElegantHomesSection />
        <AmenitiesSection />
        <BuildYourFutureSection />
        <DreamApartmentCTASection />
        <BeginJourneySection />
      </main>

      <Footer />
    </div>
  );
}
