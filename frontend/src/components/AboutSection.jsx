"use client";
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { mockData } from '@/mock/data';

export default function AboutSection() {
  return (
    <section id="about-the-gardenia" aria-labelledby="about-heading" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
              About The Gardenia
            </span>

            <h2 id="about-heading" className="max-w-2xl text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Discover Luxury Living Surrounded by Nature
            </h2>

            <div className="space-y-5 border-l-4 border-emerald-500 pl-5">
              <p className="text-base md:text-lg text-gray-600 leading-8 max-w-2xl">
                The Gardenia is a premium residential destination located in Ghangapatna, Bhubaneswar, designed around the philosophy of Lifestyle Wellness Quotient. Spread across expansive green surroundings with thoughtfully curated amenities, spacious residences, and elevated lifestyle experiences, The Gardenia redefines urban luxury living in Odisha.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-8 max-w-2xl">
                Whether you are looking for a 2, 3, 4 BHK flat in Bhubaneswar or an ultra-luxury 5 BHK penthouse, The Gardenia offers homes crafted for modern families seeking comfort, wellness, and exclusivity.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-emerald-600 px-7 text-white hover:bg-emerald-700">
                <a href="/about-us">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-emerald-200 px-7 text-emerald-700 hover:bg-emerald-50">
                <a href="#contact">Book a Visit</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
              <img
                src={mockData.assets.about}
                alt="The Gardenia residential community surrounded by open green living"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-sm rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <MapPin className="h-4 w-4" />
                    Ghangapatna, Bhubaneswar
                  </div>
                  <p className="text-sm leading-6 text-gray-700">
                    A calm residential address shaped around open spaces, lifestyle wellness, and everyday urban convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
