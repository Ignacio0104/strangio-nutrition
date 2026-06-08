"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  // Stagger wrapper variant to synchronize text lines cleanly
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
      className="relative pt-20 min-h-[83vh] flex flex-col justify-between bg-[#C2A391] overflow-hidden"
    >
      {/* Background Decorative Illustration — Fades and scales in quietly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
        whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[30vh] right-[-100px]"
      >
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="fruit logo"
          width={400}
          height={400}
          priority
          className="block sm:hidden"
        />
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="fruit logo"
          width={500}
          height={500}
          priority
          className="hidden sm:block"
        />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl px-6 sm:px-12 lg:px-16 w-full flex items-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Headings — Sliding in staggered from the left */}
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
            <motion.h3
              variants={leftItemVariants}
              className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight"
            >
              No lo pospongas más.
            </motion.h3>
            <motion.h3
              variants={leftItemVariants}
              className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight mt-2"
            >
              Tu cambio empieza hoy.
            </motion.h3>
          </motion.div>

          {/* Right Column: CTA & Copy — Glides into place from the right */}
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
            <p className="text-[#4E3F35] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-md mb-8">
              Sacá tu turno y dá el primer paso hacia una alimentación que te
              haga sentir bien, de verdad.
            </p>

            <div className="flex flex-col items-start gap-4 w-full">
              <a
                href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="contained"
                  // 1. Pass the icon inside a span or directly with the animation class style applied
                  endIcon={
                    <ArrowForwardIcon
                      className="text-sm"
                      sx={{
                        animation: "nudgeArrow 1.2s infinite ease-in-out",
                        "@keyframes nudgeArrow": {
                          "0%, 100%": { transform: "translateX(0)" },
                          "50%": { transform: "translateX(4px)" }, // Moves 4px to the right
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
                      // 2. Optional: Speeds up or exaggerates the animation slightly on hover
                      "& .MuiButton-endIcon svg": {
                        animation: "nudgeArrowHover 0.8s infinite ease-in-out",
                      },
                    },
                    // Secondary keyframe to handle the optional faster hover effect
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
