import React from "react";

/**
 * WelcomeSection
 * Props: { className?: string }
 */
export default function WelcomeSection({ className = "" }) {
  return (
    <section className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/35 to-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl rounded-3xl border border-emerald-100/80 bg-white p-8 shadow-[0_14px_45px_rgba(16,185,129,0.08)] md:p-12">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            Welcome
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Welcome to The Gardenia
          </h2>

          <div className="mt-6 space-y-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
            <p>
              At The Gardenia, we believe a home should be more than just a place to live. It should inspire peace,
              wellness, comfort, and meaningful living every single day. Located in the serene surroundings of
              Ghangapatna, Bhubaneswar, The Gardenia is thoughtfully designed to redefine luxury living through open
              spaces, wellness-driven planning, premium architecture, and modern lifestyle experiences.
            </p>

            <p>
              Every detail of the project reflects our commitment to creating a balanced lifestyle where nature,
              luxury, and community coexist beautifully. From spacious residences and landscaped greens to elevated
              terrace experiences and world-class amenities, The Gardenia offers a living environment crafted for
              modern families who seek more from life.
            </p>

            <p>
              Whether you are searching for a 2 BHK flat in Bhubaneswar, a spacious 3 BHK flat, an ultra-luxury 4 BHK
              flat, or an exclusive 5 BHK penthouse in Bhubaneswar, The Gardenia offers homes designed around elegance,
              functionality, and long-term comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
