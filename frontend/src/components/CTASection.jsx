import React from "react";
import { Button } from "@/components/ui/button";
import { openSiteVisitModal } from "@/lib/openSiteVisit";

/**
 * CTASection
 * Props: { onCtaClick?: () => void, className?: string }
 */
export default function CTASection({ onCtaClick, className = "" }) {
  return (
    <section
      className={`w-full ${className}`}
      style={{ background: "linear-gradient(90deg, rgba(4,120,87,0.95) 0%, rgba(5,150,105,0.95) 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Experience Luxury Beyond Expectations</h2>
        <p className="mt-4 text-white/90 max-w-3xl mx-auto text-sm md:text-base leading-7">
          Step into a thoughtfully crafted lifestyle destination designed for comfort, wellness, and modern living.
          Explore spacious apartments, premium amenities, and serene surroundings at The Gardenia.
        </p>

        <div className="mt-8">
          <Button
            onClick={onCtaClick || openSiteVisitModal}
            size="lg"
            className="transform transition-transform hover:scale-105"
          >
            Schedule a Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
