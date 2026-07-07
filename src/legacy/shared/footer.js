import { html } from '../utils/template.js';

// [SPLIT PHASE 2] Shared footer template.
// [DEDUPE] home/default footers were ~95% identical; one template now serves both.
// The 'home' variant additionally shows the promotions link and the email line.
function buildFooter(variant) {
  const isHome = variant === 'home';
  return html`<footer class="footer">
<div class="container">
<div class="footer-grid">
<div class="footer-col">
<h3 data-i18n="footer_brand">餐廳品牌</h3>
<p data-i18n="footer_desc">用心準備每一道料理，為您帶來難忘的美食體驗</p>
</div>
<div class="footer-col">
<h3 data-i18n="footer_menu">快速連結</h3>
<a data-i18n="nav_menu" href="#/menu">菜單</a>
<a data-i18n="nav_reservation" href="#/reservation">訂位</a>
<a data-i18n="nav_order" href="#/cart">點餐</a>
${isHome ? html`<a data-i18n="nav_promo" href="#/promotions">優惠活動</a>` : ''}
</div>
<div class="footer-col">
<h3 data-i18n="footer_contact">聯絡資訊</h3>
<p>📍 1520 Independence Pkwy, Plano, TX 75075</p>
<p>📞 972-985-8899 / 945-361-3394</p>
${isHome ? html`<p>✉️ info@restaurant.com</p>` : ''}
</div>
<div class="footer-col">
<h3 data-i18n="footer_hours">營業時間</h3>
<p data-i18n="footer_hours_detail">週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）</p>
</div>
</div>
<div class="footer-bottom">
<p data-i18n="footer_rights">© 2026 餐廳品牌. All rights reserved.</p>
</div>
</div>
</footer>`;
}

export function footer(variant = 'default') {
  return buildFooter(variant);
}
