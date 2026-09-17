import { MotionConfig } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Skills from "@/components/portfolio/Skills";
import Experience, { CareerTimeline } from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const PortfolioShowcase = () => (
  <MotionConfig reducedMotion="user">
    <main id="top" className="min-h-screen overflow-x-clip bg-white text-slate-800">
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-8 md:pl-20 lg:py-12">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Experience />
        <CareerTimeline />
        <Contact />
      </div>

      <Footer />
    </main>
  </MotionConfig>
);

export default PortfolioShowcase;