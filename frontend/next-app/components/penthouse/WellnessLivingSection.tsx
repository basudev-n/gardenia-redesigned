import React from 'react';
import { Leaf, Wind, Trees, Sparkles, HeartPulse, Flower2 } from 'lucide-react';

export type WellnessLivingSectionProps = {
  className?: string;
};

type Benefit = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const BENEFITS: Benefit[] = [
  { title: 'Better air circulation', icon: Wind },
  { title: 'Peaceful surroundings', icon: Trees },
  { title: 'Nature-integrated living', icon: Leaf },
  { title: 'Enhanced lifestyle quality', icon: Sparkles },
  { title: 'Relaxing community spaces', icon: Flower2 },
  { title: 'Elevated emotional well-being', icon: HeartPulse },
];

export default function WellnessLivingSection({ className = '' }: WellnessLivingSectionProps) {
  return (
    <section className={`bg-[#f0fdf4] ${className}`}>
      <div className="mx-auto max-w-[1250px] rounded-3xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <p className="mb-10 max-w-[900px] text-[17px] leading-[1.8] text-[#6b7280]">
          One of the defining features of The Gardenia is its strong focus on wellness-driven living. Unlike
          conventional luxury developments, the project is carefully planned to create a balanced and peaceful
          residential environment.
        </p>

        <p className="mb-10 text-[18px] font-bold leading-[1.7] text-[#1f2937]">
          With over 60% open green spaces, landscaped surroundings, and thoughtfully integrated wellness
          infrastructure, residents experience:
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#d1fae5] bg-white p-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#059669] hover:shadow-[0_10px_24px_rgba(5,150,105,0.12)] sm:p-6"
              >
                <div className="mb-3 sm:mb-4">
                  <Icon className="h-5 w-5 text-[#059669] sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <p className="text-[0.8rem] font-bold leading-[1.35] text-[#1f2937] sm:text-[16px]">{benefit.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
