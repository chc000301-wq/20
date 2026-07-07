// Centralized cart data operations used by legacy globals and order pages.
function normalizeCart(cart) {
  return (Array.isArray(cart) ? cart : [])
    .map(function(item) {
      return Object.assign({}, item, {
        qty: Math.max(0, Math.floor(Number((item && (item.qty ?? item.quantity)) || 0))),
        price: Number(item && item.price) || 0
      });
    })
    .filter(function(item) { return item.id && item.qty > 0; });
}

export function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem('cart') || '[]');
    return normalizeCart(parsed);
  } catch {
    return [];
  }
}

export function persistCart(cart) {
  const safeCart = normalizeCart(cart);
  localStorage.setItem('cart', JSON.stringify(safeCart));
  window.cart = safeCart;
  window.dispatchEvent(new CustomEvent('cartchange', { detail: safeCart }));
}

export function addCartItem(cart, item) {
  const next = Array.isArray(cart) ? [...cart] : [];
  const existing = next.find((cartItem) => cartItem.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    // Cart line shape: id / displayId (item number), name, name_en, price, qty,
    // note (per-item remarks). Subtotal is derived as price * qty when displayed/submitted.
    next.push({ ...item, displayId: item.displayId || item.id, qty: 1, note: item.note || '' });
  }
  return next;
}

export function updateCartItemNote(cart, id, note) {
  return (Array.isArray(cart) ? cart : []).map((item) =>
    item.id === id ? { ...item, note: String(note || '') } : { ...item }
  );
}

export function clearCartItems() {
  return [];
}

export function removeCartItem(cart, id) {
  return (Array.isArray(cart) ? cart : []).filter((item) => item.id !== id);
}

export function updateCartItemQty(cart, id, delta) {
  const next = (Array.isArray(cart) ? cart : []).map((item) => ({ ...item }));
  const item = next.find((cartItem) => cartItem.id === id);
  if (!item) return next;
  item.qty += delta;
  return item.qty <= 0 ? removeCartItem(next, id) : next;
}

export function getCartTotalValue(cart) {
  return (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0);
}

export function getCartCountValue(cart) {
  return (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + Number(item.qty || 0), 0);
}
