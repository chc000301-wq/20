import CartItem from './CartItem.jsx';

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function calcTotals(subtotal) {
  const beforeTax = Math.round(Number(subtotal || 0) * 100) / 100;
  const tax = Math.round(beforeTax * 0.0825 * 100) / 100;
  const cashTotal = Math.round((beforeTax + tax) * 100) / 100;
  const cardTotal = Math.round(cashTotal * 1.02 * 100) / 100;
  return { beforeTax, tax, cashTotal, cardTotal };
}

export default function CartSummary({ items, onIncrease, onDecrease, onRemove, totalQuantity, totalPrice, labels, lang, chineseVariant }) {
  const totals = calcTotals(totalPrice);

  if (!items.length) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <p>{labels.empty}</p>
        <p style={{ fontSize: '0.85rem', marginTop: 5 }}>{labels.emptyDesc}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="order-cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            labels={labels}
            lang={lang}
            chineseVariant={chineseVariant}
          />
        ))}
      </div>
      <div className="order-cart-footer">
        <div className="order-summary-line">
          <span>{labels.totalQuantity}</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="order-summary-line">
          <span>{labels.subtotal}</span>
          <span>{money(totals.beforeTax)}</span>
        </div>
        <div className="order-summary-line">
          <span>{labels.tax}</span>
          <span>{money(totals.tax)}</span>
        </div>
        <div className="payment-total-options" role="group" aria-label={labels.paymentCalculation}>
          <div className="payment-total-option">
            <span>{labels.cashCalculation}</span>
            <strong>{money(totals.cashTotal)}</strong>
          </div>
          <div className="payment-total-option">
            <span>{labels.cardCalculation}</span>
            <strong>{money(totals.cardTotal)}</strong>
          </div>
        </div>
        <p className="payment-reference-note">{labels.paymentReferenceNote}</p>
      </div>
    </div>
  );
}
