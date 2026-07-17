import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ValidationIssue } from '@dsl/shared';
export async function validateGeneratedProject(workspace:string):Promise<ValidationIssue[]> { const issues:ValidationIssue[]=[]; const routes=await readFile(path.join(workspace,'src/app/app.routes.ts'),'utf8'); for(const token of ['@angular/material','primeng','bootstrap','::ng-deep']) if(routes.includes(token)) issues.push({code:'FORBIDDEN_IMPORT',path:'app.routes.ts',message:`Import proibido ${token}`,severity:'error'}); return issues; }
