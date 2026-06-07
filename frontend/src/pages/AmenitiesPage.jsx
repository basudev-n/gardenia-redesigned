import React, { useEffect } from "react";
import Header from "@/components/Header";
import Amenities from "@/components/Amenities";
import StandApartSection from "@/components/StandApartSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const PAGE_TITLE = "The Gardenia Luxury Amenities in Bhubaneswar Odisha";
const PAGE_DESCRIPTION =
  "Explore world-class amenities at The Gardenia near Ghangapatna Kantabada Bhubaneswar, featuring a clubhouse, pool, wellness zones, fitness spaces & lush greens.";
const CANONICAL_URL = "https://www.gardenia.homes/amenities";

function updateMetaTag(name, content) {
  if (typeof document === "undefined") return;
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateCanonical(url) {
  if (typeof document === "undefined") return;
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function AmenitiesPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
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
