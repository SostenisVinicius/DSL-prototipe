import { ScreenDsl } from '@dsl/screen-dsl';
import { pascalCase, slugify } from '@dsl/shared';
export interface AngularImport { symbol:string; from:string; }
export interface AngularSignal { name:string; type:string; initialValue:string; }
export interface AngularComputedSignal { name:string; expression:string; }
export interface AngularHandler { name:string; body:string; }
export interface AngularTemplateRegion { id:string; html:string; }
export interface AngularModelDefinition { name:string; fields:Record<string,string>; }
export interface AngularMockDefinition { name:string; model:string; data:readonly unknown[]; }
export interface AngularPageGenerationModel { className:string; selector:string; fileName:string; route:string; pageType:'list-page'|'form-page'|'detail-page'; imports:AngularImport[]; signals:AngularSignal[]; computedSignals:AngularComputedSignal[]; handlers:AngularHandler[]; templateRegions:AngularTemplateRegion[]; models:AngularModelDefinition[]; mockData:AngularMockDefinition[]; dsl:ScreenDsl; }
export function toAngularPageGenerationModel(dsl:ScreenDsl):AngularPageGenerationModel{ const fileName=slugify(dsl.page.name); const className=`${pascalCase(fileName)}Page`; return {className,selector:`app-${fileName}`,fileName,route:dsl.page.route.replace(/^\//,''),pageType:dsl.page.type,imports:[],signals:dsl.state.map(s=>({name:s.name,type:tsType(s.type),initialValue:JSON.stringify(s.defaultValue)})),computedSignals:[],handlers:[{name:'onNavigate',body:'// Navegação mockada no MVP'}],templateRegions:[],models:dsl.dataSources.map(ds=>({name:ds.model,fields:inferFields(ds.data[0])})),mockData:dsl.dataSources.map(ds=>({name:ds.id,model:ds.model,data:ds.data})),dsl};}
function tsType(t:string){return t==='array'?'readonly unknown[]':t==='object'?'Record<string, unknown>':t;}
function inferFields(row:unknown):Record<string,string>{ if(!row||typeof row!=='object'||Array.isArray(row)) return {}; return Object.fromEntries(Object.entries(row).map(([k,v])=>[k,typeof v==='number'?'number':'string']));}
