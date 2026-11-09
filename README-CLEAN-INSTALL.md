# CitaEspaña — Clean Local Install

This package intentionally does not contain `node_modules`, `.next`, `.env.local`, or a lockfile generated on another machine.

## Windows fresh install

1. Close VS Code terminals/dev servers that are using this project.
2. Extract this ZIP into a NEW folder.
3. Open PowerShell in the folder containing `package.json`.
4. Run:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm cache verify
npm install
npm run dev
```

The project uses Webpack for development (`next dev --webpack`) to avoid a Turbopack-only crash. It is pinned to Next.js 16.3.3 so npm cannot silently move the project between Next.js minor versions.

## SWC Windows warning

If Next.js reports that `@next/swc-win32-x64-msvc...node` is not a valid Win32 application, the local `node_modules` copy is corrupted or from an incompatible binary. Delete `node_modules` and `.next` and run `npm install` again from a fresh PowerShell/VS Code session.

## Environment

Copy `.env.example` to `.env.local` and fill in Supabase/Stripe values only when those features are needed. The Supabase client is import-safe when the variables are empty.

## Stripe

Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and `NEXT_PUBLIC_SITE_URL` in Vercel. Use the project endpoint `/api/stripe/webhook` for Stripe webhook events.
