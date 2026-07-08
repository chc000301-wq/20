import { translations } from './translations.js';

// [I18N UNIFIED 1]
// This is now the only real language system.
// Translations are centralized here and in translations.js; no duplicate public i18n file is used.

const SUPPORTED_LANGS = ['zh', 'en'];
const SUPPORTED_CHINESE_VARIANTS = ['zh-cn', 'zh-yue', 'zh-tw'];
const CHINESE_VARIANT_LABELS = {
  'zh-cn': '简体',
  'zh-yue': '廣東字',
  'zh-tw': '繁體',
};

// The source Chinese copy in translations.js and menu data is mostly Traditional Chinese.
// Keep one source of truth, then format it at runtime for Simplified / Cantonese-style / Traditional.
const TRADITIONAL_TO_SIMPLIFIED = {
  '圖':'图','僅':'仅','參':'参','號':'号','個':'个','覽':'览','選':'选',
  'AI示意圖僅供參考':'AI示意图仅供参考','基於真實照片讓AI微調':'基于真实照片让AI微调','上一個菜品':'上一个菜品','下一個菜品':'下一个菜品',
  '首頁':'首页','菜單':'菜单','菜單建議與搜尋':'菜单建议与搜索','搜尋菜品':'搜索菜品','2人點餐':'2人点餐','3人點餐':'3人点餐','4人點餐':'4人点餐','不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。':'不知道怎么点？可先选择人数建议，也可以直接搜索菜品。','此區先保留版面，之後可放入組合內容、推薦份量與加購建議。':'此区先保留版面，之后可放入组合内容、推荐份量与加购建议。','訂位':'订位','點餐':'点餐','關於我們':'关于我们','優惠活動':'优惠活动','會員':'会员',
  '品味頂級料理':'品味顶级料理','享受極致美味':'享受极致美味','我們':'我们','準備':'准备','每一道佳餚':'每一道佳肴','為您':'为您','帶來':'带来','難忘':'难忘','體驗':'体验',
  '瀏覽':'浏览','立即':'立即','為何':'为何','選擇':'选择','堅持':'坚持','品質':'品质','服務':'服务','顧客':'顾客','新鮮':'新鲜','食材':'食材','嚴選':'严选','頂級':'顶级','確保':'确保','料理':'料理','專業':'专业','主廚':'主厨','擁有':'拥有','經驗':'经验','呈現':'呈现','精湛':'精湛','廚藝':'厨艺','快速備餐':'快速备餐','接單':'接单','餐點':'餐点','滿足':'满足','味蕾':'味蕾','優質':'优质','親切':'亲切','團隊':'团队','打造':'打造','舒適':'舒适','用餐':'用餐',
  '敬請期待優惠':'敬请期待优惠','優惠活動即將推出，更多內容敬請期待':'优惠活动即将推出，更多内容敬请期待','優惠活動準備中':'优惠活动准备中','首次':'首次','消費':'消费','享':'享','折':'折','加入':'加入','了解更多':'了解更多','精選':'精选','美味食材':'美味食材','嚴選食材':'严选食材','匠心烹製':'匠心烹制','全部':'全部','主廚推薦':'主厨推荐','前菜':'前菜','湯':'汤','煲':'煲','飯類':'饭类','麵類':'面类','湯麵':'汤面','海鮮':'海鲜','牛肉':'牛肉','雞肉':'鸡肉','燒臘':'烧腊','蔬菜':'蔬菜','豬肉':'猪肉','飲料':'饮料','加入購物車':'加入购物车',
  '中式餐廳':'中式餐厅','菜色':'菜色','包含':'包含','涵蓋':'涵盖','煲仔':'煲仔','飯麵':'饭面','家常料理':'家常料理','多元選擇':'多元选择','廣東菜':'广东菜','餐廳':'餐厅','燒臘':'烧腊','熱炒':'热炒','湯品':'汤品','延續':'延续','粵菜':'粤菜','講究':'讲究','鮮':'鲜','開業':'开业','兩年':'两年','有餘':'有余','持續':'持续','真誠':'真诚','接待':'接待','客人':'客人','現已':'现已','約':'约','道菜色':'道菜色','累積':'累计','數千位':'数千位','個月營運':'个月运营','道料理':'道料理','位顧客':'位顾客',
  '餐廳品牌':'餐厅品牌','快速連結':'快速链接','聯絡資訊':'联络资讯','營業時間':'营业时间','週一至週日':'周一至周日','線上訂位':'线上订位','預約':'预约','專屬':'专属','座位':'座位','姓名':'姓名','電話':'电话','日期':'日期','時間':'时间','人數':'人数','特殊需求':'特殊需求','飲食':'饮食','慶祝活動':'庆祝活动','說明':'说明','確認訂位':'确认订位','訂位成功':'订位成功','盡快':'尽快','與您確認':'与您确认',
  '外帶':'外带','外送':'外送','取餐方式':'取餐方式','自取':'自取','到府':'到府','送餐地址':'送餐地址','請輸入完整送餐地址':'请输入完整送餐地址','購物車':'购物车','空的':'空的','快去':'快去','挑選':'挑选','喜歡':'喜欢','小計':'小计','外送費':'外送费','合計':'合计','前往結帳':'前往结帐','訂單已送出':'订单已送出','感謝':'感谢','訂購':'订购',
  '登入':'登录','註冊':'注册','電子郵件':'电子邮件','密碼':'密码','登出':'登出','歡迎回來':'欢迎回来','我的訂單':'我的订单','個人資料':'个人资料','會員中心':'会员中心',
  '我們的故事':'我们的故事','用心料理':'用心料理','用愛服務':'用爱服务','特色':'特色','結合':'结合','適合':'适合','家庭':'家庭','朋友':'朋友','聚餐':'聚餐','豐富':'丰富','以來':'以来','始終':'始终','秉持':'秉持','待客':'待客','精神':'精神','精進':'精进','每位':'每位','來訪':'来访','感受到':'感受到','溫暖':'温暖','地道':'地道','風味':'风味','我們的理念':'我们的理念','當季':'当季','减少':'减少','不必要':'不必要','添加物':'添加物','品嚐':'品尝','純粹':'纯粹','美味':'美味','用餐環境':'用餐环境','餐廳位置':'餐厅位置','營業時間：週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）':'营业时间：周一至周日 11:00 - 21:00（周二公休，20:30 最后点餐）','Google 地圖':'Google 地图','開啟 Google Maps':'开启 Google Maps',
  '生日優惠':'生日优惠','生日當月':'生日当月','滿':'满','贈送':'赠送','精緻':'精致','長期活動':'长期活动','平日午間優惠':'平日午间优惠','每週':'每周','家庭聚餐方案':'家庭聚餐方案','團體':'团体','飲品':'饮品','需提前預約':'需提前预约','外帶自取優惠':'外带自取优惠','推薦好友':'推荐好友','成功推薦':'成功推荐','雙方':'双方','獲得':'获得','抵用券':'抵用券',
  '菜品':'菜品','內容物':'内容物','更改您的尺寸':'更改您的尺寸','小份':'小份','中份':'中份','大份':'大份','返回菜單':'返回菜单','此分類目前沒有菜品':'此分类目前没有菜品','點選查看菜品介紹':'点选查看菜品介绍','尚無訂單紀錄':'尚无订单纪录','帳號或密碼錯誤':'帐号或密码错误','已登出':'已登出','已加入購物車':'已加入购物车'
};

