# 後台登入與 Port 被占用說明

後台入口不要放在 Navbar。請從會員頁登入：

```txt
http://localhost:3001/#/member
```

帳號密碼：

```txt
帳號：awesome
密碼：88888888
```

## 如果出現 EADDRINUSE

代表舊的 Node server 還在占用 `3001`。這時你看的 `localhost:3001` 可能還是舊版本，所以新版本登入不會生效。

### 方法一：關掉舊終端機

把前一次執行 `npm start` 的 PowerShell / CMD 視窗關掉，或在那個視窗按：

```txt
Ctrl + C
```

然後重新執行：

```bash
npm run build
npm start
```

### 方法二：找出並結束占用 3001 的程式

PowerShell：

```powershell
netstat -ano | findstr :3001
```

找到最後面的 PID 後：

```powershell
taskkill /PID 你的PID /F
```

例如：

```powershell
taskkill /PID 12345 /F
```

### 方法三：改用其他 port

```powershell
$env:PORT=3002; npm start
```

然後打開：

```txt
http://localhost:3002/#/member
```

這版 `server.js` 如果 3001 被占用，會自動嘗試 3002、3003……，請以終端機實際顯示的網址為準。
