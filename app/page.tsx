import { BlogPreview } from "@/components/blog-preview";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { WorkExperience } from "@/components/work-experience";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ilham Wibawa",
    url: "https://ilhamwibawa.com",
    jobTitle: "Software Engineer",
    description:
      "Software engineer specializing in building scalable systems, blockchain, and modern web applications.",
    sameAs: [
      "https://github.com/ilhamwibawa",
      "https://twitter.com/ilhamwibawa",
      "https://linkedin.com/in/ilhamwibawa",
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <WorkExperience />
        <Projects />
        <BlogPreview />
        <Footer />
      </main>
    </>
  );
}