const SIMPLIFIED_CHAR_MAP = {
  '頂':'顶','級':'级','極':'极','準':'准','備':'备','餚':'肴','為':'为','您':'您','帶':'带','難':'难','體':'体','驗':'验','瀏':'浏','覽':'览','選':'选','擇':'择','堅':'坚','質':'质','務':'务','顧':'顾','鮮':'鲜','嚴':'严','確':'确','專':'专','廚':'厨','擁':'拥','經':'经','現':'现','藝':'艺','單':'单','點':'点','優':'优','團':'团','隊':'队','適':'适','時':'时','進':'进','會':'会','費':'费','瞭':'了','製':'制','湯':'汤','飯':'饭','類':'类','麵':'面','燒':'烧','臘':'腊','豬':'猪','飲':'饮','購':'购','車':'车','廣':'广','東':'东','廳':'厅','熱':'热','續':'续','粵':'粤','講':'讲','鮮':'鲜','兩':'两','餘':'余','誠':'诚','數':'数','營':'营','聯':'联','資訊':'资讯','業':'业','間':'间','週':'周','線':'线','預':'预','屬':'属','話':'话','請':'请','輸':'输','擇':'择','歡':'欢','錄':'录','資':'资','愛':'爱','豐':'丰','來':'来','終':'终','進':'进','訪':'访','溫':'温','風':'风','當':'当','嚐':'尝','純':'纯','緻':'致','贈':'赠','獲':'获','雙':'双','號':'号','錯':'错','誤':'误','註':'注','冊':'册','電':'电','郵':'邮','頁':'页','關':'关','於':'于','門':'门','內':'内','與':'与','後':'后','這':'这','裡':'里','放':'放','過':'过','濾':'滤','稱':'称','圖':'图','說':'说','彙':'汇','匯':'汇','總':'总','額':'额','稅':'税','僅':'仅','際':'际','場':'场','復':'复','壓':'压','縮':'缩','檔':'档'
};

