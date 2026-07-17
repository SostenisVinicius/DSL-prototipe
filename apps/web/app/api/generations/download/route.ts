import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
export async function GET(){ const body=await readFile('storage/contracts-project.zip'); return new NextResponse(body,{headers:{'content-type':'application/zip','content-disposition':'attachment; filename="contracts-project.zip"'}}); }
