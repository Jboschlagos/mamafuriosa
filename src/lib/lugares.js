import { ubicaciones } from "./ubicaciones";

const regiones = new Map();
const provincias = new Map();
const comunas = new Map();

for (const r of ubicaciones) {
  regiones.set(r.codigo, r.nombre);
  for (const p of r.provincias) {
    provincias.set(p.codigo, p.nombre);
    for (const c of p.comunas) comunas.set(c.codigo, c.nombre);
  }
}

export const nombreRegion = (codigo) => regiones.get(codigo) ?? "";
export const nombreProvincia = (codigo) => provincias.get(codigo) ?? "";
export const nombreComuna = (codigo) => comunas.get(codigo) ?? "";
