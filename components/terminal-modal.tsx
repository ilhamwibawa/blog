"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Terminal, X, Maximize2, Minus } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface Command {
  command: string;
  output: React.ReactNode;
}

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ").slice(1);
    const mainCmd = trimmedCmd.split(" ")[0];

    let output: React.ReactNode = "";

    switch (mainCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-muted-foreground">
            <p>Available commands:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <span className="text-primary">help</span> - Show this help
                message
              </li>
              <li>
                <span className="text-primary">clear</span> - Clear terminal
                output
              </li>
              <li>
                <span className="text-primary">whoami</span> - Display user info
              </li>
              <li>
                <span className="text-primary">ls</span> - List site sections
              </li>
              <li>
                <span className="text-primary">cd [dir]</span> - Navigate to a
                section
              </li>
              <li>
                <span className="text-primary">contact</span> - Show contact
                info
              </li>
            </ul>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "whoami":
        output = (
          <div className="text-muted-foreground">
            <p>User: guest@ilhamwibawa.com</p>
            <p>Role: Visitor</p>
            <p>Access Level: Read Only</p>
            <p className="mt-2">
              Ilham Wibawa is a software engineer who loves building systems that
              matter.
            </p>
          </div>
        );
        break;
      case "ls":
        output = (
          <div className="grid grid-cols-2 gap-2 text-muted-foreground">
            <span>drwxr-xr-x home/</span>
            <span>drwxr-xr-x blog/</span>
            <span>drwxr-xr-x projects/</span>
            <span>drwxr-xr-x work/</span>
          </div>
        );
        break;
      case "cd":
        const dir = args[0];
        if (!dir) {
          output = "Usage: cd [directory]";
        } else if (dir === "home" || dir === "~" || dir === "/") {
          router.push("/");
          output = "Navigating to home...";
          setIsOpen(false);
        } else if (dir === "blog") {
          router.push("/blog");
          output = "Navigating to blog...";
          setIsOpen(false);
        } else if (dir === "projects") {
          router.push("/#projects");
          output = "Navigating to projects...";
          setIsOpen(false);
        } else if (dir === "work") {
          router.push("/#work");
          output = "Navigating to work experience...";
          setIsOpen(false);
        } else if (dir === "..") {
          router.back();
          output = "Navigating back...";
          setIsOpen(false);
        } else {
          output = `cd: no such file or directory: ${dir}`;
        }
        break;
      case "contact":
        output = (
          <div className="space-y-1 text-muted-foreground">
            <p>
              Email:{" "}
              <a
                href="mailto:hello@ilhamwibawa.com"
                className="text-primary hover:underline"
              >
                hello@ilhamwibawa.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/ilhamwibawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/ilhamwibawa
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/ilhamwibawa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/ilhamwibawa
              </a>
            </p>
          </div>
        );
        break;
      case "":
        output = "";
        break;
      default:
        output = `command not found: ${mainCmd}`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input);
    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl w-full bg-black/95 border-border p-0 gap-0 font-mono shadow-2xl overflow-hidden" showCloseButton={false}>
        <VisuallyHidden.Root>
          <DialogTitle>Terminal</DialogTitle>
        </VisuallyHidden.Root>

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/20 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs text-muted-foreground flex items-center gap-1">
              <Terminal className="w-3 h-3" />
              guest@ilhamwibawa.com:~
            </span>
          </div>
          <div className="text-xs text-muted-foreground">zsh</div>
        </div>

        {/* Terminal Body */}
        <div
          className="p-4 h-[400px] overflow-y-auto text-sm"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="space-y-1 mb-4 text-muted-foreground">
            <p>Welcome to Ilham&apos;s Terminal v1.0.0</p>
            <p>Type &apos;help&apos; to see available commands.</p>
          </div>

          <div className="space-y-4">
            {history.map((entry, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
                <div className="pl-4">{entry.output}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <span className="text-primary">➜</span>
            <span className="text-blue-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/50"
              autoComplete="off"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
