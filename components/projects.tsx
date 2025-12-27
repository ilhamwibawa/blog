interface Project {
  name: string;
  description: string;
  story: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    npm?: string;
  };
}

const projects: Project[] = [
  {
    name: "MockLite",
    description:
      "Lightweight SQLite-based Mock Server with Faker.js Integration.",
    story:
      "A zero-setup, configuration-driven mock server designed to help frontend developers prototype locally without a real backend. It uses an in-memory SQLite database, auto-generates REST API routes based on a JSON config, and populates data using Faker.js.",
    technologies: ["TypeScript", "SQLite", "Faker.js", "Node.js"],
    links: {
      github: "https://github.com/ilhamwibawa/mocklite",
      npm: "https://www.npmjs.com/package/@mocklite/cli",
    },
  },
];

import { Github, ExternalLink, Terminal, Code2, Package } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-mono mb-4 border border-accent/20">
            <Terminal className="w-4 h-4" />
            <span>~/projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            <span className="text-primary">&gt;</span> ls ./projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            // A collection of side projects, experiments, and tools I&apos;ve
            built.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-16 text-center bg-muted/5">
            <div className="max-w-md mx-auto">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-2xl font-bold mb-3 font-mono">
                404: Projects Not Found
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                $ echo "Check back soon..."
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
              >
                {/* Window Header */}
                <div className="h-9 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-auto font-mono text-xs text-muted-foreground opacity-50">
                    bash
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View Source"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}

                      {project.links.npm && (
                        <a
                          href={project.links.npm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on NPM"
                        >
                          <Package className="w-5 h-5" />
                        </a>
                      )}

                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono text-xs text-muted-foreground border border-border/50">
                    <span className="text-primary mr-2">$</span>
                    cat story.txt
                    <br />
                    <span className="opacity-80 mt-1 block">
                      &gt; {project.story}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-medium font-mono border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
