export function Hero() {
  return (
    <section className="py-16 px-6 md:py-40 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
          Hey, I&apos;m an engineer who builds things that matter.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance max-w-2xl">
          I&apos;ve spent the last few years learning how to turn ideas into
          real systems. This is the story of that journey—the work I&apos;ve
          done, the things I&apos;ve built, and what I&apos;ve picked up along
          the way. If you&apos;re looking to understand who I am and how I work,
          you&apos;re in the right place.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#work"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all duration-200 font-medium hover:scale-105"
          >
            See my work
          </a>
          <a
            href="/blog"
            className="px-6 py-3 border border-border hover:bg-muted rounded-lg transition-all duration-200 font-medium hover:scale-105"
          >
            Read my thoughts
          </a>
        </div>
      </div>
    </section>
  );
}
