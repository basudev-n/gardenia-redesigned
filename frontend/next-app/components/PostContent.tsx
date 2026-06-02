'use client';
import React from 'react';

function renderBlock(block: any, idx: number) {
  if (!block) return null;
  if (block._type === 'image' && block.asset?.url) {
    return (
      <img key={idx} src={block.asset.url || block.asset?.url} alt={block.alt || ''} className="w-full rounded-lg my-4" />
    );
  }

  if (block._type === 'block') {
    const style = block.style || 'normal';
    const text = block.children?.map((c: any) => c.text).join('') || '';
    if (style === 'h2') return <h2 key={idx} className="text-2xl font-semibold mt-6 mb-3">{text}</h2>;
    if (style === 'h3') return <h3 key={idx} className="text-xl font-semibold mt-5 mb-2">{text}</h3>;
    return <p key={idx} className="text-base leading-[1.8] text-slate-700 my-3">{text}</p>;
  }

  // Fallback: stringify
  return <div key={idx} className="my-3">{JSON.stringify(block)}</div>;
}

export default function PostContent({ blocks }: { blocks: any }) {
  if (!blocks || !Array.isArray(blocks)) return null;
  return <div className="prose prose-slate max-w-none">{blocks.map((b: any, i: number) => renderBlock(b, i))}</div>;
}
