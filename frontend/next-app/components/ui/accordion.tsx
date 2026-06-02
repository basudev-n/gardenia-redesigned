import React from 'react';
import { ChevronDown } from 'lucide-react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Accordion({ className = '', ...props }: DivProps) {
  return <div className={["space-y-4", className].filter(Boolean).join(' ')} {...props} />;
}

type AccordionItemProps = React.DetailsHTMLAttributes<HTMLDetailsElement> & {
  defaultOpen?: boolean;
};

export function AccordionItem({ className = '', defaultOpen = false, ...props }: AccordionItemProps) {
  return <details open={defaultOpen} className={["group rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm", className].filter(Boolean).join(' ')} {...props} />;
}

export function AccordionTrigger({ className = '', children, ...props }: React.SummaryHTMLAttributes<HTMLSummaryElement>) {
  return (
    <summary
      className={[
        'flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold leading-6 text-slate-900 outline-none [&::-webkit-details-marker]:hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
    </summary>
  );
}

export function AccordionContent({ className = '', ...props }: DivProps) {
  return <div className={["pt-4 text-sm leading-6 text-slate-600", className].filter(Boolean).join(' ')} {...props} />;
}
