// [SPLIT PHASE 1] Lightweight page registry. Page content now lives in src/legacy/pages/.
import { homePage } from './pages/home.js';
import { menuPage } from './pages/menu.js';
import { searchPage } from './pages/search.js';
import { dishDetailPage } from './pages/dishDetail.js';
import { reservationPage } from './pages/reservation.js';
import { memberPage } from './pages/member.js';
import { aboutPage } from './pages/about.js';
import { promotionsPage } from './pages/promotions.js';
import { adminPage } from './pages/admin.js';

// "order" was replaced by the real React /cart route (src/pages/CartPage.jsx);
// src/legacy/pages/order.js is no longer registered here.
export const legacyPages = {
  "home": homePage,
  "menu": menuPage,
  "search": searchPage,
  "dish-search": searchPage,
  "dish-detail": dishDetailPage,
  "reservation": reservationPage,
  "member": memberPage,
  "about": aboutPage,
  "promotions": promotionsPage,
  "admin-dashboard": adminPage,
};
