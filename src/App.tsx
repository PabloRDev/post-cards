import React, { useState, useEffect } from "react";

function App() {
  interface post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [postList, setPostList] = useState<post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json: post[]) => setPostList(json));
  }, []);

  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <div>
          <div>
            <li>UserID: {post.userId}</li>
            <li>ID: {post.id}</li>
            <li>Title: {post.title}</li>
            <li>Body: {post.body}</li>
          </div>
          <button type="button">Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
