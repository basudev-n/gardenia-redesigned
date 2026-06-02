import React from "react";
import { Crown, Leaf, Home, MapPin, Users, ShieldCheck } from "lucide-react";

/**
 * WhyChooseUsSection
 * Props: { className?: string }
 */
export default function WhyChooseUsSection({ className = "" }) {
  const features = [
    {
      title: "Premium Lifestyle Community",
      description: "Experience luxury living with thoughtfully designed spaces and modern amenities.",
      icon: Crown,
    },
    {
      title: "Wellness-Focused Living",
      description: "Enjoy open green surroundings and wellness-inspired infrastructure.",
      icon: Leaf,
    },
    {
      title: "Spacious Residences",
      description: "Choose from premium 2, 3, 4 BHK apartments and exclusive penthouses.",
      icon: Home,
    },
    {
      title: "Prime Connectivity",
      description: "Stay connected to schools, hospitals, highways, and key city destinations.",
      icon: MapPin,
    },
    {
      title: "Elevated Community Experience",
      description: "Enjoy social spaces, recreational amenities, and lifestyle-enhancing environments.",
      icon: Users,
    },
    {
      title: "Future-Ready Value",
      description: "Invest in a thoughtfully planned address designed for lasting comfort and long-term appeal.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className={`w-full bg-gradient-to-b from-white via-[#f0fdf4]/40 to-white py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            Why Choose Us
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Why Choose The Gardenia
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f0fdf4] shadow-sm transition-colors duration-200 group-hover:bg-emerald-50">
                    <Icon className="h-6 w-6 text-[#059669]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-7 text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}