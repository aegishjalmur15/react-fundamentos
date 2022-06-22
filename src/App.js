import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";


function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Title01", subtitle: "subtitle01", likes: 20 },
    { id: Math.random(), title: "Title02", subtitle: "subtitle02", likes: 10 },
    { id: Math.random(), title: "Title03", subtitle: "subtitle03", likes: 15 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleRemove(postId) {
    console.log(postId);
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />
      {posts.map((post) => {
        return (
          <Post
            onRemove={handleRemove}
            key={post.id}
            post={{ id:post.id, title: post.title, subtitle: post.subtitle }}
            likes={post.likes}
          />
        );
      })}
    </>
  );
}

export default App;
