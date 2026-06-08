const steps = [
  {
    number: "01",
    title: "Cuestionario inicial",
    description:
      "Conocemos tu historia clínica, hábitos alimentarios, preferencias y objetivos de salud.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Composición corporal",
    description:
      "Medición a través de bioimpedancia para obtener un diagnóstico preciso de tu punto de partida.",
    icon: "⚖️",
  },
  {
    number: "03",
    title: "Plan personalizado",
    description:
      "Diseño de un plan de alimentación adaptado a tu realidad, sin restricciones extremas ni dietas genéricas.",
    icon: "🥗",
  },
  {
    number: "04",
    title: "Seguimiento continuo",
    description:
      "Acompañamiento quincenal o mensual para ajustar el plan, resolver dudas y celebrar tus avances.",
    icon: "📅",
  },
];

function AppleSvg({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 45 C70 45 40 65 35 100 C28 145 55 180 100 180 C145 180 172 145 165 100 C160 65 130 45 100 45 Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M78 45 C78 45 72 22 85 15 C98 8 105 25 100 45"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M100 30 C100 30 108 18 118 22"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M70 100 C70 100 65 120 72 140"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative h-screen bg-[#3D6B5A] overflow-hidden flex flex-col justify-between px-6 pt-10 pb-8 sm:px-12 sm:py-24 lg:px-20 lg:justify-center"
    >
      {/* Decorative fruit — hidden on mobile to save space */}
      <AppleSvg className="absolute -bottom-6 right-8 w-52 lg:w-72 text-[#6B9B89]/30 pointer-events-none hidden sm:block" />
      <AppleSvg className="absolute -top-10 -left-8 w-40 text-[#6B9B89]/15 pointer-events-none rotate-12 hidden sm:block" />

      {/* ── Header ── */}
      <div className="relative z-10 sm:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-6">
        <div>
          <p className="font-sans text-[0.6rem] font-semibold tracking-[0.22em] uppercase text-[#E8A0C0] mb-2 sm:mb-4">
            Servicios
          </p>
          <h2 className="font-display italic font-light text-[#F5F0E0] leading-[1.05] tracking-[-0.01em] text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem]">
            ¿Cómo trabajo?
          </h2>
        </div>

        {/* Modality badge */}
        <div className="flex items-center gap-2 bg-[#2A4A3E] rounded-xl px-4 py-2.5 w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="font-sans text-[0.7rem] sm:text-[0.78rem] font-medium text-[#F5F0E0]">
            Presencial &amp; Online (Meet / Videollamada)
          </span>
        </div>
      </div>

      {/* ── Steps grid ── */}
      <div className="relative z-10 flex-1 sm:flex-none grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#6B9B89]/20 rounded-2xl overflow-hidden border border-[#6B9B89]/20 my-4 sm:my-0">
        {steps.map(({ number, title, description, icon }) => (
          <div
            key={number}
            className="group bg-[#2A4A3E]/70 hover:bg-[#2A4A3E] transition-colors duration-300 p-4 sm:p-8 flex flex-col gap-2 sm:gap-4"
          >
            {/* Icon + number row */}
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#C4588A]/20 flex items-center justify-center text-lg sm:text-xl">
                {icon}
              </div>
              <span className="font-display italic text-[2rem] sm:text-[3rem] text-[#F5F0E0]/10 font-light leading-none">
                {number}
              </span>
            </div>

            {/* Divider */}
            <div className="w-6 sm:w-8 h-px bg-[#E8A0C0]/40" />

            {/* Title */}
            <h3 className="font-display italic text-[1rem] sm:text-[1.25rem] text-[#F5F0E0] leading-tight">
              {title}
            </h3>

            {/* Description — line-clamp on mobile to prevent overflow */}
            <p className="font-sans font-light text-[0.7rem] sm:text-[0.82rem] leading-snug sm:leading-relaxed text-[#F5F0E0]/65 line-clamp-3 sm:line-clamp-none">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 sm:mt-14">
        <a
          href="/contacto"
          className="inline-flex items-center gap-3 bg-[#F5F0E0] text-[#8B2E5E] rounded-full px-6 py-3 sm:px-7 sm:py-3.5 font-sans text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity w-fit"
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
        <p className="font-sans text-[0.68rem] sm:text-[0.75rem] text-[#F5F0E0]/45 font-light">
          Primera consulta incluye diagnóstico completo de composición corporal.
        </p>
      </div>
    </section>
  );
}
