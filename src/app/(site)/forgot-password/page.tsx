'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-reset-link', { email });
      setStatus('Um link foi enviado para seu e-mail.');
    } catch {
      setStatus('Erro ao enviar o link.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Esqueci minha senha</h2>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded border"
          required
        />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          Enviar link de recuperação
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}
