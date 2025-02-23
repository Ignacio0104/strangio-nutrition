import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className="bg-slate-300">
      <HeroSection />
      <AboutSection />
      <Services />
      <Contact />
    </main>
  );
}
