// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'My page title',
//   description: 'This is the page description',
//   openGraph: {
//     title: 'My page title',
//     description: 'This is the page description',
//     url: 'mywebsite.com',
//     siteName: 'CodingWithDevHooley.com',
//     images: [
//       {
//         url: 'https://www.example.ie/og-image-01.jpg',
//         width: 1260,
//         height: 1260,
//         alt: 'Og Image Alt',
//       },
//     ],
//   },
// };

'use client';

import { useAppContext } from '@/context';

export default function Home() {
  const { name, setName } = useAppContext();
  return (
    <main className="bg-gray-100 h-screen flex flex-col items-center  p-4 sm:p-8">
      <h1 className="text-2xl text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Welcome to CodingWithDevHooley.com
      </h1>
      <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-center">
        This is the main page of our application. Explore the following links to
        navigate to different sections these are all example of different
        features and libraries, tools and functions
      </p>
    </main>
  );
}
