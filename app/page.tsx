import HeroGeometric from "@/components/ui/HeroGeometric";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <HeroGeometric
        badge="Full Stack Developer"
        title1="Athul Krishna"
        title2="Girish"
      />
      <TechMarquee />
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="services">
        <GlowingEffectDemo />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <FloatingDock />
      <Footer />
    </main>
  );
}
