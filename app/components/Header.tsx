import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-16 pr-5">
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

      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Acerca de</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
