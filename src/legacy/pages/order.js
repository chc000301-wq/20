import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuDataScript } from '../shared/menuDataScript.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const orderHtml = html`
${navbar()}
<div class="page-header">
<div class="container">
<h1 data-i18n="order_title">內用 / 外帶自取</h1>
<p data-i18n="order_subtitle">選擇座位或取餐時間，確認您的餐點</p>
</div>
</div>
<section class="section order-section">
<div class="container">
<div class="order-layout">
<!-- Left: Order setup + Menu -->
<div class="order-left-panel">
<div class="order-option-card">
<h3 data-i18n="order_type">取餐方式</h3>
<div class="order-type-buttons">
<button class="menu-cat-btn order-mode-btn active" type="button" data-order-type="dinein" data-i18n="order_dinein" id="btnDineIn" aria-selected="true" onclick="setOrderType('dinein')">內用</button>
<button class="menu-cat-btn order-mode-btn" type="button" data-order-type="takeout" data-i18n="order_takeout" id="btnTakeout" aria-selected="false" onclick="setOrderType('takeout')">外帶自取</button>
</div>

<div id="dineInPanel" class="order-mode-panel">
<div class="form-group">
<label data-i18n="order_phone_optional">電話號碼（必填）</label>
<input id="dineInPhone" data-i18n-placeholder="order_phone_optional_placeholder" placeholder="請輸入 10 位數電話" type="tel" inputmode="numeric" maxlength="12" required/>
</div>
<div class="order-panel-title-row">
<div>
<h4 data-i18n="order_table_select">選擇桌號</h4>
<p data-i18n="order_table_hint">請依照店內座位圖選擇桌號。</p>
</div>
<strong id="selectedTableLabel" class="selected-table-label">未選擇</strong>
</div>
<div class="floor-plan floor-plan-v2" aria-label="Restaurant table layout">
<div class="floor-main-area">
<div class="floor-plan-row booth-row top-booth-row">
<button class="table-seat booth-seat" type="button" data-table-id="E5" onclick="selectTable('E5')">E5</button>
<button class="table-seat booth-seat" type="button" data-table-id="E4" onclick="selectTable('E4')">E4</button>
<button class="table-seat booth-seat" type="button" data-table-id="E3" onclick="selectTable('E3')">E3</button>
<button class="table-seat booth-seat" type="button" data-table-id="E2" onclick="selectTable('E2')">E2</button>
<button class="table-seat booth-seat" type="button" data-table-id="E1" onclick="selectTable('E1')">E1</button>
</div>
<div class="floor-table-area">
<div class="floor-plan-row table-row upper-table-row">
<button class="table-seat round-seat" type="button" data-table-id="D3" onclick="selectTable('D3')">D3</button>
<button class="table-seat round-seat" type="button" data-table-id="D2" onclick="selectTable('D2')">D2</button>
<button class="table-seat round-seat" type="button" data-table-id="D1" onclick="selectTable('D1')">D1</button>
<button class="table-seat round-seat" type="button" data-table-id="C2" onclick="selectTable('C2')">C2</button>
</div>
<div class="floor-plan-row table-row lower-table-row">
<button class="table-seat round-seat" type="button" data-table-id="B3" onclick="selectTable('B3')">B3</button>
<button class="table-seat round-seat" type="button" data-table-id="B2" onclick="selectTable('B2')">B2</button>
<button class="table-seat round-seat" type="button" data-table-id="B1" onclick="selectTable('B1')">B1</button>
<button class="table-seat round-seat" type="button" data-table-id="C1" onclick="selectTable('C1')">C1</button>
</div>
</div>
<div class="floor-plan-row booth-row bottom-booth-row">
<button class="table-seat booth-seat" type="button" data-table-id="A5" onclick="selectTable('A5')">A5</button>
<button class="table-seat booth-seat" type="button" data-table-id="A4" onclick="selectTable('A4')">A4</button>
<button class="table-seat booth-seat" type="button" data-table-id="A3" onclick="selectTable('A3')">A3</button>
<button class="table-seat booth-seat" type="button" data-table-id="A2" onclick="selectTable('A2')">A2</button>
<button class="table-seat booth-seat" type="button" data-table-id="A1" onclick="selectTable('A1')">A1</button>
</div>
</div>
<div class="floor-side-area">
<div class="counter-label" data-i18n="order_counter">櫃台</div>
<div class="entrance-label" data-i18n="order_entrance">入口</div>
</div>
</div>

