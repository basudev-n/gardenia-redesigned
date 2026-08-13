import React from 'react';

type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700',
  secondary: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
  outline: 'border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50',
  ghost: 'text-emerald-700 hover:bg-emerald-50',
  link: 'px-0 text-emerald-700 underline-offset-4 hover:underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 rounded-md px-3 text-xs',
  lg: 'h-12 rounded-xl px-6 text-sm font-semibold',
  icon: 'h-10 w-10',
};

export function Button({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: [child.props.className, classes].filter(Boolean).join(' '),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
