import { Grand_Hotel as GrandHotel, Inter } from 'next/font/google';

import type { Metadata } from 'next';
import '~/styles/globals.css';

import { Toaster } from '~/components/ui/sonner';

const grandHotel = GrandHotel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`font-sans ${inter.variable} ${grandHotel.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
