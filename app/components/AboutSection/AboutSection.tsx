import Image from "next/image";
import React from "react";
import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section
      id="acerca-de-mi"
      className="h-screen relative bg-white-cream sm:pt-20 sm:pt-0 pt-10 flex justify-center sm:justify-normal"
    >
      <div className="flex w-full gap-1 sm:gap-6 flex-col sm:px-6 sm:flex-row items-center z-10">
        <div className="flex-1 lg:flex-[2] rounded-b-lg image-container w-full flex lg:w-[80%] justify-center items-center">
          <Image
            src="/resources/Images/ANTO-PIC-sin-fondo.png"
            alt="Foto Antonella"
            width={300}
            height={250}
            className="lg:hidden block"
          />
          <Image
            src="/resources/Images/ANTO-PIC-sin-fondo.png"
            alt="Foto Antonella"
            width={450}
            height={250}
            className="lg:block hidden"
          />
        </div>
        <div className="flex flex-1 md:flex-[2] lg:flex-[3] justify-center">
          <div className="about-me-container p-5 sm:p-10 w-[80%] sm:w-full md:w-[70%] sm:h-full h-[fit-content] sm:pr-10 rounded-lg text-white-cream">
            <h3 className="font-tan pb-2 text-xl md:text-2xl">Sobre mí</h3>
            <p className="font-coralRegular md:text-xl text-lg">
              Nutricionista con amplia experiencia en nutrición clínica,
              especializada en diabetes. Acompaño a personas con sobrepeso y
              obesidad a mejorar su salud a través de hábitos sostenibles. Mi
              enfoque se basa en la educación alimentaria y cambios progresivos
              para lograr bienestar duradero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
