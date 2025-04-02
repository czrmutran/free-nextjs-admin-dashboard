'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Remove token do localStorage e cookies
    localStorage.removeItem('token');
    document.cookie = 'token=; Max-Age=0; path=/';

    const timeout = setTimeout(() => {
      router.replace('/login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081135FF] to-[#042274FF] text-white px-4">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl flex flex-col items-center">
        <Image src="/logo.svg" alt="Logo" width={80} height={80} className="mb-6" />
        <Loader2 className="animate-spin w-10 h-10 text-white mb-4" />
        <p className="text-xl font-semibold">Saindo da conta...</p>
        <p className="text-sm opacity-80 mt-2">Você será redirecionado em instantes</p>
      </div>
    </div>
  );
}