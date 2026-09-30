import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const base = process.env.ASSETS_BASE_URL ?? 'https://raw.githubusercontent.com/snbhante/snbhante.github.io/main/assets/';
const assets = [
  'avatar.png', 'snbhante.png', 'monk.gif',
  'logo.svg', 'maskable.svg', 'website.svg', 'responsive.svg',
  'dynamic-logo.svg', 'sammapanna-logo.svg', 'buddha-head.svg',
  'dhamma-wheel.svg', 'screenshot01.png', 'screenshot02.png'
];
const out = path.resolve('public/assets');
fs.mkdirSync(out, { recursive: true });
const required = process.env.ASSETS_SYNC_REQUIRED === 'true' || process.env.CI === 'true';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(new URL(res.headers.location, url).toString(), dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`${res.statusCode} ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => stream.close(resolve));
      stream.on('error', reject);
    });
    req.setTimeout(20000, () => req.destroy(new Error(`timeout ${url}`)));
    req.on('error', reject);
  });
}

let failed = 0;
for (const file of assets) {
  const dest = path.join(out, file);
  if (fs.existsSync(dest)) {
    console.log(`Keeping existing ${file}`);
    continue;
  }
  try {
    console.log(`Downloading ${file}`);
    await download(base + encodeURIComponent(file), dest);
  } catch (error) {
    failed += 1;
    try { fs.rmSync(dest, { force: true }); } catch {}
    console.warn(`Could not download ${file}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

const missing = assets.filter(file => !fs.existsSync(path.join(out, file)));
if (missing.length > 0 && required) {
  console.error(`Asset synchronization failed. Missing: ${missing.join(', ')}`);
  process.exit(1);
}
if (missing.length > 0) {
  console.warn(`Asset synchronization completed with ${failed} missing asset(s).`);
  console.warn('If you are offline in Termux, run this command again after network/DNS access is restored.');
} else {
  console.log(`Assets ready: ${assets.length}`);
}
