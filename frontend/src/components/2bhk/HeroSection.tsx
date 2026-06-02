import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

export interface HeroSection2BHKProps {
  heroImage: string;
  videoUrl?: string;
  headline?: string;
  subheading?: string;
  primaryCTAText?: string;
  onPrimaryCTA?: () => void;
  showScrollIndicator?: boolean;
  enableParallax?: boolean;
  topOffset?: boolean;
}

export default function HeroSection2BHK({
  heroImage,
  videoUrl,
  headline = 'Premium 2 BHK Flat in Bhubaneswar',
  subheading = "Discover thoughtfully designed 2 BHK flat at The Gardenia, where luxury, \n  wellness, comfort, and modern living come together in one of Bhubaneswar's \n  fastest-growing residential destinations.",
  primaryCTAText = 'Download Floor Plan',
  onPrimaryCTA,
  showScrollIndicator = true,
  enableParallax = true,
  topOffset = true,
}: HeroSection2BHKProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrollY(y);
      setIsScrolled(y > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = useMemo(() => {
    if (!enableParallax || prefersReducedMotion) return undefined;
    const t = Math.max(Math.min(scrollY * -0.2, 0), -60);
    return `translate3d(0, ${t}px, 0) scale(1.06)`;
  }, [enableParallax, prefersReducedMotion, scrollY]);

  const handlePrimary = useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onPrimaryCTA) return onPrimaryCTA();
    const link = document.createElement('a');
    link.href = '/floorplan.pdf';
    link.download = 'The-Gardenia-2BHK-Floorplan.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [onPrimaryCTA]);

  return (
    <section ref={ref} className={`relative isolate min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden text-white ${topOffset ? 'pt-20' : ''}`}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.96);} to { opacity: 1; transform: scale(1);} }
        @keyframes bounce { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-8px);} }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ transform: parallax }}>
        {videoUrl ? (
          <video src={videoUrl} autoPlay muted loop playsInline className="w-full h-full object-cover" aria-hidden />
        ) : (
          <img src={heroImage} alt="2 BHK interior — The Gardenia" className="w-full h-full object-cover" loading="eager" />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.62) 48%, rgba(15,23,42,0.35) 100%)' }} aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] sm:min-h-[85vh] lg:min-h-screen items-center justify-center px-6 py-20">
        <div className="max-w-[900px] text-center">
          <h1 className={`text-white font-extrabold leading-tight tracking-[0.02em] ${prefersReducedMotion ? '' : 'animate-[fadeUp_0.8s_cubic-bezier(.16,1,.3,1)_both]'}`} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {headline}
          </h1>

          <p className={`mx-auto mt-6 max-w-[700px] text-white/95 leading-[1.6] ${prefersReducedMotion ? '' : 'animate-[fadeUp_0.8s_cubic-bezier(.16,1,.3,1)_both]'}`} style={{ animationDelay: '0.4s' }}>
            {subheading}
          </p>

          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ${prefersReducedMotion ? '' : 'animate-[scaleIn_0.8s_cubic-bezier(.16,1,.3,1)_both]'}`}>
            <button onClick={handlePrimary} className="w-full sm:w-auto bg-[#059669] text-white font-bold text-[16px] px-10 py-4 rounded-xl shadow-[0_10px_24px_rgba(5,150,105,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#047857] hover:shadow-[0_14px_36px_rgba(5,150,105,0.45)]">
              <span className="inline-flex items-center gap-2"><Download className="w-4 h-4" /> {primaryCTAText}</span>
            </button>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })} className="w-full sm:w-auto text-white font-bold text-[16px] px-10 py-4 rounded-xl border-2 border-white/80 bg-transparent transition-all duration-300 hover:bg-white/10 hover:border-white">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className={`pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <div className={`flex items-center justify-center w-8 h-14 border-2 border-white/50 rounded-full ${prefersReducedMotion ? '' : 'animate-[bounce_3s_ease-in-out_infinite]'}`}>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </div>
        </div>
      )}
    </section>
  );
}

export { HeroSection2BHK };
