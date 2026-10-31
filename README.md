# Mamá Furiosa

**La furia tiene una voz.**

Plataforma web para una comunidad de mujeres y madres. Busca conectar a la comunidad con oportunidades laborales, dar visibilidad a emprendimientos y compartir la historia que da origen al proyecto.

**Estado del proyecto:** en construcción.

## El problema que queremos resolver

Criar es un trabajo, y su carga no se reparte de forma igual. Esa desigualdad se vive cada día en casa y también se refleja en el acceso al trabajo y en los espacios donde las mujeres pueden ser escuchadas.

Mamá Furiosa parte de una idea: **criar en igualdad también es político**.

## Funcionalidades actuales

- **Comunidad:** ofertas laborales, tarjetas y mapa interactivo con filtro por región.
- **Tienda:** catálogo de productos de la comunidad, con filtro por categoría y página de detalle con galería de fotos.
- **Sobre mí:** historia y voz de quien fundó el proyecto.
- **Administración:** acceso privado para gestionar la tienda.

## Stack tecnológico

| Capa                 | Tecnología                           |
| -------------------- | ------------------------------------ |
| Framework            | Next.js 16 (App Router)              |
| Interfaz             | React 19                             |
| Estilos              | Tailwind CSS 4                       |
| Base de datos        | Neon (PostgreSQL serverless)         |
| Imágenes             | Cloudinary                           |
| Autenticación admin  | bcryptjs y sesión con cookie cifrada |
| Mapas                | Leaflet y React Leaflet              |
| Datos geográficos    | GeoJSON                              |
| Tipografías          | Inter y Archivo Black                |
| Calidad de código    | ESLint 9                             |
| Control de versiones | Git y GitHub                         |
| Despliegue           | Render                               |

## Páginas

| Ruta            | Contenido                            |
| --------------- | ------------------------------------ |
| `/`             | Portada y mensaje de marca           |
| `/comunidad`    | Ofertas laborales y mapa interactivo |
| `/tienda`       | Catálogo de productos con filtro     |
| `/tienda/[id]`  | Detalle de producto con galería      |
| `/sobre-mi`     | Historia del proyecto                |
| `/admin/login`  | Acceso privado de administración     |
| `/admin/tienda` | Panel de administración de la tienda |

## Base de datos

| Tabla        | Contenido                                                          |
| ------------ | ------------------------------------------------------------------ |
| `ofertas`    | Ofertas laborales (estado: borrador / publicada)                   |
| `productos`  | Productos de la tienda (estado: pendiente / publicado / rechazado) |
| `vendedoras` | Datos de contacto; el correo identifica a cada vendedora           |
| `categorias` | Categorías de la tienda                                            |

Cada producto pertenece a una vendedora y a una categoría (llaves foráneas). Las fotos se guardan en Cloudinary y la base de datos solo almacena su URL.

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
- **Componentes reutilizables:** se mantienen en `src/components/` y son el criterio por defecto para cualquier pieza de interfaz.
- **Configuración centralizada:** enlaces y redes sociales se gestionan desde `src/lib/`.
- **Consultas centralizadas:** el acceso a la base de datos se agrupa en `src/lib/` (por ejemplo, `productos.js`).
- **Separación de responsabilidades:** las consultas a la base de datos permanecen en el servidor; la interacción (mapa, galería) se gestiona en componentes de cliente.
- **Datos privados protegidos:** los correos de las vendedoras nunca se envían al navegador.

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
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── sobre-mi/
│   │   └── page.js
│   └── admin/
│       ├── login/
│       │   ├── page.js
│       │   └── actions.js
│       └── tienda/
│           └── page.js
├── components/
│   ├── Header.js
│   ├── MenuMovil.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Boton.js
│   ├── EncabezadoSeccion.js
│   ├── TarjetaProducto.js
│   ├── FiltroCategorias.js
│   ├── GaleriaProducto.js
│   ├── MapaRegiones.js
│   ├── MapaRegionesCarga.js
│   └── ComunidadExplorador.js
└── lib/
    ├── db.js
    ├── productos.js
    ├── formato.js
    ├── admin-session.js
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

Crea `.env.local` en la raíz (nunca subas este archivo a GitHub):

```env
DATABASE_URL=postgresql://...
ADMIN_EMAIL=correo-de-administracion
ADMIN_PASSWORD_HASH=hash-bcrypt-de-la-contraseña
SESSION_SECRET=clave-larga-y-aleatoria
```

Inicia el servidor:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Pendiente

- Definir el logo definitivo.
- Completar los enlaces de redes sociales.
- Tienda: botones de WhatsApp e Instagram, formulario de pedido por correo y formulario "Proponer producto" con aprobación desde el panel.
- Pasar sobre mí al componente `EncabezadoSeccion`.
- Continuar ampliando las funcionalidades de Comunidad.
