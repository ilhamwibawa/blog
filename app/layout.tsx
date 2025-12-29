import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TerminalModal } from "@/components/terminal-modal";
import { ConsoleWelcome } from "@/components/console-welcome";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ilham Wibawa - Software Engineer",
    template: "%s | Ilham Wibawa",
  },
  description:
    "Software engineer specializing in building scalable systems, blockchain, and modern web applications. Sharing insights on engineering, architecture, and best practices.",
  keywords: [
    "software engineer",
    "full stack developer",
    "blockchain",
    "web development",
    "TypeScript",
    "React",
    "Node.js",
    "system architecture",
    "technical blog",
  ],
  authors: [{ name: "Ilham Wibawa" }],
  creator: "Ilham Wibawa",
  publisher: "Ilham Wibawa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ilhamwibawa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ilham Wibawa - Software Engineer",
    description:
      "Software engineer specializing in building scalable systems, blockchain, and modern web applications.",
    url: "https://ilhamwibawa.com",
    siteName: "Ilham Wibawa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilham Wibawa - Software Engineer",
    description:
      "Software engineer specializing in building scalable systems, blockchain, and modern web applications.",
    creator: "@ilhamwibawa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TerminalModal />
        <ConsoleWelcome />

        <Analytics />
      </body>
    </html>
  );
}
