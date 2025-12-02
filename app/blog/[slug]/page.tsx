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
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />

        <article className="py-20 px-6 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12 pb-12 border-b border-border">
              <Link
                href="/blog"
                className="text-sm text-primary hover:underline mb-6 inline-block"
              >
                ← Back to all posts
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime} min read</span>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* MDX Content */}
            <div
              className="
              prose prose-invert prose-xl max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mb-8
              prose-h1:mt-12 prose-h2:text-3xl prose-h2:mb-6
              prose-h2:mt-10 prose-h3:text-2xl prose-h3:mb-4
              prose-h3:mt-8 prose-p:text-lg prose-p:text-foreground/90
              prose-p:leading-[1.8] prose-p:mb-6 prose-a:text-accent
              prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-a:underline-offset-4 prose-strong:text-foreground prose-strong:font-semibold
              prose-code:text-foreground prose-code:text-sm prose-code:font-mono
              prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50
              prose-pre:rounded-lg prose-pre:p-6 prose-pre:my-8 prose-ul:text-lg
              prose-ul:text-foreground/90 prose-ul:leading-[1.8] prose-ul:my-6
              prose-ul:space-y-3 prose-ol:text-lg prose-ol:text-foreground/90
              prose-ol:leading-[1.8] prose-ol:my-6 prose-ol:space-y-3 prose-li:my-2
              prose-li::marker:text-accent/80 prose-blockquote:border-l-4 prose-blockquote:border-accent
              prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic
              prose-blockquote:text-foreground/80 prose-blockquote:bg-muted/30 prose-blockquote:rounded-r
              prose-blockquote:my-8 prose-table:w-full prose-table:border-collapse prose-table:my-8
              prose-th:bg-muted prose-th:px-4 prose-th:py-3 prose-th:text-left
              prose-th:font-semibold prose-th:text-foreground prose-th:border prose-th:border-border
              prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-border
              prose-td:text-foreground/90 prose-tr:border-border
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

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex gap-4">
                <Link
                  href="/blog"
                  className="px-4 py-2 border border-border hover:bg-muted rounded-lg transition-colors text-sm"
                >
                  ← Back to blog
                </Link>
              </div>
            </footer>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
