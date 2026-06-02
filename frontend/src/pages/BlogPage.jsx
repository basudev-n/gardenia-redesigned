import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { fetchSanityPosts, seedBlogPosts } from "@/lib/sanityBlog";
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog & Resources | The Gardenia";
    let active = true;

    const load = async () => {
      try {
        const result = await fetchSanityPosts();
        if (active) setPosts(result.length ? result : seedBlogPosts);
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
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-24">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 mb-5">
                <Newspaper className="h-4 w-4" />
                Blog & Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                All blog posts from The Gardenia
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Browse the full collection of articles, updates, and resident-focused insights powered by Sanity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-[420px] animate-pulse rounded-[1.75rem] bg-slate-100" />
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <BlogCard key={post._id} post={post} featured={index === 0} />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-emerald-200 bg-emerald-50/60 p-8 text-center text-sm text-slate-600">
                No posts were returned from Sanity. Add the public project id and dataset env vars to load live content.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
