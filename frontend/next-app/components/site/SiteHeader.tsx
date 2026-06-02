'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms-and-conditions' },
  ];

  const propertyItems = [
    { label: '2 BHK', href: '/2-bhk-flats-in-bhubaneswar' },
    { label: '3 BHK', href: '/3-bhk-flats-in-bhubaneswar' },
    { label: '4 BHK', href: '/4-bhk-flats-in-bhubaneswar' },
    { label: 'Penthouse', href: '/penthouse-for-sale-in-bhubaneswar' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-100 shadow-md h-16' : 'border-b border-gray-200 h-20'
      }`}
    >
      <div className="mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" aria-label="The Gardenia home" className="block">
              <img
                src="https://customer-assets.emergentagent.com/job_gardenia-pool/artifacts/c0fi5vvp_Untitled%20%28400%20x%20100%20px%29.png"
                alt="The Gardenia"
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14 md:h-16'}`}
              />
            </Link>
          </div>

          <nav className="hidden items-center lg:flex gap-1">
            {navItems.map((item) => (
              <React.Fragment key={item.href}>
                <Link
                  href={item.href}
                  className="group relative mx-0.5 px-3 py-2 text-sm font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-emerald-600"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>

                {/* Insert Properties dropdown immediately after About */}
                {item.label === 'About' && (
                  <div className="relative group">
                    <button className="mx-0.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600">
                      Properties
                    </button>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transform transition-all duration-150 origin-top-right absolute right-0 mt-2 w-44 rounded-md bg-white border border-gray-100 shadow-md z-50">
                      <div className="py-2">
                        {propertyItems.map((p) => (
                          <Link key={p.href} href={p.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50">
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:18008900428" className="group flex items-center gap-2 text-gray-600 transition-colors duration-200 hover:text-emerald-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 transition-colors duration-200 group-hover:bg-emerald-100">
                <Phone className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <span className="text-sm font-semibold tracking-wide">1800 890 0428</span>
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 hover:shadow-md"
            >
              Book a Visit
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-emerald-600 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-gray-100 bg-white shadow-xl lg:hidden">
          <nav className="mx-auto flex flex-col gap-1 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-left font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2">
              <div className="text-sm font-medium text-gray-700 px-4 pb-2">Properties</div>
              {propertyItems.map((p) => (
                <Link key={p.href} href={p.href} className="block px-4 py-3 text-left font-medium text-gray-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600">
                  {p.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <a href="tel:18008900428" className="flex items-center gap-3 px-4 text-gray-700 transition-colors duration-200 hover:text-emerald-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold">1800 890 0428</span>
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full rounded-full bg-emerald-600 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
              >
                Book a Visit
              </button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
