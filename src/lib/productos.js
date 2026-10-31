import { sql } from "@/lib/db";

// Productos visibles en /tienda: solo los publicados
// categoriaId es opcional: si viene null, trae todas las categorías
export async function obtenerProductosPublicados(categoriaId = null) {
  return await sql`
    SELECT p.id, p.nombre, p.precio, p.foto_1, p.disponible,
           c.nombre AS categoria,
           v.nombre AS vendedora
    FROM productos p
    LEFT JOIN categorias c ON c.id = p.categoria_id
    JOIN vendedoras v ON v.id = p.vendedora_id
    WHERE p.estado = 'publicado'
      AND (${categoriaId}::int IS NULL OR p.categoria_id = ${categoriaId})
    ORDER BY p.publicado_en DESC
  `;
}

// Lista de categorías para el filtro
export async function obtenerCategorias() {
  return await sql`
    SELECT id, nombre FROM categorias ORDER BY nombre
  `;
}

// Un producto publicado, con los datos de contacto de su vendedora
export async function obtenerProductoPorId(id) {
  const filas = await sql`
    SELECT p.id, p.nombre, p.descripcion, p.precio, p.disponible,
           p.foto_1, p.foto_2, p.foto_3,
           c.nombre AS categoria,
           v.nombre AS vendedora,
           v.whatsapp, v.instagram
    FROM productos p
    LEFT JOIN categorias c ON c.id = p.categoria_id
    JOIN vendedoras v ON v.id = p.vendedora_id
    WHERE p.id = ${id} AND p.estado = 'publicado'
  `;
  return filas[0] ?? null;
}
