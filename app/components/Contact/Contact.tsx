"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="contacto"
      className="relative pt-16 min-h-[77vh] flex flex-col justify-between bg-[#C2A391] overflow-hidden"
    >
      {/* Background Decorative Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[30vh] right-[-100px]"
      >
        <Image
          src="/resources/Images/fruit_3789759.png"
          // SEO FIX: Alt descriptivo para imágenes corporativas secundarias
          alt="Isotipo de fruta decorativo - Lic. Antonella Strangio Nutrición"
          width={400}
          height={400}
          priority
          className="block sm:hidden"
        />
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="Isotipo de fruta decorativo - Lic. Antonella Strangio Nutrición"
          width={500}
          height={500}
          priority
          className="hidden sm:block"
        />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl px-6 sm:px-12 lg:px-16 w-full flex items-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Headings */}
          <motion.div
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="md:col-span-6 flex flex-col justify-center text-left"
          >
            <motion.span
              variants={leftItemVariants}
              className="font-coralRegular text-xs sm:text-sm tracking-[0.2em] text-[#A64B75] uppercase mb-4 block"
            >
              ¿Lista para empezar?
            </motion.span>

            {/* GOOGLE SEO FIX: Cambiado a H2 para consolidar la fuerza semántica de cierre de página */}
            <motion.h2
              variants={leftItemVariants}
              className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight"
            >
              No lo pospongas más.
            </motion.h2>
            <motion.p
              variants={leftItemVariants}
              className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight mt-2"
            >
              Tu cambio empieza hoy.
            </motion.p>
          </motion.div>

          {/* Right Column: CTA & Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="md:col-span-6 flex flex-col justify-center items-start md:pl-6 lg:pl-12"
          >
            {/* AI GEO FIX: Texto enriquecido con palabras clave geolocalizadas y especialidad explícita para extracción de entidades de IA */}
            <p className="text-[#4E3F35] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-md mb-8">
              Reservá tu turno en <strong>Banfield</strong> o de forma online, y
              dá el primer paso hacia un tratamiento especializado en diabetes y
              sobrepeso que te haga sentir bien.
            </p>

            <div className="flex flex-col items-start gap-4 w-full">
              <a
                href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+los+turnos+de+nutricion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
                // AI & GOOGLE FIX: Atributos explícitos para indexación de links transaccionales
                title="Contactar a la Lic. Antonella Strangio por WhatsApp"
                aria-label="Reservar turno de consulta nutricional mediante WhatsApp"
              >
                <Button
                  variant="contained"
                  endIcon={
                    <ArrowForwardIcon
                      className="text-sm"
                      sx={{
                        animation: "nudgeArrow 1.2s infinite ease-in-out",
                        "@keyframes nudgeArrow": {
                          "0%, 100%": { transform: "translateX(0)" },
                          "50%": { transform: "translateX(4px)" },
                        },
                      }}
                    />
                  }
                  sx={{
                    backgroundColor: "#7D305B",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-coralRegular), sans-serif",
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    px: { xs: 4, sm: 5 },
                    py: 1.8,
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(125, 48, 91, 0.25)",
                    transition: "all 0.2s ease-in-out",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      backgroundColor: "#662449",
                      boxShadow: "0 6px 20px rgba(125, 48, 91, 0.4)",
                      transform: "translateY(-1px)",
                      "& .MuiButton-endIcon svg": {
                        animation: "nudgeArrowHover 0.8s infinite ease-in-out",
                      },
                    },
                    "@keyframes nudgeArrowHover": {
                      "0%, 100%": { transform: "translateX(0)" },
                      "50%": { transform: "translateX(6px)" },
                    },
                  }}
                >
                  Reservar Turno
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
