import React from "react";
import Topnav from "../components/Topnav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";
import ProductsList from "./ProductsList";

const AddProducts = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState({
    name: "",
    id: 0,
    desc: "",
    category: "",
    image: null,
    quantity: 0,
    price: 0,
    cart: false,
    favo: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevprod) => ({
      ...prevprod,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const categories = [
    "Mobiles",
    "Home Appliances",
    "Grocery",
    "Clothing",
    "Foot Wear",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    console.log(products);
    setProduct({
      name: "",
      id: 0,
      desc: "",
      category: "",
      image: null,
      quantity: 0,
      price: 0,
      cart: false,
      favo: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="AddProducts">
      <div className="form">
        <div className="formele">
          <h1>Add Products</h1>
          <label className="label">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
          <label className="label">Product description</label>
          <input
            type="text"
            name="desc"
            value={product.desc}
            onChange={handleChange}
          />
          <label className="label">Product category</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label className="label">Product Image</label>
          <input type="file" accept=".jpeg, .png" onChange={handleFileChange} />
          <label className="label">Product quantity</label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
          <label className="label">Product price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <button type="submit" className="add">
            Add product
          </button>
        </div>
        <div></div>
      </div>
    </form>
  );
};

export default AddProducts;
