import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

export interface FAQSectionProps {
  className?: string;
}

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: 'Why should I buy a 2 BHK flat in Bhubaneswar?',
    answer:
      "Bhubaneswar is one of India's fastest-growing smart cities with excellent infrastructure, connectivity, and investment opportunities, making it an ideal destination for residential property buyers.",
  },
  {
    question: 'Is The Gardenia suitable for families?',
    answer:
      'Yes, The Gardenia is designed as a family-focused luxury residential community with premium amenities, open spaces, wellness infrastructure, and excellent connectivity.',
  },
  {
    question: 'Does The Gardenia offer modern lifestyle amenities?',
    answer:
      'Yes, residents enjoy access to world-class amenities including a swimming pool, gymnasium, clubhouse, wellness zones, indoor games, landscaped gardens, and more.',
  },
  {
    question: 'Is The Gardenia a good investment opportunity?',
    answer:
      'Yes, its prime location, luxury positioning, premium amenities, and rapidly developing surroundings make it a strong investment choice in Bhubaneswar.',
  },
];

export default function FAQSection({ className = '' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[4.5rem] ${className}`}>
      <div className="mx-auto max-w-[900px] rounded-[28px] border border-slate-200 bg-white px-4 py-8 shadow-[0_14px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Need to know
          </div>
          <h2 className="text-[1.85rem] font-bold leading-[1.15] text-[#1f2937] sm:text-[2.4rem]">Frequently Asked Questions</h2>
        </div>

        <div>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Card
                key={faq.question}
                className={`mb-4 border border-slate-200 bg-white p-0 transition-all duration-300 ${
                  isOpen ? 'shadow-[0_12px_30px_rgba(2,6,23,0.06)]' : 'hover:shadow-[0_4px_12px_rgba(2,6,23,0.04)]'
                }`}
              >
                <div className="px-5 py-5 sm:px-6">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    aria-label={faq.question}
                  >
                    <span className="text-[15px] font-semibold leading-6 text-[#1f2937] transition-colors duration-200 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#059669] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                    style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <p className="text-[15px] leading-[1.8] text-[#6b7280] sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { FAQSection };
