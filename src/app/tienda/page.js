import { obtenerProductosPublicados, obtenerCategorias } from "@/lib/productos";
import EncabezadoSeccion from "@/components/EncabezadoSeccion";
import TarjetaProducto from "@/components/TarjetaProducto";
import FiltroCategorias from "@/components/FiltroCategorias";

export const revalidate = 600;

export default async function Tienda({ searchParams }) {
  const params = await searchParams;

  // La URL trae texto ("2"); lo convertimos a número o null
  const id = Number.parseInt(params?.categoria, 10);
  const categoriaId = Number.isInteger(id) && id > 0 ? id : null;

  const [productos, categorias] = await Promise.all([
    obtenerProductosPublicados(categoriaId),
    obtenerCategorias(),
  ]);

  return (
    <div>
      <EncabezadoSeccion
        antetitulo="Tienda"
        titulo="Hecho por nosotras"
        bajada="Libros, ropa y talleres creados por mujeres y madres de la comunidad."
      >
        <FiltroCategorias categorias={categorias} seleccionada={categoriaId} />
      </EncabezadoSeccion>

      {productos.length === 0 ? (
        <p className="mt-8 text-carbon/70">
          No hay productos en esta categoría todavía.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {productos.map((producto) => (
            <li key={producto.id}>
              <TarjetaProducto producto={producto} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
