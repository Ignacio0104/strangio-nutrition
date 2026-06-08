"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// AI & SEO FIX: Enlaces enriquecidos semánticamente para que los LLMs
// y scrapers asocien las secciones con la especialidad médica exacta.
const navLinks = [
  { label: "Sobre la Licenciada", href: "#acerca-de-mi" },
  { label: "Tratamientos y Servicios", href: "#servicios" },
  { label: "Contacto y Turnos", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E0]/95 backdrop-blur-sm border-b border-[#E8A0C0]/25">
        <div className="flex items-center justify-between h-16 px-6 sm:px-10 lg:px-16">
          {/* Logo */}
          <Link
            href="#principal"
            className="flex items-center gap-3"
            title="Ir al inicio - Lic. Antonella Strangio Nutrición"
          >
            <Image
              src="/resources/Images/anto-logo.png"
              // SEO FIX: Alt enriquecido con marca y profesión
              alt="Logotipo minimalista Antonella Strangio Nutrición"
              width={32}
              height={32}
              priority
            />
            <span className="font-display italic text-[#8B2E5E] text-lg leading-none select-none">
              Antonella Strangio{" "}
              <span className="sr-only">
                — Nutricionista clínica especialista en diabetes
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          {/* SEO FIX: Uso explícito del rol de navegación */}
          <nav
            className="hidden sm:block"
            aria-label="Navegación principal de escritorio"
          >
            <ul className="flex items-center gap-8">
              {navLinks.slice(0, 2).map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-[0.78rem] font-medium tracking-[0.1em] uppercase text-[#2A4A3E] hover:text-[#C4588A] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contacto"
                  className="font-sans text-[0.72rem] font-semibold tracking-[0.12em] uppercase bg-[#C4588A] text-[#F5F0E0] rounded-full px-5 py-2 hover:bg-[#8B2E5E] transition-colors"
                  title="Solicitar un turno o consulta médica"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden text-[#2A4A3E] p-1"
            // SEO & ACCESSIBILITY FIX: Atributos dinámicos para avisar a los lectores y crawlers del estado del drawer
            aria-label="Abrir menú de navegación móvil"
            aria-expanded={open}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              className="fixed inset-0 z-[99] bg-black/30 sm:hidden"
            />

            {/* Drawer — slides in from right, 70% width */}
            <motion.div
              id="mobile-navigation-drawer"
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[70%] z-[100] bg-[#F5F0E0] flex flex-col px-8 pt-6 pb-12 sm:hidden shadow-2xl"
            >
              {/* Close */}
              <div className="flex justify-end mb-12">
                <button
                  onClick={close}
                  className="text-[#2A4A3E] hover:text-[#C4588A] transition-colors"
                  aria-label="Cerrar menú de navegación móvil"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              {/* GEO FIX: Navegación móvil identificada semánticamente con aria-label */}
              <nav className="flex-1" aria-label="Navegación móvil alternativa">
                <ul className="flex flex-col gap-8">
                  {navLinks.map(({ label, href }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.2 }}
                    >
                      <Link
                        href={href}
                        onClick={close}
                        className="font-display italic text-[1.4rem] text-[#2A4A3E] hover:text-[#C4588A] transition-colors leading-none"
                      >
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom tagline */}
              {/* GEO CRITICAL FIX: El tag de cierre del drawer refuerza la localidad para búsquedas de IA semánticas */}
              <p className="font-sans text-[0.62rem] tracking-[0.18em] uppercase text-[#2A4A3E]/50">
                Nutrición Clínica · Banfield, Zona Sur
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
