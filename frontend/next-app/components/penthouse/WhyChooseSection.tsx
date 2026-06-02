import React from 'react';
import { Gem, Eye, Leaf, Building2, MapPin, TrendingUp } from 'lucide-react';

export type WhyChoosePenthouseSectionProps = {
  className?: string;
};

type ValueItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const VALUE_ITEMS: ValueItem[] = [
  {
    title: 'Exclusive Luxury Living',
    description:
      "Experience privacy, elegance, and spacious living in one of Bhubaneswar's premium residential communities.",
    icon: Gem,
  },
  {
    title: 'Panoramic Views',
    description:
      'Enjoy breathtaking skyline and natural landscape views from expansive balconies and terraces.',
    icon: Eye,
  },
  {
    title: 'Wellness-Centric Community',
    description: 'Live in a thoughtfully designed environment focused on wellness and open living.',
    icon: Leaf,
  },
  {
    title: 'Premium Lifestyle Amenities',
    description: 'Access world-class recreational, wellness, and social facilities within the community.',
    icon: Building2,
  },
  {
    title: 'Prime Residential Location',
    description: 'Stay connected to the city while enjoying peaceful surroundings.',
    icon: MapPin,
  },
  {
    title: 'Long-Term Investment Value',
    description:
      "Benefit from premium real estate appreciation in one of Bhubaneswar's growing luxury corridors.",
    icon: TrendingUp,
  },
];

export default function WhyChoosePenthouseSection({ className = '' }: WhyChoosePenthouseSectionProps) {
  return (
    <section className={`bg-[#f9fafb] ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <h2 className="mb-10 text-left text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.5rem]">
          Why Choose The Gardenia Penthouse Residences?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#e5e7eb] bg-white px-7 py-9 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#059669] hover:bg-[#f0fdf4] hover:shadow-[0_10px_30px_rgba(5,150,105,0.15)]"
              >
                <div className="mb-4">
                  <Icon className="h-7 w-7 text-[#059669]" aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-[#1f2937]">{item.title}</h3>

                <p className="text-[16px] leading-[1.6] text-[#6b7280]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
