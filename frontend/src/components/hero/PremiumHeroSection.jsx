import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { openSiteVisitModal } from "@/lib/openSiteVisit";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Properties", href: "#properties" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const OVERLAY_PRESETS = {
  light: "linear-gradient(180deg, rgba(15,23,42,0.28) 0%, rgba(15,23,42,0.42) 55%, rgba(15,23,42,0.56) 100%)",
  medium: "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.65) 100%)",
  dark: "linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.68) 55%, rgba(15,23,42,0.78) 100%)",
};

function animationStyle(animationName, delay, duration = 800, easing = "cubic-bezier(0.2, 0.8, 0.2, 1)", fillMode = "both") {
  return {
    animation: `${animationName} ${duration}ms ${easing} ${delay}ms ${fillMode}`,
  };
}

export default function PremiumHeroSection({
  heroImage,
  videoUrl,
  headline = "About The Gardenia",
  subheading =
    "A premium residential destination where luxury, wellness, nature, and modern living come together to create an elevated lifestyle experience in Bhubaneswar.",
  primaryCTAText = "Download Brochure",
  secondaryCTAText = "Schedule a Site Visit",
  onPrimaryCTA,
  onSecondaryCTA,
  showScrollIndicator = true,
  enableParallax = true,
  overlayIntensity = "medium",
  showNavigationBar = true,
  navigationBarProps = {
    logo: "The Gardenia",
    links: DEFAULT_NAV_LINKS,
    ctaText: "Schedule Visit",
  },
}) {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 24);
    };

    const updateViewport = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const updateMotionPreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateScroll();
    updateViewport();
    updateMotionPreference();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateViewport);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateViewport);

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  const backgroundTransform = useMemo(() => {
    if (!enableParallax || reduceMotion || isMobile) {
      return "translate3d(0, 0, 0) scale(1.08)";
    }

    const offset = Math.max(Math.min(scrollY * -0.3, 0), -60);
    return `translate3d(0, ${offset}px, 0) scale(1.08)`;
  }, [enableParallax, isMobile, reduceMotion, scrollY]);

  const navLinks = navigationBarProps?.links?.length ? navigationBarProps.links : DEFAULT_NAV_LINKS;
  const navLogo = navigationBarProps?.logo || "The Gardenia";
  const navCtaText = navigationBarProps?.ctaText || "Schedule Visit";
  const overlay = OVERLAY_PRESETS[overlayIntensity] || OVERLAY_PRESETS.medium;
  const isScrollIndicatorVisible = showScrollIndicator && !isScrolled && !isMobile;

  const handlePrimaryCTA = useCallback(() => {
    if (onPrimaryCTA) {
      onPrimaryCTA();
      return;
    }

    if (typeof document === "undefined") return;

    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "The-Gardenia-Brochure.pdf";
    link.click();
  }, [onPrimaryCTA]);

  const handleSecondaryCTA = useCallback(() => {
    if (onSecondaryCTA) {
      onSecondaryCTA();
      return;
    }
    openSiteVisitModal();
  }, [onSecondaryCTA]);

  const handleNavClick = useCallback((event, href) => {
    if (!href?.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setMenuOpen(false);
  }, [reduceMotion]);

  return (
    <section ref={heroRef} className="relative isolate min-h-[60vh] overflow-hidden bg-slate-950 text-white sm:min-h-[85vh] lg:min-h-screen">
      {showNavigationBar && (
        <div className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-white/10 bg-slate-950/70 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}>
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                <span className="text-sm font-semibold tracking-[0.2em] text-white">TG</span>
              </div>
              <span className="text-sm font-semibold tracking-[0.24em] text-white/90 uppercase sm:text-base">
                {navLogo}
              </span>
            </div>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={handleSecondaryCTA}
                aria-label="Schedule site visit"
                className="rounded-lg border border-white/80 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {navCtaText}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors duration-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-xl lg:hidden">
              <div className="mx-auto flex max-w-[1280px] flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={handleSecondaryCTA}
                  aria-label="Schedule site visit"
                  className="mt-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(5,150,105,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  {navCtaText}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        ) : heroImage ? (
          <img
            src={heroImage}
            alt="Luxury real estate backdrop for The Gardenia About Us page"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            style={{ transform: backgroundTransform }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        )}
        <div className="absolute inset-0" style={{ background: overlay }} aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" aria-hidden="true" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/50 to-slate-950/70" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[60vh] items-center justify-center px-4 pb-16 pt-28 sm:min-h-[85vh] sm:px-6 lg:min-h-screen lg:px-8 lg:pt-32">
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          <div className="pointer-events-none absolute -top-6 left-1/2 h-44 w-[min(38rem,92vw)] -translate-x-1/2 rounded-full bg-white/8 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/20 px-5 py-10 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-8 md:px-12 md:py-14">
            <div
              className="mx-auto mb-5 h-16 w-16 rounded-[1.5rem] border border-white/10 bg-white/8 backdrop-blur-md"
              aria-hidden="true"
            />

            <h1
              className="text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.2] tracking-[0.02em] text-white"
              style={reduceMotion ? undefined : animationStyle("premiumHeroFadeUp", 200)}
            >
              {headline}
            </h1>

            <p
              className="mx-auto mt-6 max-w-[700px] text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-[1.6] tracking-[0.01em] text-white/95"
              style={reduceMotion ? undefined : animationStyle("premiumHeroFadeUp", 400)}
            >
              {subheading}
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={handlePrimaryCTA}
                aria-label="Download brochure PDF"
                className="rounded-[4px] bg-emerald-600 px-8 py-4 text-[16px] font-bold text-white shadow-[0_4px_20px_rgba(5,150,105,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-[0_8px_30px_rgba(5,150,105,0.5)] focus:outline-none focus:ring-2 focus:ring-white/50 active:translate-y-0 sm:px-10"
                style={reduceMotion ? undefined : animationStyle("premiumHeroScaleIn", 600)}
              >
                <span className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {primaryCTAText}
                </span>
              </button>

              <button
                type="button"
                onClick={handleSecondaryCTA}
                aria-label="Schedule site visit"
                className="rounded-[4px] border-2 border-white/80 px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 active:translate-y-0 sm:px-10"
                style={reduceMotion ? undefined : animationStyle("premiumHeroScaleIn", 700)}
              >
                {secondaryCTAText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isScrollIndicatorVisible && (
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-[premiumHeroBounce_3s_ease-in-out_infinite]">
          <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/30 p-2">
            <ChevronDown className="h-4 w-4 text-white/60" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes premiumHeroFadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes premiumHeroScaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes premiumHeroBounce {
          0%, 100% {
            transform: translate3d(-50%, 0, 0);
          }
          50% {
            transform: translate3d(-50%, -8px, 0);
          }
        }
      `}</style>
    </section>
  );
}

export { PremiumHeroSection };
