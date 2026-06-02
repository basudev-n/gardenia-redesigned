import React from "react";

/**
 * BeginJourneySection
 * Props: { onExploreClick?: () => void, onContactClick?: () => void, className?: string }
 */
export default function BeginJourneySection({ onExploreClick, onContactClick, className = "" }) {
  const handleExploreClick = (e) => {
    if (onExploreClick) {
      e.preventDefault();
      onExploreClick();
    }
  };

  const handleContactClick = (e) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <section
      className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/50 to-white py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-100 bg-white px-6 py-10 shadow-[0_14px_45px_rgba(16,185,129,0.08)] sm:px-8 md:py-12">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            Next Step
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Begin Your Luxury Living Journey Today
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            Explore premium apartments and penthouses crafted for elevated living at The Gardenia, Bhubaneswar.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center rounded-full bg-[#059669] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              aria-label="Explore Now"
            >
              Explore Now
            </a>

            <a
              href="/contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full border border-emerald-600 bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 transition duration-200 hover:border-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
