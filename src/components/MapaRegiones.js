"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const COLOR_BASE = "#d7d2cb";
const COLOR_BORDE = "#ffffff";
const COLOR_RESALTE = "#f90303";

// Códigos oficiales de las regiones de Chile.
const CODIGOS_REGIONES = {
  "Región de Arica y Parinacota": "15",
  "Región de Tarapacá": "01",
  "Región de Antofagasta": "02",
  "Región de Magallanes y Antártica Chilena": "12",
  "Región de Aysén del Gral.Ibañez del Campo": "11",
  "Región de Atacama": "03",
  "Región de Coquimbo": "04",
  "Región de Valparaíso": "05",
  "Región Metropolitana de Santiago": "13",
  "Región de Los Lagos": "10",
  "Región de Los Ríos": "14",
  "Región de La Araucanía": "09",
  "Región del Bío-Bío": "08",
  "Región de Ñuble": "16",
  "Región del Maule": "07",
  "Región del Libertador Bernardo O'Higgins": "06",
};

export default function MapaRegiones({ selectedRegion, onRegionSelect }) {
  const [regiones, setRegiones] = useState(null);

  useEffect(() => {
    fetch("/geo/regiones.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el mapa");
        }
        return respuesta.json();
      })
      .then(setRegiones)
      .catch((error) => {
        console.error("Error al cargar las regiones:", error);
      });
  }, []);

  function estiloRegion(feature) {
    const codigo = CODIGOS_REGIONES[feature.properties.Region];

    return {
      color: COLOR_BORDE,
      weight: 1,
      fillColor: codigo === selectedRegion ? COLOR_RESALTE : COLOR_BASE,
      fillOpacity: 1,
    };
  }

  function alCrearRegion(feature, layer) {
    const nombre = feature.properties.Region;
    const codigo = CODIGOS_REGIONES[nombre];

    layer.bindTooltip(nombre, { sticky: true });

    layer.on("click", () => {
      if (codigo) {
        onRegionSelect(codigo, nombre);
      }
    });
  }

  return (
    <MapContainer
      bounds={[
        [-56, -76],
        [-17, -66],
      ]}
      zoomSnap={0.25}
      scrollWheelZoom={false}
      className="h-72 w-full bg-surface md:h-[32rem]"
    >
      {regiones && (
        <GeoJSON
          data={regiones}
          style={estiloRegion}
          onEachFeature={alCrearRegion}
        />
      )}
    </MapContainer>
  );
}
