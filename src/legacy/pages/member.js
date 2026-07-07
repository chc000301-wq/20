import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

const memberHtml = html`
${navbar()}
<div class="page-header">
  <div class="container">
    <h1 data-i18n="nav_member">會員中心</h1>
  </div>
</div>
<section class="section" style="min-height:60vh">
  <div class="member-container member-container-wide">
    <div class="member-card" id="memberForm">
      <div class="member-tabs">
        <button class="member-tab active" data-i18n="member_login" id="tabLogin" type="button">登入</button>
        <button class="member-tab" data-i18n="member_register" id="tabRegister" type="button">註冊</button>
      </div>

      <form id="loginForm" autocomplete="on">
        <div class="form-group">
          <label id="loginPhoneLabel">電話號碼 / 後台帳號</label>
          <input id="loginEmail" required type="text" autocomplete="username" inputmode="tel" placeholder="請輸入 10 位數電話" />
        </div>
        <div class="form-group">
          <label data-i18n="member_password">密碼</label>
          <input id="loginPassword" required type="password" autocomplete="current-password" />
        </div>
        <button class="btn-submit" data-i18n="member_login_btn" id="memberLoginSubmitBtn" type="submit">登入</button>
        <div id="memberLoginMessage" style="margin-top:12px;font-size:0.9rem;text-align:center;color:#c0392b;min-height:1.2em"></div>
      </form>

      <form id="registerForm" style="display:none" autocomplete="on">
        <div class="form-group">
          <label data-i18n="member_name">姓名</label>
          <input id="regName" required type="text" />
        </div>
        <div class="form-group">
          <label data-i18n="member_phone">電話</label>
          <input id="regPhone" required type="tel" inputmode="numeric" maxlength="12" placeholder="請輸入 10 位數電話" />
        </div>
        <div class="form-group">
          <label data-i18n="member_email">電子郵件</label>
          <input id="regEmail" type="email" placeholder="可選" />
        </div>
        <div class="form-group">
          <label data-i18n="member_password">密碼</label>
          <input id="regPassword" minlength="6" required type="password" />
        </div>
        <button class="btn-submit" data-i18n="member_register_btn" type="submit">註冊</button>
      </form>
    </div>

    <div class="member-card member-dashboard-card" id="memberDashboard" style="display:none">
      <div class="member-dashboard-top">
        <div class="member-profile-mini">
          <div id="memberAvatar" class="member-avatar">👤</div>
          <div>
            <h2 id="memberName"></h2>
            <p id="memberPhone"></p>
            <p id="memberEmail" style="display:none"></p>
          </div>
        </div>
        <div class="member-dashboard-actions">
          <button class="lang-toggle member-lang-toggle" type="button" data-language-control="toggle-lang" onclick="toggleLang()">EN</button>
          <button class="member-logout-btn" data-i18n="member_logout" id="memberLogoutBtn" type="button">登出</button>
        </div>
      </div>

      <div class="member-action-tabs" role="tablist" aria-label="會員功能">
        <button class="member-action-tab active" type="button" data-member-panel="current" data-member-text="tabCurrent">當前訂單</button>
        <button class="member-action-tab" type="button" data-member-panel="service" data-member-text="tabService">桌邊服務</button>
        <button class="member-action-tab" type="button" data-member-panel="history" data-member-text="tabHistory">歷史紀錄</button>
        <button class="member-action-tab" type="button" data-member-panel="profile" data-member-text="tabProfile">個人資料修改</button>
      </div>

      <div class="member-panel active" id="memberPanelCurrent">
        <div class="member-panel-heading">
          <h3 data-member-text="currentTitle">當前訂單</h3>
          <p data-member-text="currentDesc">顯示兩小時內、以目前電話號碼建立的訂單。</p>
        </div>
        <div id="memberCurrentOrders" class="member-order-list"></div>
      </div>

      <div class="member-panel" id="memberPanelService">
        <div class="member-panel-heading">
          <h3 data-member-text="serviceTitle">桌邊服務</h3>
          <p data-member-text="serviceDesc">先選擇座位，再點選需要的服務；送出後會即時出現在後台。</p>
        </div>
        <div class="service-table-block" id="serviceTableBlock">
          <div class="service-table-head">
            <div>
              <h4 data-member-text="selectTableTitle">選擇座位</h4>
              <p data-member-text="selectTableDesc">選擇完成後座位表會自動收起；需要更改時再展開。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="serviceChangeTableBtn">選擇座位</button>
          </div>
          <div id="serviceSelectedTable" class="selected-table-label">未選擇</div>
          <div id="serviceTableSelector" class="service-table-selector"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="foodTitle">食物</h4>
          <div class="service-button-grid" id="serviceFoodButtons"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="drinkTitle">飲料</h4>
          <div class="service-button-grid" id="serviceDrinkButtons"></div>
        </div>
        <div class="service-category-block">
          <h4 data-member-text="supplyTitle">用品</h4>
          <div class="service-button-grid" id="serviceSupplyButtons"></div>
        </div>
        <div id="serviceRequestMessage" class="service-request-message"></div>
      </div>

      <div class="member-panel" id="memberPanelHistory">
        <div class="member-panel-heading">
          <h3 data-member-text="historyTitle">歷史紀錄</h3>
          <p data-member-text="historyDesc">顯示兩小時以前、以目前電話號碼建立的每一筆訂單。</p>
        </div>
        <div id="memberHistoryOrders" class="member-order-list"></div>
      </div>

      <div class="member-panel" id="memberPanelProfile">
        <div class="member-panel-heading">
          <h3 data-member-text="profileTitle">個人資料修改</h3>
          <p data-member-text="profileDesc">目前先顯示資料，修改功能下一步再做。</p>
        </div>
        <div id="memberProfileInfo" class="member-profile-info"></div>
      </div>
    </div>
  </div>
</section>
${footer()}
`;

