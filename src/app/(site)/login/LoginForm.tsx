'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { saveToken } from '@/utils/auth';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('token/', {
        email: formData.email,
        password: formData.password,
      });

      saveToken(response.data.access);
      document.cookie = `token=${response.data.access}; path=/; secure; samesite=lax`;
      router.push('/dashboard');
    } catch (err: any) {
      setError('E-mail ou senha inválidos.');
    }
  };

  return (
    <section className="relative z-10 min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center px-4 py-20">
      {/* SVG  */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
  <svg width="100%" height="100%" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bgGlow" cx="0.7" cy="0.2" r="0.6">
        <stop offset="0%" stopColor="#00FF88" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="bgBottom" cx="0.2" cy="0.8" r="0.7">
        <stop offset="0%" stopColor="#027B3F" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#027B3F" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="1440" cy="0" r="450" fill="url(#bgGlow)" />
    <circle cx="100" cy="800" r="400" fill="url(#bgBottom)" />
  </svg>
</div>



      <div className="w-full max-w-md rounded-xl bg-white/80 shadow-2xl backdrop-blur-md p-8 dark:bg-white/5">
        <h3 className="mb-3 text-center text-3xl font-bold text-black dark:text-white">Login</h3>
        <p className="mb-8 text-center text-base text-gray-600 dark:text-gray-300">
          Acesse sua conta para continuar no Imazon Forms
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-[#027B3F] focus:ring-1 focus:ring-[#027B3F] dark:border-gray-600 dark:bg-[#1C1C1C] dark:text-gray-100"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Senha
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-800 shadow-sm outline-none focus:border-[#027B3F] focus:ring-1 focus:ring-[#027B3F] dark:border-gray-600 dark:bg-[#1C1C1C] dark:text-gray-100"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 dark:text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="text-sm text-center text-gray-600 dark:text-gray-400">
            Esqueceu sua senha?{' '}
            <Link href="/forgot-password" className="text-[#027B3F] hover:underline">
              Redefinir
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#027B3F] py-3 text-white font-semibold shadow-lg hover:bg-[#025c30] transition"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Ainda não tem uma conta?{' '}
            <Link href="/register" className="text-[#027B3F] hover:underline">
              Registrar
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
