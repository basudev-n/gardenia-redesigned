import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Armchair,
  Bike,
  Building2,
  Dumbbell,
  Film,
  Flower2,
  Footprints,
  Gamepad2,
  HeartPulse,
  Leaf,
  Mic,
  PartyPopper,
  Sparkles,
  Sofa,
  Sunset,
  Trophy,
  ToyBrick,
  Trees,
  Users,
  Waves,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import SiteHeader from '../../components/site/SiteHeader';
import SiteFooter from '../../components/site/SiteFooter';

type Amenity = {
  name: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
};

type AmenityGroup = {
  id: string;
  title: string;
  intro: string;
  amenities: Amenity[];
};

const PAGE_URL = 'https://www.gardenia.homes/amenities';

export const metadata: Metadata = {
  title: 'Amenities at The Gardenia | World-Class Living Experiences',
  description:
    'Explore 22+ premium amenities at The Gardenia across recreation, wellness, green spaces, and community living.',
  alternates: {
    canonical: PAGE_URL,
  },
};

const amenityGroups: AmenityGroup[] = [
  {
    id: 'recreation-entertainment',
    title: 'Recreation & Entertainment',
    intro: 'Spaces that make every evening, weekend, and celebration feel intentionally designed.',
    amenities: [
      {
        name: 'Swimming Pool',
        description: 'Resort-style pool for laps, leisure, and family weekends.',
        features: ['Lap-friendly design', 'Deck loungers', 'Kid-safe edge'],
        icon: Waves,
      },
      {
        name: "Kids' Play Area",
        description: 'Safe, shaded play zone that keeps younger residents active.',
        features: ['Soft flooring', 'Age-zoned play', 'Parent seating'],
        icon: ToyBrick,
      },
      {
        name: 'Indoor Games',
        description: 'Casual indoor recreation for friendly matches and rainy-day fun.',
        features: ['Table games', 'Climate control', 'Social tournaments'],
        icon: Gamepad2,
      },
      {
        name: 'Banquet Hall',
        description: 'Elegant venue for celebrations, meetings, and resident events.',
        features: ['Flexible seating', 'Event acoustics', 'Catering support'],
        icon: PartyPopper,
      },
      {
        name: 'Terrace Lounge',
        description: 'Skyline-facing lounge for sunsets, conversations, and evening unwind.',
        features: ['Outdoor seating', 'Ambient lighting', 'Open views'],
        icon: Sunset,
      },
      {
        name: 'Open Recreational Spaces',
        description: 'Flexible outdoor zones for yoga, play, and spontaneous gatherings.',
        features: ['Multipurpose lawns', 'Shaded seating', 'Open-air movement'],
        icon: Users,
      },
      {
        name: 'Outdoor Sports',
        description: 'Active courts for competitive games and daily fitness with friends.',
        features: ['Marked courts', 'Evening lighting', 'Spectator edges'],
        icon: Trophy,
      },
      {
        name: 'Community Gathering',
        description: 'Shared social space for festivals, clubs, and resident meetups.',
        features: ['Event lawn', 'Flexible seating', 'Resident programming'],
        icon: PartyPopper,
      },
    ],
  },
  {
    id: 'wellness-fitness',
    title: 'Wellness & Fitness',
    intro: 'Daily habits built around movement, recovery, and calm energy.',
    amenities: [
      {
        name: 'Gymnasium',
        description: 'Fully equipped training space for strength, cardio, and mobility.',
        features: ['Modern machines', 'Free weights', 'Air-conditioned comfort'],
        icon: Dumbbell,
      },
      {
        name: 'Yoga & Meditation Hall',
        description: 'Quiet studio for mindful practice and restorative breathing.',
        features: ['Calm acoustics', 'Natural light', 'Mat-ready floor'],
        icon: HeartPulse,
      },
      {
        name: 'Wellness Lounge',
        description: 'Relaxed recovery nook for reading, stretching, and pause.',
        features: ['Soft seating', 'Hydration point', 'Low-stimulus design'],
        icon: Sparkles,
      },
      {
        name: 'Jogging Tracks',
        description: 'Dedicated loops for brisk walks and daily cardio sessions.',
        features: ['Distance markers', 'Soft edges', 'Safe circulation'],
        icon: Footprints,
      },
      {
        name: 'Senior Citizen Seating',
        description: 'Comfortable resting spots with shade, visibility, and access.',
        features: ['Ergonomic benches', 'Shaded pockets', 'Activity proximity'],
        icon: Armchair,
      },
      {
        name: 'Spa & Relaxation',
        description: 'Quiet recovery retreat designed for self-care and calm.',
        features: ['Treatment rooms', 'Aroma lighting', 'Reservation slots'],
        icon: Sparkles,
      },
    ],
  },
  {
    id: 'green-spaces',
    title: 'Green Spaces',
    intro: 'Landscapes that bring fresh air, shade, and visual softness into daily life.',
    amenities: [
      {
        name: 'Landscaped Gardens',
        description: 'Lush planted gardens that soften the community with color.',
        features: ['Seasonal blooms', 'Shaded paths', 'Regular upkeep'],
        icon: Trees,
      },
      {
        name: 'Central Green Plaza',
        description: 'Open green heart for walking, seating, and outdoor pauses.',
        features: ['Broad lawns', 'Gathering space', 'Event flexibility'],
        icon: Leaf,
      },
      {
        name: 'Nature Trails',
        description: 'Winding walkways that bring daily movement closer to nature.',
        features: ['Native planting', 'Textured paths', 'Sunrise walks'],
        icon: Bike,
      },
      {
        name: 'Pocket Parks',
        description: 'Pocket-sized retreats for quiet moments near home.',
        features: ['Micro seating', 'Pocket shade', 'Child-friendly edges'],
        icon: Flower2,
      },
    ],
  },
  {
    id: 'community-social',
    title: 'Community & Social',
    intro: 'Shared indoor and outdoor venues that make relationships easy to build.',
    amenities: [
      {
        name: 'Grand Clubhouse',
        description: 'Signature indoor hub for meetings, leisure, and celebrations.',
        features: ['Lounge zones', 'Multipurpose rooms', 'Concierge access'],
        icon: Building2,
      },
      {
        name: 'Community Lounge',
        description: 'Inviting shared room for conversations, reading, and remote work.',
        features: ['Coffee corner', 'Work tables', 'Flexible seating'],
        icon: Sofa,
      },
      {
        name: 'Amphitheater',
        description: 'Open-air stage for performances, talks, and screenings.',
        features: ['Tiered seating', 'Sound-friendly layout', 'Event power'],
        icon: Mic,
      },
      {
        name: 'Outdoor Movie Screening',
        description: 'Cinema nights under the sky with neighbors and family.',
        features: ['Projector setup', 'Lawn seating', 'Seasonal scheduling'],
        icon: Film,
      },
    ],
  },
];

