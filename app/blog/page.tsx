"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: number;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from API route
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [blogPosts]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return blogPosts;
    return blogPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag, blogPosts]);

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="py-20 px-6 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Thoughts on engineering, systems, and the craft of building
              software.
            </p>
          </div>

          {/* Tag Filter */}
          <div className="mb-12 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Blog Posts List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="border border-dashed border-border rounded-lg p-16 text-center">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-3">
                  No posts published yet
                </h2>
                <p className="text-muted-foreground mb-4">
                  I&apos;m working on sharing my thoughts about engineering,
                  systems design, and software development best practices.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Sign up for updates or check back soon!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="border-b border-border pb-12 last:border-b-0"
                  >
                    <Link href={`/blog/${post.slug}`} className="group">
                      <h2 className="text-3xl font-bold mb-3 group-hover:text-foreground/50 transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                      <time className="text-sm text-muted-foreground">
                        {post.date}
                      </time>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No posts found with that tag.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
