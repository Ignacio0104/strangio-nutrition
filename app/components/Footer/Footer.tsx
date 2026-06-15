import Image from "next/image";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark text-white z-50 py-4 md:py-6 mt-auto border-t border-white/10 flex items-center min-h-[110px] max-h-[180px] md:max-h-[195px]">
      <div className="max-w-6xl w-full mx-auto flex flex-col justify-center px-6 sm:px-12 gap-3 md:gap-4">
        {/* Main Flex Layout: Row on desktop, Column on mobile for tight packing */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          {/* 1. Brand Logo Container */}
          <div className="w-full md:w-[25%] flex justify-center md:justify-start items-center">
            <Image
              src="/resources/Images/anto-logo-white.png"
              alt="Logotipo oficial de la Lic. Antonella Strangio - Nutrición"
              width={50}
              height={50}
              className="w-10 h-10 md:w-[50px] md:h-[50px] object-contain"
              priority
            />
            <p className="font-tan text-sm sm:hidden block sm:text-base md:text-xl tracking-wide font-serif leading-none">
              Antonella Strangio
            </p>
          </div>

          {/* 2. Professional Title Branding */}
          <div className="w-full md:w-[50%] flex flex-col items-center justify-center text-center">
            <p className="font-tan text-light text-sm sm:text-base sm:block hidden tracking-wide font-serif leading-none">
              Antonella Strangio
            </p>
            {/* SEO Keyword in single line on desktop */}
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] opacity-90 mt-1 text-light font-light">
              Nutricionista clínica · Diabetes y Sobrepeso
            </p>
          </div>

          {/* 3. Social Icons Navigation */}
          <div className="w-full md:w-[25%] flex justify-center md:justify-end">
            <nav
              className="flex items-center gap-4"
              aria-label="Redes sociales y contacto"
            >
              <a
                href="https://www.instagram.com/antostrangio.nutricion/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                aria-label="Visitar Instagram de Antonella Strangio Nutrición"
              >
                <Image
                  src="/resources/Images/instagram_icon.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-200"
                  priority
                />
              </a>

              <a
                href="https://www.linkedin.com/in/antonellastrangio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                aria-label="Visitar LinkedIn de la Lic. Antonella Strangio"
              >
                <Image
                  src="/resources/Images/linkedin_icon.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-200"
                  priority
                />
              </a>

              <a
                href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+los+turnos+de+nutricion"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                aria-label="Enviar WhatsApp para turnos"
              >
                <Image
                  src="/resources/Images/whatsapp_icon.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-200"
                  priority
                />
              </a>

              <a
                href="https://www.tiktok.com/@anto.strangio.nut"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                aria-label="Visitar TikTok de Antonella Strangio"
              >
                <Image
                  src="/resources/Images/tiktok_icon.png"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 brightness-200"
                  priority
                />
              </a>
            </nav>
          </div>
        </div>

        {/* Separator Line — Reduced vertical margins */}
        <hr className="border-white/10 my-0.5 md:my-1" />

        {/* Bottom Metadata Row: Compacted into single lines */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[11px] text-white/50 font-light gap-1 md:gap-0">
          <p>
            &copy; {currentYear} Lic. Antonella Strangio. Todos los derechos
            reservados.
          </p>
          <p className="tracking-wide">
            Consultorio en{" "}
            <span className="text-white/70 font-normal">Banfield </span> &amp;
            Atención Online.
          </p>
        </div>
      </div>
    </footer>
  );
}
