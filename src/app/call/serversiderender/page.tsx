import Link from 'next/link';

const getRandomNumber = async () => {
  const response = await fetch(
    'https://dev-hooley-next-app-demo-02.vercel.app/api/random',
    {
      // ***** Default - cache: 'force-cache', *****

      cache: 'no-store',
    }
  );
  const data = await response.json();
  return data;
};

export default async function SSR() {
  const { random }: any = await getRandomNumber();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
          Server Side
        </h2>
        <h1 className="font-bold text-6xl text-amber-500 mb-6 text-center">
          Server Component
        </h1>
        <p className="text-3xl font-bold text-center text-gray-800 mb-6">
          {random}
        </p>
        <ul className="flex items-center justify-center">
          <li className="mr-4">
            <Link
              className="inline-block px-6 py-3 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/call/clientsiderender"
            >
              Server Component
            </Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </main>
    </div>
  );
}
