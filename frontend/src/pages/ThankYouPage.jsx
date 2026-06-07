import React, { useMemo } from 'react';
import { CheckCircle2, ArrowRight, Home, PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const copyMap = {
  brochure: {
    eyebrow: 'Brochure Request Received',
    title: 'Your brochure is on the way',
    description: 'We have received your request and the brochure download has started. Our team will also get in touch with the details you asked for.',
  },
  'site-visit': {
    eyebrow: 'Site Visit Request Received',
    title: 'Your site visit request is confirmed',
    description: 'Thanks for reaching out. Our team will review your request and contact you soon to arrange the next steps.',
  },
  contact: {
    eyebrow: 'Contact Request Received',
    title: 'Thanks for getting in touch',
    description: 'We have received your message and will respond as soon as possible with the right project details and guidance.',
  },
  default: {
    eyebrow: 'Submission Received',
    title: 'Thank you for contacting The Gardenia',
    description: 'We have received your details and our team will follow up shortly.',
  },
};

export default function ThankYouPage() {
  const location = useLocation();
  const mode = useMemo(() => new URLSearchParams(location.search).get('type') || 'default', [location.search]);
  const content = copyMap[mode] || copyMap.default;

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_55%,#f8fafc_100%)]">
      <Header />
      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              {content.eyebrow}
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-700"
              >
                <PhoneCall className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">What happens next</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
              <p>1. Our team reviews your request and preferred details.</p>
              <p>2. We reach out with the next steps and project guidance.</p>
              <p>3. You stay one step closer to your new home at The Gardenia.</p>
            </div>

            <Link
              to="/amenities"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
            >
              Explore more about The Gardenia
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
