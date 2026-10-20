"use client";

import dynamic from "next/dynamic";

const MapaRegiones = dynamic(() => import("./MapaRegiones"), {
  ssr: false,
  loading: () => <p>Cargando mapa…</p>,
});

export default function MapaRegionesCarga() {
  return <MapaRegiones />;
}
