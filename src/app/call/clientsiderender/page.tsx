'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CSR() {
  const [num, setNum] = useState(null);

  const call = async () => {
    const response = await fetch(
      'http://localhost:3000/api/random',
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
          Client Side
        </h2>
        <h1 className="font-bold text-6xl text-sky-500 mb-6 text-center">
          Client Component
        </h1>
        <p className="text-3xl font-bold text-center text-gray-800 mb-6">
          {num}
        </p>
        <ul className="flex items-center justify-center">
          <li className="mr-4">
            <Link
              className="inline-block px-6 py-3 bg-amber-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-amber-600 active:shadow-inner active:scale-100"
              href="/call/serversiderender"
            >
              Sever Component
            </Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </main>
    </div>
  );
}
