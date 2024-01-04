import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-100 py-2 flex items-center overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 pr-6 pl-6 p-2">
        <ul className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-gray-800 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-black active:shadow-inner active:scale-100"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-orange-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-orange-600 active:shadow-inner active:scale-100"
              href="/form"
            >
              Form
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/profile/posts"
            >
              Post
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/posts/12"
            >
              Posts
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2  bg-green-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-green-600 active:shadow-inner active:scale-100"
              href="/store"
            >
              Store
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2  bg-purple-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-purple-600 active:shadow-inner active:scale-100"
              href="/zustand"
            >
              Zustand
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/call/clientsiderender"
            >
              client call
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-amber-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105  transition-transform duration-300 active:bg-amber-600 active:shadow-inner active:scale-100"
              href="/call/serversiderender"
            >
              server call
            </Link>
          </li>
          <li className="flex-shrink-0">
            <Link
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl inline-block w-full px-3 py-2 bg-sky-500 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-sky-600 active:shadow-inner active:scale-100"
              href="/livia
                "
            >
              Photo Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
