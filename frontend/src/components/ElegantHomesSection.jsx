import React from "react";
import { Home } from "lucide-react";

/**
 * ElegantHomesSection
 * Props: { className?: string }
 */
export default function ElegantHomesSection({ className = "" }) {
  const offerings = [
    "2 BHK Flats in Bhubaneswar",
    "3 BHK Flats in Bhubaneswar",
    "4 BHK Luxury Flats",
    "Exclusive 5 BHK Penthouses",
  ];

  return (
    <section className={`w-full bg-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            Residences
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Elegant Homes Crafted for Modern Families</h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            The residences at The Gardenia are designed to offer spaciousness, natural ventilation, functionality,
            and timeless elegance. Each apartment is thoughtfully planned to maximize comfort and usability while
            maintaining a premium aesthetic appeal.
          </p>

          <h3 className="mt-7 text-base font-semibold text-slate-900 md:text-lg">Our residential offerings include:</h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offer, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f0fdf4] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <Home className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="mt-2 font-semibold text-slate-800">{offer}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            From premium fittings and expansive balconies to sophisticated interiors and panoramic views, every home
            is built to deliver a refined living experience for modern homeowners.
          </p>
        </div>
      </div>
    </section>
  );
}
