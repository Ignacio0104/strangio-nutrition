import Image from "next/image";
import React from "react";

export default function WhatsAppIcon() {
  return (
    <div className="fixed bottom-4 right-5 z-50">
      <a
        href="https://wa.me/5491161058110?text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
        target="_blank"
      >
        <Image
          src="/resources/Images/whatsapp-icon.png"
          alt="WhatsApp logo"
          width={50}
          height={50}
          priority
        />
      </a>
    </div>
  );
}
