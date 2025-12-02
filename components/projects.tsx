interface Project {
  name: string;
  description: string;
  story: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="text-lg text-muted-foreground">
            Side projects and experiments. These are mostly things I built to
            solve my own problems or explore ideas.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="border border-dashed border-border rounded-lg p-16 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-3">Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                I&apos;m currently working on some exciting projects. Check back
                soon to see what I&apos;m building!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.story}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="text-sm text-primary hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-sm text-primary hover:underline"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
