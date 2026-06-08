import React from "react";
import Footer from "../Footer/Footer";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative pt-36 min-h-[83vh] flex flex-col justify-between bg-[#C2A391] overflow-hidden"
    >
      {/* Background Decorative Illustration */}
      <div className="absolute top-[30vh] right-[-100px] opacity-20">
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
      </div>{" "}
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl px-6 sm:px-12 lg:px-16 w-full flex items-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Headings */}
          <div className="md:col-span-6 flex flex-col justify-center text-left">
            <span className="font-coralRegular text-xs sm:text-sm tracking-[0.2em] text-[#A64B75] uppercase mb-4 block">
              ¿Lista para empezar?
            </span>
            <h3 className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight">
              No lo pospongas más.
            </h3>
            <h3 className="font-tan text-4xl sm:text-5xl lg:text-6xl text-[#2C211A] font-serif italic leading-tight mt-2">
              Tu cambio empieza hoy.
            </h3>
          </div>

          {/* Right Column: CTA & Copy */}
          <div className="md:col-span-6 flex flex-col justify-center items-start md:pl-6 lg:pl-12">
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
                  endIcon={<ArrowForwardIcon className="text-sm" />}
                  sx={{
                    backgroundColor: "#7D305B", // Your elegant plum color
                    color: "#FFFFFF",
                    fontFamily: "var(--font-coralRegular), sans-serif",
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    px: { xs: 4, sm: 5 },
                    py: 1.8,
                    borderRadius: "50px", // Fully pill-shaped like the design
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(125, 48, 91, 0.25)",
                    transition: "all 0.2s ease-in-out",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      backgroundColor: "#662449",
                      boxShadow: "0 6px 20px rgba(125, 48, 91, 0.4)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Reservar Turno
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Clean Footer placement */}
    </section>
  );
}
{
  /* <div className="absolute top-[30vh] right-[-100px] opacity-50">
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
      </div> */
}
