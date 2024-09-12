import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
