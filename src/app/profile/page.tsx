'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();

  console.log('router');
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My list of profiles</h1>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/profile/1">Profile 1</Link>
        <Link href="/profile/2">Profile 2</Link>
        <Link
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
        ></Link>
        <div>A big Square with some text</div>
        <a href="/profile/4">Profile 3</a>
      </div>
    </div>
  );
}
