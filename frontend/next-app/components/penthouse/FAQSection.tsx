'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type PentHouseFAQSectionProps = {
  className?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: 'Does The Gardenia offer 5 BHK penthouses in Bhubaneswar?',
    answer:
      'Yes, The Gardenia offers exclusive luxury 5 BHK Penthouse for Sale in Bhubaneswar with spacious layouts and premium lifestyle features.',
  },
  {
    question: 'What makes The Gardenia penthouses unique?',
    answer:
      'The penthouses feature expansive living spaces, private terraces, panoramic views, luxury amenities, wellness-focused planning, and elegant architecture.',
  },
  {
    question: 'Is The Gardenia suitable for luxury family living?',
    answer:
      'Absolutely. The project is designed to provide spacious family homes within a premium wellness-focused residential community.',
  },
  {
    question: 'Is investing in a penthouse in Bhubaneswar a good decision?',
    answer:
      "Yes, Bhubaneswar's growing infrastructure and rising demand for luxury housing make penthouses a strong long-term investment opportunity.",
  },
];

export default function PentHouseFAQSection({ className = '' }: PentHouseFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-[1000px] px-4 py-14 sm:px-8 lg:py-[4.5rem]">
        <h2 className="mb-10 text-center text-[1.85rem] font-bold leading-[1.2] text-[#1f2937] lg:text-[2.5rem]">
          Frequently Asked Questions
        </h2>

        <div>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `penthouse-faq-content-${index}`;
            const buttonId = `penthouse-faq-button-${index}`;

            return (
              <article
                key={faq.question}
                className={`mb-5 rounded-[8px] border bg-white p-7 transition-all duration-300 ease-out ${
                  index === 0
                    ? 'border-emerald-200 shadow-[0_6px_18px_rgba(5,150,105,0.08)]'
                    : 'border-[#e5e7eb] hover:border-[#059669] hover:shadow-[0_6px_18px_rgba(5,150,105,0.08)]'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                >
                  <span className="text-[17px] font-bold leading-[1.5] text-[#1f2937] transition-colors duration-300 ease-out">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#059669] transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                  style={{ maxHeight: isOpen ? '220px' : '0px' }}
                >
                  <div
                    className={`mt-5 border-t border-[#f3f4f6] pt-5 text-[16px] leading-[1.75] text-[#6b7280] transition-opacity duration-200 ease-out ${
                      isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
