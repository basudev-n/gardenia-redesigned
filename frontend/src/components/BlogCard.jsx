import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { buildExcerpt } from "@/lib/sanityBlog";

export default function BlogCard({ post, featured = false }) {
  const excerpt = buildExcerpt(post);

  return (
    <article
      className={`group overflow-hidden rounded-[1.75rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)] ${
        featured ? "border-emerald-200" : "border-gray-100"
      }`}
    >
      <Link to={`/blog/${post.slug?.current || ""}`} className="block">
        <div className="relative overflow-hidden h-44">
          {post.featuredImage?.asset?.url ? (
            <img
              src={post.featuredImage.asset.url}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100">
              <span className="text-sm font-medium text-slate-500">The Gardenia Journal</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {post.categories?.slice(0, 2)?.map((c) => (
              <span key={c._id} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur">
                {c.title}
              </span>
            ))}
          </div>
        </div>

        <div className="p-5">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
            <span className="inline-flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author?.name || "The Gardenia"}
            </span>
            {post.publishedAt && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
            {post.readTime ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} min read
              </span>
            ) : null}
          </div>

          <h3 className="font-bold tracking-tight text-slate-900 text-lg">
            {post.title}
          </h3>

          {excerpt ? <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{excerpt}</p> : null}

          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
            Read more
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </article>
  );
}
