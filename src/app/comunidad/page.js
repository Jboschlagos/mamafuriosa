import { sql } from "@/lib/db";
import { nombreComuna, nombreProvincia } from "@/lib/lugares";
import MapaRegionesCarga from "@/components/MapaRegionesCarga";

export default async function Comunidad() {
  const ofertas = await sql`
  SELECT id, titulo, emprendimiento, provincia, comuna
  FROM ofertas
  WHERE estado = 'publicada'
  ORDER BY creado_en DESC
`;

  return (
    <>
      <h1>Comunidad</h1>

      <div className="mt-4 grid gap-6 md:grid-cols-[2fr_3fr] md:items-start">
        <MapaRegionesCarga />

        <ul>
          {ofertas.map((oferta) => (
            <li key={oferta.id}>
              {oferta.titulo} · {oferta.emprendimiento} ·{" "}
              {nombreComuna(oferta.comuna)}, {nombreProvincia(oferta.provincia)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
