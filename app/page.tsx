
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
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
        <section id="home"><HeroSection /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="about">
          <About />
          <Staff />
          <Overview />
          <Process />
          <Partners />
          <FAQ />
        </section>
        <section id="testimony"><Testimonial /></section>
        <section id="blog"><Blog /></section>
        <section id="contact">
          <Contact />
          <Footer />
        </section>
    </>
  );
}
