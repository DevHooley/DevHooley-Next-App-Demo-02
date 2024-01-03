'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Profile page id: {params.id}</h1>
      <div onClick={() => router.push('/profile')}>back to main page</div>
    </div>
  );
}
