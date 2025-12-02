"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold hover:text-primary/80 transition-colors"
        >
          {"{ ilhamwibawa }"}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#work"
            className="text-sm hover:text-accent transition-colors"
          >
            Work
          </Link>
          <Link
            href="#projects"
            className="text-sm hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm hover:text-accent transition-colors"
          >
            Blog
          </Link>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#work"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#projects"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
