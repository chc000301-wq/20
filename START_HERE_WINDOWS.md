# Windows 啟動方式

請在專案資料夾執行：

```powershell
npm install
npm run build
npm start
```

啟動成功後，終端機會顯示真正網址，例如：

```txt
Awesome Restaurant server running on http://localhost:3001
Open member login: http://localhost:3001/#/member
```

請打開終端機顯示的網址，不要固定只看 3001。

## 後台登入

```txt
帳號：awesome
密碼：88888888
```

## 如果看到 EADDRINUSE

代表舊的 Node server 還在跑。你可以先在舊的 PowerShell 按：

```txt
Ctrl + C
```

或用 PowerShell 查找：

```powershell
netstat -ano | findstr :3001
```

然後結束 PID：

```powershell
taskkill /PID 你的PID /F
```

這個版本也會自動嘗試下一個 port，例如 3002、3003。請以終端機實際顯示的網址為準。
