import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    /* CHANGED: Removed 'absolute bottom-0' and replaced with a semantic HTML footer tag */
    <footer className="w-full bg-[#1A3323] text-white z-50 py-6 sm:py-8 mt-auto">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-12 gap-4">
        {/* Brand Logo Container */}
        <div className="w-[25%] flex justify-start">
          <Image
            src="/resources/Images/anto-logo-white.png"
            alt="Antonella Strangio Logo"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-[60px] sm:h-[60px] object-contain"
            priority
          />
        </div>

        {/* Professional Title Branding */}
        <div className="w-[50%] flex flex-col items-center justify-center text-center">
          <h3 className="font-tan text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide">
            Antonella Strangio
          </h3>
          <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] opacity-80 mt-1">
            Nutrición
          </h4>
        </div>

        {/* Social Icons Navigation Grid */}
        <div className="w-[25%] flex justify-end">
          <div className="grid grid-cols-2 md:flex items-center justify-end gap-3 sm:gap-5">
            <a
              href="https://www.instagram.com/antostrangio.nutricion/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Image
                src="/resources/Images/instagram_icon.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6  brightness-200"
                priority
              />
            </a>
            <a
              href="https://www.linkedin.com/in/antonellastrangio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Image
                src="/resources/Images/linkedin_icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6  brightness-200"
                priority
              />
            </a>
            <a
              href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Image
                src="/resources/Images/whatsapp_icon.png"
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6  brightness-200"
                priority
              />
            </a>
            <a
              href="https://www.tiktok.com/@anto.strangio.nut"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <Image
                src="/resources/Images/tiktok_icon.png"
                alt="TikTok"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6  brightness-200"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
