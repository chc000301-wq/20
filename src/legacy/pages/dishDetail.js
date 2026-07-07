import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuDataScript } from '../shared/menuDataScript.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const dishDetailHtml = html`
${navbar()}
<main class="dish-detail-wrap">
<section class="dish-hero">
<button id="dishPrevBtn" class="dish-nav-arrow dish-nav-prev" type="button" aria-label="Previous dish">‹</button>
<button id="dishNextBtn" class="dish-nav-arrow dish-nav-next" type="button" aria-label="Next dish">›</button>
<div class="dish-image-panel">
<div class="dish-image-placeholder"><img id="dishImage" class="dish-detail-image" src="/images/A1.png" alt="菜品圖片"><span id="dishImageCode" class="dish-image-code">A1</span><span id="dishAiImageNote" class="ai-image-note dish-ai-image-note">AI示意圖僅供參考</span></div>
</div>
<div class="dish-info-panel">
<div class="dish-category" id="dishCategory">豬肉 Pork</div>
<h1 class="dish-title" id="dishTitle">魚香肉絲</h1>
<div class="dish-price" id="dishPrice">$16.95</div>
<p class="dish-desc" id="dishDescription">這裡是菜品介紹範例。之後可補上料理特色、食材來源、口味描述、辣度、是否含堅果或其他過敏原提醒。</p>
<p class="dish-how-to-eat" id="dishHowToEat"></p>
<div id="dishCartControl" class="dish-cart-control"></div>
<a class="dish-back" data-i18n="dish_back" href="#/menu">← 返回菜單</a>
</div>
</section>
</main>
`;

const dishDetailScripts = [
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

                // [SPLIT PHASE 3] Menu data now comes from shared/menuDataScript.js.
        var categories = window.menuCategories || [];
        var allItems = window.menuItems || [];
        function getDishParam(name) {
            var query = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
            return new URLSearchParams(query).get(name);
        }
        function getItemId() { return getDishParam('id') || 'P1'; }

        function getMenuCategoryUrl(category) {
            return '#/menu' + (category ? '?cat=' + encodeURIComponent(category) : '');
        }

        function getDishDetailUrl(itemId, category) {
            return '#/dish-detail?id=' + encodeURIComponent(itemId) + '&cat=' + encodeURIComponent(category || '');
        }

        function navigateDishButton(btn) {
            if (!btn) return;
            var targetType = btn.getAttribute('data-target-type');
            var targetId = btn.getAttribute('data-target-id');
            var targetCategory = btn.getAttribute('data-target-category') || sessionStorage.getItem('lastMenuCategory') || '';
            if (targetType === 'menu') {
                window.location.hash = getMenuCategoryUrl(targetCategory);
                return;
            }
            if (targetId) {
                sessionStorage.setItem('lastMenuCategory', targetCategory);
                window.location.hash = getDishDetailUrl(targetId, targetCategory);
                window.setTimeout(function() {
                    if (window.renderDish) window.renderDish();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 0);
            }
        }

        window.dishNavigatePrev = function(event) {
            if (event) event.preventDefault();
            navigateDishButton(document.getElementById('dishPrevBtn'));
        };

        window.dishNavigateNext = function(event) {
            if (event) event.preventDefault();
            navigateDishButton(document.getElementById('dishNextBtn'));
        };

        window.renderDish = function() {
            if (!document.getElementById('dishTitle')) return;
            var itemId = getItemId();
            var item = allItems.find(function(i) { return i.id === itemId; }) || allItems.find(function(i) { return i.id === 'P1'; }) || allItems[0];
            if (!item) return;
            var meta = getCategoryMeta(item.category);
            var displayId = item.displayId || item.id || '';
            var itemName = getItemName(item);
            var itemDesc = getItemDesc(item);
            var itemHowToEat = getItemHowToEat(item);
            document.title = (displayId ? displayId + ' ' : '') + itemName + ((window.currentLang === 'en') ? ' - Dish Details' : ' - ' + zhDisplay('菜品介紹'));
            var dishImage = document.getElementById('dishImage');
            var dishImageCode = document.getElementById('dishImageCode');
            if (dishImageCode) dishImageCode.textContent = displayId || meta.icon;
            if (dishImage) {
                dishImage.src = getDishImageSrc(item);
                dishImage.alt = (displayId ? displayId + ' ' : '') + itemName;
                dishImage.style.display = 'block';
                if (dishImageCode) dishImageCode.style.display = 'none';
                dishImage.onerror = function() {
                    dishImage.style.display = 'none';
                    if (dishImageCode) dishImageCode.style.display = 'flex';
                };
                dishImage.onload = function() {
                    dishImage.style.display = 'block';
                    if (dishImageCode) dishImageCode.style.display = 'none';
                };
            }
            var dishCategoryEl = document.getElementById('dishCategory');
            if (dishCategoryEl) dishCategoryEl.textContent = (window.currentLang === 'en') ? meta.en : getCategoryLabel(meta) + ' ' + meta.en;
            var backLink = document.querySelector('.dish-back');
            var backCategory = getDishParam('cat') || item.category || sessionStorage.getItem('lastMenuCategory') || '';
            if (backCategory) sessionStorage.setItem('lastMenuCategory', backCategory);
            if (backLink) {
                backLink.href = getMenuCategoryUrl(backCategory);
            }

            var aiNoteEl = document.getElementById('dishAiImageNote');
            if (aiNoteEl) aiNoteEl.textContent = getAiImageNoteText();

            var sameCategoryItems = allItems.filter(function(i) { return i.category === item.category; });
            var currentIndex = sameCategoryItems.findIndex(function(i) { return i.id === item.id; });
            var prevBtn = document.getElementById('dishPrevBtn');
            var nextBtn = document.getElementById('dishNextBtn');

            function setDishNavButton(btn, targetItem, directionText) {
                if (!btn) return;
                var labelText = directionText;
                if (targetItem) {
                    var targetName = (window.currentLang === 'en') ? (targetItem.name_en || targetItem.name || '') : getLocalizedValue(targetItem.name_i18n, targetItem.name || '');
                    btn.setAttribute('data-target-type', 'dish');
                    btn.setAttribute('data-target-id', targetItem.id);
                    btn.setAttribute('data-target-category', item.category);
                    labelText = directionText + ': ' + targetName;
                } else {
                    btn.setAttribute('data-target-type', 'menu');
                    btn.setAttribute('data-target-id', '');
                    btn.setAttribute('data-target-category', item.category);
                    labelText = directionText + ': ' + ((window.currentLang === 'en') ? 'Back to menu' : zhDisplay('返回菜單'));
                }
                btn.setAttribute('aria-label', labelText);
                btn.title = labelText;
            }

            setDishNavButton(prevBtn, currentIndex > 0 ? sameCategoryItems[currentIndex - 1] : null, (window.currentLang === 'en') ? 'Previous dish' : zhDisplay('上一個菜品'));
            setDishNavButton(nextBtn, currentIndex >= 0 && currentIndex < sameCategoryItems.length - 1 ? sameCategoryItems[currentIndex + 1] : null, (window.currentLang === 'en') ? 'Next dish' : zhDisplay('下一個菜品'));
            if (prevBtn) prevBtn.onclick = window.dishNavigatePrev;
            if (nextBtn) nextBtn.onclick = window.dishNavigateNext;

            document.getElementById('dishTitle').textContent = (displayId ? displayId + ' ' : '') + itemName;
            document.getElementById('dishPrice').textContent = item.priceText || '';
            document.getElementById('dishDescription').textContent = itemDesc || ((window.currentLang === 'en') ? 'This dish detail page can include flavor notes, spice level, allergens, and recommendations.' : zhDisplay('這是「' + itemName + '」的介紹頁面樣本。之後可以在這裡放料理特色 口味描述 辣度 過敏原與推薦說明。'));
            var howToEatEl = document.getElementById('dishHowToEat');
            if (howToEatEl) {
                howToEatEl.textContent = itemHowToEat ? (((window.currentLang === 'en') ? 'How to enjoy: ' : zhDisplay('建議吃法：')) + itemHowToEat) : '';
                howToEatEl.style.display = itemHowToEat ? 'block' : 'none';
            }
            renderDishCartControl(item);
        }

        function readDishCart() {
            try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch (error) { return []; }
        }

        function getDishCartQty(itemId) {
            var row = readDishCart().find(function(cartItem) { return cartItem.id === itemId; });
            return Number(row && (row.qty || row.quantity) || 0);
        }

        function renderDishCartControl(item) {
            var control = document.getElementById('dishCartControl');
            if (!control || !item) return;
            var qty = getDishCartQty(item.id);
            if (qty > 0) {
                control.innerHTML = '<div class="dish-cart-stepper dish-detail-stepper">'
                    + '<button type="button" aria-label="Decrease" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
                    + '<span>' + qty + '</span>'
                    + '<button type="button" aria-label="Increase" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
                    + '</div>';
            } else {
                var label = (window.currentLang === 'en') ? 'Add to Cart' : zhDisplay('加入購物車');
                control.innerHTML = '<button class="dish-add-cart-btn" id="dishAddCartBtn" type="button" onclick="dishDetailChangeQty(&quot;' + item.id + '&quot;, 1, event)">' + label + '</button>';
            }
        }

        window.dishDetailChangeQty = function(itemId, delta, event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            var item = allItems.find(function(i) { return i.id === itemId; });
            if (!item) return;
            if (delta > 0) {
                if (typeof window.addToCart === 'function') window.addToCart(item);
            } else if (typeof window.updateQty === 'function') {
                window.updateQty(itemId, -1);
            }
            if (typeof window.renderCart === 'function') window.renderCart();
            if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
            renderDishCartControl(item);
        };

        if (!window.__dishDetailCartSyncBound) {
            window.__dishDetailCartSyncBound = true;
            window.addEventListener('cartchange', function() {
                if (document.getElementById('dishCartControl') && typeof window.renderDish === 'function') window.renderDish();
            });
            window.addEventListener('storage', function(event) {
                if (event.key === 'cart' && document.getElementById('dishCartControl') && typeof window.renderDish === 'function') window.renderDish();
            });
        }

        // [DEAD CODE REMOVED] DOMContentLoaded listener deleted: in React the DOM is
        // already mounted; App.jsx runLegacyInit calls window.renderDish explicitly.
  `,
];

export const dishDetailPage = {
  html: dishDetailHtml,
  scripts: dishDetailScripts,
  source: "dish-detail.html",
};
