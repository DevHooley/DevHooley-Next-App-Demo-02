'use client';

import { useAppContext } from '@/context';
import { toast } from 'sonner';

export default function Home() {
  const { name, setName } = useAppContext();
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-6xl text-green-500 mb-6 text-center">
            Client Store
          </h1>
          <div className="flex flex-col justify-center items-center">
            <div className="text-gray-800 ">{name}</div>
            <button
              onClick={() => setName('Livia Thevenard')}
              className="inline-block px-6 py-3 bg-green-400 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-green-500 active:shadow-inner active:scale-100"
            >
              Change Name
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
