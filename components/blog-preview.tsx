import Link from "next/link";
import { Button } from "./ui/button";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const recentPosts: BlogPost[] = [
  {
    slug: "building-scalable-systems",
    title: "Building Scalable Systems: Lessons from the Trenches",
    excerpt:
      "Thoughts on how to build systems that don't crumble when you least expect it. Covering architecture decisions, monitoring, and debugging in production.",
    date: "Dec 1, 2024",
    tags: ["architecture", "backend", "systems"],
  },
  {
    slug: "debugging-typescript",
    title: "Debugging TypeScript: Tips I Wish I Knew Earlier",
    excerpt:
      "A practical guide to debugging TypeScript applications. We'll cover common gotchas, useful tools, and mental models that make debugging easier.",
    date: "Nov 24, 2024",
    tags: ["typescript", "debugging", "frontend"],
  },
  {
    slug: "shipping-fast",
    title: "The Art of Shipping: How to Move Fast Without Breaking Things",
    excerpt:
      "Speed matters, but so does stability. Here's how I think about shipping quickly while maintaining code quality.",
    date: "Nov 15, 2024",
    tags: ["productivity", "engineering", "practices"],
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 px-6 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Posts</h2>
          <p className="text-lg text-muted-foreground">
            Thoughts on engineering, systems, and the craft of building
            software.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary/50 transition-colors">
                  {post.title}
                </h3>
              </Link>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                <time className="text-sm text-muted-foreground">
                  {post.date}
                </time>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-background border border-border rounded-full text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <Button size="lg" asChild>
          <Link href="/blog">Read all posts →</Link>
        </Button>
      </div>
    </section>
  );
}
