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

const projects: Project[] = [
  {
    name: "Open Source CLI Tool",
    description:
      "A command-line tool that helps developers scaffold projects faster",
    story:
      "I got tired of doing the same setup steps for every new project, so I built this. It saved me hours and ended up helping a few other people too.",
    technologies: ["Node.js", "TypeScript", "Chalk", "Inquirer"],
    links: {
      github: "#",
    },
  },
  {
    name: "Personal Analytics Dashboard",
    description:
      "A dashboard to visualize and track personal metrics over time",
    story:
      "I wanted to understand my own productivity patterns. Built this to collect, analyze, and visualize data about how I spend my time.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    name: "API Rate Limiting Library",
    description: "A lightweight, distributed rate limiting library for Node.js",
    story:
      "Built this because I needed something flexible for a project. Made it open source and got some good feedback from the community.",
    technologies: ["Node.js", "Redis", "TypeScript"],
    links: {
      github: "#",
    },
  },
];

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
      </div>
    </section>
  );
}
