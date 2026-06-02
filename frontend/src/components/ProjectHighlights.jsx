"use client";
import React from 'react';
import { Building2, HeartPulse, MapPinned, Sparkles, Trees, Home } from 'lucide-react';

const highlights = [
  {
    icon: Trees,
    value: '60%+',
    label: 'Open Green Spaces',
    description: 'A community planned around breathing room, greenery, and calmer everyday living.',
  },
  {
    icon: Building2,
    value: '27,000',
    label: 'Sq. Ft. Clubhouse',
    description: 'A large-format lifestyle clubhouse for social, leisure, and wellness experiences.',
  },
  {
    icon: Home,
    value: '2, 3 & 4',
    label: 'BHK Residences',
    description: 'Spacious home choices for modern families at different stages of life.',
  },
  {
    icon: Sparkles,
    value: '5 BHK',
    label: 'Penthouse in Bhubaneswar',
    description: 'Exclusive elevated living for those who want privacy, scale, and refinement.',
  },
  {
    icon: MapPinned,
    value: 'Prime',
    label: 'Connectivity',
    description: 'Well-connected to key education, healthcare, work, and transport destinations.',
  },
  {
    icon: HeartPulse,
    value: 'Wellness',
    label: 'Centric Community Design',
    description: 'Designed around health, open living, and a better daily rhythm.',
  },
];

export default function ProjectHighlights() {
  const [featured, ...supporting] = highlights;

  return (
    <section id="project-highlights" aria-labelledby="project-highlights-heading" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] bg-emerald-950 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-400" />
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-100 mb-5">
                Project Highlights
              </span>
              <h2 id="project-highlights-heading" className="max-w-xl text-3xl md:text-4xl font-bold tracking-tight mb-5">
                A lifestyle built around scale, wellness, and everyday convenience
              </h2>
              <p className="max-w-xl text-base leading-8 text-emerald-50/80">
                Every part of The Gardenia is planned to bring together generous open spaces, refined residences, lifestyle amenities, and strong connectivity.
              </p>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400 text-emerald-950">
                  <featured.icon className="h-6 w-6" />
                </div>
                <p className="text-5xl font-bold tracking-tight">{featured.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-emerald-200">{featured.label}</p>
                <p className="mt-4 text-sm leading-6 text-emerald-50/75">{featured.description}</p>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {supporting.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group bg-emerald-950 p-6 transition-colors duration-300 hover:bg-emerald-900 md:p-8"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 transition-colors duration-300 group-hover:bg-emerald-400 group-hover:text-emerald-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-3xl font-bold tracking-tight">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-emerald-200">{item.label}</p>
                    <p className="mt-4 text-sm leading-6 text-emerald-50/70">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
