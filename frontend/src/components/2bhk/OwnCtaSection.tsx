import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface OwnLuxuryCtaSectionProps {
  onCtaClick?: () => void;
  className?: string;
}

export default function OwnLuxuryCtaSection({ onCtaClick, className = '' }: OwnLuxuryCtaSectionProps) {
  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-10 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Luxury Ownership
          </div>
          <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.35rem]">
            Own a Luxury 2 BHK flat in Bhubaneswar
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
          Experience premium living with spacious homes, modern amenities, and nature-inspired surroundings at The
          Gardenia.
          </p>

          <Button
            type="button"
            onClick={onCtaClick}
            aria-label="Schedule a site visit at The Gardenia"
            className="mt-8 h-12 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(2,6,23,0.12)] hover:bg-emerald-700"
          >
            Schedule Your Visit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export { OwnLuxuryCtaSection };
