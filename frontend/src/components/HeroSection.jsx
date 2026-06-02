import React from "react";
import { Button } from "@/components/ui/button";

/**
 * HeroSection
 * Props:
 * - backgroundImage?: string  (url to image or video file)
 * - onBrochureClick?: () => void
 */
export default function HeroSection({ backgroundImage, onBrochureClick }) {
  const isVideo = typeof backgroundImage === "string" && /\.(mp4|webm|ogv)$/i.test(backgroundImage);

  const handleClick = (e) => {
    if (onBrochureClick) {
      e.preventDefault();
      onBrochureClick();
      return;
    }
    // default: download brochure if available in public
    // leave anchor to handle download when using asChild
  };

  return (
    <section className="relative w-full overflow-hidden isolate">
      {/* Background layer: video or image */}
        <div className="absolute inset-0 -z-10">
        {isVideo ? (
          <video
            src={backgroundImage}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        ) : backgroundImage ? (
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-gray-900/90 to-emerald-600" />
        )}

        {/* Gradient overlay to ensure readable copy */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(15,23,42,0.96) 0%, rgba(15,23,42,0.78) 45%, rgba(5,150,105,0.72) 100%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-950/20 px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-[2px] md:px-10 md:py-14">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">About The Gardenia</h1>
          <p className="mt-4 mx-auto max-w-3xl text-base leading-7 text-white md:text-xl md:leading-8">
            A premium residential destination where luxury, wellness, nature, and modern living come together to
            create an elevated lifestyle experience in Bhubaneswar.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <a
                href="/brochure.pdf"
                download="The-Gardenia-Brochure.pdf"
                onClick={handleClick}
                aria-label="Download Brochure"
              >
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
