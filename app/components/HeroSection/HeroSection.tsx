"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  // Animation Variants for staggered text orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each text element
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="principal"
      className="relative min-h-screen bg-[#C4588A] overflow-hidden flex flex-col lg:flex-row"
    >
      {/* Background Avocado Image - Subtle Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-40 left-[25vw] z-0 pointer-events-none"
      >
        <Image
          src="/resources/Images/avocado.png"
          alt="Fondo"
          width={600}
          height={600}
          className="text-[#F5F0E0]/10"
          quality={100}
          priority
        />
      </motion.div>

      {/* ── LEFT COLUMN ─────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center px-8 pt-28 pb-2 sm:px-12 md:pb-16 lg:px-16 lg:pt-32 lg:w-[52%] xl:px-24"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#F5F0E0]/70 mb-5"
        >
          Nutricionista clínica · Especialista en diabetes
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-light italic text-[#F5F0E0] leading-[1.0] tracking-[-0.01em] mb-5"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          Lic. Antonella
          <br />
          Strangio
        </motion.h1>

        {/* Divider line */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-px bg-[#F5F0E0]/40 mb-5"
        />

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-[#F5F0E0]/80 leading-relaxed max-w-sm mb-10 text-[0.95rem] sm:text-base"
        >
          Crea una relación saludable con la comida a través de hábitos simples
          y sostenibles.
        </motion.p>

        {/* CTA row: buttons + modalidad badge */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          {/* Row 1 — always inline: Reservar + Ver servicios */}
          <div className="flex flex-row items-center gap-6">
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

          {/* Row 2 — Modalidad badge */}
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
        </motion.div>
      </motion.div>

      {/* ── RIGHT COLUMN — Photo arch ───────────────────── */}
      <div className="relative flex-1 flex items-end justify-center min-h-[340px] lg:min-h-0">
        {/* Arch background expands from bottom up */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1], // Custom sleek cubic-bezier easing
          }}
          className="absolute bottom-0  -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[8%] w-[72%] sm:w-[55%] lg:w-[62%] h-[90%] rounded-t-[200px] overflow-hidden bg-[#8B2E5E]/25 origins-bottom"
        >
          <Image
            src="/resources/Images/ANTO-PIC-sin-fondo.png"
            alt="Fondo"
            width={500}
            height={500}
            className="w-full h-full object-cover object-top"
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
