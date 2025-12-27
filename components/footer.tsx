import { Terminal, Power, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-border py-12 px-6 bg-muted/5 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 text-primary font-bold">
              <Terminal className="w-5 h-5" />
              <span>system_shutdown.sh</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              // Thanks for visiting. This site is built with Next.js, Tailwind
              CSS, and a lot of coffee. No trackers, no ads, just code.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-foreground">
              ./navigation
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="#work"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                cd ~/work
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                cd ~/projects
              </a>
              <a
                href="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                cd ~/blog
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-foreground">
              ./connect
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/ilhamwibawa"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                ssh github
              </a>
              <a
                href="https://linkedin.com/in/ilhamwibawa"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                ssh linkedin
              </a>
              <a
                href="mailto:ilhiamwibawaa@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
              >
                mail -s "Hello"
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-1">
            <span>© 2025 Ilham Wibawa.</span>
            <span className="hidden md:inline">|</span>
            <span>MIT License</span>
          </p>
          <div className="flex items-center gap-2">
            <Power className="w-3 h-3" />
            <span>System Uptime: 99.99%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
