import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogPosts = posts.map((post) => ({
    url: `https://ilhamwibawa.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://ilhamwibawa.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ilhamwibawa.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
