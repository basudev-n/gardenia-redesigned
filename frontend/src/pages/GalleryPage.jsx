import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | The Gardenia";
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
