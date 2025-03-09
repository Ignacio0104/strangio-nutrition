import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="/"
      className="relative h-[100vh] flex bg-pink pt-40 justify-center overflow-hidden"
    >
      <div className="flex relative text-white-cream flex-col pt-60 md:pt-40 items-center w-fit-content z-10">
        <h1 className="font-tan sm:text-5xl text-2xl">
          Lic. Antonella Strangio
        </h1>
        <Image
          src="/resources/Images/avocado.png"
          alt="Fondo"
          width={500}
          height={500}
          className="absolute drop-shadow-lg top-[-10vh] left-[15vh] sm:top-[-20vh] sm:left-[70vh] z-[-1]"
          quality={100}
          priority
        />
        <Image
          src="/resources/Images/avocado.png"
          alt="Fondo"
          width={500}
          height={500}
          className="absolute drop-shadow-lg top-[30vh] right-[25vh] sm:top-[30vh] sm:right-[70vh] z-[-1]"
          quality={100}
          priority
        />
        <p className="justify-end pt-4 w-[60%] text-center sm:text-2xl text-xl font-coralRegular">
          Crea una relación saludable con la comida a través de hábitos simples
          y sostenibles.
        </p>
      </div>
    </section>
  );
}
