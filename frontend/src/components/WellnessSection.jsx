import React from "react";
import { Leaf } from "lucide-react";

/**
 * WellnessSection
 * Props: { className?: string }
 */
export default function WellnessSection({ className = "" }) {
  const features = [
    "Better living spaces",
    "Better air and openness",
    "Better lifestyle amenities",
    "Better community experiences",
    "Better wellness-focused environments",
  ];

  return (
    <section className={`w-full bg-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm md:p-12">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            Wellness
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            A New Standard of Luxury Living in Bhubaneswar
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            The Gardenia is not just another residential project. It is a thoughtfully planned lifestyle community built
            around the concept of Lifestyle Wellness Quotient, a philosophy that focuses on enhancing physical,
            emotional, social, and environmental well-being.
          </p>

          <h3 className="mt-7 text-base font-semibold text-slate-900 md:text-lg">Our vision is to create homes where residents experience:</h3>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex-shrink-0 rounded-full bg-emerald-50 p-2">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-800">{f}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            With expansive open green areas, premium amenities, and intelligently planned residences, The Gardenia
            delivers a refined living experience that blends urban convenience with peaceful surroundings.
          </p>
        </div>
      </div>
    </section>
  );
}
