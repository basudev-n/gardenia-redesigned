import React from 'react';
import { Expand, Sun, Wind, Shield, Mountain, Sparkles } from 'lucide-react';

export type ArchitecturalExcellenceSectionProps = {
  className?: string;
};

type ArchitectureItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ARCHITECTURAL_ELEMENTS: ArchitectureItem[] = [
  { title: 'Spaciousness', icon: Expand },
  { title: 'Natural lighting', icon: Sun },
  { title: 'Ventilation', icon: Wind },
  { title: 'Privacy', icon: Shield },
  { title: 'Scenic views', icon: Mountain },
  { title: 'Functional elegance', icon: Sparkles },
];

export default function ArchitecturalExcellenceSection({ className = '' }: ArchitecturalExcellenceSectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <p className="mb-10 text-[17px] leading-[1.85] text-[#6b7280]">
          The penthouses at The Gardenia reflect contemporary architectural excellence inspired by modern luxury living
          and wellness-focused planning. Every residence is designed to maximize:
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {ARCHITECTURAL_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="rounded-2xl border border-[#e5e7eb] bg-[#f0fdf4] px-4 py-6 text-center shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#059669] hover:bg-white hover:shadow-[0_8px_25px_rgba(5,150,105,0.12)] sm:px-6 sm:py-8"
              >
                <div className="mb-3 flex justify-center sm:mb-4">
                  <Icon className="h-6 w-6 text-[#059669] sm:h-7 sm:w-7" aria-hidden="true" />
                </div>
                <p className="text-[0.8rem] font-bold leading-[1.35] text-[#1f2937] sm:text-[16px]">{element.title}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-[850px] text-center text-[17px] italic leading-[1.8] text-[#6b7280]">
          The project combines premium aesthetics with practical family living to create homes that remain timeless in
          both design and comfort.
        </p>
      </div>
    </section>
  );
}
