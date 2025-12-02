"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  readTime: number;
}

// Sample blog posts with full content
const blogPosts: Record<string, BlogPost> = {
  "building-scalable-systems": {
    slug: "building-scalable-systems",
    title: "Building Scalable Systems: Lessons from the Trenches",
    date: "Dec 1, 2024",
    tags: ["architecture", "backend", "systems"],
    readTime: 8,
    content: `
# Building Scalable Systems: Lessons from the Trenches

When I started my career, I thought scaling was just about throwing more servers at the problem. Turns out, it's way more nuanced than that. After working on systems that needed to handle millions of requests, I've learned a few things worth sharing.

## Start with the Right Architecture

The biggest mistake I see teams make is over-engineering from the start. You don't need a microservice for everything on day one. I've watched teams spend months building a distributed system only to realize they could have handled their load with a well-designed monolith.

What I've learned:
- Start simple and measure before you optimize
- Understand your actual bottlenecks before redesigning
- Over-engineering today creates technical debt tomorrow

## Monitoring is Non-Negotiable

You can't fix what you can't see. I once spent 6 hours debugging a production issue that would have taken 10 minutes if we had better monitoring. That's when I learned: **monitoring is not optional, it's foundational**.

Key things to monitor:
- Request latency at different percentiles (p50, p95, p99)
- Database query performance
- Error rates and error types
- Resource utilization (CPU, memory, disk)

## Caching is Your Best Friend

I've seen database query optimization take systems from barely handling load to handling 10x traffic without changes. The secret? Smart caching.

But here's the thing: caching is hard. Cache invalidation is famously one of the hardest problems in computer science. My approach:

1. Cache aggressively for read-heavy data
2. Keep TTLs reasonable (don't cache forever)
3. Have a strategy to manually invalidate when needed
4. Monitor cache hit rates

## Async Everything

One of the biggest wins I've had was moving slow operations off the critical path. Processing that photo? Queue it. Sending that email? Queue it. The user doesn't need to wait for everything to complete before we return.

This one change dropped our p95 latency from 2 seconds to 200ms. Game changer.

## The Real Lesson

Scaling isn't about technology choices. It's about understanding your system deeply enough to make informed trade-offs. Every architecture decision is a trade-off. Knowing what you're trading away is what separates good systems from mediocre ones.
    `,
  },
  "debugging-typescript": {
    slug: "debugging-typescript",
    title: "Debugging TypeScript: Tips I Wish I Knew Earlier",
    date: "Nov 24, 2024",
    tags: ["typescript", "debugging", "frontend"],
    readTime: 6,
    content: `
# Debugging TypeScript: Tips I Wish I Knew Earlier

I used to think TypeScript was just about catching errors at compile time. Turns out, it's also an incredible debugging tool if you know how to use it properly.

## Use the Type System to Your Advantage

Instead of console logging types, let TypeScript yell at you. This might sound obvious, but I didn't truly understand this until I started treating the compiler as my debugging partner.

When something doesn't make sense, stop and think: "What type does TypeScript think this is?" Usually, the answer to that question is where the bug is.

## Discriminated Unions Are Your Friend

One of my favorite TypeScript features is discriminated unions. They're perfect for state management and error handling.

\`\`\`typescript
type Result<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
  | { status: 'loading' };
\`\`\`

This pattern makes it impossible to forget to handle one of the states. The compiler literally won't let you.

## Know Your Debugger

The browser debugger and Node debugger are incredible tools. I spent years not using them properly. Here's what changed for me:

- Breakpoints with conditions
- Stepping through code line by line
- The console API (more on this in a second)
- Logpoints (set logs without modifying code)

## Stop Console Logging, Start Using the Debugger

I'm serious. If you're debugging with \`console.log\`, you're working harder than you need to. Set a breakpoint, use the console in the debugger to inspect values.

The debugger console has full access to all variables in scope. You can even execute functions and see their results in real time.

## Use Never for Exhaustiveness Checks

This is a cool pattern I learned that catches cases you might forget to handle:

\`\`\`typescript
type Status = 'pending' | 'success' | 'error';

function handle(status: Status): string {
  switch(status) {
    case 'pending': return 'Waiting...';
    case 'success': return 'Done!';
    // If you forget 'error', TypeScript will complain
    default: const _exhaustive: never = status; return _exhaustive;
  }
}
\`\`\`

## The Biggest Thing I Wish I Knew Earlier

TypeScript's error messages seem cryptic at first, but they're trying to tell you something important. Take time to read them carefully. The answer is almost always in the error message.
    `,
  },
  "shipping-fast": {
    slug: "shipping-fast",
    title: "The Art of Shipping: How to Move Fast Without Breaking Things",
    date: "Nov 15, 2024",
    tags: ["productivity", "engineering", "practices"],
    readTime: 7,
    content: `
# The Art of Shipping: How to Move Fast Without Breaking Things

There's a stereotype that startups are chaotic and move fast while breaking things. My experience? The successful ones move fast AND keep things stable. Here's how.

## Define What Done Looks Like

This is critical. I've seen teams ship incomplete features because they didn't agree on what "done" meant.

Before you start coding, write down:
- What's the minimum viable version?
- What can ship in v2?
- What would we never ship without?

This clarity prevents endless polish and scope creep.

## Test the Critical Paths

You can't test everything. You can test what matters. For most features, that's:
- The happy path (does it work?)
- The most common error case (does it handle that?)
- The edge case that confused users before

Perfect is the enemy of shipped. I'd rather ship something with 70% test coverage today than 100% coverage next month.

## Monitor From Day One

This can't be overstated: you cannot ship something to production without monitoring it. Not optional. Not "we'll add it later."

Set up:
- Error tracking
- Performance monitoring
- Feature flags (for safe rollbacks)

I shipped a feature once without feature flags. It broke for 30% of users. With feature flags, I could have rolled it back in seconds instead of minutes.

## Ship Small Increments

Instead of working for 2 weeks and shipping one massive change, ship smaller changes more frequently. Each change is:
- Easier to review
- Faster to deploy
- Easier to debug if something breaks
- Better at getting user feedback

## The Confidence Factor

Here's what I've noticed: shipping fast isn't actually about how hard you work. It's about how much you can be confident in your changes. And confidence comes from:

1. Good tests
2. Good monitoring
3. Automated deployments
4. Feature flags
5. Easy rollbacks

Build these fundamentals and suddenly you can move fast without fear.

## Real Talk

Moving fast doesn't mean skipping important steps. It means eliminating wasted effort. It means knowing which corners are safe to cut and which ones aren't. It means being intentional about trade-offs.

The teams I've seen consistently ship fast and stay stable? They're not superhuman. They've just built systems that make it hard to fail.
    `,
  },
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Handle async params
  const resolvedParams = React.use(params);
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-accent hover:underline">
              Back to blog →
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <article className="py-20 px-6 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12 pb-12 border-b border-border">
            <Link
              href="/blog"
              className="text-sm text-accent hover:underline mb-6 inline-block"
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

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-6 mb-3">
                    {line.slice(4)}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li
                    key={i}
                    className="ml-4 text-muted-foreground leading-relaxed"
                  >
                    {line.slice(2)}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="my-4" />;
              }
              if (line.startsWith("```")) {
                return null;
              }
              return (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {line}
                </p>
              );
            })}
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
  );
}

import React from "react";
