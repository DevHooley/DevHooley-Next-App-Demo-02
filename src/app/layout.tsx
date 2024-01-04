import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { AppWrapper } from '@/context';

import './globals.css';
import Navigation from '@/components/Navigation/navigation';
import { use } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My application main title',
  description: 'This is the main description of the application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-100 flex items-center justify-center text-sky-800 px-4 py-2">
          <Link
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
            href="/"
          >
            CodingWithDevHooley.com
          </Link>
        </header>
        <AppWrapper>
          <Navigation />
          {children}
          <Toaster richColors position="top-center" />
        </AppWrapper>
      </body>
    </html>
  );
}
