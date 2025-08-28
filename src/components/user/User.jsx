import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.scss";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div className="users">
      <div className="container">
      {data.map(user => (
        <div className="user_card" key={user.id} style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Users;
