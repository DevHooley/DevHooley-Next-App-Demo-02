// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'My page title',
//   description: 'This is the page description',
//   openGraph: {
//     title: 'My page title',
//     description: 'This is the page description',
//     url: 'mywebsite.com',
//     siteName: 'CodingWithDevHooley.com',
//     images: [
//       {
//         url: 'https://www.example.ie/og-image-01.jpg',
//         width: 1260,
//         height: 1260,
//         alt: 'Og Image Alt',
//       },
//     ],
//   },
// };

'use client';

import { useAppContext } from '@/context';

export default function Home() {
  const { name, setName } = useAppContext();
  return (
    <main className="bg-gray-100 h-screen flex flex-col items-center  p-4 sm:p-8">
      <h1 className="text-2xl text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Welcome to CodingWithDevHooley.com
      </h1>
      <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-center">
        This is the main page of our application. Explore the following links to
        navigate to different sections:
      </p>
      <div className="flex flex-col justify-center items-center">
        <div className="text-gray-800 ">{name}</div>
        <button
          onClick={() => setName('Livia Thevenard')}
          className="inline-block px-6 py-3 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
        >
          Change Name
        </button>
      </div>
    </main>
  );
}

// *******THIS IS THE ORIGINAL CODE FROM THE TUTORIAL********

// ('use client');

// import { useState } from 'react';

// export default function Home() {
//   const [loading, setLoading] = useState(false);
//   const fetchDataFromApi = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/users', {
//         headers: {
//           accept: 'application/json',
//           method: 'GET',
//         },
//       });
//       if (response) {
//         const data = await response.json();
//         console.log(data);
//       }
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <button
//         onClick={fetchDataFromApi}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         {loading ? 'Loading...' : 'Fetch Data'}
//       </button>
//     </div>
//   );
// }

// *******THIS IS THE ORIGINAL CODE FROM THE TUTORIAL********

// import Image from 'next/image';
// import Link from 'next/link';

// const imageContext = require.context('../../public/', false, /\.(jpeg)$/);
// const images: string[] = imageContext
//   .keys()
//   .map((key: string) => imageContext(key));

// export default function Home() {
//   return (
//     <div className="flex flex-wrap justify-center p-4 lg:p-8">
//       {images.map((image: string, index: number) => (
//         <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
//           <div
//             className="relative rounded-lg overflow-hidden"
//             style={{ paddingBottom: '50%' }}
//           >
//             <Image
//               src={image}
//               width={500} // Set your desired fixed width
//               height={250} // Set your desired fixed height
//               alt="Livia Cycling"
//               style={{ width: '100%', borderRadius: '0.25rem' }}
//               className="rounded-lg"
//             />
//             <Link href={`/profile/1/post/2`}>GO TO MY DYNAMIC PAGE</Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// 'use client';

// import Image from 'next/image';
// import liv01 from '../../public/LiviaCycling01.jpeg';

// export default function Home() {
//   return (
//     <div>
//       <div className="w-[500px]">
//         <Image src={'/NextLogo.png'} width={36} height={36} alt="Next Logo" />
//         <Image src={liv01} width={1000} height={500} alt="Livia Cycling" />
//       </div>
//     </div>
//   );
// }

// import Image from 'next/image';

// const imageContext = require.context('../../public/', false, /\.(jpeg)$/);
// const images: string[] = imageContext
//   .keys()
//   .map((key: string) => imageContext(key));

// export default function Home() {
//   return (
//     <div className="flex flex-wrap justify-center p-4 lg:p-8">
//       {images.map((image: string, index: number) => (
//         <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
//           <Image
//             src={image}
//             width={500} // Set your desired fixed width
//             height={250} // Set your desired fixed height
//             alt="Livia Cycling"
//             style={{ width: '100%', borderRadius: '0.25rem' }}
//             className="rounded-lg"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
