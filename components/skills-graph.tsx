"use client";

import { useState, useRef, useEffect } from "react";
import { Cpu } from "lucide-react";

interface SkillNode {
  id: string;
  label: string;
  x: number; // 0-100
  y: number; // 0-100
  category: "frontend" | "backend" | "devops" | "core" | "styling";
}

interface SkillEdge {
  from: string;
  to: string;
}

const nodes: SkillNode[] = [
  // Core
  { id: "git", label: "Git", x: 50, y: 5, category: "core" },
  { id: "js", label: "JavaScript", x: 40, y: 15, category: "core" },
  { id: "ts", label: "TypeScript", x: 40, y: 30, category: "core" },
  { id: "python", label: "Python", x: 70, y: 15, category: "core" },
  { id: "php", label: "PHP", x: 90, y: 15, category: "core" },

  // Frontend
  { id: "jquery", label: "jQuery", x: 25, y: 25, category: "frontend" },
  { id: "react", label: "React", x: 30, y: 50, category: "frontend" },
  { id: "next", label: "Next.js", x: 30, y: 70, category: "frontend" },
  { id: "vue", label: "Vue.js", x: 10, y: 50, category: "frontend" },
  { id: "nuxt", label: "NuxtJS", x: 10, y: 70, category: "frontend" },

  // Styling
  { id: "css", label: "CSS", x: 15, y: 35, category: "styling" },
  { id: "tailwind", label: "Tailwind", x: 5, y: 25, category: "styling" },
  { id: "sass", label: "Sass/Less", x: 5, y: 45, category: "styling" },
  { id: "styled", label: "Styled Comp", x: 20, y: 85, category: "styling" },

  // Backend
  { id: "node", label: "Node.js", x: 55, y: 45, category: "backend" },
  { id: "hono", label: "HonoJS", x: 55, y: 65, category: "backend" },
  { id: "fastapi", label: "FastAPI", x: 70, y: 35, category: "backend" },
  { id: "laravel", label: "Laravel", x: 90, y: 35, category: "backend" },
  { id: "wordpress", label: "WordPress", x: 90, y: 55, category: "backend" },
  { id: "woo", label: "WooCommerce", x: 90, y: 75, category: "backend" },
  { id: "graphql", label: "GraphQL", x: 65, y: 85, category: "backend" },
  { id: "sql", label: "SQL", x: 75, y: 55, category: "backend" },
  { id: "postgres", label: "PostgreSQL", x: 75, y: 75, category: "backend" },

  // DevOps
  { id: "docker", label: "Docker", x: 55, y: 85, category: "devops" },
];

const edges: SkillEdge[] = [
  // Core connections
  { from: "git", to: "js" }, // Git is fundamental
  { from: "js", to: "ts" },
  { from: "js", to: "jquery" },

  // Frontend connections
  { from: "ts", to: "react" },
  { from: "ts", to: "vue" },
  { from: "react", to: "next" },
  { from: "vue", to: "nuxt" },

  // Styling connections
  { from: "css", to: "tailwind" },
  { from: "css", to: "sass" },
  { from: "react", to: "styled" },
  { from: "react", to: "tailwind" },
  { from: "vue", to: "tailwind" },

  // Backend connections
  { from: "ts", to: "node" },
  { from: "node", to: "hono" },
  { from: "python", to: "fastapi" },
  { from: "php", to: "laravel" },
  { from: "php", to: "wordpress" },
  { from: "wordpress", to: "woo" },

  // Data/Infra connections
  { from: "node", to: "docker" },
  { from: "fastapi", to: "docker" },
  { from: "laravel", to: "docker" },
  { from: "node", to: "sql" },
  { from: "python", to: "sql" },
  { from: "php", to: "sql" },
  { from: "sql", to: "postgres" },
  { from: "node", to: "graphql" },
];

export function SkillsGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    if (hoveredNode === nodeId) return true;
    return edges.some(
      (edge) =>
        (edge.from === hoveredNode && edge.to === nodeId) ||
        (edge.from === nodeId && edge.to === hoveredNode)
    );
  };

  const isDimmed = (nodeId: string) => {
    if (!hoveredNode) return false;
    return !isConnected(nodeId);
  };

  // Helper to generate orthogonal path
  const getPath = (x1: number, y1: number, x2: number, y2: number) => {
    const midY = y1 + (y2 - y1) / 2;
    return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
  };

  return (
    <section className="py-20 px-6 bg-black border-y border-border relative overflow-hidden">
       {/* CRT Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="flex items-center gap-2 mb-12 text-white/80 font-mono text-sm uppercase tracking-wider">
          <Cpu className="w-4 h-4" />
          <span>./system_architecture/dependency_map.svg</span>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[800px] bg-black border border-white/20 rounded-sm overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {edges.map((edge, i) => {
              const fromNode = nodes.find((n) => n.id === edge.from);
              const toNode = nodes.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;

              const x1 = (fromNode.x / 100) * dimensions.width;
              const y1 = (fromNode.y / 100) * dimensions.height;
              const x2 = (toNode.x / 100) * dimensions.width;
              const y2 = (toNode.y / 100) * dimensions.height;

              const isHighlighted =
                hoveredNode === edge.from || hoveredNode === edge.to;
              const isDimmedEdge = hoveredNode && !isHighlighted;

              return (
                <path
                  key={i}
                  d={getPath(x1, y1, x2, y2)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={isHighlighted ? 2 : 1}
                  className={`transition-all duration-300 ${
                    isHighlighted
                      ? "text-white opacity-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                      : isDimmedEdge
                      ? "text-white/10"
                      : "text-white/20"
                  }`}
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                isDimmed(node.id) ? "opacity-20 blur-[1px]" : "opacity-100 z-10"
              }`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`
                  relative px-3 py-1.5 md:px-4 md:py-2
                  font-mono text-xs md:text-sm font-bold tracking-tight
                  bg-black border transition-all duration-200
                  group
                  ${
                    hoveredNode === node.id
                      ? "border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110"
                      : "border-white/30 text-gray-400 hover:border-white/70 hover:text-white"
                  }
                `}
              >
                {/* Corner markers for "tech" feel */}
                <div className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-current opacity-50" />
                <div className="absolute -top-px -right-px w-1.5 h-1.5 border-t border-r border-current opacity-50" />
                <div className="absolute -bottom-px -left-px w-1.5 h-1.5 border-b border-l border-current opacity-50" />
                <div className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-current opacity-50" />

                {node.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-6 justify-center text-xs font-mono text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white" /> Core
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white" /> Frontend
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white" /> Backend
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white" /> Styling
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white" /> DevOps
            </div>
        </div>
      </div>
    </section>
  );
}
