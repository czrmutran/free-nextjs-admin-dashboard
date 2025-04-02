// layout.tsx
import '../../app/globals.css';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'Imazon Forms',
  description: 'Formulários inteligentes para Imazon',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
