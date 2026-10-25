# Mamá Furiosa

**La furia tiene una voz.**

Plataforma web para una comunidad de mujeres y madres. Busca conectar a la comunidad con oportunidades laborales, dar visibilidad a emprendimientos y compartir la historia que da origen al proyecto.

**Estado del proyecto:** en construcción.

## El problema que queremos resolver

Criar es un trabajo, y su carga no se reparte de forma igual. Esa desigualdad se vive cada día en casa y también se refleja en el acceso al trabajo y en los espacios donde las mujeres pueden ser escuchadas.

Mamá Furiosa parte de una idea: **criar en igualdad también es político**.

## Funcionalidades actuales

- **Comunidad:** ofertas laborales, tarjetas y mapa interactivo con filtro por región.
- **Tienda:** espacio destinado al mercado de emprendimientos.
- **Sobre mí:** historia y voz de quien fundó el proyecto.

## Stack tecnológico

| Capa                 | Tecnología                   |
| -------------------- | ---------------------------- |
| Framework            | Next.js 16 (App Router)      |
| Interfaz             | React 19                     |
| Estilos              | Tailwind CSS 4               |
| Base de datos        | Neon (PostgreSQL serverless) |
| Mapas                | Leaflet y React Leaflet      |
| Datos geográficos    | GeoJSON                      |
| Tipografías          | Inter y Archivo Black        |
| Calidad de código    | ESLint 9                     |
| Control de versiones | Git y GitHub                 |
| Despliegue           | Render                       |

## Páginas

| Ruta         | Contenido                            |
| ------------ | ------------------------------------ |
| `/`          | Portada y mensaje de marca           |
| `/comunidad` | Ofertas laborales y mapa interactivo |
| `/tienda`    | Mercado de emprendimientos           |
| `/sobre-mi`  | Historia del proyecto                |

## Identidad visual

- **Fondo:** hueso (`#F2F0EB`).
- **Superficies:** blanco (`#FFFFFF`).
- **Texto:** negro y carbón (`#111111`).
- **Acento:** rojo (`#F90303`).
- **Titulares:** Archivo Black.
- **Texto general:** Inter.

Los colores y las reglas tipográficas principales están centralizados en `src/app/globals.css`.

## Criterios de desarrollo

- **Mobile first:** se priorizan los dispositivos móviles.
- **Componentes reutilizables:** se mantienen en `src/components/`.
- **Configuración centralizada:** enlaces y redes sociales se gestionan desde `src/lib/`.
- **Separación de responsabilidades:** la consulta a la base de datos permanece en el servidor y la interacción del mapa se gestiona en componentes de cliente.

## Estructura del proyecto

```text
src/
├── app/
│   ├── layout.js
│   ├── globals.css
│   ├── page.js
│   ├── comunidad/
│   │   └── page.js
│   ├── tienda/
│   └── sobre-mi/
├── components/
│   ├── Header.js
│   ├── MenuMovil.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Boton.js
│   ├── MapaRegiones.js
│   ├── MapaRegionesCarga.js
│   └── ComunidadExplorador.js
└── lib/
    ├── db.js
    ├── enlaces.js
    ├── redes.js
    ├── lugares.js
    └── ubicaciones.js
```

## Cómo correrlo en local

Requiere Node.js 20.9 o superior.

```bash
npm install
```

Crea `.env.local` en la raíz:

```env
DATABASE_URL=postgresql://...
```

Inicia el servidor:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Pendiente

- Definir el logo definitivo.
- Completar los enlaces de redes sociales.
- Desarrollar las funcionalidades de tienda y sobre mí.
- Continuar ampliando las funcionalidades de Comunidad.
