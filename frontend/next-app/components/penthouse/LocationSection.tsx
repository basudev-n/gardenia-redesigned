import React from 'react';
import { MapPin } from 'lucide-react';

export type PrimeLocationSectionProps = {
  className?: string;
};

const CONNECTIVITY_ITEMS = [
  'AIIMS Bhubaneswar',
  'KIIT University',
  'SUM Hospital',
  'NH-16',
  'Airport',
  'Railway Station',
  'Educational Institutions',
  'Shopping & Entertainment Centers',
];

export default function PrimeLocationSection({
  className = '',
}: PrimeLocationSectionProps) {
  return (
    <section className={`bg-[#f9fafb] ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <div className="rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Location
              </div>
              <h2 className="text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.5rem]">
              Prime Location with Excellent Connectivity
              </h2>
            </div>

            <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#6b7280] sm:text-right">
              Well-connected living with easy access to the city’s essential destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[55%_45%] lg:items-center lg:gap-12">
            <div>
              <p className="mb-8 text-[17px] leading-[1.85] text-[#6b7280]">
                Strategically located in Ghangapatna, The Gardenia offers excellent connectivity to major educational
                institutions, healthcare facilities, commercial hubs, and transport networks across Bhubaneswar.
              </p>

              <h3 className="mb-5 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
                Nearby Connectivity
              </h3>

              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {CONNECTIVITY_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="group flex min-h-[86px] items-start gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_28px_rgba(5,150,105,0.12)]"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-[14px] font-medium leading-[1.5] text-[#1f2937] transition-colors duration-300 group-hover:text-[#059669] sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 text-[15px] italic leading-[1.8] text-[#52616b]">
                The location offers the perfect balance between urban convenience and peaceful residential living.
              </p>
            </div>

            <div className="w-full">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:p-8">
                <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
                  Connectivity Snapshot
                </div>

                <h3 className="text-[1.35rem] font-bold leading-tight text-[#1f2937]">
                  A location designed for quick access.
                </h3>

                <p className="mt-4 text-[15px] leading-[1.8] text-[#6b7280]">
                  The Gardenia keeps essential destinations within easy reach, reducing commute friction while
                  preserving the calm of a premium residential setting.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Healthcare', 'Education', 'Transit', 'Retail'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/70 bg-white/90 px-4 py-4 text-center text-sm font-semibold text-[#1f2937] shadow-[0_8px_18px_rgba(15,23,42,0.05)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-100 bg-white px-4 py-4 text-[14px] leading-[1.7] text-[#52616b]">
                  Excellent connectivity without the clutter of a map embed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
