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
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';

const imageContext = require.context('../../public/', false, /\.(jpeg)$/);
const images: string[] = imageContext
  .keys()
  .map((key: string) => imageContext(key));

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center p-4 lg:p-8">
      {images.map((image: string, index: number) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ paddingBottom: '50%' }}
          >
            <Image
              src={image}
              width={500} // Set your desired fixed width
              height={250} // Set your desired fixed height
              alt="Livia Cycling"
              style={{ width: '100%', borderRadius: '0.25rem' }}
              className="rounded-lg"
            />
            <Link href={`/profile/1/post/2`}>GO TO MY DYNAMIC PAGE</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

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
