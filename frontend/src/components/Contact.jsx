"use client";
import React, { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  X,
  CheckCircle
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  preferredDate: '',
  preferredTime: ''
};

const API_URL = process.env.REACT_APP_API_URL || '';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [preferredContact, setPreferredContact] = useState('phone');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.message.trim().length > 300) {
      nextErrors.message = 'Message should be 300 characters or fewer';
    }

    if (formData.preferredDate && formData.preferredDate < today) {
      nextErrors.preferredDate = 'Visit date cannot be in the past';
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined
    }));
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSubmittedName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast({
        title: 'Please review your details',
        description: 'A few fields need attention before submitting.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    const payload = { ...formData, preferredContact };

    try {
      const response = await fetch(`${API_URL}/api/contact-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmittedName(formData.name.trim());
      setShowSuccessModal(true);
      setFormData(initialFormData);
      setPreferredContact('phone');
      setErrors({});
    } catch (err) {
      toast({
        title: 'Unable to submit right now',
        description: 'Please try again in a moment or call us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-emerald-50/60 to-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" aria-hidden="true" />
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-200/35 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Priority Response Desk Open
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">Book Your Dream Apartment in Bhubaneswar</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Schedule a visit or reach out to us. Our team is here to help you find your dream home with a faster, more personal response.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span>Limited Units Available - Act Fast!</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 max-w-6xl mx-auto items-start">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/90 shadow-[0_20px_70px_rgba(16,185,129,0.10)] backdrop-blur">
            <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white px-8 py-6 md:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Site Visit Request</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Send us a message</h3>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Avg. response: 2 hours
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label>Preferred Contact Method</Label>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPreferredContact('phone')}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      preferredContact === 'phone'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-emerald-200'
                    }`}
                  >
                    <PhoneCall className="inline w-4 h-4 mr-2" />
                    Phone Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredContact('email')}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      preferredContact === 'email'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-emerald-200'
                    }`}
                  >
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Email Reply
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredDate">Preferred Visit Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    min={today}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-2"
                  />
                  {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="message">Message</Label>
                  <span className="text-xs text-gray-500">{formData.message.length}/300</span>
                </div>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={300}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-emerald-600 py-6 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    Schedule My Free Site Visit
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-gray-500 mt-2">🔒 Your information is 100% secure and confidential</p>
            </form>
          </div>

          <div className="space-y-5 lg:pt-2">
            {[
              {
                icon: Phone,
                title: 'Phone (Toll-Free)',
                body: ['1800 890 0428'],
                cta: 'tel:18008900428',
                ctaLabel: 'Call now'
              },
              {
                icon: Mail,
                title: 'Email',
                body: ['info@gardenia.homes', 'sales@thegardenia.com'],
                cta: 'mailto:info@gardenia.homes',
                ctaLabel: 'Send email'
              },
              {
                icon: Clock,
                title: 'Office Hours',
                body: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM']
              },
              {
                icon: MapPin,
                title: 'Sales Office',
                body: ['Ghangapatna, P.O. - Kantabada, P.S. - Chandaka, Bhubaneswar, Khurda - 752054'],
                cta: 'https://maps.google.com',
                ctaLabel: 'Open in maps'
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900">{item.title}</h4>
                      {item.body.map((line) => (
                        <p key={line} className="text-gray-600 text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                      {item.cta && (
                        <a
                          href={item.cta}
                          target={item.cta.startsWith('http') ? '_blank' : undefined}
                          rel={item.cta.startsWith('http') ? 'noreferrer' : undefined}
                          className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          {item.ctaLabel}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/55 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between bg-emerald-600 px-6 py-4">
              <h4 className="text-lg font-semibold text-white">Form Submitted Successfully</h4>
              <button
                type="button"
                onClick={closeSuccessModal}
                className="rounded-full p-1 text-white/90 hover:bg-white/15 transition-colors"
                aria-label="Close success popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-7 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-lg font-semibold text-gray-900">Thank you{submittedName ? `, ${submittedName.split(' ')[0]}` : ''}!</p>
              <p className="mt-2 text-sm text-gray-600">
                Your form is successfully submitted and someone from our team will get back to you shortly.
              </p>

              <Button
                type="button"
                onClick={closeSuccessModal}
                className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
