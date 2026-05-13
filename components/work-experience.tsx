import { Terminal, Cpu, Network, Server, Code } from "lucide-react";

export interface Experience {
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

export const experiences: Experience[] = [
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
      {
        title: "AI Pentesting Platform",
        details:
          "Developing a next-generation automated AI pentesting platform. Leading the core platform architecture and frontend implementation to enable seamless security testing workflows.",
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
      "Specialized in the development and enhancement of mission-critical internal back-office applications supporting core loan operations. Collaborated on cross-team engineering initiatives to standardize the frontend architecture.",
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
      "Developed and shipped new features for highly crucial internal back-office applications, streamlining daily loan management operations and administrative workflows.",
      "Collaborated closely with the broader frontend engineering team to architect and build a scalable, React-based Design System from scratch.",
      "Contributed to UI component standardization efforts aimed at improving code reusability, development speed, and visual consistency across the company's internal tools.",
    ],
  },

  {
    company: "Recommend Group (Sejasa.com, Recommend.my, Helpdee.com)",
    role: "Frontend Developer",
    period: "Mar 2020 - Dec 2021",
    status: "TERMINATED",
    pid: 8000,
    description:
      "Focused exclusively on client-side engineering across multiple marketplace platforms. Spearheaded UI/UX improvements and drove the technical migration from legacy architectures to modern, reactive frameworks.",
    technologies: [
      "JavaScript",
      "Vue.js",
      "jQuery",
      "Ruby on Rails",
      "SCSS",
      "Git",
    ],
    highlights: [
      "Engineered a highly dynamic client-side form rendering engine that seamlessly interpreted configurations from an admin form builder, drastically reducing the development time for complex, service-specific request forms.",
      "Played a key role in the architectural migration from a traditional, jQuery-based codebase to Vue.js, establishing a scalable and reactive modern frontend ecosystem.",
      "Continuously delivered UI/UX enhancements and maintained high-traffic frontend applications across three major regional platforms: Sejasa.com, Recommend.my, and Helpdee.com.",
    ],
  },
  {
    company: "Moya Hexagon",
    role: "Web Developer",
    period: "Jan 2018 - Mar 2020",
    status: "TERMINATED",
    pid: 443,
    description:
      "Acted as the primary full-stack developer managing the end-to-end delivery of diverse client projects. Demonstrated strong versatility by successfully building and shipping a wide variety of web applications tailored to complex business requirements.",
    technologies: ["PHP", "Laravel", "JavaScript", "jQuery"],
    highlights: [
      "Engineered multiple high-complexity web platforms from scratch, including custom e-commerce systems, corporate portals, and feature-rich Learning Management Systems (LMS) with live video streaming capabilities.",
      "Took full ownership of the software development lifecycle as a solo developer for most projects, while collaborating effectively within agile teams for large-scale enterprise solutions.",
      "Consistently delivered scalable and robust backend architectures alongside responsive user interfaces using the PHP/Laravel ecosystem.",
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
