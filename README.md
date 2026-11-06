# Desarrollo moral y competencias ciudadanas — análisis de teorías

Sitio web estático (HTML/CSS/JS puro) listo para GitHub Pages. No requiere Node, backend ni compilación.

## Estructura
- `index.html`: página principal (portada, caso, tarjetas de teoría, referencias).
- `teoria.html`: plantilla dinámica de cada teoría (`teoria.html?id=freud`).
- `styles.css`: paleta, layout, accesibilidad y responsive.
- `app.js`: contenido (`THEORIES`, `REFERENCES`) e interacción.
- `fotos/`: foto de cada autor (`freud.jpg`, `piaget.jpg`, `kohlberg.jpg`) y `autor-placeholder.svg` de respaldo.
- `icons/`: ilustraciones decorativas.
- `media/`: imágenes de artículos / sitios recomendados y `reto-placeholder.svg`.

## Las tres teorías
La lista `ACTIVE_THEORIES` en `app.js` define qué teorías se muestran y en qué orden:

```js
const ACTIVE_THEORIES = ['freud', 'piaget', 'kohlberg'];
```

Cada teoría en `THEORIES` tiene: `author` (nombre, argumento), `videoId`/`videoRef`, `esArticle` (artículo 1), `enArticle` (artículo 2), `recommend` (página web), `fact` (dato curioso) y `activityUrl` (juego).

## Distribución de la subpágina
Después del argumento, dos columnas:
- Columna 1: Video · Artículo 1 · Artículo 2
- Columna 2: Juego · Dato curioso · Página web

## Imágenes
- Fotos de autor: `fotos/<clave>.jpg` (cuadradas; se recortan solas al círculo).
- Artículos, juego y web: `media/<número><TIPO>.<extensión>` → `01ES`, `01EN`, `01WEB`, `01RETO` (opcional).

## Publicar en GitHub Pages
Settings → Pages → rama principal, carpeta raíz (`/`).
