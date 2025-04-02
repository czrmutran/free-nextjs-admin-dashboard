'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/home/ScrollToTop';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <div className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
