import React from "react";

/**
 * BuildYourFutureSection
 * Props: { className?: string }
 */
export default function BuildYourFutureSection({ className = "" }) {
  return (
    <section className={`w-full bg-gradient-to-b from-[#059669] to-emerald-700 py-20 text-white md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-white/10 px-6 py-10 shadow-[0_20px_60px_rgba(4,120,87,0.2)] backdrop-blur-sm md:px-10 md:py-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Build Your Future at The Gardenia
          </h2>

          <div className="mx-auto mt-5 max-w-4xl space-y-4 text-sm leading-7 text-white/90 md:text-base md:leading-8">
            <p>
              The Gardenia is more than a residential address; it is a destination designed for meaningful living,
              wellness, and long-term happiness. Every space within the community reflects our commitment to creating
              homes that inspire comfort, luxury, and connection.
            </p>

            <p>
              If you are looking for a luxury apartment in Bhubaneswar that offers premium living, modern amenities,
              and peaceful surroundings, The Gardenia welcomes you to experience a lifestyle beyond the ordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}