"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Terminal, FileText, Filter, Hash } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
    <main className="min-h-screen bg-background font-mono selection:bg-primary/20">
      <Navigation />

      <section className="py-12 px-4 md:py-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
            <Terminal className="w-4 h-4" />
            <span>/var/www/html/blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary mr-2">$</span>
            ls -la ./knowledge_base
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            // A collection of technical articles, system designs, and engineering
            notes.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Filter by tag:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded text-xs border transition-all ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary/50 text-muted-foreground"
              }`}
            >
              *
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded text-xs border transition-all flex items-center gap-1 ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:border-primary/50 text-muted-foreground"
                }`}
              >
                <Hash className="w-3 h-3" />
                {tag}
              </button>
            ))}
          </div>
          <div className="text-xs text-muted-foreground">
            Total objects: {filteredPosts.length}
          </div>
        </div>

        {/* File List */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
          {/* List Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-muted/50 border-b border-border text-xs font-bold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-2 md:col-span-1">Perms</div>
            <div className="col-span-2 md:col-span-1">User</div>
            <div className="col-span-2 md:col-span-1">Size</div>
            <div className="col-span-3 md:col-span-2">Date</div>
            <div className="col-span-3 md:col-span-7">Name</div>
          </div>

          {loading ? (
            <div className="p-8 text-center text-muted-foreground animate-pulse">
              Loading file system...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-muted-foreground mb-2">Directory is empty.</p>
              <button
                onClick={() => setSelectedTag(null)}
                className="text-primary hover:underline text-sm"
              >
                cd .. (Clear filters)
              </button>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-muted/30 transition-colors group items-center text-sm"
                >
                  <div className="col-span-2 md:col-span-1 text-muted-foreground text-xs font-mono">
                    -rw-r--r--
                  </div>
                  <div className="col-span-2 md:col-span-1 text-muted-foreground text-xs">
                    ilham
                  </div>
                  <div className="col-span-2 md:col-span-1 text-muted-foreground text-xs">
                    {post.readTime}kb
                  </div>
                  <div className="col-span-3 md:col-span-2 text-muted-foreground text-xs">
                    {post.date}
                  </div>
                  <div className="col-span-3 md:col-span-7 font-medium group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                    <FileText className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="truncate">{post.title}</span>
                      </TooltipTrigger>

                      <TooltipContent>
                        {post.title}
                      </TooltipContent>
                    </Tooltip>
                    <span className="hidden md:inline-flex text-xs text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {post.tags.slice(0, 3).map((t) => `#${t}`).join(" ")}{post.tags.length > 3 && "..."}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
