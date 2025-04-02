import { NextResponse } from 'next/server';
import { verifyResetToken } from '../../../utils/api-jwt';

export async function POST(req: Request) {
    const { token, password } = await req.json();
  
    const email = verifyResetToken(token); // JWT
    if (!email) {
      return NextResponse.json({ error: 'Token inválido ou expirado' }, { status: 400 });
    }
  
    try {
      const res = await fetch('http://127.0.0.1:8000/api/reset-password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,       // ← O email extraído do token
          password     // ← Nova senha informada no formulário
        }),
      });
  
      if (!res.ok) {
        const error = await res.json();
        return NextResponse.json({ error: error?.error || 'Erro ao redefinir senha' }, { status: 400 });
      }
  
      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json({ error: 'Erro interno ao redefinir senha' }, { status: 500 });
    }
  }
  