'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/reset-password/', {
        email,
        token,
        password,
      });

      setSuccess('Senha alterada com sucesso! Você pode fazer login.');
    } catch {
      setSuccess('Erro ao redefinir senha.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Redefinir Senha</h2>
        <input
          type="password"
          placeholder="Nova senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded border"
          required
        />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          Redefinir senha
        </button>
        {success && <p className="mt-4 text-center">{success}</p>}
      </form>
    </div>
  );
}
