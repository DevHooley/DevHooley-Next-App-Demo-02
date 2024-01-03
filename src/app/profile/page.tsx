'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  console.log('router');
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">My list of profiles</h1>
          <div className="flex text-gray-800 flex-col items-center space-y-4">
            <Link className="link" href="/profile/1">
              Profile 1
            </Link>
            <Link className="link" href="/profile/2">
              Profile 2
            </Link>
            <Link
              className="link"
              prefetch={true}
              scroll={false}
              href={{
                pathname: '/profile/3',
                query: {
                  username: 'Livia',
                  userId: '12',
                  person: JSON.stringify({
                    name: 'Livia',
                    age: 34,
                  }),
                },
              }}
            >
              Profile 3
            </Link>
            <div className="bg-gray-300 p-6 rounded-md">
              A big Square with some text
            </div>
            <a className="link" href="/profile/4">
              Profile 4
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
