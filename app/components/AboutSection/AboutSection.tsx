"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
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
      className="min-h-screen pt-8 md:pt-0 bg-cream flex flex-col md:flex-row overflow-hidden"
    >
      {/* ── Image column ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex-shrink-0 bg-[#E8E0C8] overflow-hidden self-stretch order-last md:order-first"
      >
        <Image
          src="/resources/Images/anto-pic-2.jpeg"
          // SEO FIX: Highly optimized descriptive image tags for image searches
          alt="Lic. Antonella Strangio, nutricionista especialista en diabetes y control de sobrepeso en consultorio Banfield"
          width={500}
          height={700}
          className="h-[50vh] w-full object-cover object-top md:h-full md:w-auto"
          priority
        />

        {/* Decorative pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-2 md:top-20 left-6 bg-green text-light rounded-xl px-4 py-3"
        >
          <p className="font-sans text-[0.60rem] font-semibold tracking-[0.15em] uppercase opacity-70 mb-0.5">
            Especialidad
          </p>
          <p className="font-display italic text-[0.70rem] leading-none">
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
          className="font-sans text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-dark-red mb-4"
        >
          Sobre mí
        </motion.p>

        {/* GOOGLE SEO FIX: Standardized header context that preserves aesthetics but provides targeted search intent signals */}
        <motion.h2
          variants={itemVariants}
          className="font-display  font-light text-light font-archivoBlack leading-[1.05] tracking-[-0.09em] mb-6"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
        >
          Nutrición clínica en Banfield:
          <br />
          Tu bienestar, mi compromiso
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="w-12 h-px bg-dark-red mb-6"
        />

        {/* AI GEO FIX: Explicitly links Name + Professional Focus + Local Reach together in natural prose */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-dark-red leading-relaxed text-[0.95rem] sm:text-base max-w-md mb-10"
        >
          Soy la <strong>Lic. Antonella Strangio</strong>, una nutricionista con
          amplia experiencia en nutrición clínica y especializada en diabetes.
          Acompaño a personas con sobrepeso y obesidad en Banfield y de forma
          online a mejorar su salud a través de hábitos sostenibles. Mi enfoque
          se basa en la educación alimentaria y cambios progresivos para lograr
          un bienestar duradero.
        </motion.p>

        {/* AI GEO FIX: Transformed layout elements into semantic unordered list elements to improve facts-scraped mapping profiles */}
        <motion.ul
          variants={itemVariants}
          className="flex gap-8 mb-10 list-none p-0 m-0"
        >
          {[
            { value: "+5", label: "Años de experiencia" },
            { value: "300+", label: "Pacientes acompañados" },
            { value: "100%", label: "Enfoque personalizado" },
          ].map(({ value, label }) => (
            <li key={label} className="flex flex-col gap-1">
              <span
                className="font-display italic text-[#C4588A] font-light leading-none"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2.4rem)" }}
              >
                {value}
              </span>
              <span className="font-sans text-[0.62rem] font-medium tracking-[0.08em] uppercase text-dark">
                {label}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* CTA + Location */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          {/* Location — Crucial local citation indicator */}
          <a
            href="https://maps.google.com/?q=Cochabamba+246,+B1828+Banfield"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dark hover:text-[#C4588A] transition-colors group"
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
              Cochabamba 246. Banfield, Buenos Aires
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