<div id="takeoutPanel" class="order-mode-panel" hidden>
<div class="order-form-grid">
<div class="form-group">
<label data-i18n="order_customer_name">姓名</label>
<input id="takeoutName" data-i18n-placeholder="order_customer_name_placeholder" placeholder="請輸入姓名" type="text"/>
</div>
<div class="form-group">
<label data-i18n="order_customer_phone">電話</label>
<input id="takeoutPhone" data-i18n-placeholder="order_customer_phone_placeholder" placeholder="請輸入 10 位數電話" type="tel" maxlength="12" oninput="formatTakeoutPhone(this)"/>
</div>
<div class="form-group">
<label data-i18n="order_pickup_time">取餐時間</label>
<input id="pickupTime" type="time"/>
</div>
</div>
</div>
</div>

<div class="menu-categories" id="orderMenuCats"></div>
<div class="menu-grid" id="orderMenuGrid"></div>
</div>
<!-- Right: Cart -->
<div class="order-cart-column">
<div class="order-cart-card">
<div class="order-cart-header">
<h3 data-i18n="order_cart">購物車</h3>
</div>
<div id="orderCartItems" class="order-cart-items"></div>
<div class="order-cart-footer">
<div class="order-summary-line">
<span data-i18n="order_total_qty">總數量</span>
<span id="orderTotalQty">0</span>
</div>
<div class="order-summary-line">
<span data-i18n="order_subtotal">小計</span>
<span id="orderSubtotal">$0.00</span>
</div>
<div class="order-summary-line total-line">
<span data-i18n="order_total">合計</span>
<span id="orderTotal">$0.00</span>
</div>
<button class="menu-cat-btn" data-i18n="order_clear_cart" id="clearCartBtn" type="button" style="width:100%;margin-bottom:10px">清空購物車</button>
<button class="btn-submit" data-i18n="order_checkout" id="checkoutBtn" type="button">送出訂單</button>
</div>
</div>
</div>
</div>
</div>
</section>
${footer()}
`;

const orderScripts = [
  commonImageScripts,
  menuDataScript,
  menuHelpersScript,
  script`
let orderType = 'dinein';
let selectedTable = '';
let allItems = [];
const ORDER_DRAFT_KEY = 'orderDraft';

function saveOrderDraft() {
    try {
        const draft = {
            orderType: orderType,
            selectedTable: selectedTable,
            takeoutName: document.getElementById('takeoutName')?.value || '',
            takeoutPhone: document.getElementById('takeoutPhone')?.value || '',
            dineInPhone: document.getElementById('dineInPhone')?.value || '',
            pickupTime: document.getElementById('pickupTime')?.value || ''
        };
        localStorage.setItem(ORDER_DRAFT_KEY, JSON.stringify(draft));
    } catch (error) {
        console.warn('Unable to save order draft', error);
    }
}

function readOrderDraft() {
    try {
        const draft = JSON.parse(localStorage.getItem(ORDER_DRAFT_KEY) || '{}');
        return draft && typeof draft === 'object' ? draft : {};
    } catch {
        return {};
    }
}

function bindOrderDraftInputs() {
    ['takeoutName', 'takeoutPhone', 'dineInPhone', 'pickupTime'].forEach(function(id) {
        const input = document.getElementById(id);
        if (input) input.addEventListener('input', saveOrderDraft);
    });
    // Auto-format the optional dine-in phone as xxx-xxx-xxxx, same as takeout.
    const dineInPhone = document.getElementById('dineInPhone');
    if (dineInPhone) dineInPhone.addEventListener('input', function() { window.formatTakeoutPhone(dineInPhone); });
}

