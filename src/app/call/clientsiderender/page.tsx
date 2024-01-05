'use client';

import { toast } from 'sonner';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getBaseUrl } from '@/utils/getBaseUrl';

export default function CSR() {
  const [num, setNum] = useState(null);

  const call = async () => {
    const base = getBaseUrl();
    const response = await fetch(
      `${base}/api/random`,
      // ***** Default - cache: 'no-store', *****
      {
        cache: 'no-store',
      }
    );
    const { random } = await response.json();
    setNum(random);
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Client Side
          </h2>
          <h1 className="font-bold text-6xl text-amber-500 mb-6 text-center">
            Client Component
          </h1>
          <p className="text-3xl font-bold text-center text-gray-800 mb-6">
            {num}
          </p>
          <ul className="flex items-center justify-center">
            <div className="flex flex-col items-start space-y-4"></div>
            <li className="mr-4">
              <Link
                className="inline-block px-6 py-3 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
                href="/call/serversiderender"
              >
                Server Component
              </Link>
            </li>
            {/* Add more navigation links if needed */}
          </ul>
          <div className="p-2 flex items-center justify-center">
            <button
              onClick={() => toast.success('Success!')}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block px-3 py-2 bg-amber-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105  transition-transform duration-300 active:bg-amber-600 active:shadow-inner active:scale-100"
            >
              Notify me!
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
