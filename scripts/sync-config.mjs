import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const source = process.env.CONFIG_REPOSITORY ?? 'https://github.com/snbhante/snbhante.git';
const ref = process.env.CONFIG_REF ?? 'main';
const temp = path.resolve('.config-source');
const dst = path.resolve('config');
const required = process.env.CONFIG_SYNC_REQUIRED === 'true' || process.env.CI === 'true';

fs.rmSync(temp, { recursive: true, force: true });

try {
  execFileSync('git', ['clone', '--depth', '1', '--branch', ref, source, temp], { stdio: 'inherit' });
  const src = path.join(temp, 'config');

  if (!fs.existsSync(src)) {
    throw new Error(`Configuration directory not found in ${source}@${ref}`);
  }

  const staged = path.resolve('.config-staged');
  fs.rmSync(staged, { recursive: true, force: true });
  fs.cpSync(src, staged, { recursive: true });
  fs.rmSync(dst, { recursive: true, force: true });
  fs.renameSync(staged, dst);

  console.log(`Configuration synchronized from ${source}@${ref}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);

  if (required || !fs.existsSync(dst)) {
    console.error(`Configuration synchronization failed: ${message}`);
    process.exitCode = 1;
  } else {
    console.warn(`Configuration synchronization skipped: ${message}`);
    console.warn('Using the existing local config/ directory. This is expected when Termux has no network/DNS access.');
  }
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
  fs.rmSync(path.resolve('.config-staged'), { recursive: true, force: true });
}
