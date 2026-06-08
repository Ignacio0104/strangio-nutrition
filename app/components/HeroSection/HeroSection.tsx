import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="principal"
      className="relative min-h-screen bg-[#C4588A] overflow-hidden flex flex-col lg:flex-row"
    >
      <Image
        src="/resources/Images/avocado.png"
        alt="Fondo"
        width={600}
        height={600}
        className="absolute top-40 left-[25vw] text-[#F5F0E0]/10"
        quality={100}
        priority
      />{" "}
      *{/* ── LEFT COLUMN ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-8 pt-28 pb-2 sm:px-12 md:pb-16 lg:px-16  lg:pt-32 lg:w-[52%] xl:px-24">
        {/* Eyebrow */}
        <p className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#F5F0E0]/70 mb-5">
          Nutricionista clínica · Especialista en diabetes
        </p>

        {/* Main heading */}
        <h1
          className="font-display font-light italic text-[#F5F0E0] leading-[1.0] tracking-[-0.01em] mb-5"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          Lic. Antonella
          <br />
          Strangio
        </h1>

        {/* Divider line */}
        <div className="w-16 h-px bg-[#F5F0E0]/40 mb-5" />

        {/* Subtitle */}
        <p className="font-sans font-light text-[#F5F0E0]/80 leading-relaxed max-w-sm mb-10 text-[0.95rem] sm:text-base">
          Crea una relación saludable con la comida a través de hábitos simples
          y sostenibles.
        </p>

        {/* CTA row: buttons + modalidad badge */}
        <div className="flex flex-col gap-3">
          {/* Row 1 — always inline: Reservar + Ver servicios */}
          <div className="flex flex-row items-center gap-2">
            <a
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#F5F0E0] text-[#8B2E5E] rounded-full px-7 py-3.5 font-sans text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-90 whitespace-nowrap"
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

            <a
              href="/servicios"
              className="inline-flex items-center gap-2 text-[#F5F0E0]/70 font-sans text-[0.72rem] font-medium tracking-[0.1em] uppercase hover:text-[#F5F0E0] transition-colors whitespace-nowrap"
            >
              Ver servicios
              <svg
                width="12"
                height="12"
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
          </div>

          {/* Row 2 — Modalidad badge (inline on sm+, below buttons on mobile) */}
          <div className="w-fit m-auto md:ml-0 flex">
            <div className="bg-[#F5F0E0]/95 backdrop-blur-sm rounded-xl flex items-center gap-2 md:flex-col md:items-start mt-4 px-4 py-3 sm:ml-1">
              <p className="font-sans text-[0.58rem] font-semibold tracking-[0.15em] uppercase text-[#C4588A] mb-0.5">
                Modalidad
              </p>
              <p className="font-display italic text-[0.95rem] text-[#1C1C1A]">
                Presencial & Online
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative pear — bottom left, mobile only */}
      {/* ── RIGHT COLUMN — Photo arch ───────────────────── */}
      <div className="relative flex-1 flex items-end justify-center min-h-[340px] lg:min-h-0">
        {/* Arch background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[8%] w-[72%] sm:w-[55%] lg:w-[62%] h-[90%] rounded-t-[200px] overflow-hidden bg-[#8B2E5E]/25">
          <Image
            src="/resources/Images/ANTO-PIC-sin-fondo.png"
            alt="Fondo"
            width={500}
            height={500}
            className="w-full h-full object-cover object-top"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