function restoreOrderDraft() {
    const draft = readOrderDraft();
    orderType = draft.orderType === 'takeout' ? 'takeout' : 'dinein';

    const nameInput = document.getElementById('takeoutName');
    const phoneInput = document.getElementById('takeoutPhone');
    const dineInPhoneInput = document.getElementById('dineInPhone');
    const pickupInput = document.getElementById('pickupTime');
    if (nameInput && draft.takeoutName) nameInput.value = draft.takeoutName;
    if (phoneInput && draft.takeoutPhone) phoneInput.value = draft.takeoutPhone;
    if (dineInPhoneInput && draft.dineInPhone) dineInPhoneInput.value = draft.dineInPhone;
    if (pickupInput && draft.pickupTime) pickupInput.value = draft.pickupTime;

    if (draft.selectedTable) {
        selectedTable = draft.selectedTable;
    }
}

function money(value) {
    return '$' + Number(value || 0).toFixed(2).replace(/\\.00$/, '');
}

function getUnselectedText() {
    return currentLang === 'zh' ? zhDisplay('未選擇') : 'Not selected';
}

function getSelectedText(table) {
    return table || getUnselectedText();
}

function setSelectedTableLabel(table) {
    const label = document.getElementById('selectedTableLabel');
    if (!label) return;
    label.textContent = table
        ? ((currentLang === 'zh' ? zhDisplay('目前選取桌號：') : 'Selected table: ') + table)
        : getUnselectedText();
    label.classList.toggle('has-selection', !!table);
}

window.refreshOrderLabels = function() {
    setSelectedTableLabel(selectedTable);
    updateOrderTotal();
};

function renderOrderCategories() {
    const cats = document.getElementById('orderMenuCats');
    if (!cats) return;
    const activeKey = window.currentOrderCategory || 'all';
    const allLabel = t('menu_all');
    const categoryButtons = [{ key: 'all', label: allLabel }].concat((window.menuCategories || []).map(function(cat) {
        return { key: cat.key, label: getCategoryLabel(cat) };
    }));
    cats.innerHTML = categoryButtons.map(function(entry) {
        const key = entry.key;
        const label = entry.label;
        return '<button class="menu-cat-btn ' + (key === activeKey ? 'active' : '') + '" onclick="filterOrderMenu(\\'' + key + '\\', this)">' + escapeHtml(label) + '</button>';
    }).join('');
}

window.renderOrderCategories = renderOrderCategories;

window.setOrderType = function(type) {
    orderType = type === 'takeout' ? 'takeout' : 'dinein';

    const isDineIn = orderType === 'dinein';
    const dineInPanel = document.getElementById('dineInPanel');
    const takeoutPanel = document.getElementById('takeoutPanel');
    const dineInBtn = document.getElementById('btnDineIn');
    const takeoutBtn = document.getElementById('btnTakeout');

    if (dineInBtn) {
        dineInBtn.classList.toggle('active', isDineIn);
        dineInBtn.setAttribute('aria-selected', isDineIn ? 'true' : 'false');
    }
    if (takeoutBtn) {
        takeoutBtn.classList.toggle('active', !isDineIn);
        takeoutBtn.setAttribute('aria-selected', !isDineIn ? 'true' : 'false');
    }

    if (dineInPanel) {
        dineInPanel.hidden = !isDineIn;
        dineInPanel.classList.toggle('is-active', isDineIn);
        dineInPanel.style.display = isDineIn ? 'block' : 'none';
    }
    if (takeoutPanel) {
        takeoutPanel.hidden = isDineIn;
        takeoutPanel.classList.toggle('is-active', !isDineIn);
        takeoutPanel.style.display = isDineIn ? 'none' : 'block';
    }

    updateOrderTotal();
    saveOrderDraft();
}

function initOrderTypeTabs() {
    document.querySelectorAll('.order-mode-btn[data-order-type]').forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            window.setOrderType(btn.dataset.orderType);
        });
    });
    window.setOrderType(orderType);
}

