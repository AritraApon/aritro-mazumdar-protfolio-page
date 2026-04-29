import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen relative overflow-hidden">
        <CursorGlow />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 relative z-10">
          <Hero />
          <Skills />
          <Services />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