const memberScripts = [
  commonImageScripts,
  script`
(function initMemberPage() {
  const ADMIN_NAME = 'awesome';
  const TWO_HOURS = 2 * 60 * 60 * 1000;

  function el(id) { return document.getElementById(id); }

  function safeCurrentLang() {
    return window.currentLang || localStorage.getItem('lang') || 'zh';
  }

  function text(zh, en) {
    return safeCurrentLang() === 'en' ? en : zh;
  }


  const MEMBER_DASHBOARD_TEXT = {
    tabCurrent: ['當前訂單', 'Current Orders'],
    tabService: ['桌邊服務', 'Table Service'],
    tabHistory: ['歷史紀錄', 'Order History'],
    tabProfile: ['個人資料修改', 'Profile'],
    currentTitle: ['當前訂單', 'Current Orders'],
    currentDesc: ['顯示兩小時內、以目前電話號碼建立的訂單。', 'Shows orders created with this phone number within the last two hours.'],
    serviceTitle: ['桌邊服務', 'Table Service'],
    serviceDesc: ['先選擇座位，再點選需要的服務；送出後會即時出現在後台內用訂餐區。', 'Choose a table, then select a service. It will appear immediately in the admin dine-in order area.'],
    selectTableTitle: ['選擇座位', 'Select Table'],
    selectTableDesc: ['選擇完成後座位表會自動收起；需要更改時再展開。', 'After selecting a table, the floor plan closes automatically. Open it again to change tables.'],
    foodTitle: ['食物', 'Food'],
    drinkTitle: ['飲料', 'Drinks'],
    supplyTitle: ['用品', 'Supplies'],
    historyTitle: ['歷史紀錄', 'Order History'],
    historyDesc: ['顯示兩小時以前、以目前電話號碼建立的每一筆訂單。', 'Shows orders older than two hours created with this phone number.'],
    profileTitle: ['個人資料修改', 'Profile'],
    profileDesc: ['目前先顯示資料，修改功能下一步再做。', 'Profile editing will be added in the next step.']
  };

  function memberText(key) {
    const pair = MEMBER_DASHBOARD_TEXT[key] || [key, key];
    return text(pair[0], pair[1]);
  }

  function applyMemberDashboardLanguage() {
    document.querySelectorAll('[data-member-text]').forEach(function(node) {
      node.textContent = memberText(node.getAttribute('data-member-text'));
    });
    renderServiceTableSelector();
    renderServiceButtons();
    renderServiceMessage();
    try {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (user) {
        renderOrdersForUser(user);
        renderProfile(user);
      }
    } catch (error) {}
  }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, function(ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[ch];
    });
  }

  function phoneDigits(value) {
    return String(value || '').replace(/\D/g, '').slice(0, 10);
  }

  function formatPhone(value) {
    const digits = phoneDigits(value);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
    return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
  }

  function message(zh, en, type) {
    const msg = text(zh, en);
    const box = el('memberLoginMessage');
    if (box) {
      box.textContent = msg;
      box.style.color = type === 'success' ? '#1f8a4c' : '#c0392b';
    }
    if (typeof window.showToast === 'function') window.showToast(msg, type || 'error');
  }

  function serviceMessage(zh, en, type) {
    lastServiceMessage = { zh: zh, en: en, type: type || 'success' };
    renderServiceMessage();
    const msg = text(zh, en);
    if (typeof window.showToast === 'function') window.showToast(msg, type || 'success');
  }

  function renderServiceMessage() {
    const box = el('serviceRequestMessage');
    if (!box || !lastServiceMessage) return;
    box.textContent = text(lastServiceMessage.zh, lastServiceMessage.en);
    box.className = 'service-request-message ' + (lastServiceMessage.type === 'success' ? 'is-success' : 'is-error');
  }

  function setPhoneInputs() {
    const login = el('loginEmail');
    const regPhone = el('regPhone');
    if (login) login.addEventListener('input', function() {
      if (String(login.value || '').trim().toLowerCase() !== ADMIN_NAME) login.value = formatPhone(login.value);
    });
    if (regPhone) regPhone.addEventListener('input', function() { regPhone.value = formatPhone(regPhone.value); });
  }

  window.switchTab = function(tab) {
    el('tabLogin')?.classList.toggle('active', tab === 'login');
    el('tabRegister')?.classList.toggle('active', tab === 'register');
    if (el('loginForm')) el('loginForm').style.display = tab === 'login' ? 'block' : 'none';
    if (el('registerForm')) el('registerForm').style.display = tab === 'register' ? 'block' : 'none';
    const box = el('memberLoginMessage');
    if (box) box.textContent = '';
  };

  function saveAdminSession(payload, username) {
    localStorage.setItem('admin_token', payload.token);
    localStorage.setItem('admin_user', payload.username || username || ADMIN_NAME);
    localStorage.removeItem('admin_auth');
  }

  function goToAdminDashboard() { window.location.hash = '#/admin-dashboard'; }

  async function backendAdminLogin(username, password) {
    let response;
    try {
      response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
    } catch (networkError) {
      const error = new Error('network');
      error.isNetworkError = true;
      throw error;
    }
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.token) throw new Error(payload.message || 'login failed');
    return payload;
  }

  function getUsers() {
    try { return JSON.parse(localStorage.getItem('users') || '[]'); } catch (error) { return []; }
  }

  function saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); }

  function normalizeUser(raw) {
    const phone = formatPhone(raw.phone || raw.email || raw.username || '');
    return {
      name: raw.name || phone,
      email: raw.email || '',
      phone: phone,
      phoneDigits: phoneDigits(phone),
      password: raw.password || ''
    };
  }

  window.handleLogin = async function(event) {
    if (event) event.preventDefault();
    const usernameRaw = String(el('loginEmail')?.value || '').trim();
    const username = usernameRaw.toLowerCase();
    const password = String(el('loginPassword')?.value || '').trim();

    if (!usernameRaw || !password) {
      message('請輸入電話號碼與密碼', 'Please enter phone number and password', 'error');
      return false;
    }

    if (username === ADMIN_NAME) {
      message('正在驗證後台帳號...', 'Checking admin account...', 'success');
      try {
        const payload = await backendAdminLogin(username, password);
        saveAdminSession(payload, username);
        message('後台登入成功，正在進入後台...', 'Admin login successful. Opening dashboard...', 'success');
        setTimeout(goToAdminDashboard, 120);
      } catch (error) {
        if (error.isNetworkError) message('無法連線後台伺服器，請先執行 npm start', 'Cannot reach the backend server. Please run npm start first.', 'error');
        else message('後台帳號或密碼錯誤', 'Invalid admin username or password', 'error');
      }
      return false;
    }

    const loginDigits = phoneDigits(usernameRaw);
    if (loginDigits.length !== 10) {
      message('請輸入 10 位數電話號碼', 'Please enter a 10-digit phone number', 'error');
      return false;
    }

    const users = getUsers().map(normalizeUser);
    const user = users.find(function(u) { return u.phoneDigits === loginDigits && String(u.password || '') === password; });
    if (!user) {
      message('電話號碼或密碼錯誤', 'Invalid phone number or password', 'error');
      return false;
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    showDashboard(user);
    return false;
  };

  window.handleRegister = function(event) {
    if (event) event.preventDefault();
    const digits = phoneDigits(el('regPhone')?.value || '');
    if (digits.length !== 10) {
      message('請輸入 10 位數電話號碼', 'Please enter a 10-digit phone number', 'error');
      return false;
    }
    const user = normalizeUser({
      name: el('regName')?.value || '',
      email: el('regEmail')?.value || '',
      phone: formatPhone(digits),
      password: el('regPassword')?.value || ''
    });
    const users = getUsers().map(normalizeUser);
    if (users.find(function(u) { return u.phoneDigits === user.phoneDigits; })) {
      message('此電話號碼已註冊', 'This phone number is already registered', 'error');
      return false;
    }
    users.push(user);
    saveUsers(users);
    message('註冊成功，請用電話號碼登入', 'Registered successfully. Please log in with your phone number.', 'success');
    window.switchTab('login');
    el('registerForm')?.reset();
    return false;
  };

  function getOrdersForPhone(phone) {
    const digits = phoneDigits(phone);
    let orders = [];
    try { orders = JSON.parse(localStorage.getItem('orders') || '[]'); } catch (error) { orders = []; }
    return orders.filter(function(order) {
      const orderPhone = phoneDigits(order.customerPhone || order.phone || order.memberPhone || '');
      return orderPhone === digits && Array.isArray(order.items) && order.items.some(function(item) {
        return Number(item.qty || item.quantity || 0) > 0;
      });
    }).sort(function(a, b) { return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime(); });
  }

  function getOrderAge(order) {
    const createdAt = new Date(order.createdAt || order.time || 0).getTime();
    if (!createdAt) return Number.MAX_SAFE_INTEGER;
    return Date.now() - createdAt;
  }

  function orderTypeText(order) {
    const type = order.orderType || order.type;
    if (type === 'dinein' || type === 'dine-in') return text('內用', 'Dine-in');
    if (type === 'delivery') return text('外送', 'Delivery');
    return text('外帶自取', 'Pickup');
  }

  function orderLocationText(order) {
    const type = order.orderType || order.type;
    if (type === 'dinein' || type === 'dine-in') return text('桌號 ', 'Table ') + esc(order.table || order.tableNumber || '-');
    return text('取餐 ', 'Pickup ') + esc(order.pickupTime || '-');
  }

  function orderStatusText(order) {
    return esc(order.status || order.orderStatus || text('新訂單', 'New order'));
  }

  function formatTotal(order) {
    const value = order.cashTotal != null ? order.cashTotal : order.totalPrice != null ? order.totalPrice : order.total != null ? order.total : 0;
    return '$' + Number(value || 0).toFixed(2);
  }

  function itemLine(item) {
    const name = safeCurrentLang() === 'en' && item.name_en ? item.name_en : item.name;
    const code = item.displayId || item.id || '';
    const qty = item.qty != null ? item.qty : item.quantity;
    return '<li>' + esc((code ? '#' + code + ' ' : '') + (name || '') + ' x' + qty) + '</li>';
  }

  function renderOrderCard(order) {
    const created = order.createdAt ? new Date(order.createdAt).toLocaleString() : '-';
    return '<article class="member-order-card">'
      + '<div class="member-order-card-top">'
      + '  <div><strong>' + esc(orderTypeText(order)) + '</strong><span>' + esc(orderLocationText(order)) + '</span></div>'
      + '  <span class="member-order-status">' + orderStatusText(order) + '</span>'
      + '</div>'
      + '<div class="member-order-created">' + esc(text('建立：', 'Created: ') + created) + '</div>'
      + '<div class="member-order-card-body">'
      + '  <ul>' + (Array.isArray(order.items) ? order.items.map(itemLine).join('') : '') + '</ul>'
      + '  <div class="member-order-summary">'
      + '    <strong>' + esc(formatTotal(order)) + '</strong>'
      + '    <span>' + esc(order.customerName || '') + '</span>'
      + '    <span>' + esc(order.customerPhone || '') + '</span>'
      + '  </div>'
      + '</div>'
      + '</article>';
  }

  function renderOrdersForUser(user) {
    const orders = getOrdersForPhone(user.phone);
    const current = orders.filter(function(order) { return getOrderAge(order) <= TWO_HOURS; });
    const history = orders.filter(function(order) { return getOrderAge(order) > TWO_HOURS; });
    const currentBox = el('memberCurrentOrders');
    const historyBox = el('memberHistoryOrders');
    if (currentBox) currentBox.innerHTML = current.length ? current.map(renderOrderCard).join('') : '<div class="member-empty-box">' + esc(text('目前沒有兩小時內的訂單', 'No current orders within the last two hours')) + '</div>';
    if (historyBox) historyBox.innerHTML = history.length ? history.map(renderOrderCard).join('') : '<div class="member-empty-box">' + esc(text('目前沒有兩小時以前的歷史訂單', 'No historical orders older than two hours')) + '</div>';
  }

  function renderProfile(user) {
    const profile = el('memberProfileInfo');
    if (!profile) return;
    profile.innerHTML = '<div class="profile-row"><span>' + esc(text('姓名', 'Name')) + '</span><strong>' + esc(user.name || '-') + '</strong></div>'
      + '<div class="profile-row"><span>' + esc(text('電話', 'Phone')) + '</span><strong>' + esc(user.phone || '-') + '</strong></div>'
      + '<div class="profile-row"><span>' + esc(text('電子郵件', 'Email')) + '</span><strong>' + esc(user.email || '-') + '</strong></div>'
      + '<div class="profile-note">' + esc(text('資料修改功能下一步再做。', 'Profile editing will be added in the next step.')) + '</div>';
  }

  function setActivePanel(name) {
    document.querySelectorAll('.member-action-tab').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-member-panel') === name);
    });
    const map = { current: 'memberPanelCurrent', service: 'memberPanelService', history: 'memberPanelHistory', profile: 'memberPanelProfile' };
    Object.keys(map).forEach(function(key) {
      const panel = el(map[key]);
      if (panel) panel.classList.toggle('active', key === name);
    });
  }


  const SERVICE_TABLE_ROWS = [
    { cls: 'booth-row top-booth-row', type: 'booth-seat', ids: ['E5', 'E4', 'E3', 'E2', 'E1'] },
    { cls: 'table-row upper-table-row', type: 'round-seat', ids: ['D3', 'D2', 'D1', 'C2'] },
    { cls: 'table-row lower-table-row', type: 'round-seat', ids: ['B3', 'B2', 'B1', 'C1'] },
    { cls: 'booth-row bottom-booth-row', type: 'booth-seat', ids: ['A5', 'A4', 'A3', 'A2', 'A1'] }
  ];
  let currentServiceTable = '';
  let serviceTableOpen = true;
  let lastServiceMessage = null;

  function serviceTableHtml(selected) {
    const mainRows = SERVICE_TABLE_ROWS.map(function(row, index) {
      const buttons = row.ids.map(function(id) {
        return '<button type="button" class="table-seat ' + row.type + (selected === id ? ' active' : '') + '" data-service-table="' + esc(id) + '">' + esc(id) + '</button>';
      }).join('');
      if (index === 1 || index === 2) return '<div class="floor-plan-row ' + row.cls + '">' + buttons + '</div>';
      return '<div class="floor-plan-row ' + row.cls + '">' + buttons + '</div>';
    });
    return '<div class="floor-plan floor-plan-v2" aria-label="座位選擇">'
      + '<div class="floor-main-area">'
      + mainRows[0]
      + '<div class="floor-table-area">' + mainRows[1] + mainRows[2] + '</div>'
      + mainRows[3]
      + '</div>'
      + '<div class="floor-side-area"><div class="counter-label">Counter</div><div class="entrance-label">Entrance</div></div>'
      + '</div>';
  }

  function renderServiceTableSelector() {
    const selectedLabel = el('serviceSelectedTable');
    const selector = el('serviceTableSelector');
    const changeBtn = el('serviceChangeTableBtn');
    if (selectedLabel) {
      selectedLabel.textContent = currentServiceTable || text('未選擇', 'Not selected');
      selectedLabel.classList.toggle('has-selection', Boolean(currentServiceTable));
    }
    if (changeBtn) changeBtn.textContent = currentServiceTable ? text('更改座位', 'Change table') : text('選擇座位', 'Select table');
    if (selector) {
      selector.style.display = serviceTableOpen ? 'block' : 'none';
      selector.innerHTML = serviceTableOpen ? serviceTableHtml(currentServiceTable) : '';
    }
  }

  function setServiceTable(id) {
    currentServiceTable = String(id || '').trim().toUpperCase();
    serviceTableOpen = false;
    try { localStorage.setItem('memberServiceTable', currentServiceTable); } catch (error) {}
    renderServiceTableSelector();
    serviceMessage('已選擇座位：' + currentServiceTable, 'Selected table: ' + currentServiceTable, 'success');
  }

  const SERVICE_ITEM_REGISTRY = {};

  function serviceItem(id, zh, en, qty, zhDesc, enDesc) {
    const item = {
      id: id,
      label: text(zh, en),
      valueZh: zh,
      valueEn: en,
      desc: text(zhDesc || '', enDesc || ''),
      qty: Boolean(qty)
    };
    SERVICE_ITEM_REGISTRY[id] = item;
    return item;
  }

  function serviceButtonHtml(item) {
    const desc = item.desc ? '<small class="service-item-desc">' + esc(item.desc) + '</small>' : '';
    if (item.qty) {
      return '<div class="service-qty-card"><span>' + esc(item.label) + '</span>' + desc + '<select data-service-qty="' + esc(item.id) + '"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select><button type="button" data-service-key="' + esc(item.id) + '">' + esc(text('送出', 'Submit')) + '</button></div>';
    }
    return '<button class="service-request-btn" type="button" data-service-key="' + esc(item.id) + '"><span>' + esc(item.label) + '</span>' + desc + '</button>';
  }

  function renderServiceButtons() {
    const food = [
      serviceItem('rice-refill', '補飯', 'Rice refill'),
      serviceItem('fruit', '上水果', 'Fruit'),
      serviceItem('fortune-cookies', '幸運餅乾', 'Fortune cookies'),
      serviceItem('chili-sauce', '辣椒', 'Chili sauce')
    ];
    const drink = [
      serviceItem('water-refill', '補水', 'Water refill'),
      serviceItem('hot-tea-refill', '補熱茶', 'Hot tea refill'),
      serviceItem('sweet-iced-tea', '補冰茶(甜)', 'Sweet iced tea'),
      serviceItem('unsweetened-iced-tea', '補冰茶(不甜)', 'Unsweetened iced tea')
    ];
    const supply = [
      serviceItem('napkins', '補紙巾', 'Napkins'),
      serviceItem('paper-towels', '擦手紙', 'Paper towels'),
      serviceItem('straws', '吸管', 'Straws'),
      serviceItem('bowls-plates', '碗盤', 'Bowls / plates', true),
      serviceItem('chopsticks', '筷子', 'Chopsticks', true),
      serviceItem('large-to-go-box', '大盒子', 'Large to-go box', true, '適合餐點 1/3 量以上', 'For more than 1/3 of a dish'),
      serviceItem('small-to-go-box', '小盒子', 'Small to-go box', true, '適合餐點 1/3 量以下', 'For less than 1/3 of a dish'),
      serviceItem('large-soup-box', '大湯盒', 'Large soup container', true, '密封湯盒，適合裝湯品 1/2 左右', 'Sealed soup container, about half a soup portion'),
      serviceItem('small-soup-box', '小湯盒', 'Small soup container', true, '適合裝有湯汁的菜品', 'For dishes with sauce or soup'),
      serviceItem('large-bag', '大袋子', 'Large bag', true),
      serviceItem('small-bag', '小袋子', 'Small bag', true)
    ];
    if (el('serviceFoodButtons')) el('serviceFoodButtons').innerHTML = food.map(serviceButtonHtml).join('');
    if (el('serviceDrinkButtons')) el('serviceDrinkButtons').innerHTML = drink.map(serviceButtonHtml).join('');
    if (el('serviceSupplyButtons')) el('serviceSupplyButtons').innerHTML = supply.map(serviceButtonHtml).join('');
  }

  async function postServiceRequestToBackend(request) {
    const response = await fetch('/api/service-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.ok) throw new Error(payload.message || 'service request failed');
    return payload.request || request;
  }

  function saveServiceRequestLocal(request) {
    let requests = [];
    try { requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]'); } catch (error) { requests = []; }
    requests.unshift(request);
    localStorage.setItem('serviceRequests', JSON.stringify(requests));
  }

  async function saveServiceRequest(item, qty) {
    item = item || {};
    const label = item.label || item.valueZh || item.valueEn || '';
    let user = null;
    try { user = JSON.parse(localStorage.getItem('currentUser') || 'null'); } catch (error) {}
    if (!user) return;
    if (!currentServiceTable) {
      serviceTableOpen = true;
      renderServiceTableSelector();
      serviceMessage('請先選擇座位', 'Please select a table first', 'error');
      return;
    }
    const request = {
      id: 'SR-' + Date.now(),
      table: currentServiceTable,
      phone: user.phone,
      phoneDigits: phoneDigits(user.phone),
      name: user.name || '',
      item: item.valueZh || label,
      itemZh: item.valueZh || label,
      itemEn: item.valueEn || label,
      quantity: qty || 1,
      kind: 'service',
      status: 'new',
      createdAt: new Date().toISOString()
    };
    try {
      const saved = await postServiceRequestToBackend(request);
      saveServiceRequestLocal(saved);
      serviceMessage('已送出桌邊服務：' + currentServiceTable + '｜' + (item.valueZh || label) + ' x' + (qty || 1), 'Service request sent: ' + currentServiceTable + ' | ' + (item.valueEn || label) + ' x' + (qty || 1), 'success');
    } catch (error) {
      saveServiceRequestLocal(request);
      serviceMessage('已暫存在本機；如需同步後台請確認 npm start 正在執行', 'Saved locally. To sync with admin, make sure npm start is running.', 'error');
    }
  }

  function bindDashboardEvents() {
    document.querySelectorAll('.member-action-tab').forEach(function(btn) {
      btn.addEventListener('click', function() { setActivePanel(btn.getAttribute('data-member-panel') || 'current'); });
    });
    document.getElementById('memberDashboard')?.addEventListener('click', function(event) {
      const tableBtn = event.target.closest('[data-service-table]');
      if (tableBtn) { setServiceTable(tableBtn.getAttribute('data-service-table') || ''); return; }
      if (event.target.closest('#serviceChangeTableBtn')) { serviceTableOpen = true; renderServiceTableSelector(); return; }
      const btn = event.target.closest('[data-service-key]');
      if (!btn) return;
      const key = btn.getAttribute('data-service-key') || '';
      const item = SERVICE_ITEM_REGISTRY[key];
      const qtySelect = document.querySelector('[data-service-qty="' + CSS.escape(key) + '"]');
      const qty = qtySelect ? Number(qtySelect.value || 1) : 1;
      saveServiceRequest(item, qty);
    });
  }

  window.showDashboard = function(user) {
    user = normalizeUser(user || {});
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (el('memberForm')) el('memberForm').style.display = 'none';
    if (el('memberDashboard')) el('memberDashboard').style.display = 'block';
    if (el('memberName')) el('memberName').textContent = user.name || user.phone || '';
    if (el('memberPhone')) el('memberPhone').textContent = user.phone || '';
    if (el('memberEmail')) el('memberEmail').textContent = user.email || '';
    if (el('memberAvatar')) el('memberAvatar').textContent = (user.name || user.phone || '?').charAt(0).toUpperCase();
    renderOrdersForUser(user);
    renderServiceButtons();
    try { currentServiceTable = localStorage.getItem('memberServiceTable') || ''; } catch (error) { currentServiceTable = ''; }
    serviceTableOpen = !currentServiceTable;
    renderServiceTableSelector();
    renderProfile(user);
    applyMemberDashboardLanguage();
    setActivePanel('current');
  };

  window.handleLogout = function() {
    localStorage.removeItem('currentUser');
    if (el('memberForm')) el('memberForm').style.display = 'block';
    if (el('memberDashboard')) el('memberDashboard').style.display = 'none';
    el('loginForm')?.reset();
    message('已登出', 'Logged out', 'success');
  };

  window.addEventListener('languagechange', applyMemberDashboardLanguage);
  window.addEventListener('chinesevariantchange', applyMemberDashboardLanguage);

  el('tabLogin')?.addEventListener('click', function() { window.switchTab('login'); });
  el('tabRegister')?.addEventListener('click', function() { window.switchTab('register'); });
  el('loginForm')?.addEventListener('submit', window.handleLogin);
  el('registerForm')?.addEventListener('submit', window.handleRegister);
  el('memberLogoutBtn')?.addEventListener('click', window.handleLogout);
  setPhoneInputs();
  bindDashboardEvents();

  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (currentUser) window.showDashboard(currentUser);
  } catch (error) {}
})();
  `,
];

export const memberPage = {
  html: memberHtml,
  scripts: memberScripts,
  source: 'member.html',
};
