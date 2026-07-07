# Stage 1 i18n changes

This version keeps the existing legacy HTML-string page structure, but makes the Chinese / English language toggle more stable.

## Added

- `src/i18n/translations.js`
  - Shared translation dictionary for React-side usage.
- `src/i18n/language.js`
  - `getCurrentLang()`
  - `setCurrentLang(lang)`
  - `toggleCurrentLang()`
  - `t(key)`
  - `syncCurrentLanguage()`

## Updated

- `public/js/i18n.js`
  - Exposes language helpers to `window`:
    - `window.currentLang`
    - `window.t`
    - `window.getCurrentLang`
    - `window.setLang`
    - `window.toggleLang`
    - `window.updateAllText`
    - `window.applyTranslations`
  - Saves language to `localStorage`.
  - Updates `document.documentElement.lang`.
  - Re-renders language-aware legacy views after switching language.
  - Updates all `.lang-toggle` buttons.

- `src/App.jsx`
  - Calls `syncCurrentLanguage()` when legacy pages mount and after legacy scripts run.

- `src/legacy/pages.js`
  - Order-page category buttons now re-render when language changes.
  - Stores current order items/category on `window` so the language switch can refresh the view.

## Test result

- `npm run build` passed.

## Next stage

Stage 2 should convert menu items into bilingual data, for example:

```js
name: { zh: '水餃 (6)', en: 'Dumplings (6)' },
description: { zh: '...', en: '...' },
ingredients: { zh: ['...'], en: ['...'] }
```
