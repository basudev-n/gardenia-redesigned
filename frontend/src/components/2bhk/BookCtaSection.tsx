import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface BookDreamCtaSectionProps {
  onBookClick?: () => void;
  className?: string;
}

export default function BookDreamCtaSection({ onBookClick, className = '' }: BookDreamCtaSectionProps) {
  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 px-4 py-10 shadow-[0_18px_45px_rgba(5,150,105,0.22)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Site Visit CTA
          </div>
          <h2 className="text-[1.85rem] font-bold leading-[1.15] text-white sm:text-[2.35rem]">
            Book Your Dream 2 BHK flat in Bhubaneswar Today
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.8] text-white/90 sm:text-[17px]">
          Discover a premium lifestyle community designed around luxury, wellness, and modern living. Schedule your
          personalized site visit and explore spacious 2 BHK flats at The Gardenia.
          </p>

          <Button
            type="button"
            onClick={onBookClick}
            variant="secondary"
            className="mt-8 h-12 rounded-full bg-white px-6 text-sm font-semibold text-emerald-700 shadow-[0_12px_40px_rgba(2,6,23,0.12)] hover:bg-white/95"
            aria-label="Book a site visit at The Gardenia"
          >
            Book Site Visit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export { BookDreamCtaSection };
