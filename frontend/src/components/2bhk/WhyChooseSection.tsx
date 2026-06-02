import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export interface WhyChooseSectionProps {
  className?: string;
}

const FEATURES = [
  'Prime location connectivity',
  'Spacious modern homes',
  'Wellness-focused infrastructure',
  'Premium lifestyle amenities',
  'Green open surroundings',
  'Strong future investment potential',
];

export default function WhyChooseSection({ className = '' }: WhyChooseSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Lifestyle Benefits
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">
              Why Choose Gardenia 2 BHK Flat
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#6b7280] sm:text-right">
            A 2 BHK home that balances smart investment value with everyday comfort, privacy, and lifestyle quality.
          </p>
        </div>

        <p className="max-w-[820px] text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
          Bhubaneswar is rapidly emerging as one of India&apos;s fastest-growing smart cities, making it an excellent
          destination for residential investment and modern family living. A well-designed 2 BHK flat in Bhubaneswar
          offers the perfect balance between affordability, luxury, functionality, and future appreciation.
        </p>

        <h3 className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
          At The Gardenia, residents enjoy
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((f, i) => {
            const delay = prefersReducedMotion ? 0 : i * 150;
            return (
              <div
                key={f}
                className={`rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 lg:hover:-translate-y-1 lg:hover:border-emerald-200 lg:hover:shadow-[0_16px_35px_rgba(16,185,129,0.14)] sm:p-6 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#059669] shadow-sm transition-colors duration-300 lg:hover:bg-emerald-600 lg:hover:text-white">
                    <Check className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold leading-6 text-[#1f2937] sm:text-base sm:leading-7">{f}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 text-[15px] italic leading-[1.8] text-[#52616b] sm:mt-10 sm:text-base">
          Our 2 BHK flats are ideal for homeowners who seek luxury living without compromising on comfort or convenience.
        </p>
      </div>
    </section>
  );
}

export { WhyChooseSection };
