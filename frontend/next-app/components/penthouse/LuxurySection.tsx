import React from 'react';
import { Leaf, Umbrella, Sofa, Trees, Mountain, Sparkles } from 'lucide-react';

export type LuxuryAboveOrdinarySectionProps = {
  className?: string;
};

type FeatureItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const FEATURES: FeatureItem[] = [
  { title: 'Sky lounges', icon: Sofa },
  { title: 'Wellness zones', icon: Leaf },
  { title: 'Terrace seating areas', icon: Umbrella },
  { title: 'Open recreational spaces', icon: Trees },
  { title: 'Scenic relaxation decks', icon: Mountain },
  { title: 'Nature-inspired environments', icon: Sparkles },
];

export default function LuxuryAboveOrdinarySection({ className = '' }: LuxuryAboveOrdinarySectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <p className="mb-10 max-w-[850px] text-[17px] leading-[1.8] text-[#6b7280]">
          At The Gardenia, penthouse living is not simply about owning a larger home — it is about experiencing a
          lifestyle that reflects prestige, comfort, and elevated well-being.
        </p>

        <h2 className="mb-8 text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.5rem]">
          Experience Luxury Above the Ordinary
        </h2>

        <p className="mb-10 text-[17px] font-bold leading-[1.7] text-[#1f2937]">
          The project features thoughtfully curated rooftop and terrace experiences that enhance everyday living
          through:
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-[#e5e7eb] bg-gradient-to-b from-[#f0fdf4] to-[#ffffff] px-4 py-6 text-center shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#059669] hover:bg-gradient-to-b hover:from-[#ecfdf5] hover:to-[#ffffff] hover:shadow-[0_10px_30px_rgba(5,150,105,0.15)] sm:px-6 sm:py-8"
              >
                <div className="mb-3 flex justify-center sm:mb-5">
                  <Icon className="h-6 w-6 text-[#059669] sm:h-7 sm:w-7" aria-hidden="true" />
                </div>
                <p className="text-[0.8rem] font-bold leading-[1.35] text-[#1f2937] sm:text-[17px]">{feature.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
