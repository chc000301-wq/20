import { useEffect, useMemo, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import TableSelector from '../components/TableSelector.jsx';
import CartSummary from '../components/CartSummary.jsx';
import { navbar } from '../legacy/shared/navbar.js';
import { footer } from '../legacy/shared/footer.js';
import { saveOrder } from '../utils/cartStorage.js';
import { getCurrentLang, getCurrentChineseVariant, syncCurrentLanguage, t, formatChineseText } from '../i18n/language.js';

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function phoneDigits(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 10);
}


function formatPhone(value) {
  const digits = phoneDigits(value);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function calculateOrderTotals(subtotal) {
  const beforeTax = Math.round(Number(subtotal || 0) * 100) / 100;
  const tax = Math.round(beforeTax * 0.0825 * 100) / 100;
  const cashTotal = Math.round((beforeTax + tax) * 100) / 100;
  const cardTotal = Math.round(cashTotal * 1.02 * 100) / 100;
  return { subtotal: beforeTax, tax, cashTotal, cardTotal };
}

const PICKUP_START_MINUTES = 11 * 60;
const PICKUP_END_MINUTES = 20 * 60 + 30;
const PICKUP_STEP_MINUTES = 10;

function formatPickupTime(minutesFromMidnight) {
  const hour24 = Math.floor(minutesFromMidnight / 60);
  const minute = minutesFromMidnight % 60;
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 || 12;
  return `${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${period}`;
}

function pickupTimeOptions() {
  const options = [];
  for (let minutes = PICKUP_START_MINUTES; minutes <= PICKUP_END_MINUTES; minutes += PICKUP_STEP_MINUTES) {
    options.push({ value: formatPickupTime(minutes), minutes });
  }
  return options;
}

function pickupTimeToMinutes(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;

  const normalEnglishMatch = raw.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (normalEnglishMatch) {
    let hour = Number(normalEnglishMatch[1]);
    const minute = Number(normalEnglishMatch[2]);
    const period = normalEnglishMatch[3].toUpperCase();
    if (hour < 1 || hour > 12 || minute < 0 || minute > 59) return null;
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    return hour * 60 + minute;
  }

  const oldEnglishMatch = raw.match(/^(AM|PM)\s+(\d{1,2}):(\d{2})$/i);
  if (oldEnglishMatch) {
    return pickupTimeToMinutes(`${oldEnglishMatch[2]}:${oldEnglishMatch[3]} ${oldEnglishMatch[1].toUpperCase()}`);
  }

  const twentyFourHourMatch = raw.match(/^(\d{1,2}):(\d{2})$/);
  if (twentyFourHourMatch) {
    const hour = Number(twentyFourHourMatch[1]);
    const minute = Number(twentyFourHourMatch[2]);
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
    return hour * 60 + minute;
  }

  return null;
}

function normalizePickupTime(value) {
  const minutes = pickupTimeToMinutes(value);
  if (minutes === null || minutes < PICKUP_START_MINUTES || minutes > PICKUP_END_MINUTES) return '';
  return formatPickupTime(minutes);
}

function isPickupTimeExpired(value) {
  const selectedMinutes = pickupTimeToMinutes(value);
  if (selectedMinutes === null) return false;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return currentMinutes > selectedMinutes;
}

function buildOrderItems(cartItems) {
  return cartItems
    .map((item) => {
      const price = Number(item.price) || 0;
      const qty = Math.max(0, Math.floor(Number(item.qty ?? item.quantity) || 0));
      return {
        id: String(item.id || '').trim(),
        displayId: String(item.displayId || item.id || '').trim(),
        name: String(item.name || '').trim(),
        name_en: String(item.name_en || '').trim(),
        price,
        qty,
        subtotal: Math.round(price * qty * 100) / 100,
        note: String(item.note || '').trim(),
      };
    })
    .filter((item) => item.id && item.qty > 0);
}

async function submitOrderToBackend(order) {
  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.ok) {
    throw new Error(payload.message || 'BACKEND_REJECTED');
  }
  return payload.order || order;
}

