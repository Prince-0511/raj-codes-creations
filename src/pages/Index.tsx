import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