const quickLinks = [
  { label: '2 BHK Homes', href: '/2-bhk-flats-in-bhubaneswar', note: 'Compact, efficient city living.' },
  { label: '3 BHK Homes', href: '/3-bhk-flats-in-bhubaneswar', note: 'More room for family growth.' },
  { label: 'Penthouses', href: '/penthouse-for-sale-in-bhubaneswar', note: 'Ultra-premium elevated residences.' },
];

const faqs = [
  {
    question: 'Are the amenities open to all residents every day?',
    answer:
      'Most shared amenities are available daily during published hours, with some spaces reserved for booked events or maintenance windows.',
  },
  {
    question: 'Which amenities require advance booking?',
    answer:
      'The banquet hall, community lounge, spa rooms, amphitheater, and outdoor screening setups typically require advance reservation.',
  },
  {
    question: 'How are maintenance closures handled?',
    answer:
      'Routine maintenance is scheduled in advance and communicated to residents through community notices and concierge updates.',
  },
  {
    question: 'Can children use the pool and play areas safely?',
    answer:
      'Yes. Family-focused zones are designed with soft surfaces, supervision-friendly sightlines, and clearly defined access areas.',
  },
  {
    question: 'What is the connection between amenities and LWQ?',
    answer:
      'LWQ, or Lifestyle Wellness Quotient, is the idea that better shared spaces create healthier daily habits and stronger community rhythms.',
  },
];

function getTotalAmenities(groups: AmenityGroup[]) {
  return groups.reduce((total, group) => total + group.amenities.length, 0);
}

