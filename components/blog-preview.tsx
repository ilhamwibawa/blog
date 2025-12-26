import Link from "next/link";
import { Button } from "./ui/button";
import { getAllPosts } from "@/lib/mdx";
import { FileText, Calendar, Hash, ArrowRight, FolderOpen } from "lucide-react";

export function BlogPreview() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  return (
    <section className="py-20 px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-mono mb-4 border border-accent/20">
            <FolderOpen className="w-4 h-4" />
            <span>~/thoughts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            <span className="text-primary">&gt;</span> ls -la ./blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            // Thoughts on engineering, systems, and the craft of building
            software.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {recentPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-card border border-border hover:border-primary/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                    <FileText className="w-3 h-3" />
                    <span>{post.slug}.md</span>
                    <span className="text-border">|</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block group/link">
                    <h3 className="text-2xl font-bold mb-3 font-mono group-hover/link:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-muted/50 border border-border rounded text-muted-foreground font-mono flex items-center gap-1"
                      >
                        <Hash className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center self-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="p-3 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="font-mono bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/blog" className="flex items-center gap-2">
              <span>cd ./archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
