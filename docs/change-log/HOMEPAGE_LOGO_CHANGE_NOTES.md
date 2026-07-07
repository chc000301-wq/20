# Homepage Logo Update Notes

已修改首頁 Logo，並保留標註方便你搜尋。

## 修改檔案

1. `src/legacy/pages.js`
   - `[LOGO MODIFIED 1]`：首頁 navbar 的文字 Logo 改成圖片 Logo。
   - `[LOGO MODIFIED 2]`：首頁 Hero 區塊加入大型 Logo。

2. `public/css/style.css`
   - `[LOGO MODIFIED 3]`：navbar Logo 圖片尺寸。
   - `[LOGO MODIFIED 4]`：首頁 Hero Logo 樣式。
   - `[LOGO MODIFIED 5]`：手機版 Logo 尺寸。

3. `public/images/awesome-logo.png`
   - 新增整理後的首頁 Logo 圖片。

## 注意

目前主要修改的是 React 原始碼與 public 資源。若你重新執行 `npm run build`，Vite 會重新產生 `dist`。我也同步放了一份圖片到 `dist/images/awesome-logo.png`，並同步補上 `dist/css/style.css` 的 Logo 樣式。
