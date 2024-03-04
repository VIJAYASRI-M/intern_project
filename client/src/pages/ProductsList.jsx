import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <div className="ProductsList">
      <h1>Products</h1>
      <div className="List">
        {products.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            category={item.category}
            desc={item.desc}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
