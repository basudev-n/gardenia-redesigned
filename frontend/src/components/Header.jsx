"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ArrowRight, Newspaper } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setPropertiesOpen(false);
  }, [location.pathname]);

  const navItems = useMemo(() => [
    { label: 'Home', to: '/', type: 'link' },
    { label: 'About', to: '/about-us', type: 'link' },
    { label: 'Properties', type: 'dropdown' },
    { label: 'Amenities', to: '/amenities', type: 'link' },
    { label: 'Blog', to: '/blog', type: 'link' },
    { label: 'Gallery', to: '/gallery', type: 'link' },
    { label: 'Contact', to: '/contact-us', type: 'link' },
  ], []);

  const propertyItems = [
    { label: '2 BHK Flat', to: '/2-bhk-flats-in-bhubaneswar' },
    { label: '3 BHK Flat', to: '/3-bhk-flats-in-bhubaneswar' },
    { label: '4 BHK Flat', to: '/4-bhk-flats-in-bhubaneswar' },
    { label: '5 BHK Penthouse', to: '/penthouse-for-sale-in-bhubaneswar' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-[0_8px_28px_rgba(15,23,42,0.08)] h-16' : 'h-20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_gardenia-pool/artifacts/c0fi5vvp_Untitled%20%28400%20x%20100%20px%29.png"
              alt="The Gardenia"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-9' : 'h-12 md:h-14'}`}
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div className="relative ml-1" key="properties">
                    <button
                      type="button"
                      onClick={() => setPropertiesOpen((v) => !v)}
                      onBlur={() => {
                        window.setTimeout(() => setPropertiesOpen(false), 150);
                      }}
                      className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-emerald-700"
                      aria-expanded={propertiesOpen}
                    >
                      Properties
                      <ChevronDown className={`h-4 w-4 transition-transform ${propertiesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {propertiesOpen && (
                      <div className="absolute left-0 mt-2 w-52 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                        <div className="p-2">
                          {propertyItems.map((propertyItem) => (
                            <Link
                              key={propertyItem.to}
                              to={propertyItem.to}
                              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                            >
                              {propertyItem.label}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.to)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-700'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:18008900428"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-emerald-200 hover:text-emerald-700"
            >
              <Phone className="h-4 w-4" />
              1800 890 0428
            </a>
            <Button asChild className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 hover:shadow-md">
              <Link to="/contact-us">
              Book a Visit
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-emerald-200 hover:text-emerald-700"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          <div className="container mx-auto px-4 py-5">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium ${
                    isActive(item.to)
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-gray-100 bg-gray-50 text-gray-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Newspaper className="h-4 w-4" />
                Properties
              </div>
              <div className="mt-3 grid gap-2">
                {propertyItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-gray-700"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:18008900428"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700"
              >
                <Phone className="h-4 w-4" />
                1800 890 0428
              </a>
              <Button asChild className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                <Link to="/contact-us">Book a Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
