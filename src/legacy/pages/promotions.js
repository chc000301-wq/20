import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const promotionsHtml = html`
${navbar()}
<div class="page-header">
<div class="container">
<h1 data-i18n="promo_page_title">敬請期待優惠</h1>
<p data-i18n="promo_page_subtitle">優惠活動準備中</p>
</div>
</div>
<section class="section">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="promo_page_title">敬請期待優惠</h2>
<div class="divider"></div>
<p class="subtitle" data-i18n="promo_page_subtitle">優惠活動準備中</p>
</div>
<div class="promo-grid" aria-hidden="true"></div>
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
