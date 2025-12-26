import { Terminal, Cpu, Network, Server, Code } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  highlights:
    | Array<{
        title: string;
        details: string;
      }>
    | string[];
  status: "RUNNING" | "TERMINATED";
  pid: number;
}

const experiences: Experience[] = [
  {
    company: "SmartM2M Co., Ltd.",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    status: "RUNNING",
    pid: 8080,
    description:
      "At SmartM2M, I lead the design and development of high-impact systems across blockchain, cybersecurity, and AI. I focus on building scalable architectures, crafting clean and maintainable frontend systems, and delivering end-to-end features that directly support enterprise-level clients. My work spans frontend engineering, backend services, data modeling, and emerging technologies such as blockchain networks and ontology-driven AI.",
    technologies: [
      "ReactJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "HonoJS",
      "Express",
      "GraphQL",
      "TailwindCSS",
      "Python",
      "Docker",
      "Hyperledger Fabric",
      "Hyperledger Besu",
    ],
    highlights: [
      {
        title: "Blockchain-as-a-Service (Hyperledger Fabric)",
        details:
          "Designed the entire frontend architecture for a Fabric-based BaaS platform. Built a modular interface to manage channels, peers, identities, and chaincodes, ensuring seamless integration with backend orchestration services.",
      },
      {
        title: "Security Operations Center (SOC) Platform",
        details:
          "Architected the frontend for a next-generation SOC platform. Defined the UI/UX flow, data models, and real-time dashboards for alerts, asset intelligence, monitoring, and analytics.",
      },
      {
        title: "AI Ontology System for Manufacturing",
        details:
          "Delivered the platform end-to-end — from backend API (HonoJS + TypeScript) to frontend workflows. Built ontology tools, knowledge graph visualizations, and ingestion pipelines for manufacturing data.",
      },
      {
        title: "Blockchain-as-a-Service (Hyperledger Besu)",
        details:
          "Developed a fullstack Besu-based BaaS platform enabling users to create private networks, manage nodes, configure consensus (IBFT2/QBFT), and monitor network health through a clean, intuitive UI.",
      },
    ],
  },
  {
    company: "KoinWorks",
    role: "Frontend Engineer",
    period: "2021 - 2022",
    status: "TERMINATED",
    pid: 3000,
    description:
      "Focused on developing and improving internal back-office web applications supporting loan operations, administrative workflows, and internal management tools. Contributed to UI/UX enhancements and helped strengthen the company’s design system initiative.",
    technologies: [
      "PHP",
      "JavaScript",
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "Laravel",
      "Vuetify",
      "styled-components",
      "CSS",
      "Git",
    ],
    highlights: [
      "Maintained and enhanced internal back-office apps for loan management and administrative processes.",
      "Developed management interfaces used daily by operational and support teams.",
      "Contributed to the company&apos;s design system and component standardization efforts.",
      "Implemented responsive UI components, improving usability across multiple internal tools.",
    ],
  },

  {
    company: "Recommend Group (Sejasa.com, Recommend.my, Helpdee.com)",
    role: "Frontend Developer",
    period: "Mar 2020 - Dec 2021",
    status: "TERMINATED",
    pid: 8000,
    description:
      "Maintained and improved client-side applications across multiple marketplace platforms. Developed core features including form generation, provider profiles, and UI enhancements while supporting a gradual migration to modern frontend tooling.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "jQuery",
      "Ruby on Rails",
      "SCSS",
      "Git",
    ],
    highlights: [
      "Maintained frontend applications across Sejasa.com, Recommend.my, and Helpdee.com.",
      "Built dynamic form generator system for service request workflows.",
      "Developed provider profile pages and implemented new frontend UI designs.",
      "Worked with Ruby on Rails templates (.rb, .slim) and supported migration to Vue.js.",
    ],
  },
  {
    company: "Moya Hexagon",
    role: "Web Developer",
    period: "Jan 2018 - Mar 2020",
    status: "TERMINATED",
    pid: 443,
    description:
      "Served as a full-stack developer responsible for maintaining, extending, and improving Laravel-based web applications. Worked on both backend API development and frontend implementation to support business operations.",
    technologies: ["PHP", "Laravel", "JavaScript", "jQuery"],
    highlights: [
      "Maintained and enhanced existing PHP/Laravel web applications.",
      "Built RESTful APIs and implemented frontend interfaces within the Laravel ecosystem.",
      "Handled end-to-end development from backend logic to UI implementation.",
      "Managed feature development, bug fixing, and long-term application maintenance.",
    ],
  },
  {
    company: "PT Dycode Cominfotech Development",
    role: "Web Developer Intern",
    period: "Jul 2017 - Sep 2017",
    status: "TERMINATED",
    pid: 80,
    description:
      "Built custom WordPress-based solutions including WooCommerce features and fully responsive themes. Developed hands-on skills in frontend implementation and e-commerce customization.",
    technologies: ["WordPress", "PHP", "WooCommerce", "JavaScript", "CSS"],
    highlights: [
      "Developed WooCommerce e-commerce features with custom functionality.",
      "Created responsive WordPress themes entirely from scratch.",
      "Gained experience collaborating in a professional software development environment.",
    ],
  },
];

export function WorkExperience() {
  return (
    <section id="work" className="py-16 px-6 md:py-24 bg-muted/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 border border-primary/20">
            <Cpu className="w-4 h-4" />
            <span>./career_log.txt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            <span className="text-primary">&gt;</span> tail -f career.log
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            // A chronological log of my professional experience, key
            contributions, and system architectures I&apos;ve designed.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-background ${
                  exp.status === "RUNNING"
                    ? "bg-green-500 animate-pulse"
                    : "bg-muted-foreground"
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold font-mono">{exp.role}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded border font-mono ${
                        exp.status === "RUNNING"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      PID: {exp.pid}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Server className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                <span className="font-mono text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded border border-border self-start">
                  {exp.period}
                </span>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/30 transition-colors">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-bold font-mono mb-3 text-foreground flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span>Process Output:</span>
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-3 items-start group"
                      >
                        <span className="text-primary shrink-0 mt-1 font-mono">
                          &gt;
                        </span>
                        {typeof highlight === "string" ? (
                          highlight
                        ) : (
                          <div>
                            <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                              {highlight.title}
                            </p>
                            <p className="leading-relaxed mt-1">
                              {highlight.details}
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-mono text-muted-foreground mb-3 flex items-center gap-2">
                    <Network className="w-3 h-3" />
                    Dependencies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-muted/50 border border-border rounded text-muted-foreground font-mono hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
