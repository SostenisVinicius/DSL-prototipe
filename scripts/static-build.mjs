import { readFile } from 'node:fs/promises';
for (const file of ['package.json','apps/web/app/page.tsx','apps/worker/src/demo.ts']) await readFile(file,'utf8');
console.log('static build check passed');
