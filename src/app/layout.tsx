import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My application main title',
  description: 'This is the main description of the application',
};

const linkStyle =
  'inline-block w-full px-6 py-3 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-100 flex items-center justify-center text-sky-800 px-8 py-5 text-xl">
          <Link href="/">CodingWithDevHooley.com</Link>
        </header>
        <nav className="bg-gray-100 px-8 py-2">
          <ul className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            <li className="flex-shrink-0">
              <Link className={linkStyle} href="/profile">
                Profile
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link className={linkStyle} href="/profile/posts">
                Post
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link className={linkStyle} href="/posts/12">
                Posts
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link className={linkStyle} href="/call/clientsiderender">
                client call
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link className={linkStyle} href="/call/serversiderender">
                server call
              </Link>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
