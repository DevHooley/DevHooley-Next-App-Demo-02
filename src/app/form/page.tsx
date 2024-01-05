export default function Form() {
  async function savePost(data: FormData) {
    'use server';

    const title = data.get('title');
    const description = data.get('description');

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
      }),
      cache: 'no-cache',
    });

    if (response.ok) {
      const posts = await response.json();
      console.log(posts);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center  bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl  bg-white rounded-lg shadow-md">
          <form action={savePost} className="grid gap-4">
            <h1 className="font-bold text-6xl text-orange-500 mb-6 text-center">
              Post Form
            </h1>
            <input
              type="text"
              className="p-2 border text-gray-800 rounded-md"
              name="title"
              placeholder="Title"
            />
            <textarea
              className="p-2 border text-gray-800 rounded-md"
              name="description"
              placeholder="description"
            />
            <button
              className="px-4 py-2 bg-orange-400 text-white rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 active:bg-orange-500 active:shadow-inner active:scale-100"
              type="submit"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
