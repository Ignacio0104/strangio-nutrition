import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="acerca-de-mi"
      className="min-h-screen bg-[#F5F0E0] flex flex-col lg:flex-row"
    >
      {/* ── Image column ── */}
      <div className="relative flex-1 pt-10 min-h-[380px] lg:min-h-0 bg-[#E8E0C8] flex items-end justify-center overflow-hidden">
        <Image
          src="/resources/Images/ANTO-PIC-sin-fondo.png"
          alt="Foto Antonella Strangio"
          width={500}
          height={600}
          className="object-contain object-bottom w-[70%] sm:w-[55%] lg:w-[80%] max-w-sm lg:max-w-md"
          priority
        />

        {/* Decorative pill */}
        <div className="absolute right-8 md:top-20 bg-[#3D6B5A] text-[#F5F0E0] rounded-xl px-4 py-3">
          <p className="font-sans text-[0.58rem] font-semibold tracking-[0.15em] uppercase opacity-70 mb-0.5">
            Especialidad
          </p>
          <p className="font-display italic text-[0.95rem] leading-none">
            Diabetes & Sobrepeso
          </p>
        </div>
      </div>

      {/* ── Content column ── */}
      <div className="flex-1 flex flex-col justify-center px-8 pb-16 pt-6 sm:px-12 lg:px-16 xl:px-24">
        <p className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#C4588A] mb-4">
          Sobre mí
        </p>

        <h2
          className="font-display italic font-light text-[#1C1C1A] leading-[1.05] tracking-[-0.01em] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
        >
          Tu bienestar,
          <br />
          mi compromiso
        </h2>

        <div className="w-12 h-px bg-[#E8A0C0] mb-6" />

        <p className="font-sans font-light text-[#444] leading-relaxed text-[0.95rem] sm:text-base max-w-md mb-10">
          Nutricionista con amplia experiencia en nutrición clínica,
          especializada en diabetes. Acompaño a personas con sobrepeso y
          obesidad a mejorar su salud a través de hábitos sostenibles. Mi
          enfoque se basa en la educación alimentaria y cambios progresivos para
          lograr bienestar duradero.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mb-10">
          {[
            { value: "+5", label: "Años de experiencia" },
            { value: "300+", label: "Pacientes acompañados" },
            { value: "100%", label: "Enfoque personalizado" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="font-display italic text-[#C4588A] font-light leading-none"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                {value}
              </span>
              <span className="font-sans text-[0.62rem] font-medium tracking-[0.08em] uppercase text-[#999]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
