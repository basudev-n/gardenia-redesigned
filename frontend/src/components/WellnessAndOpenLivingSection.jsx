import React from "react";
import { Flower2 } from "lucide-react";

/**
 * WellnessAndOpenLivingSection
 * Props: { featureImage?: string, className?: string }
 */
export default function WellnessAndOpenLivingSection({ featureImage, className = "" }) {
  const features = [
    "Landscaped gardens",
    "Wellness zones",
    "Walking spaces",
    "Leisure decks",
    "Outdoor activity areas",
    "Community interaction spaces",
  ];

  return (
    <section className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/40 to-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-100/70 bg-white p-6 shadow-[0_14px_45px_rgba(16,185,129,0.08)] md:p-10">
          <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2 lg:gap-12">
            <div className="order-2 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm lg:order-1 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                <Flower2 className="h-3.5 w-3.5 text-emerald-600" />
                Open Living
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Designed Around Wellness & Open Living</h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Modern urban living often comes with congestion, stress, and limited open spaces. At The Gardenia, we
                have reimagined residential living by prioritizing wellness, openness, and natural integration.
              </p>

              <div className="mt-5 rounded-2xl border border-emerald-100 bg-[#f0fdf4] p-4">
                <p className="font-semibold text-emerald-800">The project features over 60% open green spaces that create a refreshing environment for families to relax, connect, and thrive.</p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                The integration of nature and architecture allows residents to experience calmness and comfort while
                remaining connected to the city’s fast-growing infrastructure.
              </p>

              {featureImage && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <img src={featureImage} alt="Wellness & open living" className="w-full object-cover" />
                </div>
              )}
            </div>

            <div className="order-1 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-sm lg:order-2 md:p-8">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">Every corner of the community is designed to encourage a healthier and more fulfilling lifestyle through:</h3>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-white bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-200 group-hover:bg-emerald-600 group-hover:text-white">
                        <span className="text-sm font-semibold">0{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-slate-800">{f}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
