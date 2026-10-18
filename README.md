# Mamá Furiosa

**La furia tiene una voz.**

Plataforma web para una comunidad de mujeres y madres: ofertas laborales, un mercado de emprendimientos y un espacio para conocer la voz detrás del proyecto. Estado actual: **en construcción**.

## El problema que queremos resolver

Criar es un trabajo, y su carga no se reparte de forma igual. Esa desigualdad se vive cada día en casa, y se nota también en el acceso al trabajo y en los espacios donde las mujeres pueden ser escuchadas.

Mamá Furiosa parte de una idea: **criar en igualdad también es político**. La plataforma convierte esa idea en herramientas concretas:

- **Comunidad:** un lugar donde las mujeres se escuchan, comparten y se organizan, con ofertas laborales pensadas para ellas.
- **Tienda:** un mercado para dar visibilidad a emprendimientos de mujeres y madres.
- **Sobre mí:** la historia y la voz de quien fundó el proyecto.

El tono de marca, definido en el manual de identidad, se apoya en tres principios:

- **Firmeza:** argumentos claros. El rojo no sustituye la evidencia.
- **Cuidado:** cercanía sin romantizar la sobrecarga.
- **Comunidad:** mujeres que se escuchan, comparten y se organizan.

## Stack

| Capa                 | Tecnología                                                                       |
| -------------------- | -------------------------------------------------------------------------------- |
| Framework            | [Next.js](https://nextjs.org) 16 (App Router)                                    |
| Interfaz             | React 19                                                                         |
| Estilos              | Tailwind CSS 4                                                                   |
| Base de datos        | [Neon](https://neon.tech) (PostgreSQL serverless) con `@neondatabase/serverless` |
| Tipografías          | Inter y Archivo Black, cargadas con `next/font/google`                           |
| Calidad de código    | ESLint 9 con `eslint-config-next`                                                |
| Control de versiones | Git y GitHub                                                                     |
| Despliegue           | Render                                                                           |

## Páginas

| Ruta         | Contenido                                        |
| ------------ | ------------------------------------------------ |
| `/`          | Portada con el mensaje de marca                  |
| `/comunidad` | Ofertas laborales, leídas desde la base de datos |
| `/tienda`    | Mercado de emprendimientos (próximamente)        |
| `/sobre-mi`  | Biografía (próximamente)                         |

## Identidad visual

Todo sigue el manual de identidad de la marca.

- **Colores:** hueso `#F2F0EB` como fondo, blanco `#FFFFFF` para cabecera y tarjetas, negro y carbón `#111111` para texto, rojo `#F90303` como acento. Apoyo: gris cálido, arena, rosa empolvado y ciruela.
- **Tipografía:** Archivo Black para titulares (`h1` y `h2`), Inter para todo lo demás.
- **Sin modo oscuro** por ahora: el manual no lo define.

Los colores y tamaños de titulares viven en `src/app/globals.css`, en un solo lugar.

## Cómo se construye

- **Mobile first:** la plataforma se verá principalmente en celulares. Los estilos base son los del celular y los prefijos `md:` añaden cambios desde 768 px.
- **Centralizado:** lo que se repite se define una vez.
  - El contenedor de las páginas está en `src/app/layout.js`.
  - Los enlaces del menú y del footer salen de `src/lib/enlaces.js`.
  - Las redes sociales salen de `src/lib/redes.js`.
  - Los componentes reutilizables están en `src/components/`.

## Estructura

```
src/
├── app/
│   ├── layout.js        # Cabecera, contenedor y footer
│   ├── globals.css      # Colores y titulares
│   ├── page.js          # Portada
│   ├── comunidad/
│   ├── tienda/
│   └── sobre-mi/
├── components/
│   ├── Header.js
│   ├── MenuMovil.js     # Menú hamburguesa
│   ├── Footer.js
│   ├── Hero.js          # Bloque de mensaje
│   └── Boton.js
└── lib/
    ├── db.js            # Conexión a Neon
    ├── enlaces.js
    └── redes.js
```

## Cómo correrlo en local

Requiere Node.js 20.9 o superior.

```bash
npm install
```

Crea un archivo `.env.local` en la raíz con la conexión a la base de datos de Neon:

```
DATABASE_URL=postgresql://...
```

La página de comunidad lee la tabla `ofertas`, con las columnas `id`, `titulo`, `emprendimiento`, `ciudad`, `comuna` y `creado_en`.

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Pendiente

- Logo definitivo (hoy es texto en Archivo Black).
- Enlaces de redes sociales de la marca.
- Páginas de tienda y sobre mí.
