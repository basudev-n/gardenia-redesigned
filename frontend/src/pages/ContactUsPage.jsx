import React, { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Contact The Gardenia | Luxury Apartments Bhubaneswar";
const PAGE_DESCRIPTION =
  "Contact The Gardenia for luxury apartments in Bhubaneswar near Ghangapatna Kantabada. Schedule a site visit, get pricing details, brochures, and project information.";
const CANONICAL_URL = "https://www.gardenia.homes/contact-us";

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

export default function ContactUsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
