import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuDataScript } from '../shared/menuDataScript.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';
import { cartSidebar } from '../shared/cartSidebar.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const menuHtml = html`
${navbar()}
<div class="page-header" style="padding:90px 0 30px">
<div class="container">
<h1 data-i18n="menu_title">精選菜單</h1>
<p data-i18n="menu_subtitle">嚴選食材，匠心烹製</p>
</div>
</div>
<div class="menu-page-layout">
<aside class="menu-sidebar" id="menuSidebar">
<nav class="sidebar-nav" id="sidebarNav"></nav>
</aside>
<main class="menu-main-content" id="menuMainContent"></main>
</div>
${footer()}
${cartSidebar}
`;

const menuScripts = [
  commonImageScripts,
  menuDataScript,
  menuHelpersScript,
  script`
window.currentLang = window.currentLang || 'zh';
        // [DEAD CODE REMOVED] toggleLang fallback deleted: src/i18n/language.js always
        // registers the real window.toggleLang before page scripts run.
        window.toggleMobileMenu = window.toggleMobileMenu || function(){
            var links = document.querySelector('.nav-links');
            if (links) links.classList.toggle('active');
        };
        window.addToCart = window.addToCart || function(item){
            alert('已加入：' + item.name);
        };
        window.closeCart = window.closeCart || function(){
            document.querySelector('.cart-overlay')?.classList.remove('active');
            document.querySelector('.cart-sidebar')?.classList.remove('active');
        };

                // [SPLIT PHASE 3] Menu data now comes from shared/menuDataScript.js.
        var categories = window.menuCategories || [];
        var allItems = window.menuItems || [];

        function getMenuParam(name) {
            var query = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
            return new URLSearchParams(query).get(name);
        }

        function isValidCategory(catKey) {
            return categories.some(function(cat) { return cat.key === catKey; });
        }

        function getInitialCategory() {
            var fromUrl = getMenuParam('cat');
            if (isValidCategory(fromUrl)) return fromUrl;
            var saved = sessionStorage.getItem('lastMenuCategory');
            if (isValidCategory(saved)) return saved;
            return categories.length ? categories[0].key : '';
        }

        var activeCategory = getInitialCategory();
        var menuItemsById = {};
        allItems.forEach(function(item) { menuItemsById[item.id] = item; });

        function readMenuCart() {
            try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
        }

        function getMenuItemQty(itemId) {
            var row = readMenuCart().find(function(cartItem) { return cartItem.id === itemId; });
            return Number(row && (row.qty || row.quantity) || 0);
        }

        function renderMenuCartControl(item) {
            var qty = getMenuItemQty(item.id);
            if (qty > 0) {
                return '<div class="dish-cart-stepper compact-stepper">'
                    + '<button type="button" aria-label="Decrease" onclick="menuChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                    + '<span>' + qty + '</span>'
                    + '<button type="button" aria-label="Increase" onclick="menuChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                    + '</div>';
            }
            return '<button class="menu-item-add-btn" type="button" onclick="menuChangeQty(&quot;' + item.id + '&quot;, 1, event)"><span class="add-icon">+</span></button>';
        }

        window.buildSidebar = function() {
            var nav = document.getElementById('sidebarNav');
            if (!nav) return;
            nav.innerHTML = categories.map(function(cat) {
                var label = getCategoryLabel(cat);
                return '<a href="#" class="sidebar-link ' + (cat.key === activeCategory ? 'active' : '') + '" data-cat="' + cat.key + '" onclick="selectCategory(&quot;' + cat.key + '&quot;, event)">' +
                    '<span class="sidebar-icon">' + cat.icon + '</span>' +
                    '<span class="sidebar-label">' + escapeHtml(label) + '</span>' +
                    '</a>';
            }).join('');
        }

        window.renderSelectedCategory = function() {
            var main = document.getElementById('menuMainContent');
            if (!main) return;
            var meta = getCategoryMeta(activeCategory);
            var label = getCategoryLabel(meta);
            var catItems = allItems.filter(function(item) { return item.category === activeCategory; });

            if (!catItems.length) {
                main.innerHTML = '<div class="menu-empty-state">' + escapeHtml(getNoDishesText()) + '</div>';
                return;
            }

            var aiImageNote = getAiImageNoteText();
            var html = '<section class="menu-category-section menu-category-' + activeCategory + '" id="cat-' + activeCategory + '">';
            html += '<div class="category-header">';
            html += '<span class="category-header-icon">' + meta.icon + '</span>';
            html += '<h2 class="category-header-title">' + escapeHtml(label) + '</h2>';
            html += '</div>';
            html += '<div class="menu-items-grid">';

            catItems.forEach(function(item) {
                var itemName = getItemName(item);
                var itemDesc = getItemDesc(item) || getDishDetailHintText();
                var itemTitle = item.displayId ? item.displayId + ' ' + itemName : itemName;
                html += '<div class="menu-item-card" tabindex="0" role="button" onclick="openDishDetail(&quot;' + item.id + '&quot;)" onkeydown="handleDishKey(event, &quot;' + item.id + '&quot;)">';
                html += '<div class="menu-item-image">';
                html += '<img class="menu-item-photo" src="' + getDishImageSrc(item) + '" alt="' + escapeHtml(itemTitle) + '" onerror="handleMenuImageError(this)">';
                html += '<div class="menu-item-image-placeholder" style="display:none"><span>' + escapeHtml(item.displayId || meta.icon) + '</span></div>';
                html += '<span class="ai-image-note">' + escapeHtml(aiImageNote) + '</span>';
                html += '</div>';
                html += '<div class="menu-item-info">';
                html += '<div class="menu-item-header">';
                if (item.displayId) html += '<span class="menu-item-id">' + escapeHtml(item.displayId) + '</span>';
                html += '<h3 class="menu-item-name">' + escapeHtml(itemName) + '</h3>';
                html += '</div>';
                html += '<p class="menu-item-desc">' + escapeHtml(itemDesc) + '</p>';
                html += '<div class="menu-item-footer">';
                html += '<span class="menu-item-price">' + escapeHtml(item.priceText) + '</span>';
                html += renderMenuCartControl(item);
                html += '</div>';
                html += '</div>';
                html += '</div>';
            });

            html += '</div></section>';
            main.innerHTML = html;
        }

        window.selectCategory = function(cat, event) {
            if (event) event.preventDefault();
            if (!isValidCategory(cat)) return;
            activeCategory = cat;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            buildSidebar();
            renderSelectedCategory();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.menuAddToCart = function(itemId, event) {
            window.menuChangeQty(itemId, 1, event);
        }

        window.menuChangeQty = function(itemId, delta, event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            var item = menuItemsById[itemId];
            if (!item) return;
            if (delta > 0) {
                if (typeof window.addToCart === 'function') {
                    window.addToCart(item);
                }
            } else if (typeof window.updateQty === 'function') {
                window.updateQty(itemId, -1);
            }
            if (typeof window.renderCart === 'function') window.renderCart();
            if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
            renderSelectedCategory();
        }

        window.handleDishKey = function(event, itemId) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDishDetail(itemId);
            }
        }

        window.openDishDetail = function(itemId) {
            var item = menuItemsById[itemId];
            if (!item) return;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            window.location.hash = '#/dish-detail?id=' + encodeURIComponent(itemId) + '&cat=' + encodeURIComponent(activeCategory);
        }

        window.rebuildMenu = function() {
            var fromUrl = getMenuParam('cat');
            if (isValidCategory(fromUrl)) activeCategory = fromUrl;
            sessionStorage.setItem('lastMenuCategory', activeCategory);
            buildSidebar();
            renderSelectedCategory();
        };

        if (!window.__menuCartSyncBound) {
            window.__menuCartSyncBound = true;
            window.addEventListener('cartchange', function() {
                if (document.getElementById('menuMainContent') && typeof window.renderSelectedCategory === 'function') window.renderSelectedCategory();
            });
            window.addEventListener('storage', function(event) {
                if (event.key === 'cart' && document.getElementById('menuMainContent') && typeof window.renderSelectedCategory === 'function') window.renderSelectedCategory();
            });
        }

        // [DEAD CODE REMOVED] DOMContentLoaded listener deleted: in React the DOM is
        // already mounted; App.jsx runLegacyInit calls window.rebuildMenu, which runs
        // buildSidebar() + renderSelectedCategory().
  `,
];

export const menuPage = {
  html: menuHtml,
  scripts: menuScripts,
  source: "menu.html",
};
