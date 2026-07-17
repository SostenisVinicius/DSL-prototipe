import { mkdir, writeFile } from 'node:fs/promises';
import { demoComponents } from '@dsl/design-system-registry';
const prompts=[{type:'list-page',title:'listagem de contratos'},{type:'form-page',title:'formulário de cadastro de fornecedor'},{type:'detail-page',title:'detalhe de usuário'}];
await mkdir('storage',{recursive:true}); await writeFile('storage/seed.json',JSON.stringify({user:{email:'dev@example.com',password:'dev123'},designSystem:'Demo DS',version:'1.0.0',components:demoComponents,prompts},null,2)); console.log('seed written storage/seed.json');
