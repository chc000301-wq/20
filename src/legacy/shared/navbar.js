import { html } from '../utils/template.js';

// [LOGO TEXT FIX 1]
// The food graphic is the only image.
// The store name is real HTML text, not image text.
// Do NOT add data-i18n to brand_main / brand_tagline here, so it will never show raw translation keys.
const brandLogoMarkup = html`
<a class="logo brand-logo brand-logo-nav" href="#/" aria-label="Awesome Restaurant Home">
  <img class="brand-logo-img" src="/images/awesome-food-logo.png" alt="Awesome restaurant food graphic" />
  <span class="brand-logo-text">
    <span class="brand-logo-title">Awesome</span>
    <span class="brand-logo-subtitle brand-logo-subtitle-zh">五餅二魚</span>
    <span class="brand-logo-subtitle brand-logo-subtitle-en">Authentic Chinese Cuisine</span>
  </span>
</a>`;

// [DEDUPE] home and default navbars were byte-identical; one shared template now serves both.
const navbarTemplate = html`<nav class="navbar">
<div class="container">
${brandLogoMarkup}
<div class="nav-links">
<a data-i18n="nav_home" href="#/">首頁</a>
<a data-i18n="nav_menu" href="#/menu">菜單</a>
<a data-i18n="nav_search" href="#/search">搜尋</a>
<a data-i18n="nav_reservation" href="#/reservation">訂位</a>
<a data-i18n="nav_order" href="#/cart">點餐</a>
<a data-i18n="nav_about" href="#/about">關於我們</a>
<a data-i18n="nav_promo" href="#/promotions">優惠活動</a>
</div>
<div class="nav-actions">
<div class="chinese-variant-switcher" aria-label="Chinese text style switcher">
  <button class="chinese-variant-toggle" type="button" data-language-control="variant-menu" onclick="toggleChineseVariantMenu(event)">
    <span class="chinese-variant-label">简体</span>
    <span class="chinese-variant-arrow">▾</span>
  </button>
  <div class="chinese-variant-menu">
    <button type="button" data-chinese-variant="zh-cn" onclick="setChineseVariant('zh-cn')">简体</button>
    <button type="button" data-chinese-variant="zh-yue" onclick="setChineseVariant('zh-yue')">廣東字</button>
    <button type="button" data-chinese-variant="zh-tw" onclick="setChineseVariant('zh-tw')">繁體</button>
  </div>
</div>
<button class="lang-toggle" type="button" data-language-control="toggle-lang" onclick="toggleLang()">EN</button>
<a class="btn-member" data-i18n="nav_member" href="#/member">會員</a>
<button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
</div>
</div>
</nav>`;

// Variant parameter kept so existing callers (navbar('home') / navbar()) stay unchanged.
export function navbar(variant = 'default') {
  return navbarTemplate;
}
