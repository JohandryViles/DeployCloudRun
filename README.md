# Landing Page de Restaurante - VICIO

Proyecto web desarrollado con **React + Vite + Tailwind CSS** para una landing page de restaurante con enfoque visual, secciones promocionales y mapa integrado.

## Descripción

Esta landing presenta:

- Hero principal con imagen destacada y navegación superior.
- Sección de propuesta de valor con llamada a la acción.
- Tarjetas de productos destacados.
- Sección de ubicaciones con widget de Google Maps (vista satélite).
- Bloque promocional de menú y sección del chef.
- Footer con horario y redes.

Todo el contenido está adaptado a español de marca, manteniendo la identidad visual solicitada.

## Tecnologías

- React
- Vite
- Tailwind CSS
- PostCSS + Autoprefixer

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

La app estará disponible en la URL que indique Vite (normalmente `http://localhost:5173`).

## Build de producción

```bash
npm run build
```

## Previsualizar build

```bash
npm run preview
```

## Estructura principal del proyecto

```text
DeployCloudRun/
├─ public/
│  └─ images/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ package.json
└─ .gitignore
```

## Personalización rápida

- Textos y secciones: `src/App.jsx`
- Estilos globales: `src/index.css`
- Tokens visuales (colores, tipografía, sombras): `tailwind.config.js`
- Imágenes: carpeta `public/images/`

## Notas

- Si cambias imágenes, utiliza rutas desde `public/` (ejemplo: `/images/mi-imagen.png`).
- Para despliegues, asegúrate de ejecutar `npm run build` antes de publicar.

## Despliegue en Google Cloud Run (contenedor)

Este repositorio ya incluye:

- `Dockerfile` multi-stage (construye con Vite y sirve estáticos con Nginx)
- `nginx/default.conf` (puerto `8080`, compresión gzip y fallback SPA)
- `.dockerignore` para optimizar el build del contenedor

### Opción recomendada: despliegue desde repositorio conectado en Cloud Run

1. En Cloud Run, selecciona tu repositorio conectado.
2. Elige rama y deja la **ruta del Dockerfile** en la raíz (`/`).
3. En configuración del contenedor:
   - Puerto: `8080`
   - Comando del contenedor: dejar vacío
   - Argumentos: dejar vacío
4. Despliega el servicio.

Cloud Run inyecta la variable `PORT` (por defecto `8080`) y Nginx escucha en ese puerto.

### Si el build falla en Cloud Build

1. En el trigger de Cloud Build (o en la configuración del servicio), confirma que el tipo de build sea **Dockerfile** y no Buildpacks.
2. Ruta del Dockerfile: `Dockerfile` (raíz del repo).
3. Contexto de build: `/` (raíz).
4. Puerto del contenedor: `8080`.

### Verificar localmente el contenedor (opcional)

```bash
docker build -t deploycloudrun .
docker run -p 8080:8080 deploycloudrun
```

Luego abre `http://localhost:8080`.
