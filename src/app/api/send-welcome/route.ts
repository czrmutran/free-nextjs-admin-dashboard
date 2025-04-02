// /app/api/send-welcome/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `
    <h2>Olá, ${name} 👋</h2>
    <p>Bem-vindo ao Imazon Forms!</p>
    <p>Agora você pode explorar todos os recursos da plataforma.</p>
    <p>🚀 Em caso de dúvidas, estamos aqui para te ajudar!</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Imazon Forms" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 Bem-vindo ao Imazon Forms!',
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
