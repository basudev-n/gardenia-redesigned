import React from "react";
import { Building2 } from "lucide-react";

/**
 * ArchitectureSection
 * Props: { className?: string }
 */
export default function ArchitectureSection({ className = "" }) {
  const features = [
    "Open layouts",
    "Natural lighting",
    "Cross ventilation",
    "Spacious balconies",
    "Green integration",
    "Community-centric planning",
  ];

  return (
    <section className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/30 to-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-100/70 bg-white p-6 shadow-[0_14px_45px_rgba(16,185,129,0.08)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                <Building2 className="h-3.5 w-3.5 text-emerald-600" />
                Architecture
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Architecture Inspired by Modern Elegance
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                The architectural philosophy of The Gardenia blends contemporary aesthetics with functional design and
                wellness-focused planning. Every element is shaped to feel open, refined, and future-ready.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                <p className="text-sm font-medium leading-7 text-slate-700 md:text-base">
                  Inspired by global design principles and modern lifestyle needs, the project emphasizes balanced
                  proportions, natural light, and effortless livability.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="group rounded-3xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#059669] transition-colors duration-200 group-hover:bg-emerald-600 group-hover:text-white">
                        <span className="text-sm font-semibold">0{index + 1}</span>
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-semibold text-slate-900 md:text-base">{feature}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Every aspect of the design is created to offer a sophisticated and future-ready living environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}