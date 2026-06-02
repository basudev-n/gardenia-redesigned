import React from 'react';

export default function Hero({ title, description }: { title: string; description?: string }) {
  return (
    <header className="bg-white py-6 md:py-10">
      <div className="container-wide px-4 sm:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">{title}</h1>
        {description ? <p className="mt-2 text-slate-600 max-w-2xl">{description}</p> : null}
      </div>
    </header>
  );
}
