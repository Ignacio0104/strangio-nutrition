import React from "react";
import WhatsAppIcon from "../WhatsappIcon/WhatsAppIcon";
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
      <div className="absolute top-[30vh] right-[-100px] opacity-70">
        <Image
          src="/resources/Images/fruit_3789759.png"
          alt="fruit logo"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="px-10">
        <h3 className="font-tan lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          No lo pospongas mas! Que tu cambio empiece hoy
        </h3>
        <p className="text-lg text-xl pt-10 font-thasadithBold">
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
        <Button
          sx={{
            backgroundColor: "var(--white-cream)",
            color: "var(--dark-green)",
          }}
          variant="contained"
        >
          TURNOS
        </Button>
      </div>

      <WhatsAppIcon />
      <Footer />
    </section>
  );
}
