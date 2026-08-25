import React, { Suspense } from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import FindYourPerfectHome from "@/components/FindYourPerfectHome";
import LifestyleAmenitiesIntro from "@/components/LifestyleAmenitiesIntro";
import StandApartSection from "@/components/StandApartSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Gallery from "@/components/Gallery";
import TeaserCard from "@/components/ui/TeaserCard";
import { mockData } from "@/mock/data";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SiteVisitModal from "@/components/SiteVisitModal";
import AdminDashboard from "@/components/AdminDashboard";
import { ArrowRight, Camera } from "lucide-react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const AboutUsPage = React.lazy(() => import("@/pages/AboutUsPage"));
const AmenitiesPage = React.lazy(() => import("@/pages/AmenitiesPage"));
const BlogPage = React.lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = React.lazy(() => import("@/pages/BlogPostPage"));
const GalleryPage = React.lazy(() => import("@/pages/GalleryPage"));
const ContactPage = React.lazy(() => import("@/pages/ContactPage"));
const ContactUsPage = React.lazy(() => import("@/pages/ContactUsPage"));
const ThreeBhkFlatsPage = React.lazy(() => import("@/pages/ThreeBhkFlatsPage"));
const FourBhkFlatsPage = React.lazy(() => import("@/pages/FourBhkFlatsPage"));
const PenthouseFlatsPage = React.lazy(() => import("@/pages/PenthouseFlatsPage"));
const TwoBhkFlatsPage = React.lazy(() => import("@/pages/TwoBhkFlatsPage"));
const PropertyPage = React.lazy(() => import("@/pages/PropertyPage"));
const TermsAndConditionsPage = React.lazy(() => import("@/pages/TermsAndConditionsPage"));
const PrivacyPolicyPage = React.lazy(() => import("@/pages/PrivacyPolicyPage"));
const ThankYouPage = React.lazy(() => import("@/pages/ThankYouPage"));

function HomeLayout() {
  React.useEffect(() => {
    document.title = "Book Luxury Apartments in Bhubaneswar Near Ghangapatna";
    const description = "Discover luxury 2, 3 & 4 BHK Apartments & exclusive 5 BHK Penthouses in Bhubaneswar Near Ghangapatna Kantabada at The Gardenia with premium amenities. Book today.";
    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", "https://www.gardenia.homes/");

    const pathToId = {
      '/amenities': 'amenities',
      '/gallery': 'gallery',
      '/floor-plans': 'floor-plans',
      '/location': 'location',
      '/contact': 'contact'
    };
    const id = pathToId[window.location.pathname];
    if (id) {
      // allow React to mount elements
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <SiteVisitModal />

      <AboutSection />

      <ProjectHighlights />

      <FindYourPerfectHome />

      <LifestyleAmenitiesIntro />

      <StandApartSection />

      {/* Visual gallery preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold tracking-wide text-emerald-700 mb-5">
                Visual Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                A quick preview of life at The Gardenia
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Explore a small glimpse of the architecture, interiors, and atmosphere before opening the full gallery.
              </p>

              <div className="mt-6">
                <a
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  <Camera className="h-4 w-4" />
                  Open Gallery
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <a
              href="/gallery"
              className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]"
            >
              <div className="grid grid-cols-3 gap-2 p-3">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/5]">
                    <img
                      src={mockData.gallery[index % mockData.gallery.length].image}
                      alt={mockData.gallery[index % mockData.gallery.length].title || `The Gardenia gallery preview ${index + 1}`}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index === 1 ? 'scale-105' : ''
                      }`}
                      loading="lazy"
                    />
                    {index === 2 && (
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-4">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Gallery</div>
                          <div className="mt-1 text-lg font-bold text-white">View all images</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>

      <Location />
      <Contact />
      <BlogPreviewSection />
      <Footer />
      <FloatingCTA />
      <Toaster />
    </div>
  );
}

function MetaPixelPageView() {
  const location = useLocation();
  const isFirstLoad = React.useRef(true);

  React.useEffect(() => {
    if (isFirstLoad.current) {
      // Base Meta Pixel snippet in index.html already fires the initial PageView.
      isFirstLoad.current = false;
      return;
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
}

function App() {
  // Keep admin route behaviour
  const isAdmin = window.location.pathname === "/admin";
  if (isAdmin) return <AdminDashboard />;

  return (
    <BrowserRouter>
      <MetaPixelPageView />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/floor-plans" element={<HomeLayout />} />
          <Route path="/location" element={<HomeLayout />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/2-bhk-flats-in-bhubaneswar" element={<TwoBhkFlatsPage />} />
          <Route path="/3-bhk-flats-in-bhubaneswar" element={<ThreeBhkFlatsPage />} />
          <Route path="/4-bhk-flats-in-bhubaneswar" element={<FourBhkFlatsPage />} />
          <Route path="/penthouse-for-sale-in-bhubaneswar" element={<PenthouseFlatsPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
