import { html, script } from '../utils/template.js';
import { commonImageScripts } from '../shared/commonScripts.js';
import { navbar } from '../shared/navbar.js';
import { footer } from '../shared/footer.js';

// [SPLIT PHASE 1] This page was moved out of the original large pages.js file.
const reservationHtml = html`
${navbar()}
<div class="page-header">
<div class="container">
<h1 data-i18n="reservation_title">線上訂位</h1>
<p data-i18n="reservation_subtitle">預約您的專屬座位</p>
</div>
</div>
<section class="section">
<div class="container">
<div class="reservation-notice" role="note" aria-label="Reservation notice">
<h2 data-i18n="reservation_notice_title">訂位公告</h2>
<ul>
<li data-i18n="reservation_notice_seafood">海鮮類餐點建議提前 2 小時預訂。</li>
<li data-i18n="reservation_notice_hours">營業時間：週一至週日 11:00 - 21:00。</li>
<li data-i18n="reservation_notice_business_lunch">商業午餐：週一至週五 11:00 - 14:00。</li>
<li data-i18n="reservation_notice_closed_tuesday">每週二公休，週二不開放訂位。</li>
<li data-i18n="reservation_notice_confirm">我們會以電話或簡訊確認訂位資訊。</li>
<li data-i18n="reservation_notice_blacklist">預訂未赴約且未提前通知者，可能會被列入黑名單。</li>
</ul>
</div>
<form class="reservation-form" id="reservationForm">
<div class="form-group">
<label data-i18n="reservation_name">姓名</label>
<input id="resName" required="" type="text" minlength="1" autocomplete="name"/>
</div>
<div class="form-group">
<label data-i18n="reservation_phone">電話</label>
<input id="resPhone" placeholder="xxx-xxx-xxxx" required="" type="tel" inputmode="numeric" maxlength="12" autocomplete="tel"/>
<small class="form-help" data-i18n="reservation_phone_help">請輸入 10 位數電話，完成後會自動轉成 xxx-xxx-xxxx。</small>
</div>
<div class="form-row">
<div class="form-group">
<label data-i18n="reservation_date">日期</label>
<input id="resDate" required="" type="date"/>
<small class="form-help" data-i18n="reservation_date_help">每週二公休，不開放訂位。</small>
</div>
<div class="form-group">
<label data-i18n="reservation_time">時間</label>
<select id="resTime" required="">
<option value="">--</option>
<option value="11:00">11:00</option>
<option value="11:30">11:30</option>
<option value="12:00">12:00</option>
<option value="12:30">12:30</option>
<option value="13:00">13:00</option>
<option value="13:30">13:30</option>
<option value="17:00">17:00</option>
<option value="17:30">17:30</option>
<option value="18:00">18:00</option>
<option value="18:30">18:30</option>
<option value="19:00">19:00</option>
<option value="19:30">19:30</option>
<option value="20:00">20:00</option>
<option value="20:30">20:30</option>
</select>
</div>
</div>
<div class="form-group">
<label data-i18n="reservation_guests">用餐人數</label>
<select id="resGuests" required="">
<option value="">--</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8+</option>
</select>
</div>
<div class="form-group">
<label data-i18n="reservation_note">特殊需求</label>
<textarea data-i18n-placeholder="reservation_note_placeholder" id="resNote" placeholder="如有特殊飲食需求或慶祝活動，請在此說明" rows="3"></textarea>
</div>
<button class="btn-submit" data-i18n="reservation_submit" type="submit">確認訂位</button>
</form>
</div>
</section>
${footer()}
`;

