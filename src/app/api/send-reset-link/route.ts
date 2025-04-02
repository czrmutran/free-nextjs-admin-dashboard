import { NextResponse } from 'next/server';
import { generateResetToken } from '../../../utils/api-jwt';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { email } = await req.json();

  // ✅ Gera um token JWT para reset de senha
  const token = generateResetToken(email);

  // ✅ Cria a URL com o token e e-mail
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

  // ✅ Configura o transporte SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ✅ Envia o e-mail com o link de redefinição
  await transporter.sendMail({
    from: `"Imazon Forms" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Redefinição de senha',
    html: `
      <p>Olá,</p>
      <p>Recebemos uma solicitação para redefinir sua senha. Clique no botão abaixo para prosseguir:</p>
      <p><a href="${resetUrl}" style="display:inline-block;padding:10px 20px;background:#4A6CF7;color:white;text-decoration:none;border-radius:5px;">Redefinir Senha</a></p>
      <p>Se você não solicitou isso, ignore este e-mail.</p>
    `,
  });

  return NextResponse.json({ success: true });
}
