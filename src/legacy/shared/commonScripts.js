import { script } from '../utils/template.js';

// [SPLIT PHASE 2] Shared image helper script used by legacy pages.
export const commonImageScripts = script`
window.getDishImageSrc = window.getDishImageSrc || function(item) {
            if (item && item.image) return item.image;
            var rawId = (item && (item.displayId || item.id)) || '';
            var safeId = String(rawId).trim();
            return safeId ? '/images/' + encodeURIComponent(safeId) + '.png' : '';
        };

        window.handleMenuImageError = window.handleMenuImageError || function(img) {
            img.style.display = 'none';
            var fallback = img.nextElementSibling;
            if (fallback) fallback.style.display = 'flex';
        };
  `;
