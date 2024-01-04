'use client';

import { userStore } from '@/store/user';
import { stat } from 'fs';

export default function Home() {
  const user = userStore((state: any) => state.user);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-6xl text-purple-500 mb-6 text-center">
            Client Zustand
          </h1>
          <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
            {user.full_name}
          </h2>
        </main>
      </div>
    </div>
  );
}