export default function AmenitiesPage() {
  const totalAmenities = getTotalAmenities(amenityGroups);

  return (
    <div className="bg-white text-slate-900">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,231,183,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="relative container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              The Gardenia Amenities
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              World-Class Amenities for Elevated Living
            </h1>
            <p className="mt-5 text-lg md:text-xl leading-8 text-emerald-50/90">
              From recreation and wellness to green sanctuaries and social spaces, every amenity at The Gardenia is
              planned to support a richer daily rhythm for residents, families, and guests.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="default" size="lg">
                <Link href="#amenity-groups" aria-label="Explore Amenities">Explore Amenities</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#visit-cta" aria-label="Schedule a Site Visit">Schedule a Site Visit</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold text-white">22+ Amenities</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm leading-6 text-emerald-50/80">
                  A complete lifestyle ecosystem across four curated categories.
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold text-white">Compact Planning</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm leading-6 text-emerald-50/80">
                  Every shared area is designed for comfort, access, and daily usability.
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold text-white">LWQ Focus</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm leading-6 text-emerald-50/80">
                  Amenities are tied to lifestyle wellness, calm, movement, and community bonding.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="py-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Overview</p>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              {`The Gardenia combines recreation, fitness, wellness, greenery, and community into one connected living experience. ${totalAmenities} premium amenities work together to make everyday routines easier, healthier, and more enjoyable.`}
            </p>
          </div>
        </section>

        <section className="py-8" id="amenity-groups">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Categories</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Browse amenities by lifestyle focus
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {amenityGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 transition-colors hover:bg-emerald-100"
                >
                  {group.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {amenityGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-24">
                <div className="mb-5 max-w-3xl">
                  <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{group.intro}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                  {group.amenities.map((amenity) => {
                    const Icon = amenity.icon;

                    return (
                      <Card
                        key={amenity.name}
                        className="h-full border-emerald-100 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <CardHeader className="p-0 pb-3">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-sm leading-6 text-slate-900 md:text-base">{amenity.name}</CardTitle>
                          <CardDescription className="text-xs leading-5 text-slate-600 md:text-sm">
                            {amenity.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0">
                          <ul className="space-y-2 text-xs leading-5 text-slate-600 md:text-sm">
                            {amenity.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="py-8">
          <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-white">
            <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_0.9fr] md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">LWQ Callout</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Designed to raise every resident&apos;s Lifestyle Wellness Quotient
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  The Gardenia&apos;s amenity mix is more than a list of facilities. It is a planning strategy that turns
                  wellness, movement, and social connection into repeatable habits, helping residents build a higher
                  LWQ without leaving home.
                </p>
              </div>
              <div className="grid gap-3 text-sm text-slate-700">
                {[
                  'Daily movement with easy access to active and calming spaces.',
                  'Shared spaces that encourage genuine neighbor-to-neighbor connection.',
                  'Green pockets and quiet rooms that balance high-energy routines.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="py-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Resident Voices</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              How residents describe the amenity experience
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {[
              {
                quote:
                  'The amenity mix makes the property feel complete. We can work out, relax, and host friends without leaving the community.',
                author: 'Resident family, Tower A',
              },
              {
                quote:
                  'The green spaces and walking paths changed our daily routine. It feels calm, balanced, and genuinely livable.',
                author: 'Senior resident, Tower C',
              },
              {
                quote:
                  'The clubhouse and outdoor gathering spaces make celebrations simple. The entire community feels more connected.',
                author: 'Young professionals, Tower B',
              },
            ].map((testimonial) => (
              <Card key={testimonial.author} className="min-w-[280px] max-w-md snap-start border-emerald-100 bg-white p-4 md:min-w-[360px]">
                <CardContent className="p-0">
                  <p className="text-sm leading-7 text-slate-700">&quot;{testimonial.quote}&quot;</p>
                  <p className="mt-4 text-sm font-semibold text-emerald-700">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Usage Guidelines</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Practical details for everyday use
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 pb-3">
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-sm leading-7 text-slate-600">
                Most amenities open daily from 6:00 AM to 9:00 PM. Quiet wellness zones may open earlier for morning
                routines.
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 pb-3">
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-sm leading-7 text-slate-600">
                Banquet hall, spa, amphitheater, and screening spaces should be reserved through the concierge team at
                least 24 hours in advance.
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6">
              <CardHeader className="p-0 pb-3">
                <CardTitle>Maintenance Schedule</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-sm leading-7 text-slate-600">
                Routine cleaning and preventive maintenance are planned weekly, with advance notices shared whenever a
                facility is temporarily closed.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Explore Homes</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Continue to the property pages
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {quickLinks.map((item) => (
              <Card key={item.label} className="p-4 md:p-6">
                <CardHeader className="p-0 pb-3">
                  <CardTitle>{item.label}</CardTitle>
                  <CardDescription>{item.note}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={item.href}>View page</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">FAQ</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} defaultOpen={index === 0}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="visit-cta" className="py-8">
          <Card className="overflow-hidden border-emerald-100 bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 text-white">
            <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">Next Step</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  See the amenities in person
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/85 md:text-base">
                  A site visit is the fastest way to understand how the spaces connect, flow, and support daily living
                  at The Gardenia.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button asChild size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50">
                  <a href="mailto:marketing@gardenia.homes?subject=Schedule%20a%20Site%20Visit">Schedule a Site Visit</a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
