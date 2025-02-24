import Image from "next/image";
import React from "react";
import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <section
      id="acerca-de-mi"
      className="h-screen bg-white-cream sm:pt-20 sm:pt-0 pt-10 flex justify-center sm:justify-normal"
    >
      <div className="flex w-full gap-1 sm:gap-6 flex-col sm:px-6 sm:flex-row items-center">
        <div className="flex-1 lg:flex-[2] rounded-b-lg image-container lg:w-full">
          <Image
            src="/resources/Images/ANTO-PIC-sin-fondo.png"
            alt="Foto Antonella"
            width={250}
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
          <div className="about-me-container p-5 sm:p-10 w-[80%] sm:w-full sm:h-full h-[80%] sm:pr-10 rounded-lg text-white-cream">
            <h3 className="font-tan pb-2">Sobre mí</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              consequuntur corporis voluptatem sunt delectus enim reiciendis
              recusandae ad magni, ea consectetur dicta quas alias molestias,
              quia rerum a eaque? Laborum! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At placeat cupiditate voluptatum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
