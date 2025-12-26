import { Terminal, ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="py-12 px-6 md:py-24 min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted/50 border border-border font-mono text-sm text-muted-foreground">
          <Terminal className="w-4 h-4" />
          <span>./init_sequence.sh</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight font-mono tracking-tighter">
          <span className="text-primary mr-4">&gt;</span>
          Building systems <br className="hidden md:block" />
          that <span className="bg-primary/10 px-2 text-primary">
            matter
          </span>.
        </h1>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div>
            <div className="prose prose-lg dark:prose-invert mb-10 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary font-mono font-bold">
                  const engineer =
                </span>{" "}
                I&apos;ve spent the last few years learning how to turn ideas
                into real systems. This is the story of that journey—the work
                I&apos;ve done, the things I&apos;ve built, and what I&apos;ve
                picked up along the way.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap font-mono">
              <a
                href="#work"
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all duration-200 font-medium flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border border-primary"
              >
                <span>sh ./view_work.sh</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/blog"
                className="group px-6 py-3 bg-background border-2 border-border text-foreground rounded-md hover:bg-muted transition-all duration-200 font-medium flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>cat ./thoughts.md</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block p-6 bg-card border-2 border-border rounded-xl font-mono text-sm shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex gap-2 mb-4 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>OS</span>
                <span className="text-foreground">macOS / Linux</span>
              </div>
              <div className="flex justify-between">
                <span>Shell</span>
                <span className="text-foreground">zsh / bash</span>
              </div>
              <div className="flex justify-between">
                <span>Editor</span>
                <span className="text-foreground">VS Code</span>
              </div>
              <div className="flex justify-between">
                <span>Stack</span>
                <span className="text-foreground">
                  <span className="text-blue-500">Typescript</span>
                  , <span className="text-blue-500">Python</span>
                  , <span className="text-blue-500">PHP</span>
                </span>
              </div>
              <div className="flex justify-between">
                <span>Uptime</span>
                <span className="text-green-500">99.9%</span>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-xs">
                <span className="text-primary">➜</span>{" "}
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
