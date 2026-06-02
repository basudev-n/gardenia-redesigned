import React from 'react';
import {
  Building2,
  Waves,
  Sparkles,
  HeartPulse,
  Dumbbell,
  Gamepad2,
  PartyPopper,
  ToyBrick,
  Trophy,
  Trees,
  Sunset,
  Armchair,
} from 'lucide-react';

export type PremiumAmenitiesSectionProps = {
  className?: string;
};

type AmenityItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const AMENITIES: AmenityItem[] = [
  { title: 'Grand Clubhouse', icon: Building2 },
  { title: 'Swimming Pool', icon: Waves },
  { title: 'Wellness Lounge', icon: Sparkles },
  { title: 'Yoga & Meditation Hall', icon: HeartPulse },
  { title: 'Fully Equipped Gymnasium', icon: Dumbbell },
  { title: 'Indoor Games Lounge', icon: Gamepad2 },
  { title: 'Banquet Hall', icon: PartyPopper },
  { title: "Kids' Activity Areas", icon: ToyBrick },
  { title: 'Outdoor Sports Facilities', icon: Trophy },
  { title: 'Landscaped Gardens', icon: Trees },
  { title: 'Terrace Lounge Spaces', icon: Sunset },
  { title: 'Senior Citizen Seating Areas', icon: Armchair },
];

export default function PremiumAmenitiesSection({ className = '' }: PremiumAmenitiesSectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <h2 className="mb-6 text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.5rem]">
          Premium Amenities Crafted for Elite Living
        </h2>

        <p className="mb-10 max-w-[920px] text-[17px] leading-[1.8] text-[#6b7280]">
          Residents of The Gardenia enjoy access to an exceptional collection of lifestyle amenities designed to
          support recreation, fitness, wellness, and social engagement.
        </p>

        <p className="mb-10 text-[18px] font-bold text-[#1f2937]">Luxury Amenities Include:</p>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4 xl:gap-8">
          {AMENITIES.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <article
                key={amenity.title}
                className="rounded-2xl border border-[#e5e7eb] bg-gradient-to-b from-[#f0fdf4] to-[#ecfdf5]/30 px-4 py-6 text-center shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#059669] hover:bg-white hover:shadow-[0_12px_35px_rgba(5,150,105,0.18)] sm:px-5 sm:py-8"
              >
                <div className="mb-3 flex justify-center sm:mb-4">
                  <Icon className="h-6 w-6 text-[#059669] sm:h-8 sm:w-8" aria-hidden="true" />
                </div>
                <p className="text-[0.8rem] font-bold leading-[1.35] text-[#1f2937] sm:text-[16px] sm:leading-[1.5]">
                  {amenity.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
