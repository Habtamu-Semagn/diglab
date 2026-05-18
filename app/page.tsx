
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import Overview from "@/components/Overview";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Staff from "@/components/Staff";
import Testimonial from "@/components/Testimonial";

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
        <Testimonial />
        <Blog />
        <Contact />
    </>
  );
}
