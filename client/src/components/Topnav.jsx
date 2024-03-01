import React from "react";
import { FaSearch } from "react-icons/fa";

const Topnav = () => {
  return (
    <div className="Topnav">
      <div className="items">logo</div>
      <div className="items">
        <div className="inputfield">
          <input type="text" placeholder="search" />
          <FaSearch style={{color:"#009fc7"}}/>
        </div>
      </div>
      <div className="right">
        <div className="cart">cart</div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Topnav;
