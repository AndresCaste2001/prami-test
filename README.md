# Prami Test

Aplicación web desarrollada con React + TypeScript y Vite que implementa una interfaz moderna para explorar cursos, continuar viendo lecciones y visualizar el progreso de aprendizaje. El proyecto utiliza Tailwind CSS para estilos utilitarios, React Router para el ruteo, y librerías de visualización como Recharts y react-circular-progressbar, además de Swiper para carruseles.

## Tabla de contenidos
- Características
- Tecnologías
- Requisitos
- Instalación y ejecución
- Scripts disponibles
- Estructura del proyecto
- Estándares de código
- Construcción y despliegue
- Preguntas frecuentes (FAQ)
- Contribuir
- Licencia

## Características
- Listado de cursos con tarjetas (CourseCard) y acciones rápidas.
- Sección "Continue Watching" para reanudar lecciones.
- Listado de progreso por curso (CourseProgressList) con insignias de avance (ProgressBadge).
- Tabla de lecciones (LessonTable y LessonTableRow) con estado de visualización.
- Estilos modernos con Tailwind CSS 4.
- Iconografía con lucide-react.
- Gráficas y progreso con Recharts y react-circular-progressbar.
- Carruseles y sliders con Swiper.

## Tecnologías
- React 19 + TypeScript
- Vite 7 (dev server y build)
- Tailwind CSS 4
- React Router DOM 7
- Recharts, react-circular-progressbar
- Swiper
- ESLint (typescript-eslint, react hooks, react refresh)

## Requisitos
- Node.js 18 o superior (recomendado 20+)
- npm 9+ o pnpm/yarn (el proyecto usa npm por defecto)

## Instalación y ejecución
1. Clonar el repositorio:
   git clone <URL_DEL_REPO>
   cd prami-test

2. Instalar dependencias:
   npm install

3. Ejecutar en desarrollo (HMR):
   npm run dev

4. Abrir en el navegador:
   La terminal mostrará la URL (por defecto http://localhost:5173).

## Scripts disponibles
- npm run dev: Inicia el servidor de desarrollo de Vite.
- npm run build: Compila TypeScript y genera el build de producción.
- npm run preview: Sirve localmente el build de producción para verificación.
- npm run lint: Ejecuta ESLint sobre el proyecto.

## Estructura del proyecto
- index.html: Documento raíz de la app Vite.
- src/
  - main.tsx: Entrada de la aplicación React.
  - index.css: Estilos globales (incluye Tailwind).
  - theme/
    - colors.ts: Paleta de colores y constantes de tema.
  - components/
    - ui/
      - CourseCard.tsx
      - IconButton.tsx
      - LessonTableRow.tsx
      - ProgressBadge.tsx
    - widgets/
      - ContinueWatching.tsx
      - CourseProgressList.tsx
      - LessonTable.tsx
- public/: Recursos estáticos (si aplica).

Nota: Puedes extender esta estructura creando rutas con React Router y añadiendo páginas en una carpeta src/pages.

## Estándares de código
- Lenguaje: TypeScript estricto.
- Linter: ESLint con typescript-eslint y reglas para hooks.
- Estilos: Tailwind CSS (clases utilitarias); procura mantener componentes pequeños y reutilizables en components/ui y components/widgets.
- Convenciones de commits: se recomienda Conventional Commits (feat, fix, docs, refactor, chore, etc.).

## Construcción y despliegue
1. Build de producción:
   npm run build
   Esto genera la carpeta dist/ lista para desplegar.

2. Previsualización local del build:
   npm run preview

3. Despliegue:
   - Opción 1: Servidores estáticos (Netlify, Vercel, GitHub Pages) sirviendo dist/.
   - Opción 2: Cualquier hosting que soporte contenido estático. Asegúrate de configurar el reescritura de rutas para React Router (fallback a index.html).

## Preguntas frecuentes (FAQ)
- ¿Cómo cambio la paleta de colores?
  Edita src/theme/colors.ts y actualiza clases Tailwind en los componentes.

- ¿Dónde agrego nuevas secciones o páginas?
  Crea componentes en src/components y páginas en src/pages, registra las rutas en React Router desde main.tsx o el layout principal.

- ¿Puedo usar otra librería de gráficos?
  Sí, pero Recharts ya está configurada en dependencias; instala y configura la alternativa según necesidad.

## Contribuir
- Crea un branch desde main.
- Asegúrate de que npm run lint no reporte errores antes de abrir un PR.
- Incluye capturas o GIFs si tu cambio afecta la UI.

## Licencia
Este proyecto no declara una licencia explícita. Si planeas hacerlo público, se recomienda añadir una licencia (por ejemplo, MIT) en un archivo LICENSE.
