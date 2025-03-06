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
          ¿Como trabajamos?
        </h3>
        <p className="text-sm sm:text-l lg:text-xl">
          Consultas presenciales - online (meet-videollamada)
        </p>
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿Qué esperar de la consulta?
        </h3>
        <ul className="list-disc pl-6">
          <li className="text-sm sm:text-l lg:text-xl">Cuestionario inicial</li>
          <li className="text-sm sm:text-l lg:text-xl">
            Medición de composición corporal a través bioimpendancia
          </li>
          <li className="text-sm sm:text-l lg:text-xl">
            Plan de alimentación personalizado
          </li>
          <li className="text-sm sm:text-l lg:text-xl">
            Seguimiento quincenal
          </li>
        </ul>
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿En qué nos especializamos?
        </h3>
        <p className="text-sm sm:text-l lg:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          voluptatem saepe esse
        </p>
      </div>
    </section>
  );
}
