# 修正報告：會員桌邊服務英文與外帶盒/袋子

## 完成內容

1. 會員控制台桌邊服務英文顯示修正
   - 英文模式下，數量型服務卡片的按鈕由「送出」改為 `Submit`。
   - 左下角桌邊服務送出提示會依目前語言切換。
   - 切換中英文後，已顯示的提示文字也會重新套用目前語言。

2. 桌邊服務用品新增項目
   - 大盒子 / Large to-go box
   - 小盒子 / Small to-go box
   - 大湯盒 / Large soup container
   - 小湯盒 / Small soup container
   - 大袋子 / Large bag
   - 小袋子 / Small bag

3. 新增說明文字
   - 大盒子：適合餐點 1/3 量以上 / For more than 1/3 of a dish
   - 小盒子：適合餐點 1/3 量以下 / For less than 1/3 of a dish
   - 大湯盒：密封湯盒，適合裝湯品 1/2 左右 / Sealed soup container, about half a soup portion
   - 小湯盒：適合裝有湯汁的菜品 / For dishes with sauce or soup

4. 後台資料保持穩定
   - 前台英文提示顯示英文。
   - 送到後台的 service request 仍保留中文服務名稱，同時也保存英文欄位 `itemEn`，方便未來後台也做中英文切換。

## 測試

- `npm run build` 成功。
- `server.js` 語法檢查通過。
