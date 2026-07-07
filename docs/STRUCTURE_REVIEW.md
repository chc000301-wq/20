# Structure Review & Low-Risk Restructuring Plan

Date: 2026-07-02
Scope: full project review. No rewrites proposed — all current features are retained.

---

## 1. Current structure (confirmed clear)

| Layer | Location | Status |
|---|---|---|
| Front-end entry | `index.html` → `src/main.jsx` → `src/App.jsx` | Clear. Hash router; pages registered in `src/legacy/pages.js` |
| Pages | `src/legacy/pages/*.js` (9 pages) | Clear. Each exports `{ html, scripts }` |
| Shared UI | `src/legacy/shared/` (navbar, footer, cartSidebar, menu data/helpers) | Clear, but navbar/footer contain duplicates (see §2) |
| Global functions | `src/legacy/globals.js` + `src/legacy/utils/cartStore.js` | Clear. Cart logic centralized |
| Data | `src/legacy/data/menuCategories.js`, `menuItems.js` | Clear. Single source of truth |
| i18n | `src/i18n/language.js`, `translations.js` | Clear. Single source of truth |
| Styles | `src/styles/style.css` (one file, ~3,100 lines) | Clear. Single file — acceptable, keep |
| Images | `public/images/` served as `/images/*` | Clear, but **159 of 192 referenced images are missing** (menu photos + `hero-bg.jpg`). Broken images fall back to placeholder via `handleMenuImageError` |
| Back-end | `server.js` (no framework, Node http) | Clear. Admin login (HMAC token), reservations CRUD, static serving of `dist/` |
| Runtime data | `data/reservations.json` | Clear. Should not be committed to Git (see §5) |
| Routing | Hash routes: `home, menu, dish-detail, reservation, order, member, about, promotions, admin-dashboard` | Clear. Unknown routes fall back to `home` |

## 2. Duplicate features found

| # | Feature | Duplication | Risk to fix |
|---|---|---|---|
| D1 | Navbar | `homeNavbar` and `defaultNavbar` in `shared/navbar.js` are **byte-identical** | Very low — keep one constant, `navbar()` returns it for both variants |
| D2 | Footer | `homeFooter` / `defaultFooter` differ only in 2 lines (promotions link + email shown on home). ~60 lines duplicated | Low — one template with two small conditional slots |
| D3 | Language toggle fallback | `window.toggleLang = window.toggleLang \|\| ...` re-defined inside `pages/menu.js` and `pages/dishDetail.js`. Dead code: the real `toggleLang` from `src/i18n/language.js` is always registered first | Very low — delete the two fallbacks |
| D4 | Phone format / 10-digit rule / Tuesday-closed rule | Exists **3 times**: `server.js` (`formatPhone`, `phoneDigits`, `isTuesdayDateValue`), `pages/reservation.js` (own copies), `pages/order.js` (`formatTakeoutPhone` + own 10-digit check) | Low — extract one shared module (see §4 Phase 3) |
| D5 | DOMContentLoaded init | `globals.js` registers a `DOMContentLoaded` init and `App.jsx` (`runLegacyInit`) calls the same functions on every route change; `pages/dishDetail.js` also adds a dead `DOMContentLoaded` listener | Very low — remove the dead listeners |
| D6 | Navbar scroll listener | `initNavbarScroll` adds a new `window` scroll listener on **every** route change (never removed) — listener leak | Very low — add once with a guard flag |

**Not duplicates (verified centralized, keep as-is):** cart data ops (`cartStore.js` only), cart sidebar render (`globals.js renderCart`) vs order-page cart (`renderOrderCart` — different UI, shared data), menu item name/desc localization (`menuHelpersScript.js` only), menu data injection (`menuDataScript.js` only), translations (`i18n/` only). Menu *card HTML* differs across home/menu/order but these are intentionally different layouts.

## 3. Guiding principle

The "legacy HTML string + window globals" pattern works and is consistent. Converting pages to real React components would be a major rewrite — **not proposed**. All changes below stay inside the existing pattern.

## 4. Low-risk plan (ordered, each step independently shippable)

