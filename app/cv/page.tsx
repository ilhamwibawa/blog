"use client";

import { useEffect, useState } from "react";
import { Terminal, Printer, ArrowLeft, Mail, Github, Linkedin, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import { experiences } from "@/components/work-experience";
import { projects } from "@/components/projects";

export default function CVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-mono print:bg-white print:text-black print:min-h-0 py-12 px-6 print:py-0 print:px-0">
      <div className="max-w-4xl mx-auto print:max-w-none print:mx-0">
        
        {/* Navigation & Actions (Hidden in Print) */}
        <div className="flex justify-between items-center mb-12 print:hidden">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>cd ..</span>
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all font-medium border border-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
          >
            <Printer className="w-4 h-4" />
            <span>print ./cv.pdf</span>
          </button>
        </div>

        <div className="cv-container print:bg-white print:text-black">
          {/* Header */}
          <header className="border-b-2 border-border print:border-black/20 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight print:text-3xl print:mb-2">
              <span className="text-primary print:text-black mr-2">&gt;</span> 
              Ilham Wibawa
            </h1>
            <p className="text-xl text-muted-foreground mb-6 print:text-lg print:text-black/80 print:mb-4">
              Software Engineer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground print:text-xs print:text-black/70 print:grid-cols-2 print:gap-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 print:w-3 print:h-3" />
                <a href="https://ilhamwibawa.vercel.app" target="_blank" rel="noreferrer" className="hover:text-primary print:text-black">ilhamwibawa.vercel.app</a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 print:w-3 print:h-3" />
                <a href="https://github.com/ilhamwibawa" target="_blank" rel="noreferrer" className="hover:text-primary print:text-black">github.com/ilhamwibawa</a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 print:w-3 print:h-3" />
                <a href="https://linkedin.com/in/ilhamwibawa" target="_blank" rel="noreferrer" className="hover:text-primary print:text-black">linkedin.com/in/ilhamwibawa</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 print:w-3 print:h-3" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
          </header>

          {/* Summary / Profile */}
          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 print:text-xl print:mb-2">
              <Terminal className="w-5 h-5 text-primary print:text-black" />
              <span>~/profile</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed print:text-black/80 print:text-sm print:leading-normal">
              Software engineer specializing in building scalable systems, modern web applications, and comprehensive backend architectures. Experienced in full-stack development, blockchain technologies, and turning complex requirements into robust, maintainable solutions.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 print:text-xl print:mb-4">
              <Terminal className="w-5 h-5 text-primary print:text-black" />
              <span>~/experience</span>
            </h2>
            
            <div className="space-y-8 print:space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="print:break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 print:flex-row print:justify-between print:mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground print:text-black print:text-base">
                        {exp.role} <span className="text-primary print:text-black/60">@ {exp.company}</span>
                      </h3>
                    </div>
                    <div className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded border border-border/50 print:bg-transparent print:border-none print:p-0 print:text-black/70 print:text-xs shrink-0">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed print:text-black/80 print:text-[13px] print:mb-2 print:leading-snug">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-3 print:mb-2">
                    {exp.highlights.slice(0, 3).map((highlight, hIdx) => {
                       const isString = typeof highlight === "string";
                       const title = isString ? "" : highlight.title;
                       const details = isString ? highlight : highlight.details;
                       
                       return (
                         <li key={hIdx} className="text-sm text-muted-foreground flex gap-2 items-start print:text-black/80 print:text-[13px]">
                           <span className="text-primary shrink-0 font-mono print:text-black/50">&gt;</span>
                           <span>
                             {!isString && <strong className="text-foreground print:text-black font-semibold mr-1">{title}:</strong>}
                             {details}
                           </span>
                         </li>
                       );
                    })}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {exp.technologies.slice(0, 8).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-1.5 py-0.5 bg-muted/50 border border-border rounded text-muted-foreground font-mono print:bg-white print:border-black/20 print:text-black/70">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 8 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground print:text-black/70">
                        +{exp.technologies.length - 8} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 print:text-xl print:mb-4">
              <Terminal className="w-5 h-5 text-primary print:text-black" />
              <span>~/projects</span>
            </h2>
            
            <div className="space-y-6 print:space-y-4">
              {projects.map((project, idx) => (
                <div key={idx} className="print:break-inside-avoid">
                  <div className="mb-2 print:mb-1">
                    <h3 className="text-lg font-bold text-foreground print:text-black print:text-base mb-1">
                      {project.name}
                    </h3>
                    <div className="flex gap-3">
                      {project.links.demo && (
                        <a href={project.links.demo} className="text-xs text-muted-foreground hover:text-primary print:text-black/70 print:after:content-['('attr(href)')'] print:after:ml-1 print:after:text-[10px] flex items-center gap-1">
                          <span className="text-primary font-mono print:hidden">&gt;</span> Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} className="text-xs text-muted-foreground hover:text-primary print:text-black/70 print:after:content-['('attr(href)')'] print:after:ml-1 print:after:text-[10px] flex items-center gap-1">
                          <span className="text-primary font-mono print:hidden">&gt;</span> Repo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed print:text-black/80 print:text-[13px] print:leading-snug print:mb-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-primary font-mono print:bg-white print:border-black/20 print:text-black/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Summary */}
          <section className="print:break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 print:text-xl print:mb-2">
              <Terminal className="w-5 h-5 text-primary print:text-black" />
              <span>~/skills</span>
            </h2>
            <div className="text-sm text-muted-foreground leading-relaxed print:text-black/80 print:text-[13px] print:leading-normal">
              <strong>Languages:</strong> TypeScript, JavaScript, Python, PHP, SQL <br />
              <strong>Frontend:</strong> React, Next.js, Vue.js, TailwindCSS, Styled Components <br />
              <strong>Backend:</strong> Node.js, HonoJS, Express, FastAPI, Laravel, GraphQL <br />
              <strong>Infra/Tools:</strong> Docker, Git, PostgreSQL, Hyperledger Fabric/Besu
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
