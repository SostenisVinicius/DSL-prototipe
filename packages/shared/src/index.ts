export type JsonValue = null | boolean | number | string | JsonValue[] | { readonly [key: string]: JsonValue };
export type Severity = 'error' | 'warning';
export interface ValidationIssue { code: string; path: string; message: string; severity: Severity; suggestion?: string; }
export type GenerationStage = 'RECEIVED'|'PREPARING_CONTEXT'|'GENERATING_DSL'|'VALIDATING_SCHEMA'|'VALIDATING_SEMANTICS'|'REPAIRING_DSL'|'NORMALIZING_DSL'|'CREATING_GENERATION_MODEL'|'GENERATING_ANGULAR'|'FORMATTING'|'LINTING'|'TESTING'|'BUILDING'|'PACKAGING'|'COMPLETED'|'FAILED';
export interface GenerationLog { stage: GenerationStage; level: 'info'|'warn'|'error'; message: string; createdAt: string; metadata?: Record<string, JsonValue>; }
export const nowIso = (): string => new Date().toISOString();
export const slugify = (value: string): string => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const pascalCase = (value: string): string => slugify(value).split('-').filter(Boolean).map((p)=>p[0]!.toUpperCase()+p.slice(1)).join('');
export const assertNever = (value: never): never => { throw new Error(`Unhandled value ${String(value)}`); };
