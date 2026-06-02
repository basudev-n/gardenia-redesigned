import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export type PentHouseHighlightsSectionProps = {
  className?: string;
};

const HIGHLIGHTS = [
  'Spacious 5 BHK Layouts',
  'Expansive Living & Dining Areas',
  'Private Terrace Spaces',
  'Panoramic Skyline & Hill Views',
  'Elegant Double-Height Living Experience',
  'Premium Interior Specifications',
  'Large Balconies with Open Views',
  'Natural Light & Cross Ventilation',
  'Modern Architectural Design',
  'Exclusive Privacy & Comfort',
];

export default function PentHouseHighlightsSection({ className = '' }: PentHouseHighlightsSectionProps) {
  return (
    <section className={`bg-[#f9fafb] ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 lg:px-8 lg:py-[4.5rem]">
        <div className="rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="max-w-[960px]">
            <div className="mb-5 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Penthouse Highlights
            </div>

            <p className="mb-4 text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
            The penthouses at The Gardenia are designed for those who appreciate spacious living environments and
            timeless architectural elegance. Every detail reflects thoughtful craftsmanship, premium finishes, and
            intelligent planning that enhance comfort and functionality.
            </p>
            <p className="mb-8 text-[16px] leading-[1.8] text-[#6b7280] sm:mb-10 sm:text-[17px]">
            From expansive living spaces to open terraces overlooking the city skyline, these homes are built to
            deliver a truly elevated lifestyle experience.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[1.7rem] font-bold leading-tight text-[#1f2937] sm:text-[2rem]">Penthouse Highlights</h2>
            <p className="max-w-[420px] text-[15px] leading-[1.7] text-[#6b7280] sm:text-right">
              A compact collection of the most valuable lifestyle and spatial advantages.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-5 xl:gap-6">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 text-left shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_32px_rgba(5,150,105,0.12)] sm:p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-[0.82rem] font-bold leading-[1.45] text-[#1f2937] sm:text-[15px]">{item}</p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
