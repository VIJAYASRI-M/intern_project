import React from "react";

const CartCard = ({ category, desc, img, name, price, quantity, id }) => {
  return (
    <div className="cart">
      <div className="cartcard">
        <p>{name}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CartCard;
