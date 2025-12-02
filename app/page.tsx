import { BlogPreview } from "@/components/blog-preview";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { WorkExperience } from "@/components/work-experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <WorkExperience />
      <Projects />
      <BlogPreview />
      <Footer />
    </main>
  );
}
