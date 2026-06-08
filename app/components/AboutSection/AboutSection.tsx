import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="acerca-de-mi"
      className="min-h-screen pt-10 md:pt-0 bg-[#F5F0E0] flex flex-col lg:flex-row"
    >
      {/* ── Image column ── */}
      <div className="relative flex-shrink-0 bg-[#E8E0C8] overflow-hidden self-stretch order-last lg:order-first">
        <Image
          src="/resources/Images/anto-pic-2.jpeg"
          alt="Foto Antonella Strangio"
          width={500}
          height={700}
          className="h-[50vh] w-full object-cover object-top lg:h-full lg:w-auto"
          priority
        />

        {/* Decorative pill */}
        <div className="absolute top-4 md:top-20 left-6 bg-[#3D6B5A] text-[#F5F0E0] rounded-xl px-4 py-3">
          <p className="font-sans text-[0.58rem] font-semibold tracking-[0.15em] uppercase opacity-70 mb-0.5">
            Especialidad
          </p>
          <p className="font-display italic text-[0.95rem] leading-none">
            Diabetes & Sobrepeso
          </p>
        </div>
      </div>

      {/* ── Content column ── */}
      <div className="flex-1 flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 xl:px-24">
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

        {/* CTA + Location */}
        <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#C4588A] text-[#F5F0E0] rounded-full px-7 py-3.5 font-sans text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:bg-[#8B2E5E] transition-colors w-fit"
          >
            Reservar consulta
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Cochabamba+246,+B1828+Banfield"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#444] hover:text-[#C4588A] transition-colors group"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#C4588A] flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-sans text-[0.9rem] font-light leading-tight">
              Cochabamba 246.
              <br className="hidden sm:block" /> Banfield, Buenos Aires
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