const CANTONESE_REPLACEMENTS = {
  '關於我們': '關於我哋',
  '我們': '我哋',
  '您': '你',
  '菜單': '餐牌',
  '菜單建議與搜尋': '餐牌建議同搜尋',
  '搜尋菜品': '搵餸菜',
  '2人點餐': '2人落單',
  '3人點餐': '3人落單',
  '4人點餐': '4人落單',
  '不知道怎麼點？可先選擇人數建議，也可以直接搜尋菜品。': '唔知點樣叫餸？可以先揀人數建議，或者直接搵餸菜。',
  '此區先保留版面，之後可放入組合內容、推薦份量與加購建議。': '呢區先保留版面，之後可以放套餐內容、份量建議同加購建議。',
  '瀏覽餐牌': '睇餐牌',
  '瀏覽菜單': '睇餐牌',
  '訂位': '訂座',
  '立即訂座': '即刻訂座',
  '點餐': '落單',
  '外帶': '外賣自取',
  '外送': '送餐',
  '購物車': '購物車',
  '加入購物車': '加入購物車',
  '為您帶來': '為你帶嚟',
  '帶來': '帶嚟',
  '請輸入': '請輸入',
  '快去': '快啲去',
  '了解更多': '睇多啲',
  '為何選擇我們': '點解揀我哋',
  '堅持品質，用心服務每一位顧客': '堅持品質，用心服務每一位客人',
  '歡迎回來': '歡迎返嚟',
  '尚無訂單紀錄': '暫時未有訂單紀錄',
  '登入': '登入',
  '註冊': '登記',
  '優惠活動': '優惠',
  '立即加入會員': '即刻加入會員',
  '前往結帳': '去結帳',
  '感謝您的訂購': '多謝你嘅訂購',
  '感謝': '多謝',

  // Order / cart page copy for the three Chinese text styles.
  '取餐方式': '攞餐方式',
  '內用': '堂食',
  '外帶自取': '外賣自取',
  '餐廳位置': '餐廳位置',
  '營業時間：週一至週日 11:00 - 21:00（週二公休，20:30 最後點餐）': '營業時間：星期一至星期日 11:00 - 21:00（星期二休息，20:30 最後落單）',
  '開啟 Google Maps': '開啟 Google Maps',
  '目前分類': '目前類型',
  '會員訂餐': '會員落單',
  '暫時訂餐': '臨時落單',
  '電話號碼（選填）': '電話號碼（可唔填）',
  '有電話＝會員訂餐；不填＝暫時內用': '有電話＝會員落單；唔填＝臨時堂食',
  '可不填。未填電話時，後台會歸類為「暫時訂餐 / 內用」。': '可以唔填。未填電話時，後台會歸類為「臨時落單 / 堂食」。',
  '選擇桌號': '揀枱號',
  '請依照店內座位圖選擇桌號。': '請跟店內座位圖揀枱號。',
  '未選擇': '未揀',
  '外帶自取資訊': '外賣自取資料',
  '姓名': '姓名',
  '請輸入姓名': '請輸入姓名',
  '電話': '電話',
  '請輸入 10 位數電話': '請輸入 10 位電話',
  '取餐時間': '攞餐時間',
  '總數量': '總數量',
  '總金額': '總金額',
  '稅金（8.25%）': '稅金（8.25%）',
  '付款計算': '付款計算',
  '現金計算（含稅）': '現金計算（含稅）',
  '刷卡計算（含稅 + 2%）': '刷卡計算（含稅 + 2%）',
  '以上計算僅供參考，實際金額以現場付費為主。': '以上計算只供參考，實際金額以現場付款為準。',
  '送出訂單': '送出訂單',
  '送出中...': '送出緊...',
  '購物車是空的': '購物車暫時係空嘅',
  '快去菜單挑選喜歡的料理吧！': '快啲去餐牌揀你鍾意嘅餸啦！',
  '小計': '小計',
  '減少數量': '減少數量',
  '增加數量': '增加數量',
  '移除餐點': '移除餸菜',
  '餐廳座位圖': '餐廳座位圖',
  '訂單已送出！': '訂單已送出！',
  '感謝您的訂購，後台已建立這筆訂單。': '多謝你落單，後台已經建立呢張訂單。',
  '類型': '類型',
  '桌號': '枱號',
  '暫時內用（未輸入電話）': '臨時堂食（未輸入電話）',
  '繼續點餐': '繼續落單',
  '訂單尚未完成': '訂單仲未完成',
  '購物車是空的，請先到菜單加入餐點': '購物車暫時係空嘅，請先去餐牌加入餸菜',
  '請先選擇桌號': '請先揀枱號',
  '電話號碼需為 10 位數，或留空作為暫時內用': '電話號碼需要 10 位，或者留空作為臨時堂食',
  '請填寫外帶姓名': '請填寫外賣自取姓名',
  '外帶自取需要 10 位數電話': '外賣自取需要 10 位電話',
  '請選擇取餐時間': '請揀攞餐時間',
  '櫃台': '櫃台',
  '入口': '入口',
  '這是': '呢個係',
  '之後': '之後',
  '這裡': '呢度',
  '品嚐': '品嚐',
  '美味': '滋味',
};

