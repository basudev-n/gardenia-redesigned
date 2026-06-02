import React from 'react';

export type OwnPentHouseCtaSectionProps = {
  onCtaClick?: () => void;
  className?: string;
};

export default function OwnPentHouseCtaSection({ onCtaClick, className = '' }: OwnPentHouseCtaSectionProps) {
  return (
    <section className={`w-full px-4 py-10 sm:px-6 sm:py-12 lg:py-[4.5rem] ${className}`}>
      <div
        className="mx-auto max-w-[1100px] rounded-[24px] border border-emerald-100 bg-gradient-to-br from-[#059669] via-[#047857] to-[#065f46] p-4 shadow-[0_16px_50px_rgba(5,150,105,0.18)] sm:p-6 lg:p-10"
        style={{
          backgroundBlendMode: 'screen, normal',
          backgroundImage:
            'linear-gradient(135deg, #059669 0%, #047857 100%), radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%)',
        }}
      >
        <div className="rounded-[18px] border border-white/15 bg-white/8 px-4 py-8 text-center backdrop-blur-[2px] sm:px-6 sm:py-10 lg:px-12">
          <h2 className="mb-5 text-[1.6rem] font-bold leading-[1.2] text-white sm:text-[1.85rem] lg:text-[2.75rem]">
            Own a Premium 5 BHK Penthouse in Bhubaneswar
          </h2>

          <p className="mx-auto mb-8 max-w-[800px] text-[15px] leading-[1.7] text-white/95 sm:mb-10 sm:text-[16px] lg:text-[18px]">
            Step into a world of elevated luxury with spacious penthouse residences designed for comfort, exclusivity,
            and modern lifestyle experiences.
          </p>

          <button
            type="button"
            onClick={onCtaClick}
            className="w-full cursor-pointer rounded-full border border-white/25 bg-white px-7 py-3 text-[15px] font-bold text-[#059669] shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f0fdf4] hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)] focus:outline-none focus:ring-4 focus:ring-white/35 sm:w-auto sm:px-[2.8rem] sm:py-[1.05rem] sm:text-[16px]"
          >
            Schedule Your site Visit
          </button>
        </div>
      </div>
    </section>
  );
}
