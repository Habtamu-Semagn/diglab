
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import Overview from "@/components/Overview";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
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
        <Process />
        <Partners />
        <FAQ />
    </>
  );
}
