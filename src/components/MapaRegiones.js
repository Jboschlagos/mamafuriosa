"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Colores del manual de identidad
const COLOR_BASE = "#d7d2cb"; // gris cálido
const COLOR_BORDE = "#ffffff";
const COLOR_RESALTE = "#f90303"; // rojo: solo como acento

const estiloRegion = {
  color: COLOR_BORDE,
  weight: 1,
  fillColor: COLOR_BASE,
  fillOpacity: 1,
};

function alCrearRegion(feature, layer) {
  layer.bindTooltip(feature.properties.Region, { sticky: true });
  layer.on({
    mouseover: (e) => e.target.setStyle({ fillColor: COLOR_RESALTE }),
    mouseout: (e) => e.target.setStyle({ fillColor: COLOR_BASE }),
  });
}

export default function MapaRegiones() {
  const [regiones, setRegiones] = useState(null);

  useEffect(() => {
    fetch("/geo/regiones.json")
      .then((respuesta) => respuesta.json())
      .then(setRegiones);
  }, []);

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