function replaceByPhraseMap(text, map) {
  let result = String(text ?? '');
  Object.entries(map)
    .sort((a, b) => b[0].length - a[0].length)
    .forEach(([from, to]) => {
      result = result.split(from).join(to);
    });
  return result;
}

function traditionalToSimplified(text) {
  let result = replaceByPhraseMap(text, TRADITIONAL_TO_SIMPLIFIED);
  result = Array.from(result).map((char) => SIMPLIFIED_CHAR_MAP[char] || char).join('');
  return result;
}

function traditionalToCantonese(text) {
  return replaceByPhraseMap(text, CANTONESE_REPLACEMENTS);
}

export function getCurrentLang() {
  const saved = localStorage.getItem('lang');
  return SUPPORTED_LANGS.includes(saved) ? saved : 'zh';
}

export function getCurrentChineseVariant() {
  const saved = localStorage.getItem('chineseVariant');
  return SUPPORTED_CHINESE_VARIANTS.includes(saved) ? saved : 'zh-cn';
}

export function setCurrentChineseVariant(variant) {
  const nextVariant = SUPPORTED_CHINESE_VARIANTS.includes(variant) ? variant : 'zh-cn';
  localStorage.setItem('chineseVariant', nextVariant);
  window.currentChineseVariant = nextVariant;
  document.documentElement.dataset.chineseVariant = nextVariant;
  if (getCurrentLang() === 'zh') document.documentElement.lang = nextVariant;
  return nextVariant;
}

export function formatChineseText(text, variant = getCurrentChineseVariant()) {
  if (text == null) return text;
  if (variant === 'zh-cn') return traditionalToSimplified(String(text));
  if (variant === 'zh-yue') return traditionalToCantonese(String(text));
  return String(text);
}

export function formatDisplayText(text) {
  return getCurrentLang() === 'zh' ? formatChineseText(text) : text;
}

function rememberOriginalText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.__originalZhText === undefined) node.__originalZhText = node.nodeValue;
  } else if (node instanceof Element) {
    ['placeholder', 'title', 'aria-label'].forEach((attr) => {
      if (node.hasAttribute(attr)) {
        const key = `__originalZhAttr_${attr}`;
        if (node[key] === undefined) node[key] = node.getAttribute(attr);
      }
    });
  }
}

export function applyChineseVariantToPage(root = document.body) {
  if (!root || getCurrentLang() !== 'zh') return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest?.('[data-react-managed="true"]')) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    rememberOriginalText(node);
    node.nodeValue = formatChineseText(node.__originalZhText);
  });

  root.querySelectorAll?.('[placeholder], [title], [aria-label]').forEach((el) => {
    if (el.closest?.('[data-react-managed="true"]')) return;
    rememberOriginalText(el);
    ['placeholder', 'title', 'aria-label'].forEach((attr) => {
      const key = `__originalZhAttr_${attr}`;
      if (el[key] !== undefined) el.setAttribute(attr, formatChineseText(el[key]));
    });
  });
}

export function setCurrentLang(lang) {
  const nextLang = SUPPORTED_LANGS.includes(lang) ? lang : 'zh';
  localStorage.setItem('lang', nextLang);
  window.currentLang = nextLang;
  document.documentElement.lang = nextLang === 'zh' ? getCurrentChineseVariant() : 'en';
  document.documentElement.dataset.lang = nextLang;
  return nextLang;
}

