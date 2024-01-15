// /* eslint-disable @next/next/no-img-element */
// 'use client';

// import Image from 'next/image';
// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// // @ts-ignore
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navigation() {
//   return (
//     <Disclosure as="nav" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 justify-between">
//               <div className="flex">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                   {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                   <a
//                     href="/livia"
//                     className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-900"
//                   >
//                     Livia Gallery
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Team
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Projects
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Calendar
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:items-center">
//                 {/* <button
//                   type="button"
//                   className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button> */}

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   {/* <div>
//                     <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div> */}
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//               <div className="-mr-2 flex items-center sm:hidden">
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 pb-3 pt-2">
//               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//               <Disclosure.Button
//                 as="a"
//                 href="/livia"
//                 className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
//               >
//                 Livia Gallery
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Team
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Projects
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
//               >
//                 Calendar
//               </Disclosure.Button>
//             </div>
//             <div className="border-t border-gray-200 pb-3 pt-4">
//               {/* <div className="flex items-center px-4">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-10 w-10 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-gray-800">
//                     Tom Cook
//                   </div>
//                   <div className="text-sm font-medium text-gray-500">
//                     tom@example.com
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div> */}
//               <div className="mt-3 space-y-1">
//                 {/* <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//                 >
//                   Your Profile
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//                 >
//                   Settings
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//                 >
//                   Sign out
//                 </Disclosure.Button> */}
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

//  old example

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex items-center overflow-x-auto whitespace-nowrap bg-gray-100 py-2">
      <div className="flex space-x-4 p-2 px-6 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
        <ul className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-gray-800 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-black active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-orange-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-orange-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/form"
            >
              Form
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-sky-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-sky-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-sky-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-sky-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/profile/posts"
            >
              Post
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-sky-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-sky-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/posts/12"
            >
              Posts
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-green-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-green-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/store"
            >
              Store
            </Link>
          </li>
          <li className="fhrink-0">
            <Link
              className="inline-block w-full rounded-md bg-purple-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-purple-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/zustand"
            >
              Zustand
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-sky-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-sky-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/call/clientsiderender"
            >
              client call
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-amber-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100  active:bg-amber-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
              href="/call/serversiderender"
            >
              server call
            </Link>
          </li>
          <li className="shrink-0">
            <Link
              className="inline-block w-full rounded-md bg-sky-500 px-3 py-2 text-2xl text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg active:scale-100 active:bg-sky-600 active:shadow-inner sm:text-4xl md:text-5xl lg:text-6xl"
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
