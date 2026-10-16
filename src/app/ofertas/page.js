import { sql } from "@/lib/db";

export default async function Ofertas() {
  const ofertas = await sql`
    SELECT id, titulo, emprendimiento, ciudad, comuna
    FROM ofertas
    ORDER BY creado_en DESC
  `;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Ofertas</h1>
      <ul className="mt-4">
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            {oferta.titulo} · {oferta.emprendimiento} · {oferta.comuna}, {oferta.ciudad}
          </li>
        ))}
      </ul>
    </main>
  );
}
