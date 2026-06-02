import React from 'react';

export type PenthouseLookingCtaSectionProps = {
  onCtaClick?: () => void;
  className?: string;
};

export default function PenthouseLookingCtaSection({
  onCtaClick,
  className = '',
}: PenthouseLookingCtaSectionProps) {
  return (
    <section className={`w-full px-4 py-10 sm:px-6 sm:py-12 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[1100px] rounded-[24px] border border-slate-200 bg-[#0f172a] p-4 shadow-[0_16px_50px_rgba(15,23,42,0.18)] sm:p-6 lg:p-10">
        <div
          className="rounded-[18px] border border-white/10 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-12"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #1f2937 0%, #111827 100%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%)',
            backgroundBlendMode: 'screen, normal',
          }}
        >
          <h2 className="mb-5 text-[1.55rem] font-bold leading-[1.2] text-white sm:text-[1.85rem] lg:text-[2.75rem]">
            Looking for a Luxury Penthouse for Sale in Bhubaneswar?
          </h2>

          <p className="mx-auto mb-8 max-w-[800px] text-[15px] leading-[1.7] text-white/95 sm:mb-10 sm:text-[16px] lg:text-[18px]">
            Explore exclusive penthouse residences at The Gardenia with spacious layouts, private terraces, premium
            amenities, and breathtaking skyline views.
          </p>

          <button
            type="button"
            onClick={onCtaClick}
            className="w-full cursor-pointer rounded-full border border-emerald-300/20 bg-[#059669] px-7 py-3 text-[15px] font-bold text-white shadow-[0_8px_25px_rgba(5,150,105,0.3)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#047857] hover:shadow-[0_12px_35px_rgba(5,150,105,0.4)] focus:outline-none focus:ring-4 focus:ring-emerald-300/30 sm:w-auto sm:px-[2.8rem] sm:py-[1.05rem] sm:text-[16px]"
          >
            Get Penthouse Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
