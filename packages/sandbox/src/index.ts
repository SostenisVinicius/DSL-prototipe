import { mkdir, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
export type AllowedCommand='INSTALL_LOCKFILE'|'FORMAT'|'LINT'|'TEST'|'BUILD'|'ZIP';
export interface Workspace { path:string; }
export interface CreateWorkspaceInput { path:string; }
export interface CommandResult { command:AllowedCommand; exitCode:number; stdout:string; stderr:string; }
export interface GenerationSandbox { createWorkspace(input:CreateWorkspaceInput):Promise<Workspace>; runAllowedCommand(workspace:Workspace,command:AllowedCommand):Promise<CommandResult>; destroyWorkspace(workspace:Workspace):Promise<void>; }
const commands:Record<AllowedCommand,string[]>={INSTALL_LOCKFILE:['npm','ci','--ignore-scripts'],FORMAT:['npm','run','lint'],LINT:['npm','run','lint'],TEST:['npm','run','test'],BUILD:['npm','run','build'],ZIP:['node','-e','console.log("zip allowed")']};
export class LocalGenerationSandbox implements GenerationSandbox { async createWorkspace(input:CreateWorkspaceInput){await mkdir(input.path,{recursive:true}); return {path:input.path};} async runAllowedCommand(workspace:Workspace,command:AllowedCommand){ const [cmd,...args]=commands[command]; return new Promise<CommandResult>(resolve=>{ const child=spawn(cmd!,args,{cwd:workspace.path}); let stdout='',stderr=''; child.stdout.on('data',d=>stdout+=String(d)); child.stderr.on('data',d=>stderr+=String(d)); child.on('close',code=>resolve({command,exitCode:code??1,stdout,stderr}));});} async destroyWorkspace(workspace:Workspace){await rm(workspace.path,{recursive:true,force:true});}}
