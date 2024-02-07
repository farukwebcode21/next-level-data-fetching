import Image from "next/image";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  return (
    <div className="w-full">
      <h1>Total Posts:{posts.length}</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className=" w-[70%] card mx-auto bg-gray-200-100 shadow-xl py-2"
        >
          <figure></figure>
          <div className="card-body ">
            <h2 className="card-title">
              {post.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{post.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                Posted by: {post.author}
              </div>
              <div className="badge badge-outline">Linke:{post.like}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
