// ********************** 1st way **********************

import { getBaseUrl } from '@/utils/getBaseUrl';

// 'use client';

// import { useEffect, useState } from 'react';

// type Post = {
//   title?: string;
//   description?: string;
// };

// export default function PostID({ params }: any) {
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState(false);

//   // async function getPostById(postId: string) {
//   //   const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
//   //     method: 'GET',
//   //   });
//   //   return response.json();
//   // }
//   // const { post } = await getPostById(params.id);

//   const getPostById = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:3000/api/posts/${params.id}`,
//         {
//           method: 'GET',
//         }
//       );

//       if (response) {
//         const { post } = await response.json();
//         if (post) {
//           setPost(post);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPostById();
//   }, []);

//   return (
//     <main>
//       {loading && <div>loading</div>}
//       {!loading && (
//         <div>
//           {post && <h1>{post.title}</h1>}
//           {post && <p>{post.description}</p>}
//         </div>
//       )}
//     </main>
//   );
// }

// ********************** 2nd way **********************

async function getPostById(postId: string) {
  const base = getBaseUrl();
  const response = await fetch(`${base}/api/posts/${postId}`, {
    method: 'GET',
    next: {
      revalidate: 5000,
    },
  });

  return response.json();
}

export default async function PostID({ params }: any) {
  const { post } = await getPostById(params.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-4xl text-gray-800 font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-gray-800 text-lg">{post.description}</p>
            {/* Add more content related to the post here */}
          </div>
        </main>
      </div>
    </div>
  );
}

// const fetchPost = async (postId: string) => {
//   const post = await fetch(`/api/posts/${postId}`, {
//     method: 'GET',
//   });
//   return post.json();
// };

// export async function generateMetadata({ params }: any) {
//   const { post } = await fetchPost(params.id);

//   // [ { title: 'My first post', id: '1' } ]

//   return {
//     title: post[0].title,
//     description: post[0].description,
//   };
// }

// export default function PostID({ params }: any) {
//   // fetch from here with the params id
//   return <main>Post {params.id}</main>;
// }
