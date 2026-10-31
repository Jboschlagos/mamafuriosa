import { sql } from "@/lib/db";
import ComunidadExplorador from "@/components/ComunidadExplorador";

export const revalidate = 600;

export default async function Comunidad() {
  const ofertas = await sql`
    SELECT id, titulo, emprendimiento, provincia, comuna
    FROM ofertas
    WHERE estado = 'publicada'
    ORDER BY creado_en DESC
  `;

  return (
    <div className="py-10">
      <header className="mb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-rojo">
          Mama Furiosa
        </p>

        <h1>Comunidad</h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-carbon/70 md:text-lg">
          Conecta con oportunidades laborales, emprendimientos y personas de
          nuestra comunidad.
        </p>
      </header>

      <ComunidadExplorador ofertas={ofertas} />
    </div>
  );
}
