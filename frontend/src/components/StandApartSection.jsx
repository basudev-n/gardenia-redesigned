import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StandApartSection() {
  return (
    <section id="why-gardenia-stands-apart" className="bg-emerald-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-100 mb-5">
            The Gardenia Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Why The Gardenia Stands Apart
          </h2>
          <p className="max-w-3xl text-base md:text-lg leading-8 text-emerald-50/85">
            The Gardenia combines wellness, luxury, architecture, and open living into one integrated lifestyle experience. Unlike conventional apartment projects, it offers residents a harmonious balance between urban accessibility and peaceful nature-inspired living.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full bg-white px-7 text-emerald-900 hover:bg-emerald-50">
            <Link to="/contact">
              Schedule Site Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
