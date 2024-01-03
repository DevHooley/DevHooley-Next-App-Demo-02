'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Profile page id: {params.id}
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <div
              className="text-xl font-bold text-gray-800 mb-6"
              onClick={() => router.push('/profile')}
            >
              Back to main page
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
