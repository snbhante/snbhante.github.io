# Termux / Android setup

This project is compatible with Termux on Android/ARM64 using the Webpack fallback built into v3.0.0.

```bash
pkg update
pkg install nodejs-lts git
cd ~/snbhante.github.io
npm install
npm run sync:config
npm run sync:assets
npm run typecheck
npm run build
npm run dev
```

If Git reports `Could not resolve host: github.com`, Termux currently has no working DNS/network path to GitHub. The v3.0.0 local sync scripts intentionally keep existing files instead of deleting them.

After connectivity is restored:

```bash
npm run sync:config
npm run sync:assets
npm run typecheck
npm run build
```

The default scripts use:

- `next dev --webpack`
- `next build --webpack`

Turbopack remains available explicitly with `npm run dev:turbopack` on supported platforms.
