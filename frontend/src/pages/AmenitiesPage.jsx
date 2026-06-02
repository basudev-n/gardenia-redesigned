import React, { useEffect } from "react";
import Header from "@/components/Header";
import Amenities from "@/components/Amenities";
import StandApartSection from "@/components/StandApartSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function AmenitiesPage() {
  useEffect(() => {
    document.title = "World-Class Amenities | The Gardenia";
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-20">
        <Amenities />
        <StandApartSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
