import { notFound } from "next/navigation";
import { obtenerProductoPorId } from "@/lib/productos";
import { formatearPrecio } from "@/lib/formato";
import GaleriaProducto from "@/components/GaleriaProducto";

export const revalidate = 600;

export default async function DetalleProducto({ params }) {
  const { id: idTexto } = await params;

  // La URL trae texto; si no es un número válido, la página no existe
  const id = Number.parseInt(idTexto, 10);
  if (!Number.isInteger(id) || id <= 0) notFound();

  const producto = await obtenerProductoPorId(id);
  if (!producto) notFound();
  // Juntamos las 3 fotos en una lista, sin las que están vacías
  const fotos = [producto.foto_1, producto.foto_2, producto.foto_3].filter(
    Boolean,
  );

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,420px)_1fr] md:gap-12">
      <GaleriaProducto fotos={fotos} nombre={producto.nombre} />

      <div>
        {producto.categoria && (
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-carbon/60">
            {producto.categoria}
          </p>
        )}

        <h1 className="mt-2 font-titulo text-3xl leading-tight md:text-4xl">
          {producto.nombre}
        </h1>

        <p className="mt-4 text-2xl font-semibold">
          {formatearPrecio(producto.precio)}
        </p>

        <p className="mt-1 text-sm text-carbon/70">por {producto.vendedora}</p>

        {!producto.disponible && (
          <p className="mt-4 inline-block bg-carbon px-3 py-1 text-xs font-semibold uppercase text-white">
            Agotado
          </p>
        )}

        {producto.descripcion && (
          <p className="mt-6 leading-relaxed text-carbon/75">
            {producto.descripcion}
          </p>
        )}
      </div>
    </div>
  );
}
