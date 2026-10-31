import Link from "next/link";
import { formatearPrecio } from "@/lib/formato";

export default function TarjetaProducto({ producto }) {
  const { id, nombre, precio, disponible, categoria, vendedora } = producto;

  return (
    <Link href={`/tienda/${id}`} className="block bg-surface">
      {/* Foto cuadrada: por ahora un cuadro gris */}
      <div className="relative aspect-square bg-gray-200">
        {!disponible && (
          <span className="absolute bottom-2 right-2 bg-carbon px-2 py-1 text-xs font-semibold uppercase text-white">
            Agotado
          </span>
        )}
      </div>

      <div className="p-3">
        {categoria && (
          <p className="text-xs uppercase tracking-widest text-gray-600">
            {categoria}
          </p>
        )}
        <h2 className="mt-1 text-base leading-tight">{nombre}</h2>
        <p className="mt-2 font-semibold">{formatearPrecio(precio)}</p>
        <p className="mt-1 text-xs text-gray-600">por {vendedora}</p>
      </div>
    </Link>
  );
}
