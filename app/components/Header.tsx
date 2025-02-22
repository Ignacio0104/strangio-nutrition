import { Menu } from "lucide-react";
import Image from "next/image";
import "./Header.scss";

export default function Header() {
  return (
    <header className="flex">
      <div className="hidden sm:flex flex-row justify-between items-center h-16 pr-5 w-full">
        <div className="flex ">
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

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home">Acerca de mí</a>
            </li>
            <li>
              <a href="#about">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex sm:hidden flex-row justify-between items-center h-16 pr-5 w-full">
        <div className="flex">
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
        <div className="hamburger-menu-container">
          <Menu />
        </div>
      </div>
    </header>
  );
}
