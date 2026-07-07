# Member Phone Login and Dashboard Fix

Completed changes:

1. Member login now uses phone number as the member account.
   - Admin login with `awesome` is still preserved.
   - Member registration requires a 10-digit phone number.
   - Email is optional on registration.

2. Member dashboard now has four function buttons:
   - Current Orders
   - Table-Side Service
   - Order History
   - Profile Info

3. Current Orders:
   - Filters orders by the logged-in user's phone number.
   - Shows orders from the last two hours.

4. Table-Side Service:
   - Food: extra rice, fruit, fortune cookies, chili.
   - Drinks: water, hot tea, sweet iced tea, unsweet iced tea.
   - Supplies: napkins, hand towels, straws, bowls/plates with quantity, chopsticks with quantity.
   - Service requests are saved to `localStorage.serviceRequests` for future admin integration.

5. Order History:
   - Shows matching phone-number orders older than two hours.

6. Profile Info:
   - Displays current member data only. Editing is intentionally left for the next step.

Build verified with `npm run build`.
