import React from "react";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const posts = await getPosts();

export default async function PostsPage() {
  return (
    <main>
      <h1>Posts archive</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </main>
  );
}
