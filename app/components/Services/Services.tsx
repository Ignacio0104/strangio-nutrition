"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

// SEO & AI FIX: Enriquecimiento de descripciones con palabras clave de alta conversión clínica
const steps = [
  {
    number: "01",
    title: "Cuestionario inicial",
    description:
      "Evaluación completa de tu historia clínica, hábitos alimentarios actuales, gustos, horarios y objetivos de salud particulares.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Composición corporal",
    description:
      "Medición de precisión por bioimpedancia y antropometría para obtener un diagnóstico exacto de masa muscular, grasa y punto de partida.",
    icon: "⚖️",
  },
  {
    number: "03",
    title: "Plan personalizado",
    description:
      "Diseño de un plan alimentario adaptado a tu rutina, sin restricciones extremas, ideal para el tratamiento de diabetes, sobrepeso o educación nutricional.",
    icon: "🥗",
  },
  {
    number: "04",
    title: "Seguimiento continuo",
    description:
      "Consultas periódicas en nuestro consultorio o de forma online para ajustar el tratamiento nutricional, resolver dudas y consolidar hábitos sostenibles.",
    icon: "📅",
  },
];

export default function Services() {
  // Track open state for mobile accordion behavior
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardNumber: string) => {
    setExpandedCard(expandedCard === cardNumber ? null : cardNumber);
  };

  // Configures the staggered sequencing for the 4 service cards
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className="relative min-h-screen bg-[#3D6B5A] flex flex-col justify-center px-6 py-16 sm:px-12 md:py-24 lg:px-20 gap-6 md:gap-10"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <p className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#E8A0C0] mb-2">
            Servicios Clínicos
          </p>
          <h2 className="font-display italic font-light text-[#F5F0E0] leading-[1.1] tracking-[-0.01em] text-[1.8rem] sm:text-[2.5rem] lg:text-[3.5rem]">
            ¿Cómo trabajo en consulta?
            <span className="sr-only">
              {" "}
              — Metodología de Tratamiento Nutricional
            </span>
          </h2>
        </div>

        {/* Modality badge */}
        <div className="flex items-center gap-2 bg-[#2A4A3E] rounded-xl px-4 py-2.5 w-fit shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="font-sans text-[0.7rem] sm:text-[0.78rem] font-medium text-[#F5F0E0]">
            Consultorio Presencial &amp; Online (Atención Remota)
          </span>
        </div>
      </motion.div>

      {/* ── Steps grid ── */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-3 w-full"
      >
        {steps.map(({ number, title, description, icon }) => {
          const isExpanded = expandedCard === number;

          return (
            <motion.div
              key={number}
              variants={cardVariants}
              onClick={() => toggleCard(number)}
              className="group rounded-2xl bg-[#2A4A3E]/70 hover:bg-[#2A4A3E] transition-all duration-300 p-4 md:p-6 flex flex-col gap-0 md:gap-4 md:min-h-[240px] cursor-pointer md:cursor-default select-none output-layout-card"
            >
              {/* ── MOBILE HEADER (Icon + Title + Number on same line) ── */}
              <div className="flex md:hidden items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl bg-[#C4588A]/20 flex items-center justify-center text-lg shrink-0"
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <h3 className="font-display italic text-[0.95rem] text-[#F5F0E0] leading-tight">
                    {title}
                  </h3>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <svg
                    className={`w-3.5 h-3.5 text-[#F5F0E0]/60 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="font-display italic text-[1.6rem] text-[#F5F0E0]/50 font-light leading-none">
                    {number}
                  </span>
                </div>
              </div>

              {/* ── DESKTOP HEADER (Icon + Number on same line) ── */}
              <div className="hidden md:flex items-center justify-between w-full">
                <div
                  className="w-11 h-11 rounded-xl bg-[#C4588A]/20 flex items-center justify-center text-xl shrink-0"
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <span className="font-display italic text-[2.5rem] text-[#F5F0E0]/50 font-light leading-none">
                  {number}
                </span>
              </div>

              {/* Desktop Divider (Keeps visual separation below icon/number row) */}
              <div className="hidden md:block w-8 h-px bg-[#E8A0C0]/40" />

              {/* ── CONTENT CONTAINER ── */}
              <div className="w-full">
                {/* Mobile Flow */}
                <div className="md:hidden">
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="w-full h-px bg-[#E8A0C0]/20 mt-3" />
                        <p className="font-sans font-light text-[0.78rem] leading-relaxed text-[#F5F0E0]/75 pt-3.5 pb-1">
                          {description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Desktop Flow: Title is placed below the divider line */}
                <div className="hidden md:flex flex-col gap-2">
                  <h3 className="font-display italic text-[1.15rem] text-[#F5F0E0] leading-tight">
                    {title}
                  </h3>
                  <p className="font-sans font-light text-[0.82rem] leading-snug text-[#F5F0E0]/65">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2"
      >
        <a
          href="#contacto"
          className="inline-flex items-center gap-3 bg-[#F5F0E0] text-[#8B2E5E] rounded-full px-6 py-3 sm:px-7 sm:py-3.5 font-sans text-[0.68rem] sm:text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition-opacity w-fit shrink-0"
          title="Solicitar turno para consulta nutricional personalizada"
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
        <p className="font-sans text-[0.68rem] sm:text-[0.75rem] text-[#F5F0E0]/45 font-light max-w-md">
          La primera consulta incluye un diagnóstico completo de composición
          corporal por bioimpedancia.
        </p>
      </motion.div>

      {/* Image Decorator */}
      <Image
        src="/resources/Images/fruit_3789759.png"
        alt="Ilustración decorativa de fruta fresca - Hábitos saludables y nutrición integral"
        width={500}
        height={500}
        priority
        className="absolute opacity-20 top-1/4 right-0 lg:left-[60%] pointer-events-none hidden sm:block"
      />
    </section>
  );
}
