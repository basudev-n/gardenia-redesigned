import React from 'react';
import {
  Waves,
  Dumbbell,
  Flower2,
  Baby,
  Landmark,
  Gamepad2,
  Activity,
  Armchair,
  Trees,
  Sun,
  Trophy,
  Users,
} from 'lucide-react';

export interface AmenitiesSectionProps {
  className?: string;
}

type Amenity = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const AMENITIES: Amenity[] = [
  { name: 'Swimming Pool', Icon: Waves },
  { name: 'Fully Equipped Gymnasium', Icon: Dumbbell },
  { name: 'Yoga & Meditation Hall', Icon: Flower2 },
  { name: "Kids' Play Area", Icon: Baby },
  { name: 'Banquet Hall', Icon: Landmark },
  { name: 'Indoor Games Room', Icon: Gamepad2 },
  { name: 'Jogging & Walking Tracks', Icon: Activity },
  { name: 'Wellness Lounge', Icon: Armchair },
  { name: 'Landscaped Gardens', Icon: Trees },
  { name: 'Terrace Lounge', Icon: Sun },
  { name: 'Outdoor Sports Facilities', Icon: Trophy },
  { name: 'Senior Citizen Seating Areas', Icon: Users },
];

export default function AmenitiesSection({ className = '' }: AmenitiesSectionProps) {
  return (
    <section className={`w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Lifestyle Amenities
            </div>
            <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">
              Lifestyle Amenities That Elevate Everyday Living
            </h2>
          </div>

          <p className="max-w-[430px] text-[15px] leading-[1.75] text-[#6b7280] sm:text-right">
            Premium recreation, wellness, and social spaces designed to support modern family living.
          </p>
        </div>

        <p className="max-w-4xl text-[16px] leading-[1.8] text-[#6b7280] sm:text-[17px]">
          At The Gardenia, luxury extends far beyond your apartment walls. Residents have access to a wide range of
          premium lifestyle amenities designed to support wellness, recreation, and social interaction.
        </p>

        <h3 className="mt-8 mb-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-[#059669]">Premium Amenities Include</h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {AMENITIES.map(({ name, Icon }) => (
            <article
              key={name}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fffb] p-4 text-center shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out lg:hover:-translate-y-1 lg:hover:border-emerald-200 lg:hover:shadow-[0_14px_30px_rgba(5,150,105,0.12)] sm:p-6"
            >
              <div className="mb-4 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#059669] shadow-sm sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
              </div>
              <p className="text-[13px] font-semibold leading-6 text-[#1f2937] sm:text-base sm:leading-7">{name}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-4 py-4 text-center text-[15px] italic leading-[1.8] text-[#52616b] sm:mt-10 sm:text-base">
          These thoughtfully curated amenities create a vibrant and engaging community environment for families of all
          age groups.
        </p>
      </div>
    </section>
  );
}

export { AmenitiesSection };
