import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import ClientPersistGate from './components/ClientPersistGate';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Streaming App',
  description: 'This is my description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ClientPersistGate>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </ClientPersistGate>
        </body>
      </html>
    </Provider>
  );
}