window.selectTable = function(tableId) {
    selectedTable = String(tableId || '').trim();
    document.querySelectorAll('.table-seat').forEach(function(btn) {
        const id = btn.dataset.tableId || btn.textContent.trim();
        const isSelected = id === selectedTable;
        btn.classList.toggle('active', isSelected);
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
    setSelectedTableLabel(selectedTable);
    saveOrderDraft();
}

function initTableButtons() {
    document.querySelectorAll('.table-seat[data-table-id]').forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            window.selectTable(btn.dataset.tableId);
        });
    });
}

window.formatTakeoutPhone = function(input) {
    const digits = input.value.replace(/\\D/g, '').slice(0, 10);
    const parts = [];
    if (digits.length > 0) parts.push(digits.slice(0, 3));
    if (digits.length > 3) parts.push(digits.slice(3, 6));
    if (digits.length > 6) parts.push(digits.slice(6, 10));
    input.value = parts.join('-');
    saveOrderDraft();
}

window.filterOrderMenu = function(cat, btn) {
    window.currentOrderCategory = cat;
    document.querySelectorAll('#orderMenuCats .menu-cat-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const filtered = cat === 'all' ? allItems : allItems.filter(i => i.category === cat);
    renderOrderMenu(filtered);
}


function getOrderMenuItemQty(itemId) {
    refreshCartFromStorage();
    const row = (window.cart || []).find(function(cartItem) { return cartItem.id === itemId; });
    return Number(row && (row.qty || row.quantity) || 0);
}

function renderOrderCartControl(item) {
    const qty = getOrderMenuItemQty(item.id);
    if (qty > 0) {
        return '<div class="dish-cart-stepper compact-stepper" onclick="event.stopPropagation()">'
            + '<button type="button" aria-label="Decrease" onclick="changeOrderMenuQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
            + '<span>' + qty + '</span>'
            + '<button type="button" aria-label="Increase" onclick="changeOrderMenuQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
            + '</div>';
    }
    const safeItem = JSON.stringify(item).replace(/'/g, "\\'");
    return '<button class="btn-add-cart" onclick=\'addToCartOrder(' + safeItem + ')\'>' + escapeHtml(t('menu_add_cart')) + '</button>';
}

window.changeOrderMenuQty = function(itemId, delta, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    if (delta > 0) {
        const item = allItems.find(function(entry) { return entry.id === itemId; });
        if (item) window.addToCartOrder(item);
    } else if (typeof window.updateQty === 'function') {
        window.updateQty(itemId, -1);
        renderOrderCart();
        renderOrderMenu(window.currentOrderItems || allItems);
    }
};

window.renderOrderMenu = function(items) {
    window.currentOrderItems = items;
    const grid = document.getElementById('orderMenuGrid');
    if (!grid) return;
    const aiImageNote = getAiImageNoteText();
    grid.innerHTML = items.map(item => {
        return '<div class="menu-card">' +
            '<div class="menu-card-img" style="background:' + (item.color || '') + '"><img class="menu-card-photo" src="' + getDishImageSrc(item) + '" alt="' + escapeHtml(getItemName(item)) + '" onerror="handleMenuImageError(this)"><span class="ai-image-note">' + escapeHtml(aiImageNote) + '</span></div>' +
            '<div class="menu-card-body">' +
            '<h3>' + escapeHtml(getItemName(item)) + '</h3>' +
            '<p class="desc">' + escapeHtml(getItemDesc(item)) + '</p>' +
            '<div class="menu-card-footer">' +
            '<span class="price">' + money(item.price) + '</span>' +
            renderOrderCartControl(item) +
            '</div></div></div>';
    }).join('');
}
allItems = Array.isArray(window.menuItems) ? window.menuItems : [];
window.allOrderItems = allItems;
window.currentOrderCategory = 'all';
renderOrderCategories();
renderOrderMenu(allItems);

window.addToCartOrder = function(item) {
    if (typeof window.addToCart === 'function') {
        window.addToCart(item);
    } else {
        const existing = (window.cart || []).find(function(cartItem) { return cartItem.id === item.id; });
        if (existing) existing.qty += 1;
        else (window.cart = window.cart || []).push(Object.assign({}, item, { qty: 1 }));
    }
    if (typeof window.saveCart === 'function') window.saveCart();
    else localStorage.setItem('cart', JSON.stringify(window.cart || []));
    renderOrderCart();
    renderOrderMenu(window.currentOrderItems || allItems);
}

function refreshCartFromStorage() {
    try {
        const parsed = JSON.parse(localStorage.getItem('cart') || '[]');
        if (Array.isArray(parsed)) window.cart = parsed;
    } catch (error) {
        window.cart = Array.isArray(window.cart) ? window.cart : [];
    }
}

window.renderOrderCart = function() {
    refreshCartFromStorage();
    const container = document.getElementById('orderCartItems');
    if (!container) return;
    if (!window.cart || window.cart.length === 0) {
        container.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p data-i18n="order_empty">' + t('order_empty') + '</p></div>';
    } else {
        container.innerHTML = window.cart.map(item => {
            const lineTotal = Number(item.price || 0) * Number(item.qty || 0);
            const itemNumber = String(item.displayId || item.id || '');
            return '<div class="order-cart-row">' +
            '<div class="order-cart-row-main">' +
            '<h4>' + escapeHtml(getItemName(item)) + '</h4>' +
            '<div class="order-cart-row-meta">#' + escapeHtml(itemNumber) + ' ｜ ' + money(item.price) + ' × ' + Number(item.qty || 0) + '</div>' +
            '<input class="order-note-input" type="text" maxlength="100" data-action="edit-note" data-id="' + escapeHtml(item.id) + '" value="' + escapeHtml(item.note || '') + '" placeholder="' + escapeHtml(t('order_item_note_placeholder')) + '" style="width:100%;margin-top:6px;padding:4px 8px;font-size:0.8rem;border:1px solid #ddd;border-radius:6px">' +
            '</div>' +
            '<div class="order-cart-row-side">' +
            '<strong>' + money(lineTotal) + '</strong>' +
            '<div class="cart-item-qty">' +
            '<button class="qty-btn" data-action="qty-minus" data-id="' + escapeHtml(item.id) + '">−</button>' +
            '<span>' + item.qty + '</span>' +
            '<button class="qty-btn" data-action="qty-plus" data-id="' + escapeHtml(item.id) + '">+</button>' +
            '<button class="qty-btn" data-action="remove-item" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(t('order_remove_item')) + '">✕</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        }).join('');
    }
    updateOrderTotal();
}

// [STABLE BINDINGS] The cart column re-renders, so its controls use event delegation.
(function bindOrderCartControls() {
    const container = document.getElementById('orderCartItems');
    if (container) {
        container.addEventListener('click', function(event) {
            const target = event.target.closest('[data-action]');
            if (!target) return;
            const id = target.getAttribute('data-id');
            const action = target.getAttribute('data-action');
            if (action === 'qty-minus') window.updateQtyOrder(id, -1);
            else if (action === 'qty-plus') window.updateQtyOrder(id, 1);
            else if (action === 'remove-item') { window.removeFromCart(id); renderOrderCart(); }
        });
        container.addEventListener('change', function(event) {
            const target = event.target;
            if (target.matches('input[data-action="edit-note"]')) {
                window.updateCartNote(target.getAttribute('data-id'), target.value.trim());
            }
        });
    }
    document.getElementById('clearCartBtn')?.addEventListener('click', function() {
        if (!window.cart || window.cart.length === 0) return;
        window.clearCart();
        renderOrderCart();
        showToast(t('order_cart_cleared'), 'success');
    });
    document.getElementById('checkoutBtn')?.addEventListener('click', function() { window.checkout(); });
})();

window.updateQtyOrder = function(id, delta) {
    updateQty(id, delta);
    renderOrderCart();
}

window.updateOrderTotal = function() {
    const subtotal = getCartTotal();
    const subtotalEl = document.getElementById('orderSubtotal');
    const totalEl = document.getElementById('orderTotal');
    const qtyEl = document.getElementById('orderTotalQty');
    if (subtotalEl) subtotalEl.textContent = money(subtotal);
    if (totalEl) totalEl.textContent = money(subtotal);
    if (qtyEl) qtyEl.textContent = String(getCartCount());
}

function validateTakeoutInfo() {
    const name = document.getElementById('takeoutName')?.value.trim() || '';
    const phone = document.getElementById('takeoutPhone')?.value.trim() || '';
    const pickupTime = document.getElementById('pickupTime')?.value || '';
    const phoneDigits = phone.replace(/\\D/g, '');
    if (!name) return currentLang === 'zh' ? zhDisplay('請填寫姓名') : 'Please enter your name';
    if (phoneDigits.length !== 10) return currentLang === 'zh' ? zhDisplay('請輸入 10 位數電話') : 'Please enter a 10-digit phone number';
    if (!pickupTime) return currentLang === 'zh' ? zhDisplay('請選擇取餐時間') : 'Please select a pickup time';
    return '';
}

function buildOrderItems() {
    return (window.cart || []).map(function(item) {
        const price = Number(item.price || 0);
        const qty = Number(item.qty || 0);
        return {
            id: String(item.id || ''),
            displayId: String(item.displayId || item.id || ''),
            name: String(item.name || ''),
            name_en: String(item.name_en || ''),
            price: price,
            qty: qty,
            subtotal: Math.round(price * qty * 100) / 100,
            note: String(item.note || '').trim()
        };
    });
}

async function saveOrderToBackend(order) {
    let response;
    try {
        response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });
    } catch (networkError) {
        const error = new Error('network');
        error.isNetworkError = true;
        throw error;
    }
    const payload = await response.json().catch(function() { return {}; });
    if (!response.ok || !payload.ok) {
        const error = new Error(payload.message || 'Order API failed');
        error.isApiError = true;
        throw error;
    }
    return payload.order || order;
}

window.checkout = async function() {
    if (!window.cart || window.cart.length === 0) {
        showToast(currentLang === 'zh' ? zhDisplay('請先選擇餐點') : 'Please select items first', 'error');
        return;
    }
    if (orderType === 'dinein' && !selectedTable) {
        showToast(currentLang === 'zh' ? zhDisplay('請先選擇桌號') : 'Please select a table first', 'error');
        return;
    }
    if (orderType === 'takeout') {
        const error = validateTakeoutInfo();
        if (error) {
            showToast(error, 'error');
            return;
        }
    }

    // Optional member phone for dine-in: not required, but if provided it must be 10 digits.
    const dineInPhone = document.getElementById('dineInPhone')?.value.trim() || '';
    if (orderType === 'dinein' && dineInPhone && dineInPhone.replace(/\\D/g, '').length !== 10) {
        showToast(currentLang === 'zh' ? zhDisplay('電話號碼需為 10 位數，或留空') : 'Phone number must be 10 digits, or leave it empty', 'error');
        return;
    }

    const builtItems = buildOrderItems();
    if (!builtItems.length) {
        showToast(currentLang === 'zh' ? zhDisplay('購物車是空的，請先選擇餐點') : 'Your cart is empty. Please select items first', 'error');
        window.cart = [];
        saveCart();
        renderOrderCart();
        return;
    }

    const phoneNumber = orderType === 'takeout' ? document.getElementById('takeoutPhone').value.trim() : dineInPhone;
    const order = {
        items: builtItems,
        type: orderType,
        table: orderType === 'dinein' ? selectedTable : '',
        customerName: orderType === 'takeout' ? document.getElementById('takeoutName').value.trim() : '',
        customerPhone: phoneNumber,
        // Phone number acts as the member account.
        userType: 'member',
        pickupTime: orderType === 'takeout' ? document.getElementById('pickupTime').value : '',
        totalQuantity: getCartCount(),
        subtotal: getCartTotal(),
        total: getCartTotal(),
        createdAt: new Date().toISOString()
    };

    // [HONEST SAVE] Success is only reported after the backend has written the order
    // to data/orders.json. A localStorage copy is kept for the member page history.
    let savedOrder;
    try {
        savedOrder = await saveOrderToBackend(order);
    } catch (error) {
        console.warn('Order backend save failed:', error);
        if (error.isNetworkError) {
            showToast(t('order_server_unreachable'), 'error');
        } else {
            showToast(t('order_server_rejected') + (error.message && error.message !== 'Order API failed' ? ' (' + error.message + ')' : ''), 'error');
        }
        return;
    }

    if (Array.isArray(savedOrder.items) && savedOrder.items.some(function(item) { return Number(item.qty || item.quantity || 0) > 0; })) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]').filter(function(order) {
            return Array.isArray(order.items) && order.items.some(function(item) { return Number(item.qty || item.quantity || 0) > 0; });
        });
        orders.push(savedOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
    }
    window.cart = [];
    saveCart();
    renderOrderCart();
    selectedTable = '';
    setSelectedTableLabel('');
    document.querySelectorAll('.table-seat').forEach(function(btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    localStorage.removeItem(ORDER_DRAFT_KEY);
    const dineInPhoneInput = document.getElementById('dineInPhone');
    if (dineInPhoneInput) dineInPhoneInput.value = phoneNumber; // keep phone for future member login
    showToast(t('order_success'), 'success');
    renderOrderSuccess(savedOrder);
}

// [SUCCESS SUMMARY] Shown in the cart column after a successful submit.
function renderOrderSuccess(order) {
    const container = document.getElementById('orderCartItems');
    if (!container) return;
    const zh = currentLang === 'zh';
    const L = function(zhText, enText) { return zh ? zhDisplay(zhText) : enText; };
    const lines = [];
    if (order.type === 'takeout') {
        lines.push(L('取餐時間：', 'Pickup time: ') + (order.pickupTime || '-'));
    } else {
        lines.push(L('桌號：', 'Table: ') + (order.table || '-'));
    }
    if (order.customerPhone) lines.push(L('電話：', 'Phone: ') + order.customerPhone);
    lines.push(L('身分：', 'Type: ') + (order.userType === 'member' ? L('會員（電話）', 'Member (phone)') : L('臨時桌號', 'Guest')));
    lines.push(L('總數量：', 'Total quantity: ') + Number(order.totalQuantity || 0));
    lines.push(L('總金額：', 'Total: ') + money(order.total));
    const itemsHtml = (order.items || []).map(function(item) {
        return '<p style="font-size:0.85rem;margin:2px 0">' + escapeHtml(getItemName(item)) + ' × ' + Number(item.qty || 0) + '　' + money(item.subtotal) + '</p>';
    }).join('');
    container.innerHTML = '<div class="cart-empty">'
        + '<div class="cart-empty-icon">✅</div>'
        + '<p><strong>' + escapeHtml(L('訂單已送出！', 'Order submitted!')) + '</strong></p>'
        + itemsHtml
        + lines.map(function(line) { return '<p style="font-size:0.9rem;margin:3px 0">' + escapeHtml(line) + '</p>'; }).join('')
        + '</div>';
}

if (!window.__orderCartSyncBound) {
    window.__orderCartSyncBound = true;
    window.addEventListener('cartchange', function() {
        if (document.getElementById('orderMenuGrid') && typeof window.renderOrderMenu === 'function') {
            window.renderOrderMenu(window.currentOrderItems || window.allOrderItems || []);
        }
        if (document.getElementById('orderCartItems') && typeof window.renderOrderCart === 'function') window.renderOrderCart();
    });
}

restoreOrderDraft();
bindOrderDraftInputs();
initOrderTypeTabs();
initTableButtons();
if (selectedTable) {
    window.selectTable(selectedTable);
} else {
    setSelectedTableLabel('');
}
renderOrderCart();
  `,
];

export const orderPage = {
  html: orderHtml,
  scripts: orderScripts,
  source: "order.html",
};
