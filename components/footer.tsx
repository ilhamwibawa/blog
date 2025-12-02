export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#work"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Work Experience
              </a>
              <a
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-semibold mb-4">About This Site</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with Next.js, React, and Tailwind CSS. Hosted on Vercel. No
              frameworks bloat, just clean code.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Crafted with care. © 2025</p>
        </div>
      </div>
    </footer>
  );
}
