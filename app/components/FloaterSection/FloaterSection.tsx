import React from "react";
import Header from "../Header/Header";
import WhatsAppIcon from "../WhatsappIcon/WhatsAppIcon";

export default function FloaterSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <Header />
      {children}
      <WhatsAppIcon />
    </div>
  );
}
