import React from "react";

const PostDetailPage = async ({ params }) => {
  //   console.log(params.postId);
  const res = await fetch(`http://localhost:5000/posts/${params.postId}`);
  const post = await res.json();
  return (
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
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
