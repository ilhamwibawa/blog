"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, Terminal } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-border">
      <div className="max-w-5xl mx-auto  py-3 flex items-center justify-between font-mono">
        <Link
          href="/"
          className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-2"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span>ilhamwibawa@dev:~$</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm">
          <Link
            href="#work"
            className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
          >
            ~/work
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
          >
            ~/projects
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
          >
            ~/blog
          </Link>

          <div className="h-4 w-[2px] bg-border" />

          <Link
            href="https://github.com/ilhamwibawa/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span className="hidden lg:inline">src_code</span>
          </Link>

          <div className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground border border-border">
            {time} UTC
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="text-xs text-muted-foreground border border-border px-2 py-1 rounded bg-muted/50">
            {time}
          </div>
          <button
            className="p-2 hover:bg-accent rounded-md border border-transparent hover:border-border transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b-2 border-border bg-background font-mono">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#work"
              className="hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-primary">&gt;</span> cd ~/work
            </Link>
            <Link
              href="#projects"
              className="hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-primary">&gt;</span> cd ~/projects
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-primary">&gt;</span> cd ~/blog
            </Link>
            <div className="h-[1px] bg-border my-2" />
            <Link
              href="https://github.com/ilhamwibawa/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2 text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              <Github className="w-4 h-4" />
              <span>git clone repo</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
