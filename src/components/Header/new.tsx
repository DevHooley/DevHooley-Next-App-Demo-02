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
      <body className={`${inter.className} font-sans text-gray-800`}>
        <header className="bg-blue-500 text-white py-4 px-8 text-xl">
          <Link href="/">
            <a className="text-2xl font-bold">CodingWithDevHooley.com</a>
          </Link>
        </header>
        <nav className="bg-gray-100 py-2 px-8">
          <ul className="flex space-x-4">
            <li>
              <Link href="/profile">
                <a className="hover:underline">Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/profile/posts">
                <a className="hover:underline">Post</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/12">
                <a className="hover:underline">Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/call/clientsiderender">
                <a className="hover:underline">Client Call</a>
              </Link>
            </li>
            <li>
              <Link href="/call/serversiderender">
                <a className="hover:underline">Server Call</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="px-8 py-4">{children}</div>
      </body>
    </html>
  );
}
