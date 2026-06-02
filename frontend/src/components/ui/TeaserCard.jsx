"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
import { Button } from './button';
import { cn } from '@/lib/utils';

// Simple teaser card used on the homepage to link to full pages
export default function TeaserCard({ title, subtitle, image, href, ctaLabel }) {
  return (
    <section className="w-full">
      <article className="rounded-2xl overflow-hidden relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-56 md:h-72 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute left-6 bottom-6 right-6">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h3>
            {subtitle && <p className="mt-2 text-sm md:text-base text-white/90">{subtitle}</p>}
            <div className="mt-4">
              <Button asChild size="lg">
                <a href={href} className="px-6 py-2">{ctaLabel || 'Explore'}</a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
