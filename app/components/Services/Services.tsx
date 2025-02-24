import React from "react";
import "./Services.scss";

export default function Services() {
  return (
    <section
      id="servicios"
      className="h-screen pt-20 flex justify-center bg-dark-green"
    >
      <div className="services-container flex flex-col w-[80%] h-fit py-8 px-10 items-center justify-center gap-8 m-auto">
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿Como trabajamos?
        </h3>
        <p>Consultas presenciales - online (meet-videollamada)</p>
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿Qué esperar de la consulta?
        </h3>
        <ul className="list-disc pl-6">
          <li>Cuestionario inicial</li>
          <li>Medición de composición corporal a través bioimpendancia</li>
          <li>Plan de alimentación personalizado</li>
          <li>Seguimiento quincenal</li>
        </ul>
        <h3 className="font-tan text-l sm:text-xl lg:tex-2xl">
          ¿En qué nos especializamos?
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          voluptatem saepe esse
        </p>
      </div>
    </section>
  );
}
