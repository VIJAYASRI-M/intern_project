import React from "react";
import { FaSearch, FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useSelector } from "react-redux";

const Topnav = () => {
  const email = useSelector((state) => state.user.value.email);

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
        {email ? (
          email === "admin@shopeall.com" ? (
            <>
            <div className="button" id="btn">
                <Link to="/manage" className="link">
                  Manage products
                </Link>
              </div>
              <div className="button" id="btn">
                <Link to="/addproducts" className="link">
                  Add products
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/favorites" style={{ textDecoration: "none" }}>
                <FaHeart size={40} color="white" />
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <FaShoppingCart size={40} color="white" />
                <div id="carticon">1</div>
              </Link>
              <Link to="/profile">
                <div className="profile"></div>
              </Link>
            </>
          )
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
