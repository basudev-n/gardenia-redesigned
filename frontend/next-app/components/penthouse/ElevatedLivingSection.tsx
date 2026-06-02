import React from 'react';

export type ElevatedLivingSectionProps = {
  image?: string;
  imageAlt?: string;
  className?: string;
};

export default function ElevatedLivingSection({
  image,
  imageAlt = 'Premium penthouse interior view at The Gardenia',
  className = '',
}: ElevatedLivingSectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1250px] px-4 py-10 sm:px-4 sm:py-12 lg:px-8 lg:py-[4.5rem]">
        <div className="mb-8 h-px w-full bg-gradient-to-r from-emerald-500/50 via-emerald-300/20 to-transparent" aria-hidden="true" />

        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-[minmax(0,850px)_minmax(0,1fr)] lg:gap-14 xl:gap-16' : ''}`}>
          <div className="max-w-[850px]">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#059669]">PENTHOUSE COLLECTION</p>

            <h2 className="mb-8 text-[1.85rem] font-bold leading-[1.2] tracking-[0.01em] text-[#1f2937] lg:text-[2.75rem]">
              Discover Elevated Penthouse Living at The Gardenia
            </h2>

            <div className="space-y-7 text-[15px] font-normal leading-[1.85] text-[#6b7280] sm:text-[16px] lg:text-[18px]">
              <p>
                Luxury reaches a new level at The Gardenia with our exclusive collection of premium penthouses
                thoughtfully designed to deliver sophistication, comfort, and breathtaking living experiences. Located
                in the serene surroundings of Ghangapatna, these residences redefine modern luxury through expansive
                layouts, panoramic views, wellness-inspired spaces, and world-class architecture.
              </p>

              <p>
                Our 5 BHK Penthouse for Sale in Bhubaneswar offers an extraordinary lifestyle for homeowners who desire
                more than just a residence. Every penthouse is crafted to provide privacy, openness, and refined
                elegance while seamlessly connecting residents with nature, skyline views, and premium community living.
              </p>

              <p>
                Designed around the philosophy of Lifestyle Wellness Quotient, The Gardenia creates a living experience
                where luxury, wellness, and modern architecture exist in perfect harmony.
              </p>
            </div>
          </div>

          {image ? (
            <div className="mt-10 lg:mt-2">
              <div className="overflow-hidden rounded-[6px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
                <img src={image} alt={imageAlt} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
