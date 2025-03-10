import React from "react";
import Footer from "../Footer/Footer";
import Image from "next/image";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen pt-40 flex justify-center bg-beige "
    >
      <div className="absolute top-[-80vh] left-[-100px] overflow-hidden">
        <Image
          src="/resources/Images/pear_17532689.png"
          alt="pear logo"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="absolute top-[30vh] right-[-100px] opacity-50">
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="fruit logo"
          width={400}
          height={400}
          priority
          className="block sm:hidden"
        />
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="fruit logo"
          width={500}
          height={500}
          priority
          className="hidden sm:block"
        />
      </div>

      <div className="px-10">
        <h3 className="font-tan lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          No lo pospongas mas! Que tu cambio empiece hoy
        </h3>
        <p className="text-lg sm:text-2xl pt-10 font-coralRegular">
          Sacá tu turno!
        </p>
        <Image
          src="/resources/Images/arrow_right_icon.png"
          alt="arrow"
          width={55}
          height={55}
          priority
          className="rotate-90 py-8 ml-4"
        />
        <a
          href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
          target="_blank"
        >
          <Button
            sx={{
              backgroundColor: "var(--white-cream)",
              color: "var(--dark-green)",
            }}
            variant="contained"
            className="font-coralRegular text-sm sm:text-lg"
          >
            TURNOS
          </Button>
        </a>
      </div>
      <Footer />
    </section>
  );
}
