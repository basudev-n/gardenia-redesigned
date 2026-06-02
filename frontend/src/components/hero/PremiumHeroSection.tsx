import React, { useEffect, useRef, useState, useCallback } from 'react';

export type NavLink = { label: string; href: string };

export interface PremiumHeroProps {
  heroImage: string;
  videoUrl?: string;
  headline?: string;
  subheading?: string;
  primaryCTAText?: string;
  secondaryCTAText?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showScrollIndicator?: boolean;
  enableParallax?: boolean;
  overlayIntensity?: 'light' | 'medium' | 'dark';
  navigationBarProps?: {
    logo?: string;
    links?: NavLink[];
    ctaText?: string;
  };
}

const OVERLAY_MAP: Record<string, string> = {
  light: 'rgba(15,23,42,0.25)',
  medium: 'rgba(15,23,42,0.45)',
  dark: 'rgba(15,23,42,0.65)',
};

export default function PremiumHeroSection({
  heroImage,
  videoUrl,
  headline = 'About The Gardenia',
  subheading = 'A premium residential destination where luxury, wellness, nature, and modern living come together to create an elevated lifestyle experience in Bhubaneswar.',
  primaryCTAText = 'Download Brochure',
  secondaryCTAText = 'Schedule a Site Visit',
  onPrimaryCTA,
  onSecondaryCTA,
  showScrollIndicator = true,
  enableParallax = true,
  overlayIntensity = 'medium',
  navigationBarProps = {},
}: PremiumHeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = useCallback(() => {
    const y = window.scrollY || window.pageYOffset;
    setScrollY(y);
    setIsScrolled(y > 20);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!enableParallax) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll, enableParallax]);

  const handlePrimary = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onPrimaryCTA) return onPrimaryCTA();
    // default: trigger brochure download from public folder
    const link = document.createElement('a');
    link.href = '/brochure.pdf';
    link.download = 'The-Gardenia-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSecondary = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onSecondaryCTA) return onSecondaryCTA();
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  const overlay = OVERLAY_MAP[overlayIntensity || 'medium'];

  const parallaxTranslate = enableParallax && !prefersReducedMotion ? Math.min(scrollY * -0.07, 40) : 0;

  const navLinks = navigationBarProps.links || [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Amenities', href: '/#amenities' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <section ref={(r) => (heroRef.current = r)} className="relative min-h-screen w-full overflow-hidden select-none">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollBounce { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(10px);} }
        .reduced-motion { animation: none !important; }
      `}</style>

      {/* Background: video or image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transform: `translateY(${parallaxTranslate}px)` }}
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={heroImage} alt="The Gardenia — hero" className="w-full h-full object-cover" />
        )}

        {/* gradient overlay */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${overlay} 0%, rgba(15,23,42,0.55) 45%, rgba(15,23,42,0.65) 100%)` }} />
      </div>

      {/* Navigation (sticky) */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${isScrolled ? 'backdrop-blur-md bg-slate-900/50' : 'bg-transparent'}`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {navigationBarProps.logo ? (
              <img src={navigationBarProps.logo} alt="The Gardenia" className="h-10 object-contain" />
            ) : (
              <div className="text-white font-semibold tracking-wide">The Gardenia</div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={handleSecondary}
              className="mr-4 rounded px-4 py-2 text-sm font-semibold text-white border border-white/30 hover:bg-white/5 transition-all"
            >
              {navigationBarProps.ctaText || 'Schedule Visit'}
            </button>
            <button
              onClick={handlePrimary}
              className="bg-[#059669] hover:bg-[#047857] text-white font-bold px-6 py-2 text-sm rounded shadow-[0_8px_30px_rgba(5,150,105,0.25)] transition-transform duration-300"
              aria-label="Download brochure PDF"
            >
              {navigationBarProps.ctaText || 'Schedule Visit'}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <div className="max-w-[900px] text-center px-6 py-20 sm:py-28 md:py-32">
          {/* Glass accent behind headline */}
          <div className="absolute inset-0 -z-0 flex items-center justify-center pointer-events-none">
            <div className="hidden lg:block w-[650px] h-[320px] rounded-3xl" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.06)' }} />
          </div>

          <h1 className={`text-white font-[700] leading-tight mx-auto ${prefersReducedMotion ? '' : 'animate-[fadeInUp_0.8s_cubic-bezier(.2,.9,.3,1)_both]'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem' }}>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-[0.02em]">{headline}</span>
          </h1>

          <p className={`mt-6 mx-auto text-white/95 max-w-[700px] leading-7 ${prefersReducedMotion ? '' : 'animate-[fadeInUp_0.8s_cubic-bezier(.2,.9,.3,1)_both]'} `} style={{ fontSize: '1.00rem' }}>
            {subheading}
          </p>

          {/* CTA group */}
          <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 ${prefersReducedMotion ? '' : 'animate-[fadeInUp_0.8s_cubic-bezier(.2,.9,.3,1)_both]'}`}>
            <button onClick={handlePrimary} className="w-full sm:w-auto bg-[#059669] text-white font-bold text-base px-10 py-4 rounded-lg shadow-[0_4px_20px_rgba(5,150,105,0.3)] transform transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0" style={{ boxShadow: '0 4px 20px rgba(5,150,105,0.3)' }} aria-label="Download Brochure">
              {primaryCTAText}
            </button>

            <button onClick={handleSecondary} className="w-full sm:w-auto text-white font-bold text-base px-10 py-4 rounded-lg border-2 border-white/80 bg-transparent transition-all duration-300 hover:bg-white/10 hover:border-white transform" aria-label="Schedule site visit">
              {secondaryCTAText}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <div className={`pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <div className={`flex items-center justify-center w-8 h-14 border-2 border-white/50 rounded-full ${prefersReducedMotion ? '' : 'animate-[scrollBounce_3s_ease-in-out_infinite]'}`}>
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
