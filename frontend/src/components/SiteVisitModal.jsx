import React, { useEffect, useMemo, useState } from 'react';
import { X, Calendar, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const FORM_ENDPOINT = 'https://formspree.io/f/xeewakzp';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  preference: '',
  message: '',
};

export default function SiteVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const preferences = useMemo(() => ['2 BHK', '3 BHK', '4 BHK', '5 BHK Penthouse'], []);

  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      setSubmitted(false);
      setError('');
    };
    window.addEventListener('gardenia:open-site-visit', open);
    return () => window.removeEventListener('gardenia:open-site-visit', open);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setSubmitted(false);
    setForm(initialForm);
    setError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError('Please fill your name, phone, and email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'New site visit request from The Gardenia website',
          ...form,
          formType: 'site-visit',
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm" onClick={close}>
      <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.28)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-emerald-100 bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-5 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100">Book a Site Visit</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Schedule your visit with The Gardenia</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-emerald-50/90">
              Send your details and we’ll follow up with the right residence guidance and a visit slot.
            </p>
          </div>
          <button onClick={close} className="rounded-full p-2 text-white/90 transition-colors hover:bg-white/15" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="mt-5 text-2xl font-bold text-slate-900">Thanks, we’ve got your request.</h4>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Our team will reach out soon to confirm your site visit and share the next steps.
                </p>
                <Button onClick={close} className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="sv-name">Full Name *</Label>
                    <div className="relative mt-2">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input id="sv-name" name="name" value={form.name} onChange={handleChange} className="pl-10" placeholder="Your name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="sv-phone">Phone *</Label>
                    <div className="relative mt-2">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <Input id="sv-phone" name="phone" value={form.phone} onChange={handleChange} className="pl-10" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sv-email">Email *</Label>
                  <div className="relative mt-2">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input id="sv-email" name="email" type="email" value={form.email} onChange={handleChange} className="pl-10" placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="sv-pref">Preferred Residence</Label>
                  <select
                    id="sv-pref"
                    name="preference"
                    value={form.preference}
                    onChange={handleChange}
                    className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select preference</option>
                    {preferences.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="sv-message">Message</Label>
                  <div className="relative mt-2">
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Textarea id="sv-message" name="message" value={form.message} onChange={handleChange} className="min-h-28 pl-10 pt-3" placeholder="Tell us your preferred time or any questions" />
                  </div>
                </div>

                {error ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

                <Button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  {isSubmitting ? 'Sending...' : 'Book Site Visit'}
                </Button>
              </form>
            )}
          </div>

          <div className="border-t border-emerald-100 bg-slate-50 p-6 md:p-8 lg:border-l lg:border-t-0">
            <div className="rounded-[1.5rem] border border-emerald-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">What happens next</p>
              <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                <li>1. We review your request and preferred residence.</li>
                <li>2. Our team contacts you to confirm timing.</li>
                <li>3. You receive a guided site visit at The Gardenia.</li>
              </ul>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Need help sooner?</p>
              <a href="tel:18008900428" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                Call 1800 890 0428
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
