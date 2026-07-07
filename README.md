# Restaurant React Project

整理後的 React + Vite 餐廳網站專案。

## 開發指令

```bash
npm install
npm run dev
npm run build
```

## 目前資料夾

```text
restaurant_react_structure_preserve/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ amplify.yml
├─ public/
│  └─ images/              # 靜態圖片，只保留圖片
├─ src/
│  ├─ main.jsx             # React 入口，載入 CSS 與 legacy globals
│  ├─ App.jsx              # Hash router wrapper
│  ├─ styles/
│  │  └─ style.css         # 全站 CSS
│  ├─ i18n/                # 中英文切換唯一來源
│  └─ legacy/
│     ├─ data/             # 菜單資料唯一來源
│     ├─ pages/            # 各頁 HTML template
│     ├─ shared/           # navbar/footer/cart/menu-data 共用元件
│     ├─ utils/            # template helper
│     └─ globals.js        # 購物車、toast、手機選單、scroll 等共用函式
└─ docs/change-log/        # 舊修改紀錄
```

## 這次整理重點

- 移除 `node_modules/`：不應放進壓縮檔或 Git，請用 `npm install` 重新產生。
- 依照你之前 Windows Node 版本問題，已避免使用 `latest`，改為固定 React/Vite 版本。
- 移除 `dist/`：這是 build 輸出，請用 `npm run build` 重新產生。
- 移除 `public/js/i18n.js`，中英文翻譯統一到 `src/i18n/`。
- 移除 `public/js/main.js`，共用互動函式統一到 `src/legacy/globals.js`。
- 移除 `public/data/menu.json`，菜單資料統一到 `src/legacy/data/`。
- `public/` 現在只保留圖片，避免資料與功能分散。

## 驗證

整理後已執行過：

```bash
npm install
npm run build
```

Build 可以通過，並已確認 `npm audit` 無漏洞。若看到 `/images/hero-bg.jpg` 的提醒，代表 CSS 有引用背景圖但目前圖片檔不存在；不會阻止 build，但如果首頁需要該背景圖，請補到 `public/images/hero-bg.jpg`。
