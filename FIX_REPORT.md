# Fix Report - Home Page Debug

## Main issue fixed
- `src/App.jsx` rendered `FloatingCartButton`, which called `useCart()`.
- `useCart` was not imported from `src/context/CartContext.jsx`.
- This caused a React runtime crash before the home page could render.

## Routing cleanup
- The floating cart button now routes to `#/cart`.
- `#/order` is kept as an alias for the same React cart/order page, so older links will not break.

## Build warning cleanup
- Removed the missing `/images/hero-bg.jpg` reference from `src/styles/style.css`.
- The hero section now uses the existing gradient background only, preventing missing-image warnings/404s.

## Verification
- `npm ci` completed successfully.
- `npm run build` completed successfully with no build errors.
- Vite dev server responded with HTTP 200 at `/`.

## Run locally
```bash
npm install
npm run dev
```
Then open the local Vite URL shown in the terminal.
