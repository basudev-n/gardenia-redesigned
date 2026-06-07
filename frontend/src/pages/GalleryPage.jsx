import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const PAGE_TITLE = "The Gardenia Gallery | Luxury Apartments Bhubaneswar";
const PAGE_DESCRIPTION =
  "Explore The Gardenia gallery near Ghangapatna Kantabada, showcasing luxury apartments, premium amenities, elegant interiors, clubhouse, and green spaces.";
const CANONICAL_URL = "https://www.gardenia.homes/gallery";

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

export default function GalleryPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
                Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Visual Gallery
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Explore the beauty and elegance of The Gardenia through curated visuals from across the project.
              </p>
            </div>
          </div>
        </section>

        <Gallery showHeader={false} />
      </main>
      <Footer />
    </div>
  );
}
