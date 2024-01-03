import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
        <header className="px-8 py-5 text-xl ">
          <Link href="/">CodingWithDevHooley.com</Link>
        </header>
        <nav className="px-8 py-2">
          <ul className="flex space-x-4">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/profile/posts">Post</Link>
            </li>
            <li>
              <Link href="/posts/12">Posts</Link>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
