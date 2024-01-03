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
        <nav className="bg-gray-100 px-2 py-2 flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 overflow-x-auto whitespace-nowrap">
          <ul className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            <li className="flex-shrink-0">
              <Link
                className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link
                className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/profile/posts"
              >
                Post
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/posts/12"
              >
                Posts
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link
                className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/call/clientsiderender"
              >
                client call
              </Link>
            </li>
            <li className="flex-shrink-0">
              <Link
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/call/serversiderender"
              >
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
