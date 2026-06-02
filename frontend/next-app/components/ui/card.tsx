import React from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', ...props }: DivProps) {
  return <div className={["rounded-2xl border border-emerald-100 bg-white text-slate-900 shadow-sm", className].filter(Boolean).join(' ')} {...props} />;
}

export function CardHeader({ className = '', ...props }: DivProps) {
  return <div className={["flex flex-col gap-2 p-6 pb-3", className].filter(Boolean).join(' ')} {...props} />;
}

export function CardTitle({ className = '', ...props }: DivProps) {
  return <div className={["text-base font-semibold leading-tight text-slate-900", className].filter(Boolean).join(' ')} {...props} />;
}

export function CardDescription({ className = '', ...props }: DivProps) {
  return <div className={["text-sm leading-6 text-slate-600", className].filter(Boolean).join(' ')} {...props} />;
}

export function CardContent({ className = '', ...props }: DivProps) {
  return <div className={["p-6 pt-0", className].filter(Boolean).join(' ')} {...props} />;
}

export function CardFooter({ className = '', ...props }: DivProps) {
  return <div className={["flex items-center p-6 pt-0", className].filter(Boolean).join(' ')} {...props} />;
}
