import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/Contact/Contact";
import FloaterSection from "./components/FloaterSection/FloaterSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main>
      <FloaterSection>
        <HeroSection />
        <AboutSection />
        <Services />
        <Contact />
      </FloaterSection>
    </main>
  );
}
