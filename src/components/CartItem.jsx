import { formatChineseText } from '../i18n/language.js';
function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

export default function CartItem({ item, onIncrease, onDecrease, onRemove, labels, lang, chineseVariant }) {
  const price = Number(item.price || 0);
  const qty = Number(item.qty || 0);
  const subtotal = price * qty;
  const displayName = lang === 'en' && item.name_en ? item.name_en : formatChineseText(item.name, chineseVariant);

  return (
    <div className="order-cart-row">
      <div className="order-cart-row-main">
        <h4>{displayName}</h4>
        <div className="order-cart-row-meta">
          {money(price)} x {qty}
        </div>
        <div className="order-cart-row-meta">{labels.subtotal}: {money(subtotal)}</div>
      </div>
      <div className="order-cart-row-side">
        <strong>{money(subtotal)}</strong>
        <div className="cart-item-qty">
          <button type="button" className="qty-btn" onClick={() => onDecrease(item.id)} aria-label={labels.decreaseQty}>
            −
          </button>
          <span>{qty}</span>
          <button type="button" className="qty-btn" onClick={() => onIncrease(item.id)} aria-label={labels.increaseQty}>
            +
          </button>
          <button type="button" className="qty-btn" onClick={() => onRemove(item.id)} title={labels.remove} aria-label={labels.removeItem}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
