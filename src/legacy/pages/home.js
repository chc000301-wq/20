import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { menuDataScript } from '../shared/menuDataScript.js';
import { menuHelpersScript } from '../shared/menuHelpersScript.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';
import { cartSidebar } from '../shared/cartSidebar.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const homeHtml = html`
${navbar('home')}
<section class="hero">
<div class="hero-content container">
<!-- [LOGO TEXT FIX 2] Food image + real multilingual text. No data-i18n keys are used for the brand name. -->
<div class="brand-logo brand-logo-hero" aria-label="Awesome Restaurant Logo">
  <img class="brand-logo-img" src="/images/awesome-food-logo.png" alt="Awesome restaurant food graphic" />
  <div class="brand-logo-text">
    <div class="brand-logo-title">Awesome</div>
    <div class="brand-logo-subtitle brand-logo-subtitle-zh">五餅二魚</div>
    <div class="brand-logo-subtitle brand-logo-subtitle-en">Authentic Chinese Cuisine</div>
  </div>
</div>
<!-- [LOGO TEXT FIX 2 END] -->
<h1 data-i18n="hero_title">品味頂級料理，享受極致美味</h1>
<p data-i18n="hero_subtitle">我們用心準備每一道佳餚，為您帶來難忘的美食體驗</p>
<div class="hero-buttons">
<a class="btn btn-primary" data-i18n="hero_btn_menu" href="#/menu">瀏覽菜單</a>
<a class="btn btn-outline" data-i18n="hero_btn_reserve" href="#/reservation">立即訂位</a>
</div>
</div>
</section>
<section class="section features">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="feature_title">為何選擇我們</h2>
<div class="divider"></div>
<p class="subtitle" data-i18n="feature_subtitle">堅持品質，用心服務每一位顧客</p>
</div>
<div class="feature-grid">
<div class="feature-card fade-in">
<div class="feature-icon">🥬</div>
<h3 data-i18n="feature_fresh">新鮮食材</h3>
<p data-i18n="feature_fresh_desc">每日嚴選最新鮮的頂級食材，確保每道料理的品質</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon">👨‍🍳</div>
<h3 data-i18n="feature_chef">專業主廚</h3>
<p data-i18n="feature_chef_desc">擁有多年經驗的專業主廚，為您呈現精湛廚藝</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon feature-icon-stopwatch-wrap">
  <img class="feature-icon-stopwatch" src="/images/feature-stopwatch.png" alt="Stopwatch icon" />
</div>
<h3 data-i18n="feature_delivery">快速外送</h3>
<p data-i18n="feature_delivery_desc">30分鐘內新鮮送达，讓您在家也能享受美味</p>
</div>
<div class="feature-card fade-in">
<div class="feature-icon">💖</div>
<h3 data-i18n="feature_service">優質服務</h3>
<p data-i18n="feature_service_desc">親切專業的服務團隊，為您打造舒適的用餐體驗</p>
</div>
</div>
</div>
</section>
<section class="promo-banner">
<div class="container">
<h2 data-i18n="promo_banner_title">限時優惠進行中</h2>
<p data-i18n="promo_banner_desc">新會員首次消費享9折優惠，立即加入會員</p>
<a class="btn btn-primary" data-i18n="promo_banner_btn" href="#/promotions">了解更多</a>
</div>
</section>
<section class="section menu-preview">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="menu_title">精選菜單</h2>
<div class="divider"></div>
<p class="subtitle" data-i18n="menu_subtitle">嚴選食材，匠心烹製</p>
</div>
<div class="menu-grid" id="menuPreview"></div>
<div style="text-align:center;margin-top:40px">
<a class="btn btn-primary" data-i18n="hero_btn_menu" href="#/menu" style="background:var(--primary);color:white">瀏覽菜單</a>
</div>
</div>
</section>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="about-section">
<div class="about-img-wrap fade-in">
<img class="about-photo" src="/images/about-us-family-photo.png" alt="Owners standing in front of the restaurant" />
</div>
<div class="about-text fade-in">
<h2 data-i18n="about_title">關於我們</h2>
<p data-i18n="about_desc1">我們是一家主打廣東菜的餐廳，從燒臘、海鮮到熱炒與湯品，延續粵菜講究鮮、嫩、清、和的風味。</p>
<p data-i18n="about_desc2">開業兩年有餘，我們持續以用心料理與真誠服務接待每位客人，現已提供約180道菜色，累積服務數千位顧客。</p>
<div class="about-stats">
<div class="stat-item">
<div class="stat-number">28+</div>
<div class="stat-label" data-i18n="about_years">個月營運</div>
</div>
<div class="stat-item">
<div class="stat-number">180</div>
<div class="stat-label" data-i18n="about_dishes">道料理</div>
</div>
<div class="stat-item">
<div class="stat-number">6K+</div>
<div class="stat-label" data-i18n="about_customers">位顧客</div>
</div>
</div>
<a class="btn btn-primary" data-i18n="nav_about" href="#/about" style="background:var(--primary);color:white;margin-top:30px;display:inline-block">關於我們</a>
</div>
</div>
</div>
</section>
${footer('home')}
${cartSidebar}
`;

const homeScripts = [
  commonImageScripts,
  menuDataScript,
  menuHelpersScript,
  script`
