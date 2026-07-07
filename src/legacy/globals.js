// Centralized legacy browser globals used by HTML strings inside src/legacy/pages.
// This replaces public/js/main.js so runtime behavior stays in src/.
import {
  loadCart,
  persistCart,
  addCartItem,
  removeCartItem,
  updateCartItemQty,
  updateCartItemNote,
  getCartTotalValue,
  getCartCountValue,
} from './utils/cartStore.js';

// ========== CART SYSTEM ==========
window.cart = loadCart();

function addToCart(item) {
    window.cart = addCartItem(window.cart, item);
    saveCart();
    renderCart();
    showToast(currentLang === 'zh' ? window.formatDisplayText('已加入購物車') : 'Added to cart', 'success');
}

function removeFromCart(id) {
    window.cart = removeCartItem(window.cart, id);
    saveCart();
    renderCart();
}

function updateQty(id, delta) {
    window.cart = updateCartItemQty(window.cart, id, delta);
    saveCart();
    renderCart();
}

function updateCartNote(id, note) {
    // Note edits only persist data; no re-render, so the input keeps focus.
    window.cart = updateCartItemNote(window.cart, id, note);
    persistCart(window.cart);
}

function clearCart() {
    window.cart = [];
    saveCart();
    renderCart();
}

function getCartTotal() {
    return getCartTotalValue(window.cart);
}

function getCartCount() {
    return getCartCountValue(window.cart);
}

function saveCart() {
    persistCart(window.cart);
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const count = getCartCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems) return;

    if (window.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p data-i18n="order_empty">${t('order_empty')}</p>
                <p style="font-size:0.85rem;margin-top:5px" data-i18n="order_empty_desc">${t('order_empty_desc')}</p>
            </div>`;
        if (cartTotal) cartTotal.textContent = '$0';
        return;
    }

    cartItems.innerHTML = window.cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img" style="background:${item.color || 'linear-gradient(135deg, #ffecd2, #fcb69f)'}"></div>
            <div class="cart-item-info">
                <h4>${window.getItemName ? window.getItemName(item) : ((currentLang === 'en' ? item.name_en : window.formatDisplayText(item.name)) || item.name || '')}</h4>
                <div class="price">$${item.price}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            </div>
        </div>
    `).join('');

    if (cartTotal) cartTotal.textContent = `$${getCartTotal()}`;
    updateCartBadge();
}

// ========== TOAST ==========
function showToast(message, type = '') {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast ' + type;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ========== CART SIDEBAR ==========
function openCart() {
    document.querySelector('.cart-overlay')?.classList.add('active');
    document.querySelector('.cart-sidebar')?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    document.querySelector('.cart-overlay')?.classList.remove('active');
    document.querySelector('.cart-sidebar')?.classList.remove('active');
    document.body.style.overflow = '';
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
    document.querySelector('.nav-links')?.classList.toggle('active');
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ========== NAVBAR SCROLL ==========
// [LEAK FIX] App.jsx calls initNavbarScroll on every route change; guard so the
// window scroll listener is only ever attached once.
let navbarScrollBound = false;
function initNavbarScroll() {
    if (navbarScrollBound) return;
    navbarScrollBound = true;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50
                ? '0 2px 20px rgba(0,0,0,0.1)'
                : '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
}

// [DEAD CODE REMOVED] DOMContentLoaded init deleted: App.jsx runLegacyInit runs the
// same functions (updateAllText, initScrollAnimations, initNavbarScroll,
// updateCartBadge) on first render and on every route change.


// Expose functions expected by legacy inline onclick handlers and React page initializers.
Object.assign(window, {
  addToCart,
  removeFromCart,
  updateQty,
  updateCartNote,
  clearCart,
  getCartTotal,
  getCartCount,
  saveCart,
  updateCartBadge,
  renderCart,
  showToast,
  openCart,
  closeCart,
  toggleMobileMenu,
  initScrollAnimations,
  initNavbarScroll,
});

export {
  addToCart,
  removeFromCart,
  updateQty,
  updateCartNote,
  clearCart,
  getCartTotal,
  getCartCount,
  saveCart,
  updateCartBadge,
  renderCart,
  showToast,
  openCart,
  closeCart,
  toggleMobileMenu,
  initScrollAnimations,
  initNavbarScroll,
};
