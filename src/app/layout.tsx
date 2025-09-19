import type { Metadata } from 'next';
import '../styles/globals.css';

import Sidebar from '@/components/layout/Sidebar';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import { I18nProvider } from '@/providers/I18nProvider';

export const metadata: Metadata = {
  title: 'ARQA Mini Analytics',
  description: 'Мини-приложение аналитики для заказов и клиентов',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <QueryProvider>
            <I18nProvider>
              <div className="flex">
                {/* Sidebar слева */}
                <Sidebar />
                {/* Основной контент справа */}
                <main className="flex-1 p-4">{children}</main>
              </div>
            </I18nProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
