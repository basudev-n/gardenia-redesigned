import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock3, Mail, MapPin, Phone, ShieldCheck, Sparkles, CalendarClock, Users, Navigation2 } from 'lucide-react';
import SiteHeader from '../../components/site/SiteHeader';
import SiteFooter from '../../components/site/SiteFooter';
import ContactForm from '../../components/contact/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

const PAGE_URL = 'https://www.gardenia.homes/contact-us';

export const metadata: Metadata = {
  title: 'Contact Us | The Gardenia',
  description: 'Contact The Gardenia for site visits, enquiries, and residence information in Bhubaneswar.',
  alternates: {
    canonical: PAGE_URL,
  },
};

const contactPoints = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8009103333',
    href: 'tel:+918009103333',
    note: 'Call for immediate assistance and visit scheduling.',
  },
  {
    icon: Mail,
    label: 'Support Email',
    value: 'marketing@gardenia.in',
    href: 'mailto:marketing@gardenia.in',
    note: 'For brochures, offers, and appointment confirmations.',
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'Ghangapatna, Bhubaneswar, Odisha, India',
    href: 'https://www.google.com/maps/search/Ghangapatna,+Bhubaneswar,+Odisha',
    note: 'Sales office guidance and site visit meeting point.',
  },
  {
    icon: Clock3,
    label: 'Office Hours',
    value: 'Mon-Sun: 10:00 AM - 7:00 PM',
    href: '#office-details',
    note: 'Response windows and visit coordination hours.',
  },
];

const trustCards = [
  {
    icon: CalendarClock,
    title: 'Same-day acknowledgement',
    description: 'Submitted enquiries receive a prompt response so you are never left waiting.',
    tone: 'from-emerald-50 to-white',
  },
  {
    icon: Users,
    title: 'Dedicated support',
    description: 'Homebuyers, brokers, and families get clear guidance tailored to their needs.',
    tone: 'from-white to-emerald-50/60',
  },
  {
    icon: Navigation2,
    title: 'Visit coordination',
    description: 'Map, timing, and appointment support are organized in one place for convenience.',
    tone: 'from-emerald-50/80 to-white',
  },
];

export default function ContactUsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The Gardenia',
    url: 'https://www.gardenia.homes/',
    telephone: '+91 8009103333',
    email: 'marketing@gardenia.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ghangapatna',
      addressLocality: 'Bhubaneswar',
      addressRegion: 'Odisha',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-white text-slate-900">
        <SiteHeader />

        <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="relative container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Contact The Gardenia</p>
              <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">Contact Us</h1>
              <p className="mt-5 text-lg leading-8 text-emerald-50/90 md:text-xl">
                Reach out for site visits, floor plan guidance, and project details. The contact page mirrors the homepage form and keeps every enquiry clear, simple, and responsive.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="#contact-form" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700">
                  Start Your Enquiry
                </Link>
                <Link href="#office-details" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  View Office Details
                </Link>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <section className="py-8">
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">
              {trustCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className={`border-emerald-100 bg-gradient-to-br ${item.tone} p-4 md:p-6`}>
                    <CardHeader className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Trust Signal</p>
                          <CardTitle className="mt-1 text-lg md:text-xl">{item.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p className="text-sm leading-7 text-slate-600 md:text-base">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section id="contact-form" className="py-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <Card className="border-emerald-100 bg-white p-4 md:p-6 lg:p-8">
                <CardHeader className="p-0 pb-4">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">Send us a message</CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    Use the same lead form structure from the homepage to schedule a visit or ask about available residences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 pt-2">
                  <ContactForm />
                </CardContent>
              </Card>

              <div className="space-y-4" id="office-details">
                {contactPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <Card key={point.label} className="border-emerald-100 bg-white p-4 md:p-6">
                      <CardHeader className="p-0 pb-3">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-base md:text-lg">{point.label}</CardTitle>
                        <CardDescription>{point.note}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <a
                          href={point.href}
                          className="text-sm font-semibold leading-6 text-emerald-700 transition-colors hover:text-emerald-800"
                          target={point.href.startsWith('http') ? '_blank' : undefined}
                          rel={point.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {point.value}
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}

                <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4 md:p-6">
                  <CardHeader className="p-0 pb-3">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base md:text-lg">Office address</CardTitle>
                    <CardDescription>Sales and support location for scheduled visits.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm leading-7 text-slate-700">
                      Ghangapatna, Bhubaneswar, Odisha, India
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      For the fastest response, submit the form above and the team will follow up by phone or email based on your preferred contact method.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-emerald-100 bg-white p-0">
                  <div className="border-b border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 md:px-6">
                    Map Preview
                  </div>
                  <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_40%),linear-gradient(135deg,#f8fafc,#ecfdf5)] p-4 md:p-6">
                    <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-emerald-200 bg-white/70 text-center">
                      <div className="max-w-sm p-4">
                        <MapPin className="mx-auto h-8 w-8 text-emerald-600" aria-hidden="true" />
                        <p className="mt-3 text-sm font-semibold text-slate-900">Ghangapatna, Bhubaneswar</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Add your embedded map or open the Google Maps link above to plan your visit.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-8">
            <Card className="border-emerald-100 bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 text-white">
              <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">Next Step</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Ready to speak with the team?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/85 md:text-base">
                    Submit the form, call the office, or email the support desk to get a visit scheduled.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:justify-end">
                  <a href="tel:+918009103333" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50">
                    Call Now
                  </a>
                  <a href="mailto:marketing@gardenia.in" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                    Email Support
                  </a>
                </div>
              </div>
            </Card>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
