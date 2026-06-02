'use client';
import React from 'react';

export default function TOC({ headings }: { headings: { id: string; title: string; level: number }[] }) {
  if (!headings || headings.length === 0) return null;
  return (
    <nav className="hidden lg:block sticky top-24">
      <div className="p-4 rounded-xl border border-[#e6e9ee] bg-white">
        <div className="text-sm font-semibold mb-2">On this page</div>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.id} className={`pl-${(h.level - 2) * 4}`}>
              <a href={`#${h.id}`} className="text-slate-600 hover:text-emerald-600">{h.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
