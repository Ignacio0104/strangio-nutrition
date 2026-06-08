import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/Contact/Contact";
import FloaterSection from "./components/FloaterSection/FloaterSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
