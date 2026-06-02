import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Armchair, Baby, Coffee, Dumbbell, Film, Heart, Shield, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockData } from "@/mock/data";

const iconMap = {
  Armchair,
  Baby,
  Coffee,
  Dumbbell,
  Film,
  Heart,
  Shield,
  Waves,
};

export default function LifestyleAmenitiesIntro() {
  const featuredAmenities = mockData.amenities.filter((amenity) => amenity.featured).slice(0, 2);
  const previewAmenities = mockData.amenities
    .filter((amenity) => ["Air-Conditioned Gymnasium", "Mini Theatre", "Yoga & Meditation Hall", "Business Lounge / Cafeteria", "24/7 Security", "Kids Play Area"].includes(amenity.name))
    .slice(0, 6);

  return (
    <section id="lifestyle-amenities" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
              Lifestyle Amenities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-5">
              World-Class Lifestyle Amenities
            </h2>
            <p className="max-w-3xl text-base md:text-lg leading-8 text-gray-600">
              The Gardenia offers 28+ premium facilities designed for comfort, wellness, and entertainment. Every amenity is thoughtfully designed to enhance your physical wellness, social interactions, leisure, and everyday comfort.
            </p>
            <Button asChild size="lg" className="mt-7 rounded-full bg-emerald-600 px-7 text-white hover:bg-emerald-700">
              <Link to="/amenities">
                Explore Amenities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {featuredAmenities.map((amenity) => (
                <Link
                  key={amenity.id}
                  to="/amenities"
                  className="group relative min-h-56 overflow-hidden rounded-2xl shadow-sm"
                >
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-lg font-bold text-white">{amenity.name}</p>
                    <p className="mt-1 text-sm leading-6 text-white/85">{amenity.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {previewAmenities.map((amenity) => {
                const Icon = iconMap[amenity.icon] || Waves;

                return (
                  <Link
                    key={amenity.id}
                    to="/amenities"
                    className="group rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_28px_rgba(16,185,129,0.12)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-gray-900">{amenity.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
