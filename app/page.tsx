
import About from "@/components/About";
import HeroSection from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Staff from "@/components/Staff";

export default function Home() {
  
  return (
    <>
        <HeroSection />
        <Services />
        <Projects />
        <About />
        <Staff />
        <Overview />
    </>
  );
}
