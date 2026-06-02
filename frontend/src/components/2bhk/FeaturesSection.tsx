import React from 'react';
import { Home, BedDouble, Coffee, Sun, Crown, Wind, Laptop, Sparkles } from 'lucide-react';

export interface SpaciousFeatureSectionProps {
  className?: string;
}

const FEATURES: { title: string; Icon: any }[] = [
  { title: 'Spacious Living & Dining Areas', Icon: Home },
  { title: 'Elegant Bedrooms with Natural Lighting', Icon: BedDouble },
  { title: 'Modern Kitchen Layouts', Icon: Coffee },
  { title: 'Large Balconies with Open Views', Icon: Sun },
  { title: 'Premium Flooring & Fittings', Icon: Crown },
  { title: 'Excellent Ventilation & Airflow', Icon: Wind },
  { title: 'Smart Space Utilization', Icon: Laptop },
  { title: 'Contemporary Interior Design', Icon: Sparkles },
];

export default function SpaciousFeatureSection({ className = '' }: SpaciousFeatureSectionProps) {
  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Apartment Layout
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">
              Spacious 2 BHK flat Designed for Comfortable Living
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#6b7280] sm:text-right">
            Thoughtful interiors, open planning, and premium finishes create a more refined everyday living experience.
          </p>
        </div>

        <p className="max-w-[840px] text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
          Every 2 BHK flat for sale in Bhubaneswar at The Gardenia is carefully planned to maximize comfort, functionality, and aesthetic appeal. The layouts are designed to create open and breathable living spaces that support modern family lifestyles.
        </p>

        <h3 className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">Key Apartment Features</h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map(({ title, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 text-center shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 lg:hover:-translate-y-1 lg:hover:border-emerald-200 lg:hover:shadow-[0_14px_30px_rgba(16,185,129,0.12)] sm:p-6"
              style={{ willChange: 'transform, box-shadow, border-color' }}
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>

              <div className="text-[13px] font-semibold leading-6 text-[#1f2937] sm:text-base">{title}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 text-[15px] italic leading-[1.8] text-[#52616b] sm:mt-10 sm:text-base">
          The homes are crafted to provide a seamless balance between luxury and practicality, ensuring residents enjoy comfort every day.
        </p>
      </div>
    </section>
  );
}

export { SpaciousFeatureSection };
