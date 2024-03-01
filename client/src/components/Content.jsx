import React from "react";
import Card from "./Card";
import Category from "./Category";

const Content = () => {
  const category_images1 = [
    {
      id: 1,
      name: "Mobiles",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbYotv_wSFBI93MChEvCNVI17IuEC-a7qV1D6DhUL-g&s",
    },
    {
      id: 2,
      name: "Home Appliances",
      img: "https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=",
    },
    {
      id: 3,
      name: "Grocery",
      img: "https://www.portlogy.com/wp-content/uploads/sites/6/2016/06/Indian-Groceries-supplier.png",
    },
    {
      id: 4,
      name: "Clothing",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbYotv_wSFBI93MChEvCNVI17IuEC-a7qV1D6DhUL-g&s",
    },
    {
      id: 5,
      name: "Foot Wear",
      img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/05/13/Pictures/collection-of-female-shoes-on-wooden-floor_d426d1c6-566d-11e8-ae13-d985d3701f4e.jpg",
    },
  ];

  return (
    <div className="Content_div">
      <div className="Content">
        {category_images1.map((item) => (
          <Category key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Content;
