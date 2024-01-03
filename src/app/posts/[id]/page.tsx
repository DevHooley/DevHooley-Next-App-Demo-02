// ********************** 1st way **********************

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
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
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
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
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
