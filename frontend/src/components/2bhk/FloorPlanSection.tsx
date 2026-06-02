import React from 'react';
import { CheckCircle2, Download } from 'lucide-react';

export interface FloorPlanSectionProps {
  floorPlanImage?: string;
  floorPlanPdf?: string;
  className?: string;
}

const HIGHLIGHTS = [
  'Smartly Designed Floor Plans',
  'Premium Interior Specifications',
  'Spacious Balconies',
  'Family-Friendly Layouts',
  'Modern Architectural Planning',
];

export default function FloorPlanSection({ floorPlanImage, floorPlanPdf, className = '' }: FloorPlanSectionProps) {
  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Floor Plans
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">
              Floor Plans & Apartment Configurations
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#6b7280] sm:text-right">
            Efficient layouts, premium specifications, and family-friendly spatial planning.
          </p>
        </div>

        <p className="max-w-4xl text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
          The Gardenia offers intelligently designed 2 BHK flats with layouts that prioritize spaciousness, privacy,
          ventilation, and functional living.
        </p>

        <h3 className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">Apartment Highlights</h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5 lg:gap-6">
          {HIGHLIGHTS.map((highlight) => (
            <article
              key={highlight}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 text-center shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_30px_rgba(5,150,105,0.12)] sm:p-6"
            >
              <div className="flex justify-center mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-[#059669] shadow-sm">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <p className="text-[13px] font-semibold leading-6 text-[#1f2937] sm:text-sm">{highlight}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
            {floorPlanImage ? (
              <img
                src={floorPlanImage}
                alt="2 BHK floor plan at The Gardenia"
                className="w-full aspect-video object-cover"
              />
            ) : (
              <div className="w-full aspect-video bg-white flex items-center justify-center">
                <p className="text-[#6b7280] text-sm">Floor plan image / gallery placeholder</p>
              </div>
            )}
          </div>

          {floorPlanPdf ? (
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href={floorPlanPdf}
                download
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(2,6,23,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                aria-label="Download floor plan PDF"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Floor Plan PDF
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export { FloorPlanSection };
