import React from "react";
import { MapPin } from "lucide-react";

/**
 * PrimeLocationSection
 * Props: { mapImage?: string, mapEmbedUrl?: string, className?: string }
 */
export default function PrimeLocationSection({ mapImage, mapEmbedUrl, className = "" }) {
  const proximityItems = [
    "Educational Institutions",
    "Hospitals & Healthcare Centers",
    "IT & Commercial Hubs",
    "Shopping & Entertainment Zones",
    "Airport & Railway Connectivity",
    "NH-16 and Major Road Networks",
  ];

  return (
    <section
      className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/35 to-white py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:order-1 md:p-8">
            <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
              Location
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Prime Location with Excellent Connectivity
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
              Strategically located in Ghangapatna, Bhubaneswar, The Gardenia enjoys seamless connectivity to key
              destinations across the city. The project offers the perfect balance between peaceful surroundings and
              urban accessibility.
            </p>

            <h3 className="mt-6 text-base font-semibold text-slate-900 md:text-lg">
              Residents benefit from proximity to:
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {proximityItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f0fdf4] p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#059669]" />
                  <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
              This prime location makes The Gardenia an ideal destination for families, working professionals, and
              long-term investors seeking luxury apartments in Bhubaneswar.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(16,185,129,0.12)]">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  title="The Gardenia location map"
                  className="h-[320px] w-full sm:h-[380px] lg:h-[560px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : mapImage ? (
                <img
                  src={mapImage}
                  alt="The Gardenia location map"
                  className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[560px]"
                />
              ) : (
                <div className="flex h-[320px] w-full items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-slate-100 px-6 text-center sm:h-[380px] lg:h-[560px]">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600/10">
                      <MapPin className="h-8 w-8 text-[#059669]" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-slate-800">Map placeholder</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Add a Google Maps embed URL or a location image when available.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}