import React from 'react';
import { sanityClient } from '../../../lib/sanity';
import { getPostBySlug, getRelatedPosts } from '../../../lib/queries';
import PostContent from '../../../components/PostContent';
import AuthorCard from '../../../components/AuthorCard';
import RelatedPosts from '../../../components/RelatedPosts';
import SiteFooter from '../../../components/site/SiteFooter';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(getPostBySlug, { slug: params.slug });
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage.asset.url }] : []
    }
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(getPostBySlug, { slug: params.slug });
  if (!post) return <div className="px-4 py-8">Post not found</div>;

  const related = await sanityClient.fetch(getRelatedPosts, { category: post.categories && post.categories[0]?.slug?.current, excludeId: post._id });

  return (
    <div>
      <div className="px-4 sm:px-8 py-8 md:py-12">
        <div className="container-wide">
          <article className="max-w-[900px] mx-auto">
            {post.featuredImage && (
              <img src={post.featuredImage.asset.url} alt={post.title} className="w-full rounded-2xl object-cover mb-6" loading="lazy" />
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <span>{post.author?.name}</span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
              {post.readTime ? <><span>•</span><span>{post.readTime} min read</span></> : null}
            </div>

            <PostContent blocks={post.body} />

            <AuthorCard author={post.author} />

            <div className="mt-12">
              <RelatedPosts posts={related} />
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-3">Comments</h3>
              <div className="p-4 border border-[#e6e9ee] rounded-2xl bg-white">Comments placeholder — integrate your preferred comments provider here.</div>
            </div>
          </article>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
