# Project Structure Notes

This version keeps only source files and public static assets.

## Main folders

- `src/main.jsx` — React entry point. Imports styles and legacy browser globals.
- `src/App.jsx` — Hash router wrapper for the preserved restaurant pages.
- `src/styles/style.css` — Central CSS file.
- `src/i18n/` — Single translation and language-switching source.
- `src/legacy/pages/` — Preserved page HTML templates split by page.
- `src/legacy/shared/` — Reusable navbar, footer, cart sidebar, menu-data injection, and shared page scripts.
- `src/legacy/data/` — Single menu data source used by menu, dish detail, home preview, and order pages.
- `src/legacy/globals.js` — Cart, toast, mobile menu, scroll behavior, and other legacy browser functions.
- `public/images/` — Static images only. Images are served as `/images/<file>`.

## Removed / consolidated

- Removed `node_modules/`: install again with `npm install`.
- Removed `dist/`: regenerate with `npm run build`.
- Removed `public/js/i18n.js`: translations now live only in `src/i18n/`.
- Removed `public/js/main.js`: browser helper functions now live in `src/legacy/globals.js`.
- Removed `public/data/menu.json`: menu data now lives only in `src/legacy/data/`.

## Commands

```bash
npm install
npm run dev
npm run build
```
