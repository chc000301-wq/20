import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

const adminHtml = html`
${navbar()}
<div class="page-header admin-page-header">
  <div class="container">
    <h1>後台管理</h1>
    <p>預定訂位與購物車資訊</p>
  </div>
</div>
<section class="section admin-section">
  <div class="container">
    <div id="adminDashboard" class="admin-dashboard">
      <div class="admin-dashboard-top">
        <div>
          <h2>管理中心</h2>
          <p>「購物車」內會同時顯示內用訂餐、桌邊服務與外帶自取；未處理項目為紅底白框，已處理項目為白底紅框。</p>
        </div>
        <button class="admin-secondary-btn" type="button" id="adminLogoutBtn">登出</button>
      </div>

      <div class="admin-view-tabs" role="tablist" aria-label="管理中心分類">
        <button class="admin-view-tab active" type="button" data-admin-view="cart">購物車</button>
        <button class="admin-view-tab" type="button" data-admin-view="service">桌邊服務</button>
        <button class="admin-view-tab" type="button" data-admin-view="reservation">預定</button>
      </div>

      <div id="adminCartView" class="admin-view-panel active">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>購物車 / 訂單資訊</h3>
              <p>左側顯示內用訂餐與桌邊服務，右側顯示外帶自取訂單。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadOrdersBtn">重新整理</button>
          </div>
          <div id="adminCartList" class="admin-list admin-cart-list"></div>
          <div id="adminOrdersList" class="admin-orders-split"></div>
        </div>
      </div>


      <div id="adminServiceView" class="admin-view-panel">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>桌邊服務</h3>
              <p>會員送出的補飯、補水、用品等桌邊服務會即時出現在這裡；完成後按「完成」刪除。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadServiceBtn">重新整理</button>
          </div>
          <div id="adminServiceRequestsList" class="admin-orders-split"></div>
        </div>
      </div>

      <div id="adminReservationView" class="admin-view-panel">
        <div class="admin-panel">
          <div class="admin-panel-title-row">
            <div>
              <h3>預定訂位</h3>
              <p>顧客送出訂位後，會在這裡新增一筆資料。</p>
            </div>
            <button class="admin-secondary-btn admin-small-btn" type="button" id="adminReloadBtn">重新整理</button>
          </div>
          <div id="adminReservationsList" class="admin-list"></div>
        </div>
      </div>
    </div>
  </div>
</section>
${footer()}
`;

