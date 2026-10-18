import { sql } from "@/lib/db";

export default async function Comunidad() {
  const ofertas = await sql`
    SELECT id, titulo, emprendimiento, ciudad, comuna
    FROM ofertas
    ORDER BY creado_en DESC
  `;

  return (
    <>
      <h1>Comunidad</h1>
      <ul className="mt-4">
        {ofertas.map((oferta) => (
          <li key={oferta.id}>
            {oferta.titulo} · {oferta.emprendimiento} · {oferta.comuna},{" "}
            {oferta.ciudad}
          </li>
        ))}
      </ul>
    </>
  );
}
