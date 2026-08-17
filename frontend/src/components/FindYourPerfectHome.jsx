"use client";
import React from 'react';
import { ArrowRight, Building2, Home, Building, Crown } from 'lucide-react';

const properties = [
  {
    icon: Building2,
    label: '2 BHK Flat',
    href: '/2-bhk-flats-in-bhubaneswar',
    type: '2 BHK',
    area: '1314 Sq Ft.',
    price: '82 Lacs*',
  },
  {
    icon: Building,
    label: '3 BHK Flat',
    href: '/3-bhk-flats-in-bhubaneswar',
    type: '3 BHK',
    area: '1813 Sq Ft.',
    price: '1.08 Cr*',
  },
  {
    icon: Home,
    label: '4 BHK Flat',
    href: '/4-bhk-flats-in-bhubaneswar',
    type: '4 BHK',
    area: '2126 Sq Ft.',
    price: '1.28 Cr*',
  },
  {
    icon: Crown,
    label: '5 BHK Penthouse',
    href: '/penthouse-for-sale-in-bhubaneswar',
    type: '5 BHK Penthouse',
    area: 'Private Terrace',
    premium: 'Exclusive Residence',
    featured: true,
  },
];

export default function FindYourPerfectHome() {
  return (
    <section id="find-your-perfect-home" aria-labelledby="find-perfect-home-heading" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
            Find Your Perfect Home
          </span>
          <h2 id="find-perfect-home-heading" className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Explore residences shaped for every lifestyle
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {properties.map((property) => {
            const Icon = property.icon;

            return (
              <a
                key={property.label}
                href={property.href}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)] ${
                  property.featured
                    ? 'border-emerald-200 bg-[linear-gradient(180deg,rgba(6,95,70,0.04),rgba(255,255,255,1))] hover:border-emerald-300'
                    : 'border-gray-100 hover:border-emerald-200'
                }`}
              >
                <div className="relative p-6">
                  {property.featured && (
                    <div className="absolute right-6 top-6 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                      Exclusive
                    </div>
                  )}

                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:text-white ${
                    property.featured
                      ? 'bg-emerald-600 text-white group-hover:bg-emerald-700'
                      : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mb-5">
                    <p className={`text-sm font-semibold uppercase tracking-wider ${property.featured ? 'text-emerald-700' : 'text-emerald-700'}`}>
                      {property.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">{property.label}</h3>
                  </div>

                  {property.featured ? (
                    <div className="border-t border-emerald-100 pt-5">
                      <p className="text-xs uppercase tracking-wider text-gray-500">Residence Type</p>
                      <p className="mt-1 text-sm font-semibold text-gray-900">{property.area}</p>
                      <p className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                        {property.premium}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Area</p>
                        <p className="mt-1 text-sm font-semibold text-gray-900">{property.area}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Price</p>
                        <p className="mt-1 text-sm font-semibold text-gray-900">{property.price}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-end text-sm font-medium text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
