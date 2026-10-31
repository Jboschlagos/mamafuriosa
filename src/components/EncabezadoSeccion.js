export default function EncabezadoSeccion({
  antetitulo,
  titulo,
  bajada,
  children,
}) {
  return (
    <section className="bg-surface text-carbon">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24">
        {antetitulo && (
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-carbon/60">
            {antetitulo}
          </p>
        )}

        <h1 className="max-w-3xl font-titulo text-4xl font-bold leading-tight md:text-6xl">
          {titulo}
        </h1>

        {bajada && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carbon/75">
            {bajada}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
