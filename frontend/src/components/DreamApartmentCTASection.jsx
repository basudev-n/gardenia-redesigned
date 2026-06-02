import React from "react";

/**
 * DreamApartmentCTASection
 * Props: { onBookClick?: () => void, className?: string }
 */
export default function DreamApartmentCTASection({ onBookClick, className = "" }) {
  const handleClick = (e) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <section
      className={`w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 ${className}`}
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Discover Your Dream Apartment in Bhubaneswar
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
          Find a home that combines luxury, comfort, wellness, and connectivity in one exceptional address. Explore
          premium apartments and penthouses at The Gardenia today.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            onClick={handleClick}
            aria-label="Book Your Visit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900"
          >
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
