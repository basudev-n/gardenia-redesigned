'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type PentHouseHeroSectionProps = {
  heroImage: string;
  videoUrl?: string;
  headline: string;
  subheading: string;
  primaryCTAText: string;
  secondaryCTAText?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showScrollIndicator?: boolean;
  enableParallax?: boolean;
};

export default function PentHouseHeroSection({
  heroImage,
  videoUrl,
  headline,
  subheading,
  primaryCTAText,
  secondaryCTAText,
  onPrimaryCTA,
  onSecondaryCTA,
  showScrollIndicator = true,
  enableParallax = true,
}: PentHouseHeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxY = useMemo(() => {
    if (!enableParallax) return 0;
    // -50px translation per 100px of vertical scroll.
    return Math.max(-240, -0.5 * scrollY);
  }, [enableParallax, scrollY]);

  return (
    <section className="relative min-h-[70vh] overflow-hidden sm:min-h-[90vh] lg:min-h-screen">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        aria-hidden="true"
      >
        {videoUrl ? (
          <video
            className="h-[115%] w-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
          />
        ) : (
          <img src={heroImage} alt="Luxury penthouse backdrop" className="h-[115%] w-full object-cover" loading="eager" />
        )}
      </div>

      <div className="absolute inset-0 bg-[rgba(17,24,39,0.58)]" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, rgba(17,24,39,0) 40%, rgba(0,0,0,0.45) 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-20 flex min-h-[70vh] items-center justify-center px-4 py-10 sm:min-h-[90vh] sm:px-8 lg:min-h-screen">
        <div className="mx-auto w-full max-w-[950px] rounded-[28px] border border-white/10 bg-white/6 px-4 py-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-[2px] sm:px-8 sm:py-14 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-0">
          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-amber-200/80 to-transparent ph-animate-fade-up sm:mb-7 sm:w-20" />

          <h1
            className="ph-animate-fade-up text-[1.8rem] font-bold leading-[1.08] text-white sm:text-[2.2rem] md:text-[2.75rem] lg:text-[3.75rem] lg:font-extrabold"
            style={{ letterSpacing: '0.02em', animationDelay: '0.2s' }}
          >
            {headline}
          </h1>

          <p
            className="ph-animate-fade-up mx-auto mt-5 mb-10 max-w-[750px] text-[0.96rem] leading-[1.7] text-white/95 sm:mt-6 sm:mb-12 sm:text-[1.05rem] md:text-[1.1rem] lg:text-[1.3rem]"
            style={{ letterSpacing: '0.01em', animationDelay: '0.4s' }}
          >
            {subheading}
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              onClick={onPrimaryCTA}
              className="ph-animate-fade-scale w-full rounded-full bg-[#059669] px-7 py-3 text-[15px] font-bold text-white shadow-[0_8px_30px_rgba(5,150,105,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#047857] hover:shadow-[0_12px_40px_rgba(5,150,105,0.35)] focus:outline-none focus:ring-4 focus:ring-emerald-300/40 sm:w-auto sm:px-[2.6rem] sm:py-[1.05rem] sm:text-[16px]"
              style={{ animationDelay: '0.65s' }}
            >
              {primaryCTAText}
            </button>

            {secondaryCTAText ? (
              <button
                type="button"
                onClick={onSecondaryCTA}
                className="ph-animate-fade-scale w-full rounded-full border-2 border-white/80 bg-transparent px-7 py-3 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/30 sm:w-auto sm:px-[2.6rem] sm:py-[1.05rem] sm:text-[16px]"
                style={{ animationDelay: '0.75s' }}
              >
                {secondaryCTAText}
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {showScrollIndicator ? (
        <div
          className={`pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 lg:flex items-center justify-center transition-opacity duration-300 ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          <ChevronDown className="h-7 w-7 text-white/50 ph-bounce" />
        </div>
      ) : null}

      <style jsx>{`
        .ph-animate-fade-up {
          opacity: 0;
          transform: translate3d(0, 22px, 0);
          animation: phFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ph-animate-fade-scale {
          opacity: 0;
          transform: scale(0.96);
          animation: phFadeScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .ph-bounce {
          animation: phBounce 1.9s ease-in-out infinite;
        }

        @keyframes phFadeUp {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes phFadeScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes phBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(7px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ph-animate-fade-up,
          .ph-animate-fade-scale,
          .ph-bounce {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