**Phase 0 — housekeeping (no code behavior change)**
- Add `.gitignore`: `node_modules/`, `dist/`, `data/reservations.json`
- Move `vite`, `@vitejs/plugin-react` from `dependencies` to `devDependencies` in `package.json`
- Verify: `npm run build` still passes

**Phase 1 — dedupe templates (D1, D2)**
- `navbar.js`: keep one navbar constant; `navbar(variant)` keeps its signature so no caller changes
- `footer.js`: one template; `footer('home')` adds the promotions link + email line
- Verify: visually compare all 9 routes before/after (identical output expected)

**Phase 2 — remove dead code (D3, D5, D6)**
- Delete `toggleLang` fallbacks in `menu.js`, `dishDetail.js`
- Delete dead `DOMContentLoaded` listeners (`dishDetail.js`, `globals.js` init block)
- Guard `initNavbarScroll` so the scroll listener is added only once
- Verify: language toggle, navbar shadow on scroll, dish detail render still work

**Phase 3 — single source for validation rules (D4)**
- Add `src/shared/reservationRules.js` (plain ESM: `formatPhone`, `phoneDigits`, `isTuesdayDateValue`)
- `server.js` imports it directly (both are ESM — works today)
- For legacy pages, add `src/legacy/shared/validationScript.js` that exposes the same functions on `window` (same pattern as `menuHelpersScript.js`); `reservation.js` and `order.js` use the window versions and drop their local copies
- Verify: reservation form (bad phone, Tuesday date), order checkout phone, server API rejects same cases

**Phase 4 — content fix (independent of code)**
- Supply the 159 missing images in `public/images/` (list them with the check in §6), or accept the placeholder fallback and remove unused references

Later (optional, only when needed): migrate one page at a time to a React component, starting with `promotions` (smallest, no scripts of substance). Not part of this plan.

## 5. File disposition list

**Delete (safe — regenerated or runtime-only; keep out of Git/zips):**
- `dist/` — build output (`npm run build` regenerates; `server.js` needs it at runtime, so delete only from Git/zips, not from disk)
- `node_modules/` — from Git/zips only
- `data/reservations.json` — runtime data; keep on disk, exclude from Git

**Delete (dead code inside files, Phase 2):**
- `toggleLang` fallback blocks in `src/legacy/pages/menu.js`, `src/legacy/pages/dishDetail.js`
- Dead `DOMContentLoaded` listeners in `src/legacy/pages/dishDetail.js` and `src/legacy/globals.js`

**Merge:**
- `homeNavbar` + `defaultNavbar` → one template in `src/legacy/shared/navbar.js`
- `homeFooter` + `defaultFooter` → one template in `src/legacy/shared/footer.js`
- Phone/Tuesday validation in `server.js` + `reservation.js` + `order.js` → `src/shared/reservationRules.js`

**Keep (unchanged):**
- `index.html`, `vite.config.js`, `amplify.yml`, `server.js` (minus extracted validation)
- `src/main.jsx`, `src/App.jsx`, `src/legacy/pages.js`, all 9 page files
- `src/legacy/shared/` (cartSidebar, commonScripts, menuDataScript, menuHelpersScript)
- `src/legacy/globals.js`, `src/legacy/utils/cartStore.js`, `src/legacy/utils/template.js`
- `src/i18n/`, `src/legacy/data/`, `src/styles/style.css`, `public/images/`
- `README.md`, `START_HERE_WINDOWS.md`, `BACKEND_LOGIN_NOTES.md`, `STRUCTURE_NOTES.md`, `docs/change-log/`

**Add:**
- `.gitignore`
- `src/shared/reservationRules.js` (+ `src/legacy/shared/validationScript.js` browser wrapper)
- `docs/STRUCTURE_REVIEW.md` (this file)
- Missing images under `public/images/` (Phase 4)

## 6. Useful check — list missing images

```bash
grep -oh '/images/[A-Za-z0-9._-]*\.png' -r src | sort -u | sed 's|/images/||' > referenced.txt
ls public/images | sort > present.txt
comm -23 referenced.txt present.txt
```
