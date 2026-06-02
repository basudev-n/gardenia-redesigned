import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { fetchSanityPosts, seedBlogPosts } from "@/lib/sanityBlog";

export default function BlogPreviewSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await fetchSanityPosts();
        if (active) setPosts((result.length ? result : seedBlogPosts).slice(0, 3));
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="blog" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 mb-5">
              <Newspaper className="h-4 w-4" />
              Blog & Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Stories, updates, and insights from The Gardenia
            </h2>
          </div>

          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[360px] animate-pulse rounded-[1.75rem] bg-slate-100" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-emerald-200 bg-emerald-50/60 p-8 text-center text-sm text-slate-600">
            No blog posts are available yet. Add Sanity env variables to surface the latest articles here.
          </div>
        )}
      </div>
    </section>
  );
}
