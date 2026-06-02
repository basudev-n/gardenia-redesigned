import React from 'react';
import { MapPin } from 'lucide-react';

export interface PrimeLocationSectionProps {
  mapEmbedUrl?: string;
  locationImage?: string;
  className?: string;
}

const CONNECTIVITY_POINTS = [
  'AIIMS Bhubaneswar',
  'KIIT University',
  'SUM Hospital',
  'Airport',
  'Railway Station',
  'NH-16',
  'Schools & Educational Institutions',
  'Shopping & Entertainment Centers',
];

export default function PrimeLocationSection({ mapEmbedUrl, locationImage, className = '' }: PrimeLocationSectionProps) {
  const showMap = Boolean(mapEmbedUrl);
  const showImage = !showMap && Boolean(locationImage);

  return (
    <section className={`w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Prime Location
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">Prime Location Advantage</h2>

            <p className="mt-5 text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
              The Gardenia is strategically located in Ghangapatna, one of Bhubaneswar&apos;s rapidly developing
              residential corridors. The project offers seamless connectivity to educational institutions, hospitals, IT
              hubs, commercial centers, and transport networks.
            </p>

            <h3 className="mt-8 mb-5 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">Nearby Connectivity</h3>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONNECTIVITY_POINTS.map((point) => (
                <li key={point} className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] px-4 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_30px_rgba(5,150,105,0.12)]">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#059669] shadow-sm">
                    <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-[14px] font-semibold leading-6 text-[#1f2937] transition-colors duration-300 group-hover:text-[#059669]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 text-[15px] italic leading-[1.8] text-[#52616b] sm:text-base">
              This excellent location enhances both lifestyle convenience and long-term property appreciation potential.
            </p>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              {showMap ? (
                <iframe
                  title="The Gardenia location map"
                  src={mapEmbedUrl}
                  className="w-full aspect-[4/3] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : showImage ? (
                <img
                  src={locationImage}
                  alt="Prime location view for The Gardenia"
                  className="w-full aspect-[4/3] object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gradient-to-tr from-emerald-50 to-white flex items-center justify-center">
                  <p className="text-slate-500 text-sm">Map or location image placeholder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { PrimeLocationSection };
