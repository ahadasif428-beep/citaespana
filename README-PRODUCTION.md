# CitaEspaña — Production Project

## Local setup

```powershell
npm install
copy .env.example .env.local
npm run dev
```

The project uses Webpack for local development to avoid Turbopack panics seen in the previous build.

## Required production environment variables

```env
NEXT_PUBLIC_SITE_URL=https://www.citaespana.com
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Supabase variables are optional for rendering the public site, but required for storing bookings/leads.

Stripe variables are required only when using Stripe payment.

## Vercel

1. Upload this project to GitHub.
2. Import the repository into Vercel.
3. Use Node.js 24.x.
4. Add the environment variables above in Vercel Project Settings -> Environment Variables.
5. Deploy.

## Stripe webhook

Set the Stripe webhook endpoint to:

`https://YOUR-DOMAIN.com/api/stripe/webhook`

Enable at least:

`checkout.session.completed`

## Main routes

- `/` — homepage
- `/appointment` — appointment selection
- `/appointment/checkout` — appointment details + payment
- `/appointment/success` — successful Stripe payment
- `/appointment/cancel` — cancelled Stripe payment
- `/cita-previa-extranjeria` — SEO hub
- `/cita-previa-extranjeria/[province]` — province SEO pages
- `/cita-previa-extranjeria/[province]/[procedure]` — procedure SEO pages
- `/guides` — SEO guides
- `/services` — service pages
- `/eligibility-checker` — eligibility tool

## Important

Never commit `.env.local` or Stripe secret keys to GitHub.
