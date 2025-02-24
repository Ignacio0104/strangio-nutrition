"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import "./Header.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMobileMenu]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  const toggleMenu = () => setShowMobileMenu((prevState) => !prevState);
  return (
    <header className="sticky top-0 bg-white-cream shadow-md z-50 text-pink">
      <div className="flex flex-row justify-between items-center h-16 px-4 w-full">
        <div
          onClick={scrollToTop}
          className="flex flex-row cursor-pointer items-center"
        >
          <Image
            src="/resources/Images/anto-logo.png"
            alt="Page logo"
            width={35}
            height={35}
            priority
          />
          <p
            className="select-none text-xl pl-4"
            aria-label="Header"
            role="banner"
          >
            Antonella Strangio
          </p>
        </div>

        <nav className="hidden sm:flex">
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:text-dark-green" href="/#acerca-de-mi">
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link className="hover:text-dark-green" href="/#servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="hover:text-dark-green" href="#contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex sm:hidden justify-end pt-4 py-4">
          <button
            onClick={toggleMenu}
            className="flex sm:hidden hamburger-menu-container"
          >
            <Menu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute h-screen inset-0 bg-white z-50 flex flex-col items-center justify-center text-dark-green"
          >
            <button
              onClick={() => setShowMobileMenu((prevState) => !prevState)}
              className="absolute top-5 right-6"
            >
              <X size={28} />
            </button>

            <ul className="space-y-6 text-xl">
              <li>
                <Link
                  onClick={toggleMenu}
                  className="hover:text-pink"
                  href="/#acerca-de-mi"
                >
                  Acerca de mí
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="hover:text-pink"
                  href="/#servicios"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="hover:text-pink"
                  href="#contact"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
