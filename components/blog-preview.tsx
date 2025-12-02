import Link from "next/link";
import { Button } from "./ui/button";
import { getAllPosts } from "@/lib/mdx";

export function BlogPreview() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  return (
    <section className="py-20 px-6 md:py-32">
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
