"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destacados = [
  {
    categoria: "Comunidad",
    titulo: "Conectar experiencias",
    descripcion:
      "Un espacio para compartir historias, intercambiar ideas y construir redes de apoyo entre personas con experiencias similares.",
    numero: "01",
  },
  {
    categoria: "Oportunidades",
    titulo: "Abrir nuevos caminos",
    descripcion:
      "Descubre oportunidades laborales, colaboraciones y servicios que pueden ayudarte a desarrollar tus proyectos.",
    numero: "02",
  },
  {
    categoria: "Participación",
    titulo: "Hacer comunidad",
    descripcion:
      "Creemos en el valor de participar, compartir conocimientos y generar iniciativas que tengan un impacto positivo.",
    numero: "03",
  },
  {
    categoria: "Proyectos",
    titulo: "Transformar ideas",
    descripcion:
      "Un lugar para dar visibilidad a iniciativas, encontrar personas afines y convertir ideas en proyectos concretos.",
    numero: "04",
  },
];

export default function SobreMi() {
  const carruselRef = useRef(null);

  function desplazar(direccion) {
    if (!carruselRef.current) return;

    const tarjeta = carruselRef.current.querySelector("article");
    const distancia = tarjeta ? tarjeta.clientWidth + 24 : 300;

    carruselRef.current.scrollBy({
      left: direccion === "derecha" ? distancia : -distancia,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-surface text-carbon">
      {/* Presentación */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-carbon/60">
          Nuestra comunidad
        </p>

        <h1 className="max-w-3xl font-titulo text-4xl font-bold leading-tight md:text-6xl">
          Un espacio para conectar, compartir y crecer.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carbon/75">
          Mamá Furiosa nace como un espacio de encuentro para personas que
          buscan compartir experiencias, descubrir oportunidades y construir
          nuevas redes de colaboración.
        </p>

        <p className="mt-4 max-w-2xl leading-relaxed text-carbon/70">
          Nos interesa lo que ocurre cuando las personas se encuentran,
          comparten lo que saben y descubren que pueden avanzar juntas. Queremos
          impulsar una comunidad activa, diversa y abierta a nuevas ideas.
        </p>
      </section>

      {/* Carrusel */}
      <section
        aria-labelledby="destacados-titulo"
        className="border-y border-gris-calido bg-gris-calido/20"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-8 md:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-carbon/60">
                Lo que nos mueve
              </p>

              <h2
                id="destacados-titulo"
                className="font-titulo text-3xl font-bold md:text-4xl"
              >
                Ideas que nos conectan
              </h2>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => desplazar("izquierda")}
                aria-label="Ver tarjetas anteriores"
                className="flex size-11 items-center justify-center rounded-full border border-gris-calido transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <ChevronLeft aria-hidden="true" size={20} />
              </button>

              <button
                type="button"
                onClick={() => desplazar("derecha")}
                aria-label="Ver tarjetas siguientes"
                className="flex size-11 items-center justify-center rounded-full border border-gris-calido transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </div>
          </div>

          <div
            ref={carruselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
            aria-label="Temas destacados de Mamá Furiosa"
          >
            {destacados.map((item) => (
              <article
                key={item.numero}
                className="flex min-h-[280px] min-w-[85%] snap-start flex-col rounded-2xl border border-gris-calido bg-surface p-6 sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-carbon/60">
                    {item.categoria}
                  </span>

                  <span className="font-titulo text-2xl text-carbon/30">
                    {item.numero}
                  </span>
                </div>

                <h3 className="font-titulo text-2xl font-bold">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-carbon/70">
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-2 text-xs text-carbon/55">
            Desliza las tarjetas o utiliza las flechas para explorar.
          </p>
        </div>
      </section>

      {/* Propósito */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <h2 className="font-titulo text-3xl font-bold leading-tight md:text-4xl">
            Creemos en el valor de encontrarnos.
          </h2>

          <div className="space-y-5 leading-relaxed text-carbon/75">
            <p>
              Cada persona tiene conocimientos, experiencias y capacidades que
              pueden aportar valor a otras. Crear espacios para compartir esos
              recursos es una forma de fortalecer nuestra comunidad.
            </p>

            <p>
              Queremos que Mamá Furiosa sea un punto de partida para nuevas
              conversaciones, colaboraciones y oportunidades. Un espacio que
              crezca con las personas que lo hacen suyo.
            </p>

            <p className="font-semibold text-carbon">
              Esto recién comienza. La comunidad también la construyes tú.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
