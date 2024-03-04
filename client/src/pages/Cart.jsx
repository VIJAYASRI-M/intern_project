import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

const Cart = () => {
  const email = useSelector((state) => state.user.value.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  });
  return <CartItems /> ;
};

export default Cart;
