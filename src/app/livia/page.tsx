'use client';
import Image from 'next/image';

const imageContext = require.context('../../../public/', false, /\.(jpeg)$/);
const images: string[] = imageContext
  .keys()
  .map((key: string) => imageContext(key));

export default function LiviaGallery() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Livia
          </h2>
          <h1 className="font-bold text-6xl text-sky-600 mb-6 text-center">
            Gallery
          </h1>
          <div className="flex flex-wrap justify-center p-4 lg:p-8">
            {images.map((image: string, index: number) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ paddingBottom: '5%' }}
                >
                  <Image
                    alt="Livia Cycling"
                    src={image}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: '100%',
                      borderRadius: '0.25rem',
                    }}
                    width={500} // Set a fixed width (this can be adjusted based on your design)
                    height={250} // Set a fixed height (this can be adjusted based on your design)
                    className="rounded-lg"
                  />
                </div>
                <p className="text-3xl font-bold text-center text-gray-800 mb-6"></p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
