# snbhante.github.io — v3.0.0

Next.js App Router + TypeScript + static export + PWA portfolio for GitHub Pages.

## v3.0.0 compatibility fixes

- **Termux / Android ARM64:** `npm run dev` uses `next dev --webpack` instead of Turbopack.
- **Termux / Android ARM64 production build:** `npm run build` uses `next build --webpack`.
- Added `npm run dev:turbopack` for supported native platforms where Turbopack is available.
- `sync:config` now preserves the existing local `config/` when GitHub/DNS is temporarily unavailable on a local machine.
- `sync:assets` now preserves existing local assets and reports missing downloads without destroying working files during offline development.
- In CI/GitHub Actions, synchronization remains strict: a failed sync causes the job to fail.

## Local development

```bash
npm install
npm run sync:config
npm run sync:assets
npm run typecheck
npm run build
npm run dev
```

If Termux has no DNS/network access, `sync:config` and `sync:assets` can continue using already-present local files. After connectivity is restored, rerun both commands to refresh them.

### Termux / Android

Next.js 16.3.7 Turbopack requires native bindings that are not available for Android/ARM64 in this environment. Therefore the default development and production build commands intentionally use Webpack.

```bash
rm -rf .next
npm run dev
```

Do **not** downgrade Next.js solely for this issue.

## GitHub Pages

The workflow builds the app and deploys the generated `out/` directory through GitHub Pages Actions. Set **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The CI environment has network access, so configuration/assets synchronization is strict there.

## Configuration architecture

Public configuration is maintained in `snbhante/snbhante` under `config/`; this repository contains the application and deployment pipeline.

```text
snbhante
  └── public configuration / content source
          │ repository_dispatch / CI sync
          ▼
snbhante.github.io
  ├── Next.js App Router
  ├── TypeScript
  ├── PWA
  ├── static export
  └── GitHub Pages deployment
```

## Static-hosting limitation

GitHub Pages serves static files. The retained Login/Dashboard UI is therefore a local demo session, not secure authentication. Real authentication, secrets, server actions, API routes, and database operations require a separate backend or hosted Next.js runtime.
