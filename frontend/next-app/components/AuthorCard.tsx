'use client';
import React from 'react';

export default function AuthorCard({ author }: { author: any }) {
  if (!author) return null;
  return (
    <div className="mt-10 p-4 rounded-2xl border border-[#e6e9ee] flex items-center gap-4 bg-white">
      {author.image ? <img src={author.image} alt={author.name} className="w-14 h-14 rounded-full object-cover" /> : <div className="w-14 h-14 rounded-full bg-slate-100" />}
      <div>
        <div className="font-semibold">{author.name}</div>
        <div className="text-sm text-slate-500">{author.role || 'Author'}</div>
        {author.bio ? <div className="text-sm text-slate-600 mt-2">{author.bio}</div> : null}
      </div>
    </div>
  );
}
