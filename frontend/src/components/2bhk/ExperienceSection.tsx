import React from 'react';

export interface ExperienceModernLivingProps {
  image?: string;
  imageAlt?: string;
  className?: string;
}

export default function ExperienceModernLivingSection({ image, imageAlt = '2 BHK living at The Gardenia', className = '' }: ExperienceModernLivingProps) {
  return (
    <section className={`w-full bg-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="px-4 sm:px-8">
          <div className="mb-6">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
              ABOUT 2 BHK LIVING
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[800px] mx-auto lg:mx-0 space-y-6">
              <p className="text-[#4b5563] text-base sm:text-[18px] leading-[1.85] font-normal">
                Finding the perfect home is about more than just square footage — it is about comfort, connectivity, lifestyle, and long-term value. At The Gardenia, our premium 2 BHK flats in Bhubaneswar are thoughtfully crafted to offer a balanced lifestyle surrounded by greenery, open spaces, and world-class amenities.
              </p>

              <p className="text-[#4b5563] text-base sm:text-[18px] leading-[1.85] font-normal">
                Located in the peaceful surroundings of Ghangapatna, The Gardenia offers residents a premium lifestyle community designed around wellness and elevated living. Every 2 BHK flat is planned with spacious layouts, modern interiors, natural ventilation, and elegant finishes that create a comfortable and sophisticated living experience.
              </p>

              <p className="text-[#4b5563] text-base sm:text-[18px] leading-[1.85] font-normal">
                Whether you are a young professional, newly married couple, growing family, or smart investor, The Gardenia offers the ideal 2 BHK flat in Bhubaneswar for modern urban living.
              </p>
            </div>

            <div className="w-full flex items-center justify-center">
              {image ? (
                <div className="w-full">
                  <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_18px_36px_rgba(2,6,23,0.08)]">
                    <img src={image} alt={imageAlt} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105" loading="lazy" />
                  </div>
                </div>
              ) : (
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-md aspect-[4/3] rounded-2xl border border-slate-200 bg-slate-100 flex items-center justify-center shadow-[0_12px_28px_rgba(2,6,23,0.08)]">
                    <div className="text-slate-400 text-sm">Image placeholder</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ExperienceModernLivingSection };
