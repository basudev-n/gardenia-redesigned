import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloorPlans from "@/components/FloorPlans";
import Contact from "@/components/Contact";

const descriptions = {
  "3 BHK Flat": "Explore spacious 3 BHK homes at The Gardenia, designed for growing families who want comfort, privacy, and premium amenities.",
  "4 BHK Flat": "Discover expansive 4 BHK residences at The Gardenia with generous living spaces, elegant finishes, and a wellness-focused community.",
  "5 BHK Penthouse": "Experience The Gardenia's exclusive 5 BHK penthouse lifestyle with elevated privacy, premium spaces, and panoramic living.",
};

export default function PropertyPage({ type }) {
  const description = descriptions[type] || "Explore premium residences at The Gardenia.";

  useEffect(() => {
    document.title = `${type} in Bhubaneswar | The Gardenia`;
  }, [type]);

  return (
    <div className="bg-white text-gray-900">
      <Header />

      <main className="overflow-x-hidden pt-20">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
              The Gardenia Residences
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
              {type}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {description}
            </p>
          </div>
        </section>

        <FloorPlans />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
