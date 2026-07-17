import { readFile } from 'node:fs/promises';
const required=['packages/screen-dsl/src/index.ts','packages/design-system-registry/src/index.ts','packages/angular-generator/src/index.ts','apps/worker/src/demo.ts','apps/web/app/dashboard/page.tsx'];
for (const file of required) { const text=await readFile(file,'utf8'); if (!text.trim()) throw new Error(`${file} empty`); }
const schema=await readFile('packages/screen-dsl/src/index.ts','utf8');
for (const token of ['additionalProperties:false','list-page','form-page','detail-page','oneOf']) if(!schema.includes(token)) throw new Error(`schema missing ${token}`);
const registry=await readFile('packages/design-system-registry/src/index.ts','utf8');
for (const component of ['ds-table','ds-pagination','ds-empty-state','ds-loading']) if(!registry.includes(component)) throw new Error(`registry missing ${component}`);
const generator=await readFile('packages/angular-generator/src/index.ts','utf8');
for (const token of ['registerRoute','ds-table','ChangeDetectionStrategy.OnPush']) if(!generator.includes(token)) throw new Error(`generator missing ${token}`);
console.log('static tests passed');
