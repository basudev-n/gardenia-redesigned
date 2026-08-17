import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { FaPinterestP, FaTumblr } from 'react-icons/fa';

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-[0.12em] text-white">THE GARDENIA</h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-emerald-500" />
            </div>
            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-300">
              Experience premium living at The Gardenia, where elegant architecture meets wellness-inspired planning in the heart of Bhubaneswar.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/people/The-Gardenia/61589360762392/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/the_gardenia_/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@thegardeniahomes" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://in.pinterest.com/thegardeniahomes/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1">
                <FaPinterestP className="h-4 w-4" />
              </a>
              <a href="https://www.tumblr.com/blog/thegardeniahomes" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1">
                <FaTumblr className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="transition-colors duration-200 hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors duration-200 hover:text-emerald-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition-colors duration-200 hover:text-emerald-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
                <span>Ghangapatna, Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <a href="tel:+918009103333" className="transition-colors duration-200 hover:text-emerald-400">
                  +91 8009103333
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <a href="mailto:marketing@gardenia.in" className="transition-colors duration-200 hover:text-emerald-400">
                  marketing@gardenia.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm leading-7 text-slate-300">
              Stay updated with the latest news, floor plans, and offers from The Gardenia.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-emerald-400 focus:bg-white/10"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-400 md:flex md:items-center md:justify-between md:text-left">
          <p>© 2026 The Gardenia. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6 md:mt-0 md:justify-end">
            <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors duration-200 hover:text-emerald-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
