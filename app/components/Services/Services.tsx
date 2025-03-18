import React from "react";
import "./Services.scss";

export default function Services() {
  return (
    <section
      id="servicios"
      className="h-screen pt-18 flex justify-center bg-dark-green"
    >
      <div className="services-container z-10 flex flex-col w-[80%] h-fit py-8 px-10 items-center justify-center gap-8 m-auto">
        <h3 className="font-tan text-l sm:text-xl lg:text-2xl">
          ¿Como trabajo?
        </h3>
        <p className="text-l lg:text-xl font-coralRegular">
          Consultas presenciales - online (meet-videollamada)
        </p>
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿Qué esperar de la consulta?
        </h3>
        <ul className="list-disc pl-6 font-coralRegular">
          <li className="text-l lg:text-xl">Cuestionario inicial</li>
          <li className="text-l lg:text-xl">
            Medición de composición corporal a través bioimpendancia
          </li>
          <li className="text-l lg:text-xl">
            Plan de alimentación personalizado
          </li>
          <li className="text-l lg:text-xl">Seguimiento quincenal/mensual</li>
        </ul>
      </div>
    </section>
  );
}
