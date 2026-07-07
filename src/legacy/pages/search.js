import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuDataScript } from '../shared/menuDataScript.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';
import { cartSidebar } from '../shared/cartSidebar.js';

// Independent recommendation + dish search page.
// It stays separate from the full menu category page while sharing the same menu data,
// image path rules, language switcher, and cart storage.
const searchHtml = html`
${navbar()}
<section class="recommend-search-page" aria-labelledby="recommendSearchTitle">
  <div class="recommend-search-container">
    <header class="recommend-search-hero">
      <span class="recommend-search-kicker" data-i18n="recommend_kicker">Menu Guide</span>
      <h1 id="recommendSearchTitle" data-i18n="recommend_title">菜單建議與搜尋</h1>
      <p data-i18n="recommend_subtitle">不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。</p>
      <span class="recommend-tax-note" data-i18n="search_tax_note">價格含稅前</span>
    </header>

    <div class="recommend-tabs" role="tablist" aria-label="Menu recommendation and search tabs">
      <button class="recommend-tab active" type="button" data-panel="search" role="tab" aria-selected="true" data-i18n="recommend_tab_search">搜尋菜品</button>
      <button class="recommend-tab" type="button" data-panel="combo2" role="tab" aria-selected="false" data-i18n="recommend_tab_2">2人點餐</button>
      <button class="recommend-tab" type="button" data-panel="combo3" role="tab" aria-selected="false" data-i18n="recommend_tab_3">3人點餐</button>
      <button class="recommend-tab" type="button" data-panel="combo4" role="tab" aria-selected="false" data-i18n="recommend_tab_4">4人點餐</button>
    </div>

    <div class="recommend-panel active" id="recommendPanelSearch" data-panel="search" role="tabpanel">
      <div class="recommend-search-card" role="search">
        <div class="recommend-search-card-title">
          <h2 data-i18n="search_title">菜品搜尋</h2>
          <p data-i18n="search_subtitle">輸入菜名、編號或關鍵字，快速找到想點的餐點</p>
        </div>
        <label class="recommend-search-input-wrap" for="dishSuggestSearchInput">
          <span class="recommend-search-icon" aria-hidden="true">⌕</span>
          <input
            id="dishSuggestSearchInput"
            class="recommend-search-input"
            type="search"
            autocomplete="off"
            data-i18n-placeholder="search_placeholder"
            placeholder="搜尋品項…"
          />
          <button id="dishSuggestSearchClear" class="recommend-search-clear" type="button" aria-label="Clear search">×</button>
        </label>
      </div>

      <div class="recommend-search-status" id="dishSuggestSearchStatus" aria-live="polite"></div>
      <div class="recommend-results-grid" id="dishSuggestSearchResults"></div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo2" data-panel="combo2" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🍽️</span>
        <h2 data-i18n="recommend_combo_2_title">2人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo3" data-panel="combo3" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🥢</span>
        <h2 data-i18n="recommend_combo_3_title">3人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>

    <div class="recommend-panel" id="recommendPanelCombo4" data-panel="combo4" role="tabpanel" hidden>
      <div class="recommend-coming-card">
        <span class="recommend-coming-icon">🍲</span>
        <h2 data-i18n="recommend_combo_4_title">4人點餐組合</h2>
        <p data-i18n="recommend_combo_placeholder">此區先保留版面，之後可放入組合內容、推薦份量與加購建議。</p>
      </div>
    </div>
  </div>
</section>
${footer()}
${cartSidebar}
`;

