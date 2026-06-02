import { mockData } from "@/mock/data";

const API_VERSION = "2024-01-01";

export const getSanityConfig = () => {
  const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || "";
  const dataset = process.env.REACT_APP_SANITY_DATASET || "production";

  return { projectId, dataset };
};

const buildQueryUrl = (projectId, dataset, query) =>
  `https://${projectId}.api.sanity.io/v${API_VERSION}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

export const fetchSanityPosts = async () => {
  const { projectId, dataset } = getSanityConfig();
  if (!projectId) return [];

  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    slug,
    "readTime": round(length(pt::text(body)) / 5 / 180 ),
    featuredImage->{asset->{_id,url}},
    author->{name, "slug": slug.current, image, bio, role},
    categories[]->{_id, title, "slug": slug.current}
  }`;

  const response = await fetch(buildQueryUrl(projectId, dataset, query));
  if (!response.ok) {
    throw new Error("Failed to load blog posts");
  }

  const json = await response.json();
  return json.result || [];
};

export const buildExcerpt = (post) => {
  if (post?.excerpt) return post.excerpt;
  const bodyText = post?.body
    ?.flatMap((block) => block?.children || [])
    ?.map((child) => child?.text || "")
    ?.join(" ")
    ?.trim();

  return bodyText ? `${bodyText.slice(0, 140)}${bodyText.length > 140 ? "..." : ""}` : "";
};

export const seedBlogPosts = [
  {
    _id: "seed-2bhk-flats-bhubaneswar",
    title: "Discover Elegant 2 BHK Premium Flats in Bhubaneswar",
    excerpt:
      "Explore why 2 BHK Premium Flats are in demand, the role of connectivity and appreciation, and how Gardenia offers premium living in Ghangapatna.",
    content: [
      "The real estate landscape of Bhubaneswar is evolving rapidly, with homebuyers increasingly looking for modern homes that offer comfort, convenience, and long-term value.",
      "Among the most sought-after residential options today are 2 BHK Flats in Bhubaneswar, especially for working professionals, growing families, and investors seeking a balance between affordability and luxury.",
      "With improved infrastructure, better connectivity, and upcoming township developments, the demand for 2 BHK Premium Flats is steadily rising across the city.",
      "Located in Ghangapatna, Bhubaneswar, Gardenia offers thoughtfully designed 2, 3, and 4 BHK apartments along with luxurious 5 BHK penthouses.",
    ],
    publishedAt: "2026-06-01T00:00:00.000Z",
    slug: { current: "discover-elegant-2-bhk-premium-flats-in-bhubaneswar" },
    featuredImage: {
      asset: { url: mockData.gallery[4]?.image || mockData.gallery[0]?.image },
    },
    categories: [{ _id: "cat-1", title: "2 BHK", slug: { current: "2-bhk" } }],
    author: { name: "The Gardenia", slug: { current: "the-gardenia" } },
  },
  {
    _id: "seed-3bhk-flats-bhubaneswar",
    title: "Premium 3 BHK Flats in Bhubaneswar with Top Amenities",
    excerpt:
      "A guide to 3 BHK living, premium amenities, growing connectivity, investment potential, and why Gardenia is a strong choice.",
    content: [
      "The demand for modern residential spaces is growing rapidly as more families look for comfort, convenience, and long-term value.",
      "Today, homebuyers are searching for homes that not only provide spacious interiors but also offer premium amenities and a better lifestyle.",
      "This is why 3 BHK Flats in Bhubaneswar have become one of the most preferred housing options for families, professionals, and investors alike.",
      "Gardenia combines spacious layouts, premium amenities, and a peaceful environment to create the ideal living destination.",
    ],
    publishedAt: "2026-06-01T00:00:00.000Z",
    slug: { current: "premium-3-bhk-flats-in-bhubaneswar-with-top-amenities" },
    featuredImage: {
      asset: { url: mockData.gallery[8]?.image || mockData.gallery[1]?.image },
    },
    categories: [{ _id: "cat-2", title: "3 BHK", slug: { current: "3-bhk" } }],
    author: { name: "The Gardenia", slug: { current: "the-gardenia" } },
  },
  {
    _id: "seed-4bhk-flats-bhubaneswar",
    title: "Luxury Living Starts with 4 BHK Flats in Bhubaneswar",
    excerpt:
      "Discover why 4 BHK luxury flats are becoming popular, the amenities buyers want, and the long-term value of premium homes.",
    content: [
      "Modern homebuyers are no longer searching for just a place to stay; they are looking for homes that provide comfort, luxury, convenience, and a better lifestyle.",
      "As Bhubaneswar continues to grow as a smart and rapidly developing city, the demand for premium residential spaces has increased significantly.",
      "This is why 4 BHK Flats in Bhubaneswar are becoming one of the top choices for families seeking spacious and elegant living spaces.",
      "Gardenia offers an exceptional residential experience designed for modern families seeking elegance, comfort, and convenience.",
    ],
    publishedAt: "2026-06-01T00:00:00.000Z",
    slug: { current: "luxury-living-starts-with-4-bhk-flats-in-bhubaneswar" },
    featuredImage: {
      asset: { url: mockData.gallery[3]?.image || mockData.gallery[2]?.image },
    },
    categories: [{ _id: "cat-3", title: "4 BHK", slug: { current: "4-bhk" } }],
    author: { name: "The Gardenia", slug: { current: "the-gardenia" } },
  },
  {
    _id: "seed-penthouse-bhubaneswar",
    title: "Discover Spacious 5 BHK Penthouse in Bhubaneswar",
    excerpt:
      "A closer look at penthouse living, privacy, luxury amenities, connectivity, and investment value in Bhubaneswar.",
    content: [
      "The demand for premium residential spaces is rapidly increasing as modern homebuyers seek comfort, elegance, and exclusivity.",
      "Among the most preferred luxury housing options today is the Penthouse For Sale in Bhubaneswar, offering unmatched living experiences with spacious interiors, stunning city views, and world-class amenities.",
      "Bhubaneswar has emerged as one of India’s fastest-growing smart cities, attracting professionals, entrepreneurs, and families who seek a better lifestyle.",
      "Gardenia’s premium residential offerings provide the ideal destination for elevated living in Bhubaneswar.",
    ],
    publishedAt: "2026-06-01T00:00:00.000Z",
    slug: { current: "discover-spacious-5-bhk-penthouse-in-bhubaneswar" },
    featuredImage: {
      asset: { url: mockData.gallery[1]?.image || mockData.gallery[0]?.image },
    },
    categories: [{ _id: "cat-4", title: "Penthouse", slug: { current: "penthouse" } }],
    author: { name: "The Gardenia", slug: { current: "the-gardenia" } },
  },
];
