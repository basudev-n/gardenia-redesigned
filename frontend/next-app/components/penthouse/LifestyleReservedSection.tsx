import React from 'react';

export type LifestyleReservedSectionProps = {
  className?: string;
};

export default function LifestyleReservedSection({ className = '' }: LifestyleReservedSectionProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1100px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 text-center">
        <h2
          className="mb-10 text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.75rem]"
          style={{ letterSpacing: '0.02em' }}
        >
          A Lifestyle Reserved for the Few
        </h2>

        <p className="mx-auto mb-7 max-w-[900px] text-[16px] lg:text-[18px] font-normal leading-[1.9] text-[#6b7280]">
          Owning a penthouse at The Gardenia is more than a real estate investment — it is a statement of refined
          living. These residences are designed for individuals and families who seek exclusivity, sophistication, and
          a lifestyle beyond ordinary urban living.
        </p>

        <div className="mx-auto my-8 h-px w-24 bg-[#059669]" aria-hidden="true" />

        <p className="mx-auto mb-7 max-w-[900px] text-[16px] lg:text-[18px] font-normal leading-[1.9] text-[#6b7280]">
          Whether you are entertaining guests, enjoying quiet family moments, or simply relaxing in your private
          terrace space overlooking the skyline, every experience at The Gardenia is crafted to feel exceptional.
        </p>

        <p className="mx-auto max-w-[900px] text-[16px] lg:text-[18px] font-medium leading-[1.9] text-[#6b7280]">
          If you are searching for a Penthouse for Sale in Bhubaneswar that combines luxury, wellness, space, and
          modern architecture, The Gardenia offers an address unlike any other.
        </p>
      </div>
    </section>
  );
}
