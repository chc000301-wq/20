import { script } from '../utils/template.js';

// Centralized menu display helpers for legacy HTML-string pages.
// Pages read these helpers from window so menu, dish-detail, order and cart use the same rules.
export const menuHelpersScript = script`
(function(){
    function zhDisplay(value) {
        return (window.currentLang === 'en') ? value : (window.formatDisplayText ? window.formatDisplayText(value) : value);
    }

    function escapeHtml(value) {
        return String(value || '').replace(/[&<>'"]/g, function(char) {
            return { '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char];
        });
    }

    function getLocalizedValue(value, fallback) {
        var lang = window.currentLang || 'zh';
        var raw = '';
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            raw = value[lang] || value.zh || value.en || fallback || '';
        } else {
            raw = value || fallback || '';
        }
        return lang === 'en' ? raw : zhDisplay(raw);
    }

    function getItemName(item) {
        if (!item) return '';
        return (window.currentLang === 'en')
            ? (item.name_en || getLocalizedValue(item.name_i18n, item.name))
            : getLocalizedValue(item.name_i18n, item.name);
    }

    function getItemDesc(item) {
        if (!item) return '';
        var fallbackZh = item.desc || item.name || '';
        var fallbackEn = item.desc_en || item.name_en || fallbackZh;
        return (window.currentLang === 'en')
            ? (item.desc_en || getLocalizedValue(item.desc_i18n, fallbackEn))
            : getLocalizedValue(item.desc_i18n, fallbackZh);
    }

    function getItemHowToEat(item) {
        if (!item) return '';
        var fallbackZh = item.howToEat || '';
        var fallbackEn = item.howToEat_en || fallbackZh;
        return (window.currentLang === 'en')
            ? (item.howToEat_en || getLocalizedValue(item.howToEat_i18n, fallbackEn))
            : getLocalizedValue(item.howToEat_i18n, fallbackZh);
    }

    function getItemIngredients(item) {
        var lang = window.currentLang || 'zh';
        if (item && item.ingredients) {
            if (Array.isArray(item.ingredients)) return item.ingredients;
            return item.ingredients[lang] || item.ingredients.zh || item.ingredients.en || [];
        }
        if (item && item.ingredients_i18n) {
            return item.ingredients_i18n[lang] || item.ingredients_i18n.zh || item.ingredients_i18n.en || [];
        }
        return [];
    }

    function getCategoryMeta(catKey) {
        var categories = window.menuCategories || [];
        return categories.find(function(cat) { return cat.key === catKey; }) || { key: catKey, icon: '📋', zh: catKey || '菜品', en: catKey || 'Dish' };
    }

    function getCategoryLabel(cat) {
        if (!cat) return '';
        return (window.currentLang === 'en') ? (cat.en || cat.key || '') : zhDisplay(cat.zh || cat.key || '');
    }

    function getAiImageNoteText() {
        return (window.currentLang === 'en') ? 'AI refined from real photo' : zhDisplay('基於真實照片讓AI微調');
    }

    function getNoDishesText() {
        return (window.currentLang === 'en') ? 'No dishes in this category yet.' : zhDisplay('此分類目前沒有菜品');
    }

    function getDishDetailHintText() {
        return (window.currentLang === 'en') ? 'Click to view dish details' : zhDisplay('點選查看菜品介紹');
    }

    Object.assign(window, {
        zhDisplay: zhDisplay,
        escapeHtml: escapeHtml,
        getLocalizedValue: getLocalizedValue,
        getItemName: getItemName,
        getItemDesc: getItemDesc,
        getItemHowToEat: getItemHowToEat,
        getItemIngredients: getItemIngredients,
        getCategoryMeta: getCategoryMeta,
        getCategoryLabel: getCategoryLabel,
        getAiImageNoteText: getAiImageNoteText,
        getNoDishesText: getNoDishesText,
        getDishDetailHintText: getDishDetailHintText
    });
})();
`;
