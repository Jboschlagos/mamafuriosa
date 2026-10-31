export default function FiltroCategorias({ categorias, seleccionada }) {
  return (
    <form method="get" className="mt-8 flex gap-2">
      <label htmlFor="categoria" className="sr-only">
        Categoría
      </label>

      <select
        id="categoria"
        name="categoria"
        defaultValue={seleccionada ?? ""}
        className="min-w-0 flex-1 border border-gris-calido bg-surface p-3"
      >
        <option value="">Todas las categorías</option>
        {categorias.map((c) => (
          <option key={c.id} value={c.id}>
            {c.nombre}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-carbon px-5 py-3 font-semibold text-white hover:bg-ciruela"
      >
        Filtrar
      </button>
    </form>
  );
}
