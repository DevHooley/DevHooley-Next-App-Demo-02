import { getBaseUrl } from '@/utils/getBaseUrl';
import Link from 'next/link';

const getRandomNumber = async () => {
  const base = getBaseUrl();
  const response = await fetch(`${base}/api/random`, {
    // ***** Default - cache: 'force-cache', *****
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
};

export default async function SSR() {
  const { random }: any = await getRandomNumber();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Sever Side
          </h2>
          <h1 className="font-bold text-6xl text-sky-500 mb-6 text-center">
            Server Component
          </h1>
          <p className="text-3xl font-bold text-center text-gray-800 mb-6">
            {random}
          </p>
          <ul className="flex items-center justify-center">
            <li className="mr-4">
              <Link
                className="inline-block px-6 py-3 bg-amber-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-amber-600 active:shadow-inner active:scale-100"
                href="/call/clientsiderender"
              >
                Client Component
              </Link>
            </li>
            {/* Add more navigation links if needed */}
          </ul>
        </main>
      </div>
    </div>
  );
}
