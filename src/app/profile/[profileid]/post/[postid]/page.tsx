export default function ProfileIDPostID({
  params,
}: {
  params: { profileid: string; postid: string };
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Profile ID: {params.profileid} Post ID: {params.postid}
        </h1>
      </div>
    </div>
  );
}