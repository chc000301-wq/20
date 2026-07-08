import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const aboutHtml = html`
${navbar()}
<div class="page-header">
<div class="container">
<h1 data-i18n="about_page_title">關於我們</h1>
<p data-i18n="about_page_subtitle">用心料理，用愛服務</p>
</div>
</div>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="about-section">
<div class="about-img-wrap fade-in">
<img class="about-photo" src="/images/about-us-family-photo.png" alt="Owners standing in front of the restaurant" />
</div>
<div class="about-text fade-in">
<h2 data-i18n="about_story">我們的故事</h2>
<p data-i18n="about_story_p1">我們是一家中式餐廳，菜色涵蓋燒臘、海鮮、熱炒、湯品、煲仔、飯麵、蔬菜與家常料理。餐點風格以中式家常與宴席料理為基礎，適合家庭聚餐、朋友聚會與日常用餐。</p>
<p data-i18n="about_story_p2">開業兩年有餘以來，我們始終秉持用心料理、真誠待客的精神，持續精進每一道餐點，讓每位來訪的客人都能感受到溫暖與地道風味。</p>
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
</div>
</div>
</div>
</section>
<section class="section">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_philosophy">我們的理念</h2>
<div class="divider"></div>
</div>
<div class="fade-in" style="max-width:700px;margin:0 auto;text-align:center">
<p data-i18n="about_philosophy_p" style="font-size:1.1rem;color:var(--text-light);line-height:2">堅持使用當季新鮮食材，减少不必要的添加物，讓每位顧客都能品嚐到食物最純粹的美味。</p>
</div>
</div>
</section>
<section class="section" style="background:var(--white)">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_env_title">用餐環境</h2>
<div class="divider"></div>
</div>
<div class="about-space-gallery fade-in">
<div class="about-space-card">
<img class="about-space-photo" src="/images/view1.png" alt="Restaurant dining room with red round banquet tables" />
</div>
<div class="about-space-card">
<img class="about-space-photo" src="/images/view2.png" alt="Restaurant booth seating with warm pendant lighting" />
</div>
</div>
</div>
</section>
<section class="section">
<div class="container">
<div class="section-title fade-in">
<h2 data-i18n="about_location_title">餐廳位置</h2>
<div class="divider"></div>
</div>
<div class="fade-in" style="max-width:900px;margin:0 auto">
<div style="background:var(--bg-warm);border-radius:var(--radius);padding:30px;text-align:center">
<div style="font-size:3rem;margin-bottom:15px">📍</div>
<h3 style="margin-bottom:10px">1520 Independence Pkwy, Plano, TX 75075</h3>
<p data-i18n="about_location_city" style="color:var(--text-light);margin-bottom:5px">Plano, Texas</p>
<p data-i18n="about_location_hours" style="color:var(--text-light);margin-bottom:20px">營業時間：週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）</p>
<div style="overflow:hidden;border-radius:12px;box-shadow:var(--shadow);background:var(--white);text-align:left">
<iframe
  title="Google Map - 1520 Independence Pkwy, Plano, TX 75075"
  src="https://www.google.com/maps?q=1520%20Independence%20Pkwy%2C%20Plano%2C%20TX%2075075&output=embed"
  width="100%"
  height="360"
  style="border:0;display:block"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>
<div style="padding:14px 18px;display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap">
<strong data-i18n="about_location_map_title">Google 地圖</strong>
<a data-i18n="about_location_map_open" href="https://www.google.com/maps/search/?api=1&query=1520%20Independence%20Pkwy%2C%20Plano%2C%20TX%2075075" target="_blank" rel="noopener noreferrer" style="color:var(--primary);font-weight:700;text-decoration:none">開啟 Google Maps</a>
</div>
</div>
</div>
</div>
</div>
</section>
${footer()}
`;

const aboutScripts = [
  commonImageScripts,
];

export const aboutPage = {
  html: aboutHtml,
  scripts: aboutScripts,
  source: "about.html",
};
