import React from "react";
import "./Header.scss";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <nav>
        <button 
          onClick={() => setPage("posts")} >Posts</button>
        <button 
          onClick={() => setPage("products")} >
          Products
        </button>
        <button 
          onClick={() => setPage("users")} >
          Users
        </button>
      </nav>
    </header>
  );
};

export default Header;
