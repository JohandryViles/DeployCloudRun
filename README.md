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
