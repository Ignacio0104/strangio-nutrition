import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/Contact/Contact";
import FloaterSection from "./components/FloaterSection/FloaterSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <FloaterSection>
        <HeroSection />
        <AboutSection />
        <Services />
        <Contact />
      </FloaterSection>
    </main>
  );
}
