"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

export default function Services() {
  // Configures the staggered sequencing for the 4 service cards
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // The sequential gap between card entries
      },
    },
  };

  // Subtle lift-up and fade-in for each individual card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="servicios"
      className="relative pt-24 md:pt-0 h-screen bg-[#3D6B5A] overflow-hidden flex flex-col justify-between px-6 pt-10 pb-8 sm:px-12 sm:py-24 lg:px-20 lg:justify-center"
    >
      {/* ── Header — Slides in cleanly ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 sm:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-6"
      >
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
      </motion.div>

      {/* ── Steps grid — Controls scroll orchestration for its children ── */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid structure is viewable
        className="relative z-10 flex-1 sm:flex-none m-auto grid grid-cols-2 w-full md:w-[80%] gap-4 lg:gap-2 lg:w-full lg:grid-cols-4 gap-px bg-transparent overflow-hidden my-4 sm:my-0"
      >
        {steps.map(({ number, title, description, icon }) => (
          <motion.div
            key={number}
            variants={cardVariants}
            className="group rounded-2xl bg-[#2A4A3E]/70 hover:bg-[#2A4A3E] h-[80%] mt-10 md:h-full md:mt-0 transition-colors duration-300 p-4 sm:p-8 flex flex-col gap-2 sm:gap-4"
          >
            {/* Icon + number row */}
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#C4588A]/20 flex items-center justify-center text-lg sm:text-xl">
                {icon}
              </div>
              <span className="font-display italic text-[2rem] sm:text-[3rem] text-[#F5F0E0]/50 font-light leading-none">
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
          </motion.div>
        ))}
      </motion.div>

      {/* ── Bottom CTA — Fades up last ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 sm:mt-14"
      >
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
      </motion.div>
      <Image
        src="/resources/Images/fruit_3789759.png"
        alt="fruit logo"
        width={500}
        height={500}
        priority
        className="absolute opacity-30 top-10 left-40 md:top-60 md:left-[60%]"
      />
    </section>
  );
}
