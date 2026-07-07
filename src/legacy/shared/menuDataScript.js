import { script } from '../utils/template.js';
import { menuCategories } from '../data/menuCategories.js';
import { menuItems } from '../data/menuItems.js';

// [SPLIT PHASE 3] Inject centralized menu data for legacy inline scripts.
// The page scripts read window.menuCategories and window.menuItems.
export const menuDataScript = script`
window.menuCategories = ${JSON.stringify(menuCategories, null, 12)};
window.menuItems = ${JSON.stringify(menuItems, null, 12)};
`;
