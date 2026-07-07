# Stage 2 Menu i18n Notes

本階段完成菜單資料與菜品詳細頁的中英文支援。

## 修改內容

1. `public/data/menu.json`
   - 保留原本 `name`, `name_en`, `desc`, `desc_en`, `price`, `color` 等欄位，避免舊程式壞掉。
   - 新增 `displayId`, `priceText`, `image`。
   - 新增 `name_i18n`：
     - `zh`: 中文菜名
     - `en`: 英文菜名
   - 新增 `desc_i18n`：
     - `zh`: 中文介紹
     - `en`: 英文介紹
   - 新增 `ingredients_i18n`：
     - `zh`: 中文內容物
     - `en`: 英文內容物

2. `src/legacy/pages.js`
   - 內建菜單資料同步加入 `name_en`, `desc_en`, `ingredients`, `price`, `image`。
   - 新增語言輔助函數：
     - `getLocalizedValue()`
     - `getItemName()`
     - `getItemDesc()`
     - `getItemIngredients()`
   - 菜單頁現在會依照 `window.currentLang` 顯示中英文菜名與介紹。
   - 菜品詳細頁現在會依照 `window.currentLang` 顯示中英文菜名、介紹與內容物。
   - 菜品詳細頁的固定文字加入 `data-i18n`。

3. `public/js/i18n.js` 與 `src/i18n/translations.js`
   - 新增菜品詳細頁固定文字翻譯：
     - `dish_size_title`
     - `dish_size_s`
     - `dish_size_m`
     - `dish_size_l`
     - `dish_back`
     - `dish_ingredients`

## 測試

已執行：

```bash
node --check src/legacy/pages.js
node --check public/js/i18n.js
node --check src/i18n/translations.js
npm run build
```

全部通過。
