import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
async function files(dir){return (await readdir(dir,{withFileTypes:true})).flatMap(d=>d.isDirectory()?[]:[join(dir,d.name)]);}
const routes=await readFile('src/app/app.routes.ts','utf8');
if(routes.includes('bootstrap')||routes.includes('primeng')||routes.includes('@angular/material')) throw new Error('Forbidden UI dependency');
console.log('static Angular template check passed');
