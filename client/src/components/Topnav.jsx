import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";

const Topnav = () => {
    const [username,setUsername]=useState("")
  return (
    <div className="Topnav">
      <div className="items" id="logo">
        ShopeAll
      </div>
      <div className="items">
        <div className="inputfield">
          <input type="text" placeholder="search" />
          <FaSearch style={{ color: "#009fc7" }} />
        </div>
      </div>

      <div className="right">
        {username ? (
          <>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <FaShoppingCart size={40} color="white" />
              <div id="carticon">1</div>
            </Link>
            <Link to="/profile">
              <div className="profile"></div>
            </Link>
          </>
        ) : (
          <div className="button">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topnav;