const searchScripts = [
  commonImageScripts,
  menuDataScript,
  menuHelpersScript,
  script`
(function(){
    window.currentLang = window.currentLang || 'zh';
    window.toggleMobileMenu = window.toggleMobileMenu || function(){
        var links = document.querySelector('.nav-links');
        if (links) links.classList.toggle('active');
    };
    window.closeCart = window.closeCart || function(){
        document.querySelector('.cart-overlay')?.classList.remove('active');
        document.querySelector('.cart-sidebar')?.classList.remove('active');
    };

    var allItems = window.menuItems || [];
    var itemById = {};
    allItems.forEach(function(item) { itemById[item.id] = item; });

    function text(key) {
        return (window.t ? window.t(key) : key) || key;
    }

    function normalize(value) {
        return String(value || '').toLowerCase().trim();
    }

    function getCategoryText(item) {
        var lang = window.currentLang || 'zh';
        var categories = window.menuCategories || [];
        var meta = categories.find(function(category) { return category.key === item.category; });
        if (!meta) return item.category || '';
        return lang === 'en' ? (meta.en || meta.zh || item.category || '') : (meta.zh || meta.en || item.category || '');
    }

    function getPrimarySearchFields(item) {
        var lang = window.currentLang || 'zh';
        if (lang === 'en') {
            return [item.displayId, item.name_en, getCategoryText(item)].join(' ');
        }
        return [item.displayId, item.name, getCategoryText(item)].join(' ');
    }

    function getIngredientSearchFields(item) {
        var lang = window.currentLang || 'zh';
        if (lang === 'en') return (item.ingredients && item.ingredients.en || []).join(' ');
        return (item.ingredients && item.ingredients.zh || []).join(' ');
    }

    function getDescriptionSearchFields(item) {
        var lang = window.currentLang || 'zh';
        return lang === 'en' ? (item.desc_en || '') : (item.desc || '');
    }

    function readCart() {
        try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
    }

    function writeCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        window.dispatchEvent(new Event('storage'));
        if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
        if (typeof window.renderCart === 'function') window.renderCart();
    }

    function getQty(itemId) {
        var row = readCart().find(function(cartItem) { return cartItem.id === itemId; });
        return Number(row && (row.qty || row.quantity) || 0);
    }

    function changeQty(itemId, delta, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var item = itemById[itemId];
        if (!item) return;
        var cart = readCart();
        var row = cart.find(function(cartItem) { return cartItem.id === itemId; });
        var nextQty = Math.max(0, (row ? Number(row.qty || row.quantity || 0) : 0) + delta);

        if (!row && nextQty > 0) {
            cart.push({
                id: item.id,
                displayId: item.displayId,
                name: item.name,
                name_en: item.name_en,
                price: item.price,
                priceText: item.priceText,
                image: item.image,
                qty: nextQty,
                quantity: nextQty
            });
        } else if (row && nextQty > 0) {
            row.qty = nextQty;
            row.quantity = nextQty;
        } else if (row) {
            cart = cart.filter(function(cartItem) { return cartItem.id !== itemId; });
        }

        writeCart(cart);
        renderResults();
    }

    function cartControl(item) {
        var qty = getQty(item.id);
        if (qty > 0) {
            return '<div class="recommend-stepper">'
                + '<button type="button" aria-label="Decrease" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                + '<span>' + qty + '</span>'
                + '<button type="button" aria-label="Increase" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                + '</div>';
        }
        return '<button class="recommend-add-btn" type="button" onclick="recommendSearchChangeQty(&quot;' + item.id + '&quot;, 1, event)"><span>+</span></button>';
    }

    function openDish(itemId) {
        window.location.hash = '#/dish-detail?id=' + encodeURIComponent(itemId);
    }

    function filteredItems() {
        var input = document.getElementById('dishSuggestSearchInput');
        var q = normalize(input ? input.value : '');
        if (!q) return allItems.slice(0, 12);

        return allItems.filter(function(item) {
            var primary = normalize(getPrimarySearchFields(item));
            var ingredients = normalize(getIngredientSearchFields(item));
            var description = normalize(getDescriptionSearchFields(item));

            // Keep short/common words accurate. For example, searching "rice" should
            // return rice-category or rice-name dishes, not every dish whose description
            // says it is "perfect with steamed rice". Descriptions are searched only
            // for longer phrases.
            return primary.indexOf(q) !== -1
                || ingredients.indexOf(q) !== -1
                || (q.length >= 5 && description.indexOf(q) !== -1);
        });
    }

    function renderResults() {
        var wrap = document.getElementById('dishSuggestSearchResults');
        var status = document.getElementById('dishSuggestSearchStatus');
        if (!wrap) return;

        var items = filteredItems();
        var input = document.getElementById('dishSuggestSearchInput');
        var hasQuery = !!(input && input.value.trim());

        if (status) {
            var label = window.currentLang === 'en'
                ? (hasQuery ? items.length + ' results found' : 'Showing recommended dishes')
                : (hasQuery ? '找到 ' + items.length + ' 道菜品' : '顯示推薦菜品');
            status.textContent = window.currentLang === 'en' ? label : (window.formatDisplayText ? window.formatDisplayText(label) : label);
        }

        if (!items.length) {
            wrap.innerHTML = '<div class="recommend-empty-state">'
                + '<h3>' + window.escapeHtml(text('search_empty_title')) + '</h3>'
                + '<p>' + window.escapeHtml(text('search_empty_desc')) + '</p>'
                + '</div>';
            return;
        }

        var aiNote = window.getAiImageNoteText ? window.getAiImageNoteText() : '';
        wrap.innerHTML = items.map(function(item) {
            var name = window.getItemName ? window.getItemName(item) : (item.name || item.name_en || '');
            var desc = window.getItemDesc ? window.getItemDesc(item) : (item.desc || item.desc_en || '');
            var cat = window.getCategoryLabel ? window.getCategoryLabel(window.getCategoryMeta(item.category)) : item.category;
            var image = window.getDishImageSrc ? window.getDishImageSrc(item) : (item.image || '/images/awesome-logo.png');
            var title = (item.displayId ? item.displayId + ' ' : '') + name;
            return '<article class="recommend-result-card" tabindex="0" role="button" onclick="recommendSearchOpenDish(&quot;' + item.id + '&quot;)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){recommendSearchOpenDish(&quot;' + item.id + '&quot;);}">'
                + '<div class="recommend-result-image">'
                + '<img src="' + image + '" alt="' + window.escapeHtml(title) + '" onerror="handleMenuImageError(this)">'
                + '<span class="ai-image-note">' + window.escapeHtml(aiNote) + '</span>'
                + '</div>'
                + '<div class="recommend-result-body">'
                + '<div class="recommend-result-meta"><span>' + window.escapeHtml(item.displayId || '') + '</span><span>' + window.escapeHtml(cat) + '</span></div>'
                + '<h3>' + window.escapeHtml(name) + '</h3>'
                + '<p>' + window.escapeHtml(desc) + '</p>'
                + '<div class="recommend-result-footer">'
                + '<span class="recommend-result-price">' + window.escapeHtml(item.priceText || ('$' + Number(item.price || 0).toFixed(2))) + '</span>'
                + cartControl(item)
                + '</div>'
                + '</div>'
                + '</article>';
        }).join('');
    }

    function activatePanel(panel) {
        document.querySelectorAll('.recommend-tab').forEach(function(btn) {
            var active = btn.getAttribute('data-panel') === panel;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        document.querySelectorAll('.recommend-panel').forEach(function(el) {
            var active = el.getAttribute('data-panel') === panel;
            el.classList.toggle('active', active);
            el.hidden = !active;
        });
    }

    function bindPage() {
        document.querySelectorAll('.recommend-tab').forEach(function(btn) {
            btn.addEventListener('click', function() { activatePanel(btn.getAttribute('data-panel')); });
        });

        var input = document.getElementById('dishSuggestSearchInput');
        var clear = document.getElementById('dishSuggestSearchClear');
        if (input) input.addEventListener('input', renderResults);
        if (clear) clear.addEventListener('click', function(event) {
            event.preventDefault();
            if (input) {
                input.value = '';
                input.focus();
            }
            renderResults();
        });

        window.addEventListener('languagechange', renderResults);
        window.addEventListener('chinesevariantchange', renderResults);
        window.addEventListener('cartUpdated', renderResults);
        renderResults();
    }

    window.recommendSearchChangeQty = changeQty;
    window.recommendSearchOpenDish = openDish;
    window.renderRecommendSearch = renderResults;

    bindPage();
})();
`
];

export const searchPage = { html: searchHtml, scripts: searchScripts, source: 'search' };
