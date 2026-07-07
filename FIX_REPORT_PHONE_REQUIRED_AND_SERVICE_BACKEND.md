# 修正報告：電話必填與桌邊服務後台

## 已完成

1. 內用訂單電話改為必填
   - 移除「電話可選 / 不輸入電話會建立暫時內用」的提示文字。
   - 送出內用訂單時，電話必須是完整 10 位數。
   - 後端 `/api/orders` 同步檢查內用電話，不再接受空白電話。

2. 會員桌邊服務新增座位選擇
   - 桌邊服務頁面新增和內用點餐相同風格的座位表。
   - 選擇座位後，座位表會自動收起。
   - 點「更改座位」可再次展開座位表。
   - 送出桌邊服務前必須先選擇座位。

3. 桌邊服務即時同步後台
   - 會員點選服務後會送到 `/api/service-requests`。
   - 後端會把資料儲存在 `data/serviceRequests.json`。
   - 後台新增「桌邊服務」分頁。
   - 後台會顯示紅色未處理方框，包含桌號、服務內容、數量、電話、姓名、建立時間。
   - 點「完成」會刪除該桌邊服務。
   - 後台桌邊服務列表會每 4 秒自動刷新。

## 新增後端 API

- `POST /api/service-requests`
- `GET /api/admin/service-requests`
- `DELETE /api/admin/service-requests/:id`

## 測試結果

- `npm run build` 成功。
- `node --check server.js` 通過。
- 測試 `POST /api/service-requests` 成功。
- 測試空電話內用訂單會被後端拒絕。
