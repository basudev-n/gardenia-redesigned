"use client";

import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';
import { FaPinterestP, FaTumblr } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Explore',
    items: [
      { label: 'Home', to: '/' },
      { label: 'About The Gardenia', to: '/about-us' },
      { label: 'Amenities', to: '/amenities' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Residences',
    items: [
      { label: '2 BHK Flat', to: '/2-bhk-flats-in-bhubaneswar' },
      { label: '3 BHK Flat', to: '/3-bhk-flats-in-bhubaneswar' },
      { label: '4 BHK Flat', to: '/4-bhk-flats-in-bhubaneswar' },
      { label: '5 BHK Penthouse', to: '/penthouse-for-sale-in-bhubaneswar' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/logo-footer.png"
              alt="The Gardenia"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Discover a lifestyle designed for those who appreciate space, tranquillity, and modern elegance.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.facebook.com/people/The-Gardenia/61589360762392/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/the_gardenia_/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@thegardeniahomes" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://in.pinterest.com/thegardeniahomes/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                <FaPinterestP className="h-4 w-4" />
              </a>
              <a href="https://www.tumblr.com/blog/thegardeniahomes" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-800 bg-gray-900 text-gray-300 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white">
                <FaTumblr className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{group.title}</h4>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-emerald-400"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-gray-800 pt-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact Us</h4>
            <div className="mt-5 rounded-[1.5rem] border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:p-6">
              <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                <div className="rounded-2xl border border-gray-800/80 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Toll-Free / Email</p>
                      <div className="mt-3 space-y-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Phone</p>
                          <p className="mt-1 text-lg font-semibold text-white">1800 890 0428</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Email</p>
                          <p className="mt-1 text-lg font-semibold text-white break-words">info@gardenia.homes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-800/80 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Sales Office</p>
                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        Ghangapatna, P.O. - Kantabada, P.S. - Chandaka, Bhubaneswar, Khurda - 752054
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white shadow-[0_16px_40px_rgba(16,185,129,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">Stay Updated</p>
            <h4 className="mt-3 text-2xl font-bold tracking-tight">Get the latest updates and availability</h4>
            <p className="mt-3 text-sm leading-7 text-emerald-50/85">
              Subscribe to receive offers, project updates, and blog posts from The Gardenia.
            </p>

            <div className="mt-6 flex rounded-full bg-white p-1 shadow-lg">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            © {currentYear} The Gardenia. Made with care by Rigeup.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <button onClick={() => scrollToSection('hero')} className="text-gray-500 transition-colors hover:text-emerald-400">
              Back to top
            </button>
            <a href="/privacy-policy" className="text-gray-500 transition-colors hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-gray-500 transition-colors hover:text-emerald-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
