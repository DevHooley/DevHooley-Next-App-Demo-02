export default function ProfileIDPostID({
  params,
}: {
  params: { profileid: string; postid: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex p-8 pt-8 items-center justify-center bg-gray-100">
        <main className="px-4 py-2 sm:px-8 sm:py-3 text-lg md:text-xl bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-gray-800 font-bold text-center mb-4">
              Profile ID: {params.profileid} Post ID: {params.postid}
            </h1>
            {/* Add content related to the post details here */}
          </div>
        </main>
      </div>
    </div>
  );
}