const items = Array.isArray(window.menuItems) ? window.menuItems : [];
const grid = document.getElementById('menuPreview');
const featuredCodes = ['E5', 'S2', 'J6', 'J7', 'J9', 'E17'];
function readHomeCart() {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') || []; } catch { return []; }
}
function getHomeItemQty(itemId) {
    const row = readHomeCart().find(function(cartItem) { return cartItem.id === itemId; });
    return Number(row && (row.qty || row.quantity) || 0);
}
function renderHomeCartControl(item) {
    const qty = getHomeItemQty(item.id);
    if (qty > 0) {
        return '<div class="dish-cart-stepper compact-stepper" onclick="event.stopPropagation()">'
            + '<button type="button" aria-label="Decrease" onclick="homeChangeQty(&quot;' + item.id + '&quot;, -1, event)">−</button>'
            + '<span>' + qty + '</span>'
            + '<button type="button" aria-label="Increase" onclick="homeChangeQty(&quot;' + item.id + '&quot;, 1, event)">+</button>'
            + '</div>';
    }
    return '<button class="btn-add-cart" type="button" onclick="homeChangeQty(&quot;' + item.id + '&quot;, 1, event)">' + escapeHtml(t('menu_add_cart')) + '</button>';
}
function findFeaturedItem(code) {
    if (code === 'S2') {
        return items.find(function(item) { return item.id === 'S2_SOUP'; })
            || items.find(function(item) { return item.id === 'S2'; })
            || items.find(function(item) { return String(item.id || '').indexOf('S2') === 0; });
    }
    return items.find(function(item) { return item.id === code || item.displayId === code; });
}
const featuredItems = featuredCodes.map(findFeaturedItem).filter(Boolean);
window.homeChangeQty = function(itemId, delta, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const item = featuredItems.find(function(entry) { return entry.id === itemId; });
    if (!item) return;
    if (delta > 0) {
        if (typeof window.addToCart === 'function') window.addToCart(item);
    } else if (typeof window.updateQty === 'function') {
        window.updateQty(itemId, -1);
    }
    if (typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
};
window.renderFeaturedMenu = function() {
    if (!grid) return;
    const aiImageNote = getAiImageNoteText();
    grid.innerHTML = featuredItems.map(function(item) {
        const itemName = getItemName(item);
        const itemDesc = getItemDesc(item) || item.name;
        return '<div class="menu-card fade-in">'
            + '<div class="menu-card-img" style="background:' + (item.color || '') + '"><img class="menu-card-photo" src="' + getDishImageSrc(item) + '" alt="' + escapeHtml(itemName) + '" onerror="handleMenuImageError(this)"><span class="ai-image-note">' + escapeHtml(aiImageNote) + '</span></div>'
            + '<div class="menu-card-body">'
            + '<h3 class="menu-name">' + escapeHtml(itemName) + '</h3>'
            + '<p class="desc menu-desc">' + escapeHtml(itemDesc) + '</p>'
            + '<div class="menu-card-footer">'
            + '<span class="price">$' + item.price + '</span>'
            + renderHomeCartControl(item)
            + '</div></div></div>';
    }).join('');
    initScrollAnimations();
};
window.renderFeaturedMenu();
if (!window.__homeCartSyncBound) {
    window.__homeCartSyncBound = true;
    window.addEventListener('cartchange', function() {
        if (document.getElementById('menuPreview') && typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    });
    window.addEventListener('storage', function(event) {
        if (event.key === 'cart' && document.getElementById('menuPreview') && typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
    });
}
  `,
];

export const homePage = {
  html: homeHtml,
  scripts: homeScripts,
  source: "index.html",
};
