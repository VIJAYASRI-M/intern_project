import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <div className="ProductsList">Products</div>
      {products.map((item)=>(
        <Card/>
      ))}
    </>
  );
};

export default ProductsList;
