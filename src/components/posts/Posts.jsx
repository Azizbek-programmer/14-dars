import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.scss";

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setData(res.data.slice(0, 10))) 
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div className="posts">
      <h2 className="posts__title">Posts</h2>
      <div className="container">
      {data.map(post => (
        <div className="posts__card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Posts;
