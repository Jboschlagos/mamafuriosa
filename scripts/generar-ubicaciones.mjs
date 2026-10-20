import { readFileSync, writeFileSync } from "node:fs";

// Divide una línea CSV respetando las comillas
function dividir(linea) {
  const campos = [];
  let actual = "";
  let entreComillas = false;
  for (const c of linea) {
    if (c === '"') entreComillas = !entreComillas;
    else if (c === "," && !entreComillas) {
      campos.push(actual);
      actual = "";
    } else actual += c;
  }
  campos.push(actual);
  return campos;
}

const texto = readFileSync(
  "data/codigos-unicos-territoriales.csv",
  "utf8",
).replace(/^\uFEFF/, ""); // quita una marca invisible que algunos CSV traen al inicio

const filas = texto
  .split(/\r?\n/)
  .filter(Boolean)
  .slice(1) // salta el encabezado
  .map((linea) => {
    const [codigo, id, nombre, tipo, , vigente, padre] = dividir(linea);
    return { codigo, id, nombre, tipo, vigente, padre };
  })
  .filter((f) => f.vigente !== "No");

// Devuelve los hijos de un padre, de un tipo dado, ordenados por código
const hijos = (padreId, tipo) =>
  filas
    .filter((f) => f.tipo === tipo && f.padre === padreId)
    .sort((a, b) => a.codigo.localeCompare(b.codigo));

const ubicaciones = hijos("0", "REGION").map((r) => ({
  codigo: r.codigo,
  nombre: r.nombre,
  provincias: hijos(r.id, "PROVINCIA").map((p) => ({
    codigo: p.codigo,
    nombre: p.nombre,
    comunas: hijos(p.id, "COMUNA").map((c) => ({
      codigo: c.codigo,
      nombre: c.nombre,
    })),
  })),
}));

writeFileSync(
  "src/lib/ubicaciones.js",
  "// Archivo generado por scripts/generar-ubicaciones.mjs. No editar a mano.\n" +
    "export const ubicaciones = " +
    JSON.stringify(ubicaciones, null, 2) +
    ";\n",
);

const provincias = ubicaciones.flatMap((r) => r.provincias);
const comunas = provincias.flatMap((p) => p.comunas);
console.log(
  ubicaciones.length,
  "regiones,",
  provincias.length,
  "provincias,",
  comunas.length,
  "comunas",
);
