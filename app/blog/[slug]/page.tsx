import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/json-ld";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";
import { Mermaid } from "@/components/mermaid";
import {
  Terminal,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  FileText,
} from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Ilham Wibawa" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Ilham Wibawa"],
      tags: post.tags,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@ilhamwibawa",
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Ilham Wibawa",
      url: "https://ilhamwibawa.com",
    },
    keywords: post.tags.join(", "),
    url: `https://ilhamwibawa.com/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-background text-foreground font-mono selection:bg-primary/20">
        <Navigation />

        <article className="py-12 px-4 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb / Path */}
            <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground border-b border-border pb-4">
              <Terminal className="w-4 h-4" />
              <Link href="/" className="hover:text-primary transition-colors">
                ~
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                blog
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate">
                {post.slug}.md
              </span>
            </div>

            {/* Header Block */}
            <header className="mb-12 bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex flex-wrap gap-4 mb-6 text-xs text-muted-foreground uppercase tracking-wider font-bold">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Markdown
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-medium flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* MDX Content */}
            <div
              className="
              prose prose-invert prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:font-mono
              prose-h1:text-3xl prose-h1:border-b prose-h1:border-border prose-h1:pb-2
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-foreground/90 prose-p:leading-relaxed
              prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-card prose-pre:border prose-pre:border-border
              prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:bg-muted/10 prose-blockquote:not-italic
              prose-li:marker:text-primary
              "
            >
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
                components={{
                  Mermaid,
                }}
              />
            </div>

            {/* Footer / Navigation */}
            <footer className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <Link
                href="/blog"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>cd ..</span>
              </Link>

              <div className="text-xs text-muted-foreground">End of file</div>
            </footer>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
