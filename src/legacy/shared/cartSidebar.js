import { html } from '../utils/template.js';

// [SPLIT PHASE 2] Shared cart sidebar template.
export const cartSidebar = html`<div class="cart-overlay" onclick="closeCart()"></div>
<div class="cart-sidebar">
<div class="cart-header">
<h3 data-i18n="cart">購物車</h3>
<button class="cart-close" onclick="closeCart()">✕</button>
</div>
<div class="cart-items" id="cartItems"></div>
<div class="cart-footer">
<div class="cart-total">
<span data-i18n="order_total">合計</span>
<span id="cartTotal">$0</span>
</div>
<a class="btn-submit" data-i18n="order_checkout" href="#/cart" style="text-align:center;display:block;text-decoration:none">前往結帳</a>
</div>
</div>`;
