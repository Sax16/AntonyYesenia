# Boda Antony & Yésenia

Invitación virtual hecha con [Astro](https://astro.build). Diseño mobile-first, paleta inspirada en
la foto principal (rojos coral / borgoña / dorado) y menú flotante con scroll suave.

## Comandos

```sh
npm install        # instala dependencias
npm run dev        # arranca el servidor en http://localhost:4321
npm run build      # genera el sitio estático en ./dist
npm run preview    # sirve el build local
```

## Estructura

```
src/
├── components/         Secciones (Hero, Couple, Countdown, Venue, Story, Gallery, Gift, Message, Footer, FloatingMenu)
├── data/wedding.ts     Toda la información editable de la boda
├── layouts/Layout.astro
├── pages/index.astro
└── styles/global.css   Variables de color, tipografía y utilidades

public/
├── images/             Placeholders SVG → reemplazar con fotos reales (ver public/images/README.md)
└── audio/              Coloca aquí la canción de fondo (cancion.mp3)
```

## Personalización rápida

- **Datos**: edita `src/data/wedding.ts` (nombres, fechas, ubicaciones, cuentas, frases).
- **Colores**: cambia las variables CSS en `src/styles/global.css` (`--color-primary`, `--color-accent`, …).
- **Imágenes**: reemplaza los archivos en `public/images/` manteniendo los mismos nombres.
- **Música**: añade `public/audio/cancion.mp3`.

## Referencias visuales

Las imágenes que enviaste están guardadas en `_refs/` (`MainBoda.png`, `Bodas.png`, `menu.png`) y no
se publican en el sitio.
