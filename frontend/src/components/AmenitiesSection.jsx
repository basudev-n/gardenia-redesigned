import React from "react";
import {
  Waves,
  Dumbbell,
  Flower2,
  Gamepad2,
  Landmark,
  Baby,
  Sofa,
  Leaf,
  Bike,
  Trees,
} from "lucide-react";

/**
 * AmenitiesSection
 * Props: { className?: string }
 */
export default function AmenitiesSection({ className = "" }) {
  const amenities = [
    { name: "Swimming Pool", icon: Waves },
    { name: "Fully Equipped Gymnasium", icon: Dumbbell },
    { name: "Yoga & Meditation Hall", icon: Flower2 },
    { name: "Indoor Games Zone", icon: Gamepad2 },
    { name: "Banquet Hall", icon: Landmark },
    { name: "Kids' Play Area", icon: Baby },
    { name: "Terrace Lounge", icon: Sofa },
    { name: "Wellness Lounge", icon: Leaf },
    { name: "Outdoor Sports Facilities", icon: Bike },
    { name: "Landscaped Open Spaces", icon: Trees },
  ];

  return (
    <section className={`w-full py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f172a] mb-4">World-Class Amenities for Elevated Living</h2>

          <p className="text-[#1f2937] text-sm md:text-base leading-[1.8] mb-4">
            The Gardenia offers an extensive range of lifestyle amenities designed to enhance every aspect of daily
            life. The project features a premium clubhouse and multiple recreational, wellness, and social spaces that
            cater to residents of all age groups.
          </p>

          <h3 className="text-base font-medium text-[#0f172a] mb-4">Key amenities include:</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {amenities.map((amenity, i) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={i}
                  className="bg-emerald-50 rounded-xl p-4 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-[#064e3b] text-sm leading-snug">{amenity.name}</div>
                </div>
              );
            })}
          </div>

          <p className="text-[#1f2937] text-sm md:text-base leading-[1.8] mt-6">
            Every amenity is thoughtfully integrated to create a vibrant and engaging community experience.
          </p>
        </div>
      </div>
    </section>
  );
}
