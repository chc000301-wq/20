// Cart + order persistence in localStorage, shared between the real React
// cart (CartContext) and the legacy vanilla-JS pages (menu.js, dishDetail.js)
// so both stay in sync on the same 'cart' key.
const CART_KEY = 'cart';
const ORDERS_KEY = 'orders';
export const CART_CHANGE_EVENT = 'cartchange';

function normalizeCart(cart) {
  return (Array.isArray(cart) ? cart : [])
    .map((item) => ({
      ...item,
      qty: Math.max(0, Math.floor(Number(item?.qty ?? item?.quantity) || 0)),
      price: Number(item?.price) || 0,
    }))
    .filter((item) => item.id && item.qty > 0);
}

export function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return normalizeCart(parsed);
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  const safeCart = normalizeCart(cart);
  localStorage.setItem(CART_KEY, JSON.stringify(safeCart));
  window.cart = safeCart;
  window.dispatchEvent(new CustomEvent(CART_CHANGE_EVENT, { detail: safeCart }));
  if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
  return safeCart;
}

export function clearCartStorage() {
  return saveCart([]);
}

function hasOrderItems(order) {
  const items = Array.isArray(order?.items) ? order.items : [];
  return items.some((item) => Math.max(0, Math.floor(Number(item?.qty ?? item?.quantity) || 0)) > 0);
}

export function loadOrders() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]');
    return (Array.isArray(parsed) ? parsed : []).filter(hasOrderItems);
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  // Never write an order history record when the submitted cart has no real items.
  // This prevents member/guest order lists from recording empty carts.
  if (!hasOrderItems(order)) return null;
  const orders = loadOrders();
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  return order;
}
