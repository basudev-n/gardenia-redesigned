'use client';
import React, { useEffect, useMemo, useState } from 'react';
import BlogCard from './BlogCard';

export default function BlogListClient({ initialPosts }: { initialPosts: any[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [sort, setSort] = useState<'new' | 'old'>('new');
  const [pageSize] = useState(9);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem('blogFilters');
    if (stored) {
      const parsed = JSON.parse(stored);
      setQuery(parsed.query || '');
      setCategory(parsed.category || null);
      setAuthor(parsed.author || null);
      setSort(parsed.sort || 'new');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogFilters', JSON.stringify({ query, category, author, sort }));
  }, [query, category, author, sort]);

  const filtered = useMemo(() => {
    let items = initialPosts.slice();
    if (query) items = items.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || (p.excerpt || '').toLowerCase().includes(query.toLowerCase()));
    if (category) items = items.filter((p) => p.categories?.some((c: any) => c.slug?.current === category));
    if (author) items = items.filter((p) => p.author?.slug?.current === author);
    items.sort((a, b) => (sort === 'new' ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime() : new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()));
    return items;
  }, [initialPosts, query, category, author, sort]);

  const total = filtered.length;
  const visible = filtered.slice(0, page * pageSize);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="w-full rounded-md border px-3 py-2" />
        </div>
        <div className="flex gap-2">
          <select value={category || ''} onChange={(e) => setCategory(e.target.value || null)} className="rounded-md border px-3 py-2">
            <option value="">All categories</option>
            {Array.from(new Set(initialPosts.flatMap((p) => p.categories || []).map((c: any) => JSON.stringify({ slug: c.slug?.current, title: c.title }))))
              .map((s) => JSON.parse(s))
              .map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
          </select>

          <select value={author || ''} onChange={(e) => setAuthor(e.target.value || null)} className="rounded-md border px-3 py-2">
            <option value="">All authors</option>
            {Array.from(new Set(initialPosts.map((p) => JSON.stringify({ slug: p.author?.slug?.current, name: p.author?.name })))).map((s) => JSON.parse(s)).map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>

          <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="rounded-md border px-3 py-2">
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        {visible.length < total ? (
          <button onClick={() => setPage((p) => p + 1)} className="rounded-full px-6 py-2 border">
            Load more
          </button>
        ) : (
          <span className="text-sm text-slate-500">No more articles</span>
        )}
      </div>
    </div>
  );
}
