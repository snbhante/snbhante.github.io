# v3.0.0 migration notes

## Changes from the previous release

1. Default development command changed from `next dev` to `next dev --webpack` for Android/ARM64 Termux compatibility.
2. Production build changed from `next build` to `next build --webpack` for the same reason.
3. Added `dev:turbopack` as an explicit opt-in command for platforms with supported Turbopack native bindings.
4. `sync:config` no longer deletes the working `config/` before a network clone succeeds. Offline local runs now retain the existing configuration.
5. `sync:assets` preserves existing assets and treats network download failures as warnings locally; CI remains strict.
6. Version bumped to `3.0.0`.

## Expected Termux commands

```bash
npm install
npm run sync:config
npm run sync:assets
npm run typecheck
npm run build
npm run dev
```

The expected build path is `next build --webpack`, and the expected dev path is `next dev --webpack`.