export function toggleCurrentLang() {
  return setCurrentLang(getCurrentLang() === 'zh' ? 'en' : 'zh');
}

export function t(key, lang = getCurrentLang()) {
  return translations[lang]?.[key] || translations.zh?.[key] || key;
}

export function updateLangButtons(lang = getCurrentLang()) {
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.textContent = lang === 'zh' ? 'EN' : '中';
    btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切換到中文');
    btn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切換到中文');
  });

  document.querySelectorAll('.chinese-variant-switcher').forEach((switcher) => {
    switcher.hidden = lang !== 'zh';
    switcher.classList.toggle('is-hidden', lang !== 'zh');
  });

  document.querySelectorAll('.chinese-variant-label').forEach((label) => {
    label.textContent = CHINESE_VARIANT_LABELS[getCurrentChineseVariant()] || CHINESE_VARIANT_LABELS['zh-cn'];
  });
}

export function applyTranslations() {
  const lang = setCurrentLang(getCurrentLang());
  setCurrentChineseVariant(getCurrentChineseVariant());

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key, lang);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key, lang));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key, lang));
  });

  updateLangButtons(lang);
  applyChineseVariantToPage();
  return lang;
}

export function refreshLanguageAwareViews() {
  applyTranslations();

  if (typeof window.rebuildMenu === 'function') window.rebuildMenu();
  if (typeof window.renderDish === 'function') window.renderDish();
  if (typeof window.renderOrderCart === 'function') window.renderOrderCart();
  if (typeof window.refreshOrderLabels === 'function') window.refreshOrderLabels();
  if (typeof window.renderFeaturedMenu === 'function') window.renderFeaturedMenu();
  if (typeof window.renderCart === 'function') window.renderCart();
  if (typeof window.renderOrderCategories === 'function') window.renderOrderCategories();
  if (typeof window.renderRecommendSearch === 'function') window.renderRecommendSearch();

  if (typeof window.renderOrderMenu === 'function') {
    const items = window.currentOrderItems || window.allOrderItems || window.allItems || [];
    if (Array.isArray(items) && items.length) window.renderOrderMenu(items);
  }

  updateLangButtons(getCurrentLang());
  applyChineseVariantToPage();
}

export function setLang(lang) {
  setCurrentLang(lang);
  refreshLanguageAwareViews();
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: getCurrentLang() } }));
}

export function toggleLang() {
  setLang(getCurrentLang() === 'zh' ? 'en' : 'zh');
}

export function setChineseVariant(variant) {
  setCurrentChineseVariant(variant);
  refreshLanguageAwareViews();
  window.dispatchEvent(new CustomEvent('chinesevariantchange', { detail: { variant: getCurrentChineseVariant() } }));
}

export function toggleChineseVariantMenu(event) {
  event?.stopPropagation?.();
  const switcher = event?.currentTarget?.closest?.('.chinese-variant-switcher') || document.querySelector('.chinese-variant-switcher');
  switcher?.classList.toggle('open');
}

export function closeChineseVariantMenus() {
  document.querySelectorAll('.chinese-variant-switcher.open').forEach((el) => el.classList.remove('open'));
}

export function syncCurrentLanguage() {
  return applyTranslations();
}


// Language controls use the explicit window.toggleLang / window.setChineseVariant
// handlers exposed below. Do not install a document-level capture handler here:
// it can intercept React synthetic events and make app buttons appear unresponsive.

// [I18N UNIFIED 2]
// Expose compatibility globals for existing legacy HTML onclick handlers and src/legacy/globals.js.
window.translations = translations;
window.t = t;
window.getCurrentLang = getCurrentLang;
window.getCurrentChineseVariant = getCurrentChineseVariant;
window.setChineseVariant = setChineseVariant;
window.toggleChineseVariantMenu = toggleChineseVariantMenu;
window.closeChineseVariantMenus = closeChineseVariantMenus;
window.formatChineseText = formatChineseText;
window.formatDisplayText = formatDisplayText;
window.applyChineseVariantToPage = applyChineseVariantToPage;
window.setLang = setLang;
window.toggleLang = toggleLang;
window.updateAllText = applyTranslations;
window.applyTranslations = applyTranslations;

// Initialize language globals as soon as this module loads.
setCurrentChineseVariant(getCurrentChineseVariant());
setCurrentLang(getCurrentLang());
document.addEventListener('click', closeChineseVariantMenus);