const adminScripts = [
  commonImageScripts,
  menuHelpersScript,
  script`
function adminParseJson(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function adminGetToken() {
  return localStorage.getItem('admin_token') || '';
}

function adminAuthHeaders(extra) {
  return Object.assign({ 'Authorization': 'Bearer ' + adminGetToken() }, extra || {});
}

function adminHandleUnauthorized(response) {
  if (response.status === 401) {
    window.adminLogout();
    throw new Error('登入已過期，請重新登入');
  }
}

function formatAdminDate(value) {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const lang = window.currentLang === 'en' ? 'en-US' : 'zh-TW';
  return date.toLocaleString(lang, {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
}

function adminCurrency(value) {
  return '$' + Number(value || 0).toFixed(2).replace(/\.00$/, '');
}

function adminEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function adminPhoneDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

function adminOrderHasItems(order) {
  return Array.isArray(order && order.items) && order.items.some(function(item) {
    return Number(item.qty || item.quantity || 0) > 0;
  });
}

window.adminLogout = function() {
  localStorage.removeItem('admin_token');
  localStorage.removeItem('admin_user');
  localStorage.removeItem('admin_auth');
  window.location.hash = '#/member';
};

function setAdminView(view) {
  const nextView = view === 'reservation' || view === 'service' ? view : 'cart';
  localStorage.setItem('admin_active_view', nextView);
  document.querySelectorAll('[data-admin-view]').forEach(function(button) {
    button.classList.toggle('active', button.getAttribute('data-admin-view') === nextView);
  });
  document.getElementById('adminCartView')?.classList.toggle('active', nextView === 'cart');
  document.getElementById('adminServiceView')?.classList.toggle('active', nextView === 'service');
  document.getElementById('adminReservationView')?.classList.toggle('active', nextView === 'reservation');
}

// ===== Reservations =====
function adminNormalizeReservations(items) {
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    return Object.assign({
      id: item.id || String(item.createdAt || Date.now()) + '-' + index,
      name: '', phone: '', date: '', time: '', guests: '', note: '',
      replied: false, replyNote: '', status: 'new', createdAt: new Date().toISOString()
    }, item);
  });
}

let adminReservationsCache = [];

async function adminLoadReservations() {
  const response = await fetch('/api/admin/reservations', { method: 'GET', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
  adminReservationsCache = adminNormalizeReservations(payload.reservations || []);
  return adminReservationsCache;
}

async function adminUpdateReservationApi(id, data) {
  const response = await fetch('/api/admin/reservations/' + encodeURIComponent(id), {
    method: 'PUT', headers: adminAuthHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(data)
  });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'update failed');
  return payload.reservation || data;
}

async function adminDeleteReservationApi(id) {
  const response = await fetch('/api/admin/reservations/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}

const ADMIN_STATUS_LABELS = {
  'new': '未回覆',
  'replied': '已回覆',
  'confirmed': '已確認',
  'cancelled': '已取消',
  'seated': '已入座'
};

function adminGetReservationById(id) {
  return adminReservationsCache.find(function(item) { return String(item.id) === String(id); });
}

function adminDisplayStatus(res) {
  if (res.status === 'new' && res.replied) return 'replied';
  return ADMIN_STATUS_LABELS[res.status] ? res.status : (res.replied ? 'replied' : 'new');
}

function adminReservationIsHandled(res) {
  return Boolean(res.replied) || adminDisplayStatus(res) !== 'new';
}

function adminStatusOptionsHtml(selected) {
  return Object.keys(ADMIN_STATUS_LABELS).map(function(key) {
    return '<option value="' + key + '" ' + (key === selected ? 'selected' : '') + '>' + ADMIN_STATUS_LABELS[key] + '</option>';
  }).join('');
}

function reservationCardHtml(res, index) {
  const id = String(res.id || index);
  const statusKey = adminDisplayStatus(res);
  const statusLabel = ADMIN_STATUS_LABELS[statusKey] || statusKey;
  const handled = adminReservationIsHandled(res);
  return ''
    + '<div class="admin-record-card ' + (handled ? 'admin-card-handled' : 'admin-card-unhandled') + '" data-reservation-id="' + adminEscape(id) + '">'
    + '  <div class="admin-record-main">'
    + '    <div class="admin-record-info">'
    + '      <div class="admin-record-head">'
    + '        <h4>訂位 #' + (index + 1) + ' ｜ ' + adminEscape(res.name || '未填姓名') + '</h4>'
    + '        <span class="admin-status-pill">' + (handled ? '已處理' : '未處理') + '</span>'
    + '        <span class="admin-status-pill">' + adminEscape(statusLabel) + '</span>'
    + '      </div>'
    + '      <p>電話：' + adminEscape(res.phone || '-') + '</p>'
    + '      <p>日期時間：' + adminEscape(res.date || '-') + ' ' + adminEscape(res.time || '') + '</p>'
    + '      <p>人數：' + adminEscape(res.guests || '-') + '</p>'
    + '      <p>特殊需求：' + (res.note ? adminEscape(res.note) : '無') + '</p>'
    + '      <p>回復紀錄：' + (res.replyNote ? adminEscape(res.replyNote) : '尚無回復紀錄') + '</p>'
    + '      <p class="admin-muted">建立：' + formatAdminDate(res.createdAt) + '</p>'
    + '    </div>'
    + '    <div class="admin-record-actions">'
    + '      <label class="admin-reply-check"><input type="checkbox" ' + (res.replied ? 'checked' : '') + ' data-action="toggle-reply" data-id="' + adminEscape(id) + '"> 已回復</label>'
    + '      <label class="admin-reply-check">狀態 <select data-action="set-status" data-id="' + adminEscape(id) + '">' + adminStatusOptionsHtml(statusKey) + '</select></label>'
    + '      <button class="admin-secondary-btn admin-small-btn" type="button" data-action="show-edit" data-id="' + adminEscape(id) + '">編輯</button>'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="delete" data-id="' + adminEscape(id) + '">刪除</button>'
    + '    </div>'
    + '  </div>'
    + '  <form class="admin-edit-form" id="adminEditReservation-' + adminEscape(id) + '" style="display:none" data-action="save-edit" data-id="' + adminEscape(id) + '">'
    + '    <div class="admin-edit-grid">'
    + '      <label>姓名<input name="name" value="' + adminEscape(res.name || '') + '" required></label>'
    + '      <label>電話<input name="phone" value="' + adminEscape(res.phone || '') + '" required></label>'
    + '      <label>日期<input name="date" type="date" value="' + adminEscape(res.date || '') + '" required></label>'
    + '      <label>時間<input name="time" value="' + adminEscape(res.time || '') + '" required></label>'
    + '      <label>人數<input name="guests" value="' + adminEscape(res.guests || '') + '" required></label>'
    + '      <label>狀態<select name="status">' + adminStatusOptionsHtml(statusKey) + '</select></label>'
    + '    </div>'
    + '    <label>特殊需求<textarea name="note" rows="2">' + adminEscape(res.note || '') + '</textarea></label>'
    + '    <label>回復紀錄<textarea name="replyNote" rows="2" placeholder="例如：已電話確認、已簡訊回覆">' + adminEscape(res.replyNote || '') + '</textarea></label>'
    + '    <label class="admin-reply-check"><input name="replied" type="checkbox" ' + (res.replied ? 'checked' : '') + '> 已回復</label>'
    + '    <div class="admin-edit-actions">'
    + '      <button class="btn-submit admin-save-btn" type="submit">儲存</button>'
    + '      <button class="admin-secondary-btn" type="button" data-action="hide-edit" data-id="' + adminEscape(id) + '">取消</button>'
    + '    </div>'
    + '  </form>'
    + '</div>';
}

window.renderAdminReservations = async function() {
  const list = document.getElementById('adminReservationsList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取訂位資料中...</div>';
  let reservations;
  try {
    reservations = await adminLoadReservations();
  } catch (error) {
    list.innerHTML = '<div class="admin-empty">無法載入訂位資料：' + adminEscape(error.message) + '</div>';
    return;
  }
  if (!reservations.length) {
    list.innerHTML = '<div class="admin-empty">目前沒有預定訂位資料</div>';
    return;
  }
  const unhandled = reservations.filter(function(item) { return !adminReservationIsHandled(item); }).length;
  list.innerHTML = '<div class="admin-subtitle">預定訂位：' + reservations.length + ' 筆｜未處理：' + unhandled + ' 筆</div>' + reservations.map(reservationCardHtml).join('');
};

async function adminPersistAndReload(action, successMessage) {
  try {
    await action();
    if (typeof showToast === 'function') showToast(successMessage, 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminReservations();
}

window.adminShowReservationEdit = function(id) {
  const form = document.getElementById('adminEditReservation-' + id);
  if (form) form.style.display = 'block';
};
window.adminHideReservationEdit = function(id) {
  const form = document.getElementById('adminEditReservation-' + id);
  if (form) form.style.display = 'none';
};
window.adminToggleReservationReply = async function(id, checked) {
  const original = adminGetReservationById(id);
  if (!original) return;
  const data = Object.assign({}, original, { replied: Boolean(checked), updatedAt: new Date().toISOString() });
  if (checked && (data.status === 'new' || !ADMIN_STATUS_LABELS[data.status])) data.status = 'replied';
  if (!checked && data.status === 'replied') data.status = 'new';
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '回覆狀態已更新');
};
window.adminSetReservationStatus = async function(id, status) {
  const original = adminGetReservationById(id);
  if (!original || !ADMIN_STATUS_LABELS[status]) return;
  const data = Object.assign({}, original, { status: status, updatedAt: new Date().toISOString() });
  if (status === 'new') data.replied = false;
  if (status !== 'new') data.replied = true;
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '狀態已更新為「' + ADMIN_STATUS_LABELS[status] + '」');
};
window.adminSaveReservationEdit = async function(form, id) {
  const original = adminGetReservationById(id) || { id: id, createdAt: new Date().toISOString() };
  const data = Object.assign({}, original, {
    name: form.elements.name.value.trim(), phone: form.elements.phone.value.trim(), date: form.elements.date.value,
    time: form.elements.time.value.trim(), guests: form.elements.guests.value.trim(), status: form.elements.status.value,
    note: form.elements.note.value.trim(), replyNote: form.elements.replyNote.value.trim(), replied: form.elements.replied.checked,
    updatedAt: new Date().toISOString()
  });
  if (data.status !== 'new') data.replied = true;
  await adminPersistAndReload(function() { return adminUpdateReservationApi(id, data); }, '訂位資料已更新');
};
window.adminDeleteReservation = async function(id) {
  if (!window.confirm('確定要刪除這筆訂位資料嗎？')) return;
  await adminPersistAndReload(function() { return adminDeleteReservationApi(id); }, '訂位資料已刪除');
};

// ===== Current cart + submitted orders =====
function getItemName(item) {
  if (window.currentLang === 'en' && item.name_en) return item.name_en;
  return item.name || item.title || item.id || 'Item';
}

function renderAdminCart() {
  const list = document.getElementById('adminCartList');
  if (!list) return;
  const cart = adminParseJson('cart').filter(function(item) { return Number(item.qty || item.quantity || 0) > 0; });
  if (!cart.length) {
    list.innerHTML = '<div class="admin-empty">目前瀏覽器購物車是空的</div>';
    return;
  }
  const totalQty = cart.reduce(function(sum, item) { return sum + Number(item.qty || item.quantity || 0); }, 0);
  const total = cart.reduce(function(sum, item) { return sum + Number(item.price || 0) * Number(item.qty || item.quantity || 0); }, 0);
  list.innerHTML = '<div class="admin-subtitle">目前瀏覽器購物車｜品項數量：' + totalQty + '</div>'
    + cart.map(function(item) {
      return '<div class="admin-current-cart-row"><span>' + adminEscape(getItemName(item)) + '</span><span>' + Number(item.qty || item.quantity || 0) + ' × ' + adminCurrency(item.price) + '</span></div>';
    }).join('')
    + '<div class="admin-cart-total">購物車小計：' + adminCurrency(total) + '</div>';
}

const ADMIN_ORDER_STATUS_LABELS = {
  'new': '新訂單',
  'making': '製作中',
  'ready': '可取餐',
  'completed': '已完成',
  'cancelled': '已取消'
};
let adminOrdersCache = [];

function adminOrderStatusOptionsHtml(selected) {
  return Object.keys(ADMIN_ORDER_STATUS_LABELS).map(function(key) {
    return '<option value="' + key + '" ' + (key === selected ? 'selected' : '') + '>' + ADMIN_ORDER_STATUS_LABELS[key] + '</option>';
  }).join('');
}
async function adminLoadOrders() {
  const response = await fetch('/api/admin/orders', { method: 'GET', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
  adminOrdersCache = (Array.isArray(payload.orders) ? payload.orders : []).filter(adminOrderHasItems);
  return adminOrdersCache;
}
async function adminUpdateOrderApi(id, data) {
  const response = await fetch('/api/admin/orders/' + encodeURIComponent(id), {
    method: 'PUT', headers: adminAuthHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(data)
  });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'update failed');
  return payload.order;
}
async function adminDeleteOrderApi(id) {
  const response = await fetch('/api/admin/orders/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}
function adminOrderServiceGroup(order) { return order.type === 'takeout' ? 'takeout' : 'dinein'; }
function adminOrderIsHandled(order) { return ['completed', 'cancelled'].includes(String(order.status || 'new')); }
function adminOrderStatusKey(order) { return ADMIN_ORDER_STATUS_LABELS[order.status] ? order.status : 'new'; }
function adminOrderCardHtml(order, index) {
  const id = String(order.id || index);
  const statusKey = adminOrderStatusKey(order);
  const handled = adminOrderIsHandled(order);
  const isTakeout = adminOrderServiceGroup(order) === 'takeout';
  const typeText = isTakeout ? '外帶自取' : '內用';
  const primaryInfo = isTakeout
    ? '外帶自取｜' + adminEscape(order.customerName || '-') + '｜電話 ' + adminEscape(order.customerPhone || '-') + '｜取餐 ' + adminEscape(order.pickupTime || '-')
    : '內用｜桌號 ' + adminEscape(order.table || '-') + '｜電話 ' + adminEscape(order.customerPhone || '-');
  const totalValue = order.cashTotal || order.total || order.totalPrice || order.subtotal;
  const itemsHtml = Array.isArray(order.items) ? order.items.map(function(item) {
    return '<div class="admin-order-item-line">#' + adminEscape(item.displayId || item.id || '') + ' ' + adminEscape(item.name || '')
      + ' x' + Number(item.qty || item.quantity || 0) + (item.note ? '（' + adminEscape(item.note) + '）' : '') + '</div>';
  }).join('') : '';
  return ''
    + '<div class="admin-order-card ' + (handled ? 'admin-card-handled' : 'admin-card-unhandled') + '" data-order-id="' + adminEscape(id) + '">'
    + '  <div class="admin-order-card-top">'
    + '    <h4>#' + (index + 1) + ' ' + typeText + '</h4>'
    + '    <span class="admin-status-pill">' + (handled ? '已處理' : '未處理') + '</span>'
    + '  </div>'
    + '  <div class="admin-order-primary-info">' + primaryInfo + '</div>'
    + '  <div class="admin-order-created">建立：' + formatAdminDate(order.createdAt) + '</div>'
    + '  <div class="admin-order-card-body">'
    + '    <div class="admin-order-items-list">' + (itemsHtml || '<div class="admin-order-item-line">無菜品資料</div>') + '</div>'
    + '    <div class="admin-order-side">'
    + '      <strong class="admin-order-price">' + adminCurrency(totalValue) + '</strong>'
    + '      <span class="admin-status-pill">' + ADMIN_ORDER_STATUS_LABELS[statusKey] + '</span>'
    + '      <select data-action="set-order-status" data-id="' + adminEscape(id) + '">' + adminOrderStatusOptionsHtml(statusKey) + '</select>'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="delete-order" data-id="' + adminEscape(id) + '">刪除</button>'
    + '    </div>'
    + '  </div>'
    + '</div>';
}
window.renderAdminOrders = async function() {
  const list = document.getElementById('adminOrdersList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取訂單與桌邊服務中...</div>';
  let orders;
  let serviceRequests = [];
  try {
    orders = await adminLoadOrders();
    serviceRequests = await adminLoadServiceRequests();
  }
  catch (error) { list.innerHTML = '<div class="admin-empty">無法載入訂單資料：' + adminEscape(error.message) + '</div>'; return; }
  const dineinOrders = orders.filter(function(order) { return adminOrderServiceGroup(order) === 'dinein'; });
  const takeout = orders.filter(function(order) { return adminOrderServiceGroup(order) === 'takeout'; });
  const dineinTasks = dineinOrders.concat(serviceRequests.map(function(req) {
    return Object.assign({ __taskType: 'service' }, req);
  }));
  dineinTasks.sort(function(a, b) {
    return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
  });
  const unhandledOrders = orders.filter(function(order) { return !adminOrderIsHandled(order); }).length;
  const unhandledServices = serviceRequests.length;
  const sectionHtml = function(title, rows) {
    return '<div class="admin-order-column"><div class="admin-subtitle">' + title + '：' + rows.length + ' 筆</div>'
      + (rows.length ? rows.map(function(row, index) {
          return row.__taskType === 'service' ? adminServiceCardHtml(row, index) : adminOrderCardHtml(row, index);
        }).join('') : '<div class="admin-empty">此分類目前沒有任務</div>')
      + '</div>';
  };
  list.innerHTML = '<div class="admin-orders-summary">已送出訂單：' + orders.length + ' 筆｜桌邊服務：' + serviceRequests.length + ' 筆｜未處理：' + (unhandledOrders + unhandledServices) + ' 筆</div>'
    + '<div class="admin-order-columns">' + sectionHtml('內用訂餐', dineinTasks) + sectionHtml('外帶自取', takeout) + '</div>';
};window.adminSetOrderStatus = async function(id, status) {
  if (!ADMIN_ORDER_STATUS_LABELS[status]) return;
  try {
    await adminUpdateOrderApi(id, { status: status });
    if (typeof showToast === 'function') showToast('訂單狀態已更新為「' + ADMIN_ORDER_STATUS_LABELS[status] + '」', 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminOrders();
};
window.adminDeleteOrder = async function(id) {
  if (!window.confirm('確定要刪除這筆訂單嗎？')) return;
  try {
    await adminDeleteOrderApi(id);
    if (typeof showToast === 'function') showToast('訂單已刪除', 'success');
  } catch (error) {
    if (typeof showToast === 'function') showToast('後台更新失敗：' + error.message, 'error');
  }
  await window.renderAdminOrders();
};


// ===== Table-side service requests =====
let adminServiceRequestsCache = [];

function adminNormalizeServiceRequests(items) {
  return (Array.isArray(items) ? items : []).map(function(item, index) {
    return Object.assign({
      id: item.id || String(item.createdAt || Date.now()) + '-' + index,
      table: '', item: '', quantity: 1, phone: '', name: '', status: 'new', createdAt: new Date().toISOString()
    }, item);
  });
}

async function adminLoadServiceRequests() {
  try {
    const response = await fetch('/api/admin/service-requests', { method: 'GET', headers: adminAuthHeaders() });
    adminHandleUnauthorized(response);
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.ok) throw new Error(payload.message || 'load failed');
    adminServiceRequestsCache = adminNormalizeServiceRequests(payload.requests || []);
    return adminServiceRequestsCache;
  } catch (error) {
    const local = adminParseJson('serviceRequests');
    adminServiceRequestsCache = adminNormalizeServiceRequests(local);
    return adminServiceRequestsCache;
  }
}

async function adminDeleteServiceRequestApi(id) {
  const response = await fetch('/api/admin/service-requests/' + encodeURIComponent(id), { method: 'DELETE', headers: adminAuthHeaders() });
  adminHandleUnauthorized(response);
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) throw new Error(payload.message || 'delete failed');
  return true;
}

function adminDeleteServiceRequestLocal(id) {
  const local = adminParseJson('serviceRequests');
  localStorage.setItem('serviceRequests', JSON.stringify(local.filter(function(item) { return String(item.id) !== String(id); })));
}

function adminServiceCardHtml(req, index) {
  const id = String(req.id || index);
  const qty = Math.max(1, Math.floor(Number(req.quantity || 1) || 1));
  return ''
    + '<div class="admin-order-card admin-card-unhandled admin-service-card" data-service-request-id="' + adminEscape(id) + '">'
    + '  <div class="admin-order-card-top">'
    + '    <h4>#' + (index + 1) + ' 服務任務｜桌號 ' + adminEscape(req.table || '-') + '</h4>'
    + '    <span class="admin-status-pill">未處理</span>'
    + '  </div>'
    + '  <div class="admin-order-primary-info">桌邊服務｜' + adminEscape(req.item || '-') + ' x' + qty + '｜' + adminEscape(req.name || '-') + '｜電話 ' + adminEscape(req.phone || '-') + '</div>'
    + '  <div class="admin-order-created">建立：' + formatAdminDate(req.createdAt) + '</div>'
    + '  <div class="admin-order-card-body">'
    + '    <div class="admin-order-items-list"><div class="admin-order-item-line">服務內容：' + adminEscape(req.item || '-') + ' x' + qty + '</div></div>'
    + '    <div class="admin-order-side">'
    + '      <button class="admin-danger-btn admin-small-btn" type="button" data-action="complete-service" data-id="' + adminEscape(id) + '">完成</button>'
    + '    </div>'
    + '  </div>'
    + '</div>';
}

window.renderAdminServiceRequests = async function() {
  const list = document.getElementById('adminServiceRequestsList');
  if (!list) return;
  list.innerHTML = '<div class="admin-empty">讀取桌邊服務中...</div>';
  let requests = [];
  try { requests = await adminLoadServiceRequests(); }
  catch (error) { list.innerHTML = '<div class="admin-empty">無法載入桌邊服務：' + adminEscape(error.message) + '</div>'; return; }
  list.innerHTML = '<div class="admin-orders-summary">待完成桌邊服務：' + requests.length + ' 筆</div>'
    + (requests.length ? requests.map(adminServiceCardHtml).join('') : '<div class="admin-empty">目前沒有待完成桌邊服務</div>');
};

window.adminCompleteServiceRequest = async function(id) {
  try {
    await adminDeleteServiceRequestApi(id);
  } catch (error) {
    adminDeleteServiceRequestLocal(id);
  }
  if (typeof showToast === 'function') showToast('桌邊服務已完成並刪除', 'success');
  await window.renderAdminOrders();
  await window.renderAdminServiceRequests();
};

async function verifyAdminSession() {
  const token = localStorage.getItem('admin_token');
  if (!token) return false;
  try {
    const response = await fetch('/api/admin/verify', { method: 'GET', headers: { 'Authorization': 'Bearer ' + token } });
    return response.ok;
  } catch (error) { return false; }
}
async function renderAdminDashboard() {
  const authed = await verifyAdminSession();
  if (!authed) {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    localStorage.removeItem('admin_auth');
    window.location.hash = '#/member';
    return;
  }
  setAdminView(localStorage.getItem('admin_active_view') || 'cart');
  renderAdminCart();
  await window.renderAdminOrders();
  await window.renderAdminServiceRequests();
  await window.renderAdminReservations();
}

document.getElementById('adminLogoutBtn')?.addEventListener('click', function() { window.adminLogout(); });
document.getElementById('adminReloadBtn')?.addEventListener('click', function() { window.renderAdminReservations(); });
document.getElementById('adminReloadOrdersBtn')?.addEventListener('click', async function() { renderAdminCart(); await window.renderAdminOrders(); await window.renderAdminServiceRequests(); });
document.getElementById('adminReloadServiceBtn')?.addEventListener('click', function() { window.renderAdminServiceRequests(); });
document.querySelectorAll('[data-admin-view]').forEach(function(button) {
  button.addEventListener('click', function() { setAdminView(button.getAttribute('data-admin-view')); });
});
const adminListEl = document.getElementById('adminReservationsList');
if (adminListEl) {
  adminListEl.addEventListener('click', function(event) {
    const target = event.target.closest('[data-action]');
    if (!target || target.tagName === 'INPUT' || target.tagName === 'FORM') return;
    const id = target.getAttribute('data-id');
    const action = target.getAttribute('data-action');
    if (action === 'show-edit') window.adminShowReservationEdit(id);
    else if (action === 'hide-edit') window.adminHideReservationEdit(id);
    else if (action === 'delete') window.adminDeleteReservation(id);
  });
  adminListEl.addEventListener('change', function(event) {
    const target = event.target;
    if (target.matches('input[type="checkbox"][data-action="toggle-reply"]')) window.adminToggleReservationReply(target.getAttribute('data-id'), target.checked);
    else if (target.matches('select[data-action="set-status"]')) window.adminSetReservationStatus(target.getAttribute('data-id'), target.value);
  });
  adminListEl.addEventListener('submit', function(event) {
    const form = event.target.closest('form[data-action="save-edit"]');
    if (!form) return;
    event.preventDefault();
    window.adminSaveReservationEdit(form, form.getAttribute('data-id'));
  });
}
const adminOrdersEl = document.getElementById('adminOrdersList');
if (adminOrdersEl) {
  adminOrdersEl.addEventListener('change', function(event) {
    const target = event.target;
    if (target.matches('select[data-action="set-order-status"]')) window.adminSetOrderStatus(target.getAttribute('data-id'), target.value);
  });
  adminOrdersEl.addEventListener('click', function(event) {
    const completeService = event.target.closest('[data-action="complete-service"]');
    if (completeService) { window.adminCompleteServiceRequest(completeService.getAttribute('data-id')); return; }
    const target = event.target.closest('[data-action="delete-order"]');
    if (target) window.adminDeleteOrder(target.getAttribute('data-id'));
  });
}

const adminServiceEl = document.getElementById('adminServiceRequestsList');
if (adminServiceEl) {
  adminServiceEl.addEventListener('click', function(event) {
    const target = event.target.closest('[data-action="complete-service"]');
    if (target) window.adminCompleteServiceRequest(target.getAttribute('data-id'));
  });
}
let adminServiceRefreshTimer = null;
if (adminServiceRefreshTimer) clearInterval(adminServiceRefreshTimer);
adminServiceRefreshTimer = setInterval(function() {
  if (document.getElementById('adminDashboard')) { window.renderAdminOrders(); window.renderAdminServiceRequests(); }
}, 4000);

window.renderAdminDashboard = renderAdminDashboard;
window.renderAdminCart = renderAdminCart;
renderAdminDashboard();
  `,
];

export const adminPage = {
  html: adminHtml,
  scripts: adminScripts,
  source: 'admin-dashboard.html',
};
