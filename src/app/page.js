import { sql } from "@/lib/db";

export default async function Home() {
  const ofertas = await sql`
    SELECT id, titulo, emprendimiento, ciudad, comuna
    FROM ofertas
    ORDER BY creado_en DESC
  `;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Mamá Furiosa</h1>
      <h2 className="mt-6 text-xl font-semibold">Ofertas</h2>
      <ul className="mt-2">
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            {oferta.titulo} · {oferta.emprendimiento} · {oferta.comuna}, {oferta.ciudad}
          </li>
        ))}
      </ul>
    </main>
  );
}