export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart, getTotalQuantity, getTotalPrice } =
    useCart();
  const [lang, setLangState] = useState(getCurrentLang());
  const [chineseVariant, setChineseVariantState] = useState(getCurrentChineseVariant());
  const [orderType, setOrderType] = useState('dinein');
  const [dineInPhone, setDineInPhone] = useState('');
  const [selectedTable, setSelectedTable] = useState('');
  const [pickupName, setPickupName] = useState('');
  const [pickupPhone, setPickupPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState(null);

  const tr = (key) => {
    const value = t(key, lang);
    return lang === 'zh' ? formatChineseText(value, chineseVariant) : value;
  };

  const labels = useMemo(() => ({
    pageTitle: tr('order_cart_page_title'),
    pageSubtitle: tr('order_cart_page_subtitle'),
    orderType: tr('order_type'),
    dineIn: tr('order_dinein'),
    pickup: tr('order_takeout'),
    currentCategory: tr('order_current_category'),
    memberOrder: tr('order_member_order'),
    guestOrder: tr('order_guest_order'),
    phoneOptional: tr('order_phone_optional'),
    dineInPhonePlaceholder: tr('order_dinein_phone_placeholder'),
    dineInPhoneHelp: tr('order_dinein_phone_help'),
    selectTable: tr('order_table_select'),
    tableHint: tr('order_table_hint'),
    notSelected: tr('order_not_selected'),
    pickupInfo: tr('order_pickup_info'),
    name: tr('order_customer_name'),
    namePlaceholder: tr('order_customer_name_placeholder'),
    phone: tr('order_customer_phone'),
    phonePlaceholder: tr('order_customer_phone_placeholder'),
    pickupTime: tr('order_pickup_time'),
    pickupTimePlaceholder: tr('order_pickup_time_placeholder'),
    pickupTimeRange: tr('order_pickup_time_range'),
    cart: tr('order_cart'),
    placeOrder: tr('order_checkout'),
    submitting: tr('order_submitting'),
    empty: tr('order_empty'),
    emptyDesc: tr('order_empty_desc'),
    subtotal: tr('order_subtotal'),
    tax: tr('order_tax'),
    paymentCalculation: tr('order_payment_calculation'),
    cashCalculation: tr('order_cash_calculation'),
    cardCalculation: tr('order_card_calculation'),
    paymentReferenceNote: tr('order_payment_reference_note'),
    totalQuantity: tr('order_total_qty'),
    totalAmount: tr('order_total_amount'),
    decreaseQty: tr('order_decrease_qty'),
    increaseQty: tr('order_increase_qty'),
    remove: tr('order_remove_item'),
    removeItem: tr('order_remove_item_aria'),
    counter: tr('order_counter'),
    entrance: tr('order_entrance'),
    floorPlanAria: tr('order_floor_plan_aria'),
    successTitle: tr('order_success_title'),
    successSubtitle: tr('order_success_subtitle'),
    type: tr('order_type_label'),
    nameLabel: tr('order_name_label'),
    phoneLabel: tr('order_phone_label'),
    pickupTimeLabel: tr('order_pickup_time_label'),
    tableLabel: tr('order_table_label'),
    temporaryDineIn: tr('order_temporary_dinein_no_phone'),
    totalAmountLabel: tr('order_total_amount_label'),
    continueOrdering: tr('order_continue_ordering'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [lang, chineseVariant]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.initNavbarScroll === 'function') window.initNavbarScroll();
    if (typeof window.initScrollAnimations === 'function') window.initScrollAnimations();
    if (typeof window.updateCartBadge === 'function') window.updateCartBadge();
    syncCurrentLanguage();
  }, []);

  useEffect(() => {
    const syncLang = () => {
      setLangState(getCurrentLang());
      setChineseVariantState(getCurrentChineseVariant());
      setTimeout(() => syncCurrentLanguage(), 0);
    };
    window.addEventListener('languagechange', syncLang);
    window.addEventListener('chinesevariantchange', syncLang);
    window.addEventListener('storage', syncLang);
    return () => {
      window.removeEventListener('languagechange', syncLang);
      window.removeEventListener('chinesevariantchange', syncLang);
      window.removeEventListener('storage', syncLang);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => syncCurrentLanguage(), 0);
    return () => clearTimeout(timer);
  }, [lang, chineseVariant, orderType, submittedOrder, error, cartItems.length, selectedTable]);

  useEffect(() => {
    try {
      const draft = JSON.parse(localStorage.getItem('orderDraft') || '{}');
      if (draft && typeof draft === 'object') {
        setOrderType(draft.orderType === 'takeout' ? 'takeout' : 'dinein');
        setSelectedTable(draft.selectedTable || '');
        setDineInPhone(draft.dineInPhone || '');
        setPickupName(draft.takeoutName || '');
        setPickupPhone(draft.takeoutPhone || '');
        setPickupTime(normalizePickupTime(draft.pickupTime || ''));
      }
    } catch {
      // Ignore invalid drafts.
    }
  }, []);

  useEffect(() => {
    const draft = {
      orderType,
      selectedTable,
      dineInPhone,
      takeoutName: pickupName,
      takeoutPhone: pickupPhone,
      pickupTime,
    };
    localStorage.setItem('orderDraft', JSON.stringify(draft));
  }, [orderType, selectedTable, dineInPhone, pickupName, pickupPhone, pickupTime]);

  const totalQuantity = getTotalQuantity();
  const totalPrice = getTotalPrice();
  const availablePickupTimes = useMemo(() => pickupTimeOptions(), []);
  const memberTypeText = useMemo(() => {
    const phone = orderType === 'takeout' ? pickupPhone : dineInPhone;
    return phoneDigits(phone).length === 10 ? labels.memberOrder : labels.guestOrder;
  }, [orderType, pickupPhone, dineInPhone, labels.memberOrder, labels.guestOrder]);

  function validateBeforeSubmit() {
    if (cartItems.length === 0) return tr('order_error_empty_cart');
    if (orderType === 'dinein') {
      if (!selectedTable) return tr('order_error_select_table');
      const digits = phoneDigits(dineInPhone);
      if (digits.length !== 10) return tr('order_error_dinein_phone');
    }
    if (orderType === 'takeout') {
      if (!pickupName.trim()) return tr('order_error_pickup_name');
      if (phoneDigits(pickupPhone).length !== 10) return tr('order_error_pickup_phone');
      const normalizedPickupTime = normalizePickupTime(pickupTime);
      if (!normalizedPickupTime) return tr('order_error_pickup_time');
      if (isPickupTimeExpired(normalizedPickupTime)) return tr('order_error_pickup_time_expired');
    }
    return '';
  }

  async function handleSubmit() {
    const validationError = validateBeforeSubmit();
    if (validationError) {
      setError(validationError);
      if (validationError === tr('order_error_pickup_time_expired')) {
        window.alert(validationError);
      }
      return;
    }

    const items = buildOrderItems(cartItems);
    if (items.length === 0) {
      setError(tr('order_error_empty_cart'));
      clearCart();
      return;
    }
    const customerPhone = orderType === 'takeout' ? formatPhone(pickupPhone) : formatPhone(dineInPhone);
    const subtotal = Math.round(items.reduce((sum, item) => sum + item.subtotal, 0) * 100) / 100;
    const totals = calculateOrderTotals(subtotal);
    const order = {
      type: orderType,
      table: orderType === 'dinein' ? selectedTable : '',
      customerName: orderType === 'takeout' ? pickupName.trim() : '',
      customerPhone,
      userType: 'member',
      pickupTime: orderType === 'takeout' ? normalizePickupTime(pickupTime) : '',
      items,
      totalQuantity: items.reduce((sum, item) => sum + item.qty, 0),
      subtotal: totals.subtotal,
      taxRate: 0.0825,
      tax: totals.tax,
      cashTotal: totals.cashTotal,
      cardServiceRate: 0.02,
      cardTotal: totals.cardTotal,
      total: totals.cashTotal,
      createdAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    setError('');
    try {
      const savedOrder = await submitOrderToBackend(order);
      saveOrder(savedOrder);
      clearCart();
      localStorage.removeItem('orderDraft');
      setSubmittedOrder(savedOrder);
    } catch (submitError) {
      const fallback = submitError.message === 'BACKEND_REJECTED' ? tr('order_server_rejected') : submitError.message;
      setError(`${tr('order_not_completed')}: ${fallback || tr('order_server_unreachable')}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submittedOrder) {
    const isTakeout = submittedOrder.type === 'takeout';
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: navbar() }} />
        <main data-react-managed="true">
        <div className="page-header">
          <div className="container">
            <h1>{labels.successTitle}</h1>
            <p>{labels.successSubtitle}</p>
          </div>
        </div>
        <section className="section">
          <div className="container" style={{ maxWidth: 620 }}>
            <div className="order-cart-card">
              <p style={{ fontSize: '1.1rem', marginBottom: 10 }}>
                {labels.type}: <strong>{submittedOrder.userType === 'member' ? labels.memberOrder : labels.guestOrder}</strong> ｜{' '}
                <strong>{isTakeout ? labels.pickup : labels.dineIn}</strong>
              </p>
              {isTakeout ? (
                <p style={{ marginBottom: 10 }}>
                  {labels.nameLabel}: {submittedOrder.customerName || '-'} ｜ {labels.phoneLabel}: {submittedOrder.customerPhone || '-'} ｜ {labels.pickupTimeLabel}:{' '}
                  {submittedOrder.pickupTime || '-'}
                </p>
              ) : (
                <p style={{ marginBottom: 10 }}>
                  {labels.tableLabel}: <strong>{submittedOrder.table}</strong>
                  {' ｜ '}{labels.phoneLabel}: {submittedOrder.customerPhone || labels.temporaryDineIn}
                </p>
              )}
              <p style={{ marginBottom: 16 }}>
                {labels.totalAmountLabel}: <strong>{money(submittedOrder.total)}</strong>
              </p>
              <div className="order-cart-items">
                {submittedOrder.items.map((item) => {
                  const displayName = lang === 'en' && item.name_en ? item.name_en : formatChineseText(item.name, chineseVariant);
                  return (
                    <div className="order-cart-row" key={item.id}>
                      <div className="order-cart-row-main">
                        <h4>{item.displayId ? `${item.displayId} ` : ''}{displayName}</h4>
                        <div className="order-cart-row-meta">
                          {money(item.price)} x {item.qty}
                        </div>
                      </div>
                      <div className="order-cart-row-side">
                        <strong>{money(item.subtotal)}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button type="button" className="btn-submit" style={{ width: '100%', marginTop: 20 }} onClick={() => setSubmittedOrder(null)}>
                {labels.continueOrdering}
              </button>
            </div>
          </div>
        </section>
        </main>
        <div dangerouslySetInnerHTML={{ __html: footer() }} />
      </>
    );
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: navbar() }} />
      <main data-react-managed="true">
      <div className="page-header">
        <div className="container">
          <h1>{labels.pageTitle}</h1>
          <p>{labels.pageSubtitle}</p>
        </div>
      </div>
      <section className="section order-section">
        <div className="container">
          <div className="order-layout">
            <div className="order-left-panel">
              <div className="order-option-card">
                <h3>{labels.orderType}</h3>
                <div className="order-type-tabs" role="tablist" aria-label={labels.orderType}>
                  <button
                    type="button"
                    className={`menu-cat-btn order-mode-btn ${orderType === 'dinein' ? 'active' : ''}`}
                    onClick={() => {
                      setOrderType('dinein');
                      setError('');
                    }}
                  >
                    {labels.dineIn}
                  </button>
                  <button
                    type="button"
                    className={`menu-cat-btn order-mode-btn ${orderType === 'takeout' ? 'active' : ''}`}
                    onClick={() => {
                      setOrderType('takeout');
                      setError('');
                    }}
                  >
                    {labels.pickup}
                  </button>
                </div>
                <div className="order-draft-hint">{labels.currentCategory}: {orderType === 'takeout' ? labels.pickup : labels.dineIn}</div>
              </div>

              {orderType === 'dinein' ? (
                <div className="order-option-card">
                  <div className="form-group">
                    <label>{labels.phoneOptional}</label>
                    <input
                      type="tel"
                      value={dineInPhone}
                      onChange={(event) => setDineInPhone(formatPhone(event.target.value))}
                      placeholder={labels.dineInPhonePlaceholder}
                      inputMode="numeric"
                      maxLength={12}
                    />
                    </div>
                  <div className="order-panel-title-row">
                    <div>
                      <h4>{labels.selectTable}</h4>
                      <p>{labels.tableHint}</p>
                    </div>
                    <strong className={`selected-table-label ${selectedTable ? 'has-selection' : ''}`}>
                      {selectedTable ? selectedTable : labels.notSelected}
                    </strong>
                  </div>
                  <TableSelector
                    selectedTable={selectedTable}
                    labels={labels}
                    onSelect={(id) => {
                      setSelectedTable(id);
                      setError('');
                    }}
                  />
                </div>
              ) : (
                <div className="order-option-card">
                  <h3>{labels.pickupInfo}</h3>
                  <div className="order-form-grid">
                    <div className="form-group">
                      <label>{labels.name}</label>
                      <input value={pickupName} onChange={(event) => setPickupName(event.target.value)} placeholder={labels.namePlaceholder} />
                    </div>
                    <div className="form-group">
                      <label>{labels.phone}</label>
                      <input
                        type="tel"
                        value={pickupPhone}
                        onChange={(event) => setPickupPhone(formatPhone(event.target.value))}
                        placeholder={labels.phonePlaceholder}
                        inputMode="numeric"
                        maxLength={12}
                      />
                    </div>
                    <div className="form-group">
                      <label>{labels.pickupTime}</label>
                      <div className="pickup-time-selects pickup-time-single" lang="en">
                        <select
                          value={pickupTime}
                          aria-label={labels.pickupTime}
                          onChange={(event) => {
                            setPickupTime(event.target.value);
                            setError('');
                          }}
                        >
                          <option value="">{labels.pickupTimePlaceholder}</option>
                          {availablePickupTimes.map((option) => (
                            <option key={option.minutes} value={option.value}>{option.value}</option>
                          ))}
                        </select>
                      </div>
                      <small>{labels.pickupTimeRange}</small>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="order-cart-column">
              <div className="order-cart-card">
                <div className="order-cart-header">
                  <h3>{labels.cart}</h3>
                </div>
                <CartSummary
                  items={cartItems}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                  totalQuantity={totalQuantity}
                  totalPrice={totalPrice}
                  labels={labels}
                  lang={lang}
                  chineseVariant={chineseVariant}
                />
                <div style={{ padding: '0 20px 20px' }}>
                  {error ? <p style={{ color: '#c0392b', marginBottom: 10 }}>{error}</p> : null}
                  <button type="button" className="btn-submit" style={{ width: '100%' }} onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? labels.submitting : labels.placeOrder}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <div dangerouslySetInnerHTML={{ __html: footer() }} />
    </>
  );
}
