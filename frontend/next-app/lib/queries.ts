export const getAllPosts = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  excerpt,
  publishedAt,
  slug,
  'readTime': round(length(pt::text(body)) / 5 / 180 ),
  featuredImage{asset->{_id,url}},
  author->{name, 'slug': slug.current, image, bio, role},
  categories[]->{_id, title, 'slug': slug.current}
}`;

export const getPostBySlug = `*[_type=='post' && slug.current == $slug][0]{
  _id,
  title,
  excerpt,
  publishedAt,
  slug,
  body,
  featuredImage{asset->{_id,url}},
  author->{name,image,bio,role},
  categories[]->{_id,title,'slug':slug.current}
}`;

export const getRelatedPosts = `*[_type == 'post' && $category in categories[]->slug.current && _id != $excludeId] | order(publishedAt desc)[0..2]{
  _id, title, excerpt, slug, featuredImage{asset->{_id,url}}
}`;
