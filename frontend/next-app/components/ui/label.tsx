import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = '', ...props }: LabelProps) {
  return <label className={["text-sm font-medium leading-none text-slate-700", className].filter(Boolean).join(' ')} {...props} />;
}
