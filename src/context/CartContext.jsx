import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { loadCart, saveCart, CART_CHANGE_EVENT } from '../utils/cartStorage.js';

const CartContext = createContext(null);

function mergeAdd(cart, dish) {
  const existing = cart.find((item) => item.id === dish.id);
  if (existing) {
    return cart.map((item) => (item.id === dish.id ? { ...item, qty: item.qty + 1 } : item));
  }
  return [
    ...cart,
    {
      id: dish.id,
      displayId: dish.displayId || dish.id,
      name: dish.name || '',
      name_en: dish.name_en || '',
      price: Number(dish.price) || 0,
      color: dish.color || '',
      qty: 1,
    },
  ];
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => loadCart());

  // The menu page and dish-detail page are legacy vanilla-JS pages that read/write
  // the same 'cart' localStorage key directly. Stay in sync with them via the
  // cartchange event dispatched by cartStorage.saveCart.
  useEffect(() => {
    const sync = () => setCartItems(loadCart());
    window.addEventListener(CART_CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CART_CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const addToCart = useCallback((dish) => {
    setCartItems((prev) => {
      const next = mergeAdd(prev, dish);
      saveCart(next);
      return next;
    });
    if (typeof window.showToast === 'function') {
      const isZh = (window.currentLang || 'zh') === 'zh';
      window.showToast(isZh ? '已加入購物車' : 'Added to cart', 'success');
    }
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      saveCart(next);
      return next;
    });
  }, []);

  const increaseQuantity = useCallback((id) => {
    setCartItems((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
      saveCart(next);
      return next;
    });
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCartItems((prev) => {
      const next = prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);
      saveCart(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    saveCart([]);
  }, []);

  const getTotalQuantity = useCallback(
    () => cartItems.reduce((sum, item) => sum + Number(item.qty || 0), 0),
    [cartItems]
  );

  const getTotalPrice = useCallback(
    () => cartItems.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0),
    [cartItems]
  );

  // Expose the same functions as globals so legacy pages (menu.js, dishDetail.js,
  // order-related onclick handlers) call into this context instead of maintaining
  // their own separate cart state.
  useEffect(() => {
    Object.assign(window, {
      addToCart,
      removeFromCart,
      updateQty: (id, delta) => (delta > 0 ? increaseQuantity(id) : decreaseQuantity(id)),
      clearCart,
      getCartTotal: getTotalPrice,
      getCartCount: getTotalQuantity,
    });
  }, [addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, getTotalPrice, getTotalQuantity]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
