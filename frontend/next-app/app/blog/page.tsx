import React from 'react';
import Hero from '../../components/Hero';
import BlogListClient from '../../components/BlogListClient';
import { getAllPosts } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';

export const metadata = {
  title: 'Blog & Resources — The Gardenia',
  description: 'Latest articles and resources from The Gardenia.'
};

export default async function BlogPage() {
  const posts = await sanityClient.fetch(getAllPosts);

  return (
    <div className="px-4 sm:px-8 py-12 md:py-16">
      <div className="container-wide">
        <Hero title="Blog & Resources" description="Insights, tips and updates from The Gardenia team." />

        <div className="mt-10">
          {/* Blog list client handles search, filters, pagination */}
          <BlogListClient initialPosts={posts} />
        </div>
      </div>
    </div>
  );
}
