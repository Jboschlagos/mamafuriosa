"use client";

import { useState } from "react";
import { nombreComuna, nombreProvincia } from "@/lib/lugares";
import MapaRegionesCarga from "@/components/MapaRegionesCarga";

export default function ComunidadExplorador({ ofertas }) {
  const [regionSeleccionada, setRegionSeleccionada] = useState(null);
  const [nombreRegionSeleccionada, setNombreRegionSeleccionada] = useState("");

  function seleccionarRegion(codigo, nombre) {
    if (regionSeleccionada === codigo) {
      setRegionSeleccionada(null);
      setNombreRegionSeleccionada("");
      return;
    }

    setRegionSeleccionada(codigo);
    setNombreRegionSeleccionada(nombre);
  }

  const ofertasFiltradas = regionSeleccionada
    ? ofertas.filter(
        (oferta) =>
          String(oferta.comuna).padStart(5, "0").slice(0, 2) ===
          regionSeleccionada,
      )
    : ofertas;

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-[2fr_3fr] md:items-start">
      <section className="overflow-hidden rounded-xl border border-gris-calido bg-surface">
        <div className="border-b border-gris-calido p-4">
          <h2 className="text-lg">Explora por región</h2>
          <p className="mt-1 text-sm text-carbon/70">
            Selecciona una región para filtrar las ofertas.
          </p>
        </div>

        <MapaRegionesCarga
          selectedRegion={regionSeleccionada}
          onRegionSelect={seleccionarRegion}
        />
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl">Oportunidades</h2>
            <p className="mt-1 text-sm text-carbon/70">
              {regionSeleccionada
                ? nombreRegionSeleccionada
                : "Ofertas disponibles en la comunidad"}
            </p>
          </div>

          {regionSeleccionada && (
            <button
              type="button"
              onClick={() => seleccionarRegion(regionSeleccionada, "")}
              className="shrink-0 text-sm font-semibold underline underline-offset-4 hover:text-rojo"
            >
              Ver todas
            </button>
          )}
        </div>

        <p className="mb-3 text-sm text-carbon/70">
          {ofertasFiltradas.length}{" "}
          {ofertasFiltradas.length === 1
            ? "oferta encontrada"
            : "ofertas encontradas"}
        </p>

        {ofertasFiltradas.length > 0 ? (
          <ul className="grid gap-3">
            {ofertasFiltradas.map((oferta) => (
              <li key={oferta.id}>
                <article className="rounded-xl border border-gris-calido bg-surface p-4 transition-colors hover:border-rojo/60">
                  <span className="mb-2 inline-block rounded-full bg-rosa-empolvado/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ciruela">
                    Oferta laboral
                  </span>

                  <h3 className="text-lg font-bold leading-snug text-carbon">
                    {oferta.titulo}
                  </h3>

                  <p className="mt-1 text-sm text-carbon/75">
                    {oferta.emprendimiento}
                  </p>

                  <p className="mt-3 flex items-start gap-2 text-xs text-carbon/65">
                    <span aria-hidden="true">⌖</span>
                    <span>
                      {nombreComuna(oferta.comuna)},{" "}
                      {nombreProvincia(oferta.provincia)}
                    </span>
                  </p>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-gris-calido p-6 text-center">
            <p className="font-semibold">
              Todavía no hay ofertas en esta región.
            </p>
            <p className="mt-1 text-sm text-carbon/70">
              Prueba seleccionando otra región del mapa.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
