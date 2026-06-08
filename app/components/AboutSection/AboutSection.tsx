"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
  // Stagger configurations for the text and stats block
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="acerca-de-mi"
      className="min-h-screen pt-10 md:pt-0 bg-[#F5F0E0] flex flex-col lg:flex-row overflow-hidden"
    >
      {/* ── Image column ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of the element is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-shrink-0 bg-[#E8E0C8] overflow-hidden self-stretch order-last lg:order-first"
      >
        <Image
          src="/resources/Images/anto-pic-2.jpeg"
          alt="Foto Antonella Strangio"
          width={500}
          height={700}
          className="h-[50vh] w-full object-cover object-top lg:h-full lg:w-auto"
          priority
        />

        {/* Decorative pill sliding in from the left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-4 md:top-20 left-6 bg-[#3D6B5A] text-[#F5F0E0] rounded-xl px-4 py-3"
        >
          <p className="font-sans text-[0.58rem] font-semibold tracking-[0.15em] uppercase opacity-70 mb-0.5">
            Especialidad
          </p>
          <p className="font-display italic text-[0.95rem] leading-none">
            Diabetes & Sobrepeso
          </p>
        </motion.div>
      </motion.div>

      {/* ── Content column ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex-1 flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 xl:px-24"
      >
        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-[#C4588A] mb-4"
        >
          Sobre mí
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="font-display italic font-light text-[#1C1C1A] leading-[1.05] tracking-[-0.01em] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
        >
          Tu bienestar,
          <br />
          mi compromiso
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-12 h-px bg-[#E8A0C0] mb-6"
        />

        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-[#444] leading-relaxed text-[0.95rem] sm:text-base max-w-md mb-10"
        >
          Nutricionista con amplia experiencia en nutrición clínica,
          especializada en diabetes. Acompaño a personas con sobrepeso y
          obesidad a mejorar su salud a través de hábitos sostenibles. Mi
          enfoque se basa en la educación alimentaria y cambios progresivos para
          lograr bienestar duradero.
        </motion.p>

        {/* Stats Grid container */}
        <motion.div variants={itemVariants} className="flex gap-8 mb-10">
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
        </motion.div>

        {/* CTA + Location */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          <a
            href="/contacto"
            className="inline-flex items-center gap-3 bg-[#C4588A] text-[#F5F0E0] rounded-full px-5 py-3.5 font-sans text-[0.72rem] font-semibold tracking-[0.12em] uppercase hover:bg-[#8B2E5E] transition-colors w-fit"
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
        </motion.div>
      </motion.div>
    </section>
  );
}
