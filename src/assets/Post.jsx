 import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Post() {

  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content:
        "React is a JavaScript library used to build fast and interactive user interfaces. It allows developers to create reusable components and manage data efficiently."
    },
    {
      id: 2,
      title: "Understanding Components",
      content:
        "Components are the reusable building blocks of a React application. Each component controls a part of the UI and can be reused multiple times."
    }
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (

    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <br />

      <Link to="/">
        ← Back to Home
      </Link>

    </div>

  );
}