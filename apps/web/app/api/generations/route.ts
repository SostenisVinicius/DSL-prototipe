import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
export async function GET(){ try{return NextResponse.json(JSON.parse(await readFile('storage/contracts-generation.json','utf8')));}catch{return NextResponse.json({status:'RECEIVED',logs:[]});}}
export async function POST(){ return NextResponse.json({queued:true,id:'contracts-demo'}); }
