"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import "./Header.scss";
import { useEffect, useState } from "react";

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

  return (
    <header className="flex">
      <div className="flex flex-row justify-between items-center h-16 pr-4 w-full">
        <div className="flex flex-row">
          <Image
            src="/resources/images/food-icon.png"
            alt="Page logo"
            width={40}
            height={40}
            priority
          />
          <p className="text-xl pl-4" aria-label="Header" role="banner">
            Antonella Strangio
          </p>
        </div>

        <nav className="hidden sm:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Acerca de mí
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex sm:hidden justify-end pt-4 py-4">
          <button
            onClick={() => {
              setShowMobileMenu((prevState) => !prevState);
            }}
            className="flex sm:hidden hamburger-menu-container"
          >
            <Menu />
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-500 animate-fade-in-0.3">
          <button
            onClick={() => setShowMobileMenu((prevState) => !prevState)}
            className="absolute top-5 right-9"
          >
            <X size={28} />
          </button>

          <ul className="space-y-6 text-xl">
            <li>
              <a
                href="#home"
                onClick={() => console.log("Click")}
                className="hover:text-blue-500"
              >
                Acerca de mí
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => console.log("Click")}
                className="hover:text-blue-500"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => console.log("Click")}
                className="hover:text-blue-500"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
