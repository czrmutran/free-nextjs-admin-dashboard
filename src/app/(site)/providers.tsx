// src/app/providers.tsx (ou onde você tiver criado o wrapper)
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"  // ou 'light' ou 'dark'
      enableSystem={true}
      storageKey="theme"     // opcional: usa localStorage com chave 'theme'
    >
      {children}
    </ThemeProvider>
  );
}