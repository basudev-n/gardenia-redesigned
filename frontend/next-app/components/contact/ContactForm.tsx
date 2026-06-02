'use client';

import React, { useMemo, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
};

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  preferredDate: '',
  preferredTime: '',
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gardenia-admin.up.railway.app';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [preferredContact, setPreferredContact] = useState<'phone' | 'email'>('phone');
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitState('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');

    try {
      const response = await fetch(`${API_URL}/api/contact-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferredContact,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitState('success');
      setFormData(initialFormData);
      setPreferredContact('phone');
      setErrors({});
    } catch {
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-2" placeholder="John Doe" />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="mt-2" placeholder="+91 98765 43210" />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2" placeholder="john@example.com" />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
      </div>

      <div>
        <Label>Preferred Contact Method</Label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setPreferredContact('phone')}
            className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
              preferredContact === 'phone'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700 shadow-sm'
                : 'border-gray-200 text-gray-600 hover:border-emerald-200'
            }`}
          >
            <PhoneCall className="mr-2 inline h-4 w-4" />
            Phone Call
          </button>
          <button
            type="button"
            onClick={() => setPreferredContact('email')}
            className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
              preferredContact === 'email'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700 shadow-sm'
                : 'border-gray-200 text-gray-600 hover:border-emerald-200'
            }`}
          >
            <MessageSquare className="mr-2 inline h-4 w-4" />
            Email Reply
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="preferredDate">Preferred Visit Date</Label>
          <Input id="preferredDate" name="preferredDate" type="date" min={today} value={formData.preferredDate} onChange={handleChange} className="mt-2" />
          {errors.preferredDate ? <p className="mt-1 text-xs text-red-600">{errors.preferredDate}</p> : null}
        </div>

        <div>
          <Label htmlFor="preferredTime">Preferred Time</Label>
          <Input id="preferredTime" name="preferredTime" type="time" value={formData.preferredTime} onChange={handleChange} className="mt-2" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="message">Message</Label>
          <span className="text-xs text-slate-500">{formData.message.length}/300</span>
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
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Calendar className="h-5 w-5" />
            Schedule My Free Site Visit
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </Button>

      <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
        <span className="inline-flex items-center gap-2 font-medium">
          <Sparkles className="h-4 w-4" />
          Priority response desk open
        </span>
        <span className="hidden items-center gap-2 text-xs font-semibold sm:inline-flex">
          <CheckCircle2 className="h-4 w-4" />
          Secure and confidential
        </span>
      </div>

      {submitState === 'success' ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Thank you. Your request has been submitted successfully.
        </p>
      ) : null}

      {submitState === 'error' ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Please review your details and try again.
        </p>
      ) : null}
    </form>
  );
}
