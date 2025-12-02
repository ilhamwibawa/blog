"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "dark",
        securityLevel: "loose",
        fontFamily: "inherit",
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "basis",
        },
      });

      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      ref.current.innerHTML = `<div class="mermaid" id="${id}">${chart}</div>`;
      mermaid.run({
        nodes: [ref.current.querySelector(`#${id}`) as HTMLElement],
      });
    }
  }, [chart]);

  return (
    <div ref={ref} className="my-8 w-full overflow-x-auto">
      <style jsx>{`
        div :global(.mermaid) {
          display: flex;
          justify-content: center;
          min-height: 200px;
        }
        div :global(.mermaid svg) {
          max-width: 100%;
          height: auto;
          min-height: 200px;
        }
      `}</style>
    </div>
  );
}
