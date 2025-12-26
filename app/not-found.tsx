"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-500 font-mono p-8 flex flex-col items-start justify-center selection:bg-red-900 selection:text-white">
      <div className="max-w-3xl w-full space-y-6">
        <div className="border-b border-red-500/30 pb-4 mb-8 w-full">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
            KERNEL_PANIC
          </h1>
          <p className="text-red-400/80">ERROR_CODE: 0x00000404_PAGE_NOT_FOUND</p>
        </div>

        <div className="space-y-2 text-sm md:text-base opacity-90">
          <p>
            &gt; A fatal exception has occurred at address 0x404 in module
            &quot;NEXT_ROUTER&quot;.
          </p>
          <p>&gt; The requested resource could not be located in the memory map.</p>
          <p>&gt; System has halted to prevent data corruption.</p>
          <p className="pt-4 text-red-400/60">
            *** STOP: 0x00000000 (0x00000000, 0x00000000, 0x00000000, 0x00000000)
          </p>
          <p className="text-red-400/60">
            *** ilhamwibawa.vercel.app - Address 0x404 base at 0x00000000, DateStamp
            5d6f8a2c
          </p>
        </div>

        <div className="pt-12">
          <p className="mb-4 animate-pulse">
            &gt; Press any key to reboot or click the button below{dots}
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-red-500 text-black font-bold hover:bg-red-400 transition-colors uppercase tracking-widest"
          >
            [ REBOOT_SYSTEM ]
          </Link>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 text-xs text-red-500/30">
        System Halted.
      </div>
    </div>
  );
}
