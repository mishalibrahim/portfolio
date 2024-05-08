import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section className="w-full h-full relative z-20 bg-[#f5f5f3]">
      <div className="common-padding flex-center flex-col bg-[#f5f5f3]">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </section>
  );
}
