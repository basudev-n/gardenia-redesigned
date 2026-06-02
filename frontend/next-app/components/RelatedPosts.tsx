'use client';
import React from 'react';
import Link from 'next/link';

export default function RelatedPosts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Related posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((p) => (
          <Link key={p._id} href={`/blog/${p.slug.current}`} className="block p-4 rounded-xl border hover:shadow-md">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-500 mt-2">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
