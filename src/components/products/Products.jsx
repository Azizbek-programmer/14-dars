import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.scss";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div className="products">
      {/* <div className="container"> */}
      {data.map(item => (
        <div className="products_card" key={item.id}>
          <img src={item.image} alt={item.title}/>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Products;