const reservationScripts = [
  commonImageScripts,
  script`
const dateInput = document.getElementById('resDate');
const phoneInput = document.getElementById('resPhone');

function getLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

function isTuesdayDateValue(value) {
  if (!value) return false;
  const parts = value.split('-').map(Number);
  if (parts.length !== 3 || parts.some(function(part) { return Number.isNaN(part); })) return false;
  return new Date(parts[0], parts[1] - 1, parts[2]).getDay() === 2;
}

function formatPhone(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return digits.slice(0, 3) + '-' + digits.slice(3);
  return digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
}

function getPhoneDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

if (dateInput) {
  const today = new Date();
  dateInput.min = getLocalDateValue(today);
  dateInput.addEventListener('change', function() {
    if (isTuesdayDateValue(dateInput.value)) {
      dateInput.setCustomValidity(t('reservation_closed_tuesday_short'));
      showToast(t('reservation_closed_tuesday_long'), 'error');
      dateInput.value = '';
    } else {
      dateInput.setCustomValidity('');
    }
  });
}

if (phoneInput) {
  phoneInput.addEventListener('input', function() {
    phoneInput.value = formatPhone(phoneInput.value);
    phoneInput.setCustomValidity('');
  });
  phoneInput.addEventListener('blur', function() {
    phoneInput.value = formatPhone(phoneInput.value);
    if (getPhoneDigits(phoneInput.value).length !== 10) {
      phoneInput.setCustomValidity(t('reservation_phone_length_short'));
    } else {
      phoneInput.setCustomValidity('');
    }
  });
}

function saveReservationLocal(data) {
  const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
  reservations.unshift(data);
  localStorage.setItem('reservations', JSON.stringify(reservations));
}

async function saveReservationToBackend(data) {
  let response;
  try {
    response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (networkError) {
    const error = new Error('network');
    error.isNetworkError = true;
    throw error;
  }
  const payload = await response.json().catch(function() { return {}; });
  if (!response.ok || !payload.ok) {
    // Server-side validation rejected the reservation (e.g. Tuesday, bad phone).
    const error = new Error(payload.message || 'Reservation API failed');
    error.isApiError = true;
    throw error;
  }
  return payload.reservation || data;
}

window.submitReservation = async function(e) {
  e.preventDefault();
  const name = document.getElementById('resName').value.trim();
  const phone = formatPhone(document.getElementById('resPhone').value);
  const phoneDigits = getPhoneDigits(phone);
  const date = document.getElementById('resDate').value;

  if (!name) {
    showToast(t('reservation_name_required'), 'error');
    document.getElementById('resName').focus();
    return;
  }

  if (phoneDigits.length !== 10) {
    showToast(t('reservation_phone_length_long'), 'error');
    document.getElementById('resPhone').value = phone;
    document.getElementById('resPhone').focus();
    return;
  }

  if (isTuesdayDateValue(date)) {
    showToast(t('reservation_closed_tuesday_long'), 'error');
    document.getElementById('resDate').value = '';
    document.getElementById('resDate').focus();
    return;
  }

  const data = {
    name: name,
    phone: phone,
    date: date,
    time: document.getElementById('resTime').value,
    guests: document.getElementById('resGuests').value,
    note: document.getElementById('resNote').value.trim(),
    replied: false,
    replyNote: '',
    status: 'new',
    createdAt: new Date().toISOString()
  };

  // [HONEST SAVE] Success is only reported after the backend has actually written
  // the reservation to data/reservations.json. Server-side rejections (validation)
  // and network failures each show their own error instead of a fake success.
  try {
    const saved = await saveReservationToBackend(data);
    saveReservationLocal(saved);
    showToast(t('reservation_success'), 'success');
    document.getElementById('reservationForm').reset();
  } catch (error) {
    console.warn('Reservation backend save failed:', error);
    if (error.isNetworkError) {
      showToast(t('reservation_server_unreachable'), 'error');
    } else {
      showToast(t('reservation_server_rejected') + (error.message && error.message !== 'Reservation API failed' ? ' (' + error.message + ')' : ''), 'error');
    }
  }
};

// [NO INLINE HANDLERS] Stable event binding instead of inline onsubmit.
document.getElementById('reservationForm')?.addEventListener('submit', window.submitReservation);
  `,
];

export const reservationPage = {
  html: reservationHtml,
  scripts: reservationScripts,
  source: "reservation.html",
};
