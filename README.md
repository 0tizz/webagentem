# webagenteM

Sitio web oficial de documentación de **Agente MILLER 0.1.0** para Windows: presentación, instalación, documentación y tecnologías.

Es una web estática (HTML, CSS y JavaScript) sin frameworks ni proceso de compilación.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Presentación, capacidades, llaves y permisos, descarga y seguridad. |
| `instalacion.html` | Requisitos, instalador de Windows, instalación desde el código, primer arranque, actualizar, desinstalar y problemas frecuentes. |
| `documentacion.html` | Documentación oficial: voz, órdenes, ENTORNO, llaves, espacio, aprendizaje, modelos, seguridad, datos, estructura, compilación, pruebas y registro. |
| `tecnologias.html` | Tecnologías usadas, con versiones y el archivo donde se usa cada una. |

## Ver en el equipo

Abra `index.html` con un navegador moderno, o sirva la carpeta:

```bash
python -m http.server 8000
```

Después visite `http://localhost:8000`.

## Publicar

Suba el contenido completo de esta carpeta a cualquier alojamiento estático (GitHub Pages, Netlify, Cloudflare Pages o un servidor web). La página de entrada es `index.html`.

## Dónde se cambia cada dato

- **Versión:** `configuracion.py` (`VERSION`) en el proyecto. Las páginas indican 0.1.0; actualícelas al publicar una versión nueva.
- **Enlace de descarga del instalador:** cuando exista una dirección oficial, sustituya el texto «Ver los pasos del instalador» y los enlaces a `instalacion.html#instalador` en `index.html` por la dirección de descarga.
- **Órdenes de voz:** la tabla de `documentacion.html` (sección 3). Cada fila tiene el botón COPIAR y la categoría que usa el filtro.
- **Llaves y espacio:** las tablas de `documentacion.html` (secciones 5 y 6) y de `index.html` (sección 03). Deben coincidir con `utilidades/permisos.py` y `configuracion.py`.

## Estructura

```text
webagenteM/
├── index.html
├── instalacion.html
├── documentacion.html
├── tecnologias.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

## Antes de publicar una versión nueva

1. Compruebe que las órdenes de la documentación existen en el LEEME del proyecto.
2. Compruebe las cifras de espacio y permisos frente a `configuracion.py` y `utilidades/permisos.py`.
3. Compruebe el nombre del instalador (`Instalar_AgenteMILLER_<versión>.exe`) y su tamaño.
4. No publique llaves, claves ni archivos de datos del usuario.
