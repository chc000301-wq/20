import { useEffect, useMemo, useState } from 'react';
import { legacyPages } from './legacy/pages.js';
import { syncCurrentLanguage } from './i18n/language.js';
import { CartProvider, useCart } from './context/CartContext.jsx';
import CartPage from './pages/CartPage.jsx';

function normalizeHash() {
  const raw = window.location.hash || '#/';
  const clean = raw.replace(/^#\/?/, '').split('?')[0].replace(/^\//, '');
  return clean || 'home';
}

function runLegacyInit(page) {
  syncCurrentLanguage();
  if (typeof window.updateAllText === 'function') window.updateAllText();
  if (typeof window.initScrollAnimations === 'function') window.initScrollAnimations();
  if (typeof window.initNavbarScroll === 'function') window.initNavbarScroll();
  if (typeof window.updateCartBadge === 'function') window.updateCartBadge();

  for (const code of page.scripts || []) {
    try {
      const scopedCode = `(() => {\n${code}\n})();`;
      new Function(scopedCode)();
    } catch (error) {
      console.error('Legacy page script error:', page.source, error);
    }
  }

  // Several old pages waited for DOMContentLoaded. In React, the DOM is already mounted.
  if (typeof window.rebuildMenu === 'function') window.rebuildMenu();
  if (typeof window.renderDish === 'function') window.renderDish();
  if (typeof window.renderOrderCart === 'function') window.renderOrderCart();
  if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
  syncCurrentLanguage();
}



function FloatingCartButton() {
  const { getTotalQuantity } = useCart();
  const qty = getTotalQuantity();

  const goToOrder = () => {
    window.location.hash = '#/cart';
  };

  return (
    <button
      type="button"
      className="floating-cart-button"
      aria-label="Open order cart"
      onClick={goToOrder}
    >
      <span className="floating-cart-icon" aria-hidden="true">🛒</span>
      {qty > 0 ? <span className="floating-cart-count">{qty}</span> : null}
    </button>
  );
}

function LegacyPage({ pageKey }) {
  const page = legacyPages[pageKey] || legacyPages.home;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => runLegacyInit(page), 0);
    return () => clearTimeout(timer);
  }, [pageKey, page]);

  return <div dangerouslySetInnerHTML={{ __html: page.html }} />;
}

export default function App() {
  const [route, setRoute] = useState(normalizeHash());

  useEffect(() => {
    const onHashChange = () => setRoute(normalizeHash());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) window.history.replaceState(null, '', '#/');
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const pageKey = useMemo(() => legacyPages[route] ? route : 'home', [route]);

  return (
    <CartProvider>
      {route === 'cart' || route === 'order' ? <CartPage /> : <LegacyPage pageKey={pageKey} />}
      <FloatingCartButton />
    </CartProvider>
  );
}
