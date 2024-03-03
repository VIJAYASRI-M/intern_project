import React from "react";
import Category from "./Category";
import { category_data } from "../Assets/categoryData";

const Content = () => {
  return (
    <div className="Content_div">
      <div className="Content">
        {category_data.map((item) => (
          <Category key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Content;
