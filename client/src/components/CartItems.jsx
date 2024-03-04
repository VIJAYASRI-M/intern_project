import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import CartCard from "./CartCard";

const CartItems = () => {
  const products = useSelector((state) => state.products.products);
  const CartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cartitems">
      <div className="ProductsList">
        <h1>Cart Items</h1>
        <div className="List">
          {products.map(
            (item, index) =>
              item.cart && (
                <CartCard
                  key={item.id}
                  category={item.category}
                  desc={item.desc}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              )
          )}
        </div>
        <button>purchase</button>
      </div>
    </div>
  );
};

export default CartItems;
