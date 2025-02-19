import { DM_Sans } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Notifications } from '@/components/notification';
import { Sidebar } from '@/components/sidebar/sidebar';
import QueryProvider from '@/providers/react-query-provider';

import './globals.css';

const dm_sans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${dm_sans.variable}`}>
      <body className="flex min-h-screen">
        <Notifications />
        <QueryProvider>
          <Sidebar />
          <main className="grid w-full grid-rows-[80px_1fr_auto] bg-base-25">
            <Header />
            <div className="">{children}</div>
            <Footer />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
