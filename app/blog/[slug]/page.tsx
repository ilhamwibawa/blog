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
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Navigation />

        <article className="py-12 px-4 md:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto border-x border-dashed border-border/40 min-h-screen px-6 md:px-12 bg-background">
            {/* Breadcrumb / Path */}
            <div className="mb-12 flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-muted-foreground transition-colors font-mono">
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
            </div>

            {/* Header Block */}
            <header className="mb-12 md:mb-16 border-b border-dashed border-border/40 pb-8">
              <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted-foreground font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight font-mono text-foreground group">
                <span className="text-primary mr-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  &gt;_
                </span>
                {post.title}
                <span className="animate-pulse ml-1 inline-block w-3 h-6 bg-primary/40 align-middle"></span>
              </h1>

              <div className="flex flex-wrap gap-2 font-mono">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs border border-primary/20 rounded-md text-primary/80 bg-primary/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* MDX Content */}
            <div
              className="
              prose prose-neutral dark:prose-invert prose-lg md:prose-xl max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:font-mono
              prose-h1:text-3xl prose-h1:border-b-0
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-bold prose-h2:text-primary/90
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-bold
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border/50 prose-pre:p-4 prose-pre:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-secondary/10 prose-blockquote:py-2 prose-blockquote:pl-6 prose-blockquote:not-italic prose-blockquote:text-muted-foreground
              prose-li:marker:text-primary/50
              prose-img:rounded-lg prose-img:border prose-img:border-border/50
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
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
            <footer className="mt-20 pt-10 border-t border-dashed border-border/40 flex justify-between items-center font-mono">
              <Link
                href="/blog"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                title="cd .."
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>cd ..</span>
              </Link>
              <div className="text-xs text-muted-foreground/50">EOF</div>
            </footer>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
