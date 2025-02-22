import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-4rem)] flex pt-40 justify-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/resources/Images/fondo-vegetables.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
      </div>
      <div className="flex flex-col items-center w-fit-content z-10">
        <h1 className="font-tan sm:text-5xl text-3xl">
          Lic. Antonella Strangio
        </h1>
        <p className="justify-end sm:text-xl text-l">
          Nutricion Lorem ipsum dolor sit
        </p>
      </div>
    </div>
  );
}
