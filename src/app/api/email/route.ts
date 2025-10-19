import { NextResponse } from 'next/server';
import { SendEmail } from '@/api/email';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const response = await SendEmail(data);
    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error('Erro na rota /api/email:', error);
    return NextResponse.json({ success: false, message: (error as Error).message }, { status: 500 });
  }
}
