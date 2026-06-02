'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }: { post: any }) {
  const excerpt = post.excerpt || (post.body && post.body.find((b: any) => b.children)?.children[0]?.text?.slice(0, 140));

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#e6e9ee] shadow-sm">
      <Link href={`/blog/${post.slug.current}`} className="block">
        {post.featuredImage?.asset?.url ? (
          <div className="relative w-full h-48">
            <Image src={post.featuredImage.asset.url} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ) : (
          <div className="w-full h-48 bg-slate-100 flex items-center justify-center">Image</div>
        )}

        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            {post.categories?.map((c: any) => (
              <span key={c._id} className="text-xs px-2 py-1 rounded-full border bg-white/50">{c.title}</span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h3>

          <p className="text-sm text-slate-600 mb-4">{excerpt}</p>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <div>{post.author?.name}</div>
            <div>{new Date(post.publishedAt).toLocaleDateString()}</div>
          </div>
        </div>
      </Link>
    </article>
  );
}
