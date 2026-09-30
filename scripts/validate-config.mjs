import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const names = ['site','person','social','navigation','skills','projects','youtube'];
const data = Object.fromEntries(names.map((name) => {
  const file = path.join(root, 'config', `${name}.json`);
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
  return [name, JSON.parse(fs.readFileSync(file, 'utf8'))];
}));
const required = {
  site: ['name','title','description','url'],
  person: ['name','roles','bio'],
  social: ['github','portfolio','youtube','email'],
  navigation: ['items'],
  skills: ['groups'],
  projects: ['items'],
  youtube: ['channelId','handle']
};
for (const [section, keys] of Object.entries(required)) {
  for (const key of keys) if (!(key in data[section])) throw new Error(`Missing ${section}.${key}`);
}
console.log(`Configuration OK: ${names.length} sections validated.`);
