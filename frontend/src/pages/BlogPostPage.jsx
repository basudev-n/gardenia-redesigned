import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seedBlogPosts } from "@/lib/sanityBlog";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = useMemo(() => seedBlogPosts.find((item) => item.slug.current === slug), [slug]);

  useEffect(() => {
    document.title = post ? `${post.title} | The Gardenia` : "Blog Post | The Gardenia";
  }, [post]);

  if (!post) {
    return (
      <div className="bg-white text-gray-900">
        <Header />
        <main className="pt-28">
          <div className="container mx-auto px-4 py-16">
            <p className="text-lg text-gray-600">Post not found.</p>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="pt-28">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mb-5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author?.name || "The Gardenia"}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{post.title}</h1>

          <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_50px_rgba(15,23,42,0.10)] border border-gray-100">
            <div className="bg-gradient-to-b from-emerald-50 to-white p-6 md:p-8">
              <p className="text-lg leading-8 text-gray-700">{post.excerpt}</p>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              {post.content?.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
