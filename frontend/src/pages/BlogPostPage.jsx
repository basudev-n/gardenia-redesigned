import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seedBlogPosts } from "@/lib/sanityBlog";
import { openSiteVisitModal } from "@/lib/openSiteVisit";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Home,
  MapPin,
  MessageCircle,
  User,
} from "lucide-react";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const getReadTime = (post) => post?.readTime || Math.max(3, Math.round((post?.content?.join(" ")?.split(/\s+/).length || 600) / 180));

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = useMemo(() => seedBlogPosts.find((item) => item.slug.current === slug), [slug]);
  const relatedPosts = useMemo(
    () => seedBlogPosts.filter((item) => item.slug.current !== slug).slice(0, 3),
    [slug]
  );

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
    <div className="bg-white text-slate-900">
      <Header />
      <main className="pt-20">
        <article>
          <section className="bg-slate-950 text-white">
            <div className="container mx-auto px-4 py-8 md:py-10">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition-colors hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div className="pb-2">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {post.categories?.map((category) => (
                      <span key={category._id} className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                        {category.title}
                      </span>
                    ))}
                  </div>

                  <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    {post.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                    {post.excerpt}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2">
                      <User className="h-4 w-4 text-emerald-300" />
                      {post.author?.name || "The Gardenia"}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-300" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-300" />
                      {getReadTime(post)} min read
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                  {post.featuredImage?.asset?.url ? (
                    <img
                      src={post.featuredImage.asset.url}
                      alt={post.title}
                      className="h-[320px] w-full object-cover md:h-[420px]"
                    />
                  ) : (
                    <div className="flex h-[320px] items-center justify-center bg-emerald-900/40 md:h-[420px]">
                      <span className="text-sm font-semibold text-emerald-100">The Gardenia Journal</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-12 md:py-16">
            <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
              <div className="max-w-3xl">
                <div className="mb-8 border-l-4 border-emerald-500 bg-emerald-50 px-5 py-5">
                  <p className="text-lg font-medium leading-8 text-emerald-950">{post.excerpt}</p>
                </div>

                <div className="space-y-7">
                  {post.content?.map((paragraph, index) => (
                    <p key={paragraph} className={`${index === 0 ? "text-xl leading-9 text-slate-800" : "text-lg leading-9 text-slate-700"}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
                  {[
                    { icon: Home, label: "Residences", value: "2, 3, 4 BHK" },
                    { icon: MapPin, label: "Location", value: "Ghangapatna" },
                    { icon: CheckCircle2, label: "Lifestyle", value: "Wellness-led" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                          <p className="mt-1 font-semibold text-slate-900">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Article Snapshot</p>
                  <div className="mt-5 space-y-4 text-sm text-slate-700">
                    <div className="flex items-center justify-between gap-4">
                      <span>Author</span>
                      <strong className="text-right text-slate-950">{post.author?.name || "The Gardenia"}</strong>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Published</span>
                      <strong className="text-right text-slate-950">{formatDate(post.publishedAt)}</strong>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Read time</span>
                      <strong className="text-right text-slate-950">{getReadTime(post)} min</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={openSiteVisitModal}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book a Site Visit
                  </button>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-6">
                  <p className="text-sm font-semibold text-emerald-950">Thinking about a premium home in Bhubaneswar?</p>
                  <p className="mt-3 text-sm leading-6 text-emerald-900/75">
                    Speak with The Gardenia team for layouts, availability, pricing, and site visit options.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className="bg-slate-50 py-14">
            <div className="container mx-auto px-4">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Keep Reading</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Related articles</h2>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  View all posts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {relatedPosts.map((item) => (
                  <Link
                    key={item._id}
                    to={`/blog/${item.slug.current}`}
                    className="group overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                  >
                    <div className="h-40 overflow-hidden bg-slate-100">
                      {item.featuredImage?.asset?.url ? (
                        <img src={item.featuredImage.asset.url} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : null}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        {item.categories?.[0]?.title || "The Gardenia"}
                      </p>
                      <h3 className="mt-3 text-lg font-bold leading-6 text-slate-950">{item.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
