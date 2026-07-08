# Restaurant React + Backend Project

這是精簡後、較適合上架的版本。前端使用 React + Vite，後端使用 Node.js HTTP server，資料儲存支援 Railway PostgreSQL；本機沒有 `DATABASE_URL` 時會自動使用 JSON 檔案暫存。

## 安裝與開發

```bash
npm install
npm run dev
```

## 建置與啟動

```bash
npm run build
npm start
```

## Railway 建議設定

Build Command:

```bash
npm install && npm run build
```

Start Command:

```bash
npm start
```

Environment Variables:

```txt
NODE_ENV=production
DATABASE_URL=${{Postgres.DATABASE_URL}}
ADMIN_USERNAME=<your-admin-username>
ADMIN_PASSWORD=<your-strong-password>
TOKEN_SECRET=<long-random-secret>
```

若使用外部 PostgreSQL，視情況加入：

```txt
DB_SSL=true
```

## 目前保留的核心資料夾

```text
server/         後端 API、登入驗證、資料庫、路由、驗證工具
src/            React 頁面與目前仍被引用的 legacy 頁面模板
public/images/  網站圖片資源
```

## 已刪除的多餘資料夾

```text
node_modules/   依賴套件，應由 npm install 重新產生
dist/           編譯輸出，應由 npm run build 重新產生
.claude/        本地工具設定，部署不需要
docs/           舊檢查紀錄，部署不需要
data/           本機 runtime 暫存資料，server 會自動重建
```

更多結構說明請看 `PROJECT_STRUCTURE.md`。
