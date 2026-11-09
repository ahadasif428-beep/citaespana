# CitaEspaña — Vercel + Stripe

## Vercel
1. Push this folder to GitHub.
2. Vercel → Add New Project → Import the repository.
3. Framework: Next.js (auto-detected). Build command: `npm run build`.
4. Node.js: 24.x. This project declares `engines.node = 24.x`.
5. Add environment variables in Vercel → Settings → Environment Variables, for Production + Preview as needed:
   - `NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com`
   - `NEXT_PUBLIC_SUPABASE_URL=...`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
   - `STRIPE_SECRET_KEY=sk_test_...` for testing, then `sk_live_...` for production
   - `STRIPE_WEBHOOK_SECRET=whsec_...`
6. Redeploy after changing environment variables.

## Stripe
1. Create/activate your Stripe account and complete the required business verification.
2. In Stripe Dashboard, use Test mode first.
3. Copy the Secret key into `STRIPE_SECRET_KEY` in Vercel. Never use `NEXT_PUBLIC_` for the secret key.
4. Deploy the site once.
5. Stripe Dashboard → Developers → Webhooks → Add endpoint:
   `https://YOUR-DOMAIN.com/api/stripe/webhook`
6. Listen for `checkout.session.completed` and copy the signing secret (`whsec_...`) into `STRIPE_WEBHOOK_SECRET`.
7. Test a booking with a Stripe test card. After successful payment the customer returns to `/appointment/success`.
8. Switch to live keys only after the full test flow works.

The server calculates the booking price again before creating the Checkout Session. Do not send a trusted amount from the browser.
