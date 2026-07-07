import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const promotionsHtml = html`
${navbar()}
<div class="page-header">
<div class="container">
<h1 data-i18n="promo_page_title">優惠活動</h1>
<p data-i18n="promo_page_subtitle">精彩優惠，不容錯過</p>
</div>
</div>
<section class="section">
<div class="container">
<div class="promo-grid">
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #e74c3c, #c0392b)"></div>
<div class="promo-card-body">
<span class="promo-badge">HOT</span>
<h3 data-i18n="promo_new_member">新會員優惠</h3>
<p data-i18n="promo_new_member_desc">首次加入會員並消費，即享全單9折優惠</p>
<span class="promo-date" data-i18n="promo_new_member_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #e91e63, #f06292)"></div>
<div class="promo-card-body">
<span class="promo-badge">🎂</span>
<h3 data-i18n="promo_birthday">生日優惠</h3>
<p data-i18n="promo_birthday_desc">生日當月消費滿$1000，贈送精緻生日蛋糕一份</p>
<span class="promo-date" data-i18n="promo_birthday_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #f39c12, #e67e22)"></div>
<div class="promo-card-body">
<span class="promo-badge">⏰</span>
<h3 data-i18n="promo_weekday">平日午間優惠</h3>
<p data-i18n="promo_weekday_desc">週一至週五 11:00-14:00，精選套餐只要$299起</p>
<span class="promo-date" data-i18n="promo_weekday_date">每週一至週五</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #27ae60, #2ecc71)"></div>
<div class="promo-card-body">
<span class="promo-badge">👨‍👩‍👧‍👦</span>
<h3 data-i18n="promo_family">家庭聚餐方案</h3>
<p data-i18n="promo_family_desc">4人以上團體用餐，享套餐85折優惠，再贈送飲品一杯</p>
<span class="promo-date" data-i18n="promo_family_date">需提前預約</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #8e44ad, #9b59b6)"></div>
<div class="promo-card-body">
<span class="promo-badge">🛍️</span>
<h3 data-i18n="promo_takeout">外帶自取優惠</h3>
<p data-i18n="promo_takeout_desc">滿$500折$50，滿$1000折$120</p>
<span class="promo-date" data-i18n="promo_takeout_date">長期活動</span>
</div>
</div>
<div class="promo-card fade-in">
<div class="promo-card-img" style="background:linear-gradient(135deg, #3498db, #2980b9)"></div>
<div class="promo-card-body">
<span class="promo-badge">🤝</span>
<h3 data-i18n="promo_refer">推薦好友</h3>
<p data-i18n="promo_refer_desc">成功推薦一位新會員，雙方各獲得$100抵用券</p>
<span class="promo-date" data-i18n="promo_refer_date">長期活動</span>
</div>
</div>
</div>
</div>
</section>
${footer()}
`;

const promotionsScripts = [
  commonImageScripts,
];

export const promotionsPage = {
  html: promotionsHtml,
  scripts: promotionsScripts,
  source: "promotions.html",
};
