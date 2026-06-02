import React, { useEffect, useRef, useState } from 'react';
import { Leaf } from 'lucide-react';

export interface WellnessSectionProps {
  className?: string;
}

const WELLNESS_POINTS = [
  'Open green spaces',
  'Nature-integrated planning',
  'Wellness-centric amenities',
  'Community interaction',
  'Peaceful surroundings',
  'Elevated lifestyle experiences',
];

export default function WellnessSection({ className = '' }: WellnessSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Wellness Living
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">
              A Wellness-Focused Residential Community
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#6b7280] sm:text-right">
            Wellness-first planning, open green spaces, and calming community design.
          </p>
        </div>

        <p className="max-w-4xl text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
            The Gardenia is built around the concept of Lifestyle Wellness Quotient (LWQ), a philosophy that promotes
            healthier, happier, and more meaningful living.
          </p>

        <h3 className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
            Unlike conventional apartment projects, The Gardenia emphasizes:
        </h3>

        <div ref={sectionRef} className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {WELLNESS_POINTS.map((point, index) => {
              const delay = prefersReducedMotion ? 0 : index * 100;
              return (
                <article
                  key={point}
                  className={`rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out ${
                    inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  } hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_30px_rgba(5,150,105,0.12)] sm:p-6`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#059669] shadow-sm">
                      <Leaf className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <p className="text-[13px] font-semibold leading-6 text-[#1f2937] sm:text-base">{point}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.04)] sm:mt-10 sm:px-6 sm:py-6">
            <p className="text-center text-[15px] font-bold leading-[1.8] text-[#059669] sm:text-lg">
              With over 60% open green spaces, residents enjoy a refreshing and peaceful atmosphere while remaining
              connected to the city's major destinations.
            </p>
          </div>
      </div>
    </section>
  );
}

export { WellnessSection };
