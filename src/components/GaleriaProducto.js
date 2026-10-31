"use client";

import { useState } from "react";
import Image from "next/image";

export default function GaleriaProducto({ fotos, nombre }) {
  const [activa, setActiva] = useState(0);

  // Sin fotos: cuadro gris
  if (fotos.length === 0) {
    return <div className="aspect-square bg-gray-200" />;
  }

  return (
    <div>
      {/* Foto grande */}
      <div className="relative aspect-square bg-gray-200">
        <Image
          src={fotos[activa]}
          alt={nombre}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Miniaturas: solo si hay más de una foto */}
      {fotos.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {fotos.map((foto, i) => (
            <button
              key={foto}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === activa}
              className={`relative aspect-square bg-gray-200 ${
                i === activa
                  ? "ring-2 ring-carbon"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={foto}
                alt=""
                fill
                sizes="33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
