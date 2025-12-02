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
}

const experiences: Experience[] = [
  {
    company: "SmartM2M Co., Ltd.",
    role: "Senior Software Engineer",
    period: "2022 – Present",
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
    <section id="work" className="py-16 px-6 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I&apos;ve Worked
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is where I&apos;ve spent my time and what I&apos;ve built.
            These aren&apos;t just jobs—they&apos;re the places where I actually
            learned how to engineer systems.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-accent pl-6 md:pl-8 pb-8 hover:border-accent/80 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 text-foreground">
                  What I actually did:
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                    >
                      <span className="text-primary shrink-0">→</span>
                      {typeof highlight === "string" ? (
                        highlight
                      ) : (
                        <div>
                          <p className="font-medium text-foreground">
                            {highlight.title}
                          </p>
                          <p className="leading-relaxed">{highlight.details}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-background border border-border rounded-full text-muted-foreground hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
