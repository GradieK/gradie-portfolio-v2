import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
