import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="bg-slate-300 h-screen">
      <HeroSection />
      <p>Prueba de layout</p>
      <button>
        <a
          href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
          target="_blank"
        >
          Mandame un whatsapp
        </a>
      </button>
    </main>
  );
}
