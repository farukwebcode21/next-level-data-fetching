import Link from "next/link";

const getPosts = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
    next: { revalidate: 20 },
  });
  if (!res.ok) throw new Error("Failed to fetch posts ");
  return res.json();
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="w-full mx-auto">
      <h1 className="text-center py-4 text-2xl font-bold uppercase text-green-600 underline">
        Total Posts:{posts.slice(0, 6).length}
      </h1>
      {posts.slice(0, 6).map((post) => (
        <div
          key={post.id}
          className=" w-[70%] card mx-auto bg-gray-200-100 shadow-xl py-2"
        >
          <div className="card-body ">
            <h2 className="card-title">
              {post.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{post.description}</p>
            <br></br>
            <h3 className="text-green-700 font-bold underline">
              Posted by:{post.author}
            </h3>
            <div className="card-actions justify-end">
              <div className="btn btn-success w-40">Like:{post.like}</div>
              <div className="py-3 px-3 border bg-red-500 text-white">
                <Link href={`posts/${post.id}`}>See More</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
