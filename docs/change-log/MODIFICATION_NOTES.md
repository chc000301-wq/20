# 修改說明

已完成：

1. `src/legacy/pages.js` 重新編排
   - 將原本巨大且難閱讀的物件拆成：
     - `const xxxHtml = html\`...\``
     - `const xxxScripts = [script\`...\`]`
     - 最後再匯出 `legacyPages`
   - 這樣比較容易搜尋、編輯、編譯與除錯。

2. 修正 `dish-detail` 編譯錯誤
   - 原本 HTML 字串內有未跳脫的 `id="dishImage"`，會造成 `pages.js` 直接語法錯誤。
   - 已修正為可被 React/Vite 正常匯入的格式。

3. 修正圖片讀取
   - Vite/React 專案中，`public/images/A1.png` 會以 `/images/A1.png` 讀取。
   - 菜單卡片、菜品列表、菜品詳細頁都會嘗試讀取：
     - `/images/A1.png`
     - `/images/A2.png`
     - `/images/A3.png`
     - 依照菜品 ID 對應圖片。
   - 如果圖片不存在，會自動顯示原本的文字 placeholder，不會讓頁面壞掉。

4. 已加入圖片 CSS
   - `menu-card-photo`
   - `menu-item-photo`
   - `dish-detail-image`
   - `dish-image-code`
   - `dish-detail` 頁面排版樣式

5. 已測試
   - `node --check src/legacy/pages.js` 通過。
   - `npm run build` 通過。

## 使用方式

解壓縮後進入專案資料夾：

```bash
npm install
npm run dev
```

正式編譯：

```bash
npm run build
```

注意：壓縮檔沒有包含 `node_modules`，這是為了避免 Windows / macOS / Linux 的 Vite native binding 衝突。請在自己的電腦重新執行 `npm install`。
