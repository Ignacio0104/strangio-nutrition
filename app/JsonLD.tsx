export function JsonLd() {
  const faqs = [
    {
      q: "¿Qué incluye la primera consulta de nutrición?",
      a: "La primera consulta incluye una evaluación clínica completa, relevamiento de tus hábitos alimentarios, gustos, horarios y objetivos de salud particulares. En la modalidad presencial, incluye un diagnóstico preciso de composición corporal mediante bioimpedancia y antropometría para diseñar tu plan alimentario 100% personalizado.",
    },
    {
      q: "¿Cómo funciona la modalidad de consulta online?",
      a: "Las consultas online se realizan a través de videollamadas (Google Meet o plataformas similares). Tienen la misma duración y nivel de personalización que las presenciales; evaluamos tus objetivos, planificamos tus menús y hacemos el seguimiento continuo de tus hábitos de forma cómoda mediante atención remota.",
    },
    {
      q: "¿La Lic. Antonella Strangio atiende de forma presencial?",
      a: "Sí, la Lic. Antonella Strangio atiende consultas presenciales en su consultorio ubicado en Cochabamba 246, Banfield, zona sur de Buenos Aires.",
    },
    {
      q: "¿Cuál es la especialidad de la Lic. Antonella Strangio?",
      a: "Es nutricionista clínica especialista en el tratamiento, educación alimentaria y control para personas con diabetes, sobrepeso y obesidad, enfocada en la creación de hábitos simples, saludables y sostenibles.",
    },
    {
      q: "¿Cada cuánto tiempo se realizan los turnos de seguimiento?",
      a: "El seguimiento se adapta a la necesidad de cada paciente, planificándose por lo general de forma quincenal o mensual. Estos encuentros sirven para ajustar el plan de alimentación, resolver dudas de la rutina diaria y evaluar los progresos logrados.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalBusiness",
              "@id": "https://yourdomain.com/#medicalbusiness",
              name: "Lic. Antonella Strangio - Nutricionista",
              url: "https://yourdomain.com",
              image: "https://yourdomain.com/resources/Images/anto-logo.png",
              telephone: "+5491161058110",
              priceRange: "$$",
              medicalSpecialty: "DietNutrition",
              // AI & GEO FIX: Conectamos los perfiles exactos del footer para consolidar la autoridad de la entidad
              sameAs: [
                "https://www.instagram.com/antostrangio.nutricion/",
                "https://www.linkedin.com/in/antonellastrangio/",
                "https://www.tiktok.com/@anto.strangio.nut",
              ],
              knowsAbout: [
                "Diabetes",
                "Sobrepeso",
                "Obesidad",
                "Nutrición Clínica",
                "Educación Alimentaria",
                "Antropometría",
                "Bioimpedancia",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Cochabamba 246",
                addressLocality: "Banfield",
                addressRegion: "Buenos Aires",
                postalCode: "B1828",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.7456,
                longitude: -58.3961,
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://yourdomain.com/#faq",
              mainEntity: faqs.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: a,
                },
              })),
            },
          ],
        }),
      }}
    />
  );
}
