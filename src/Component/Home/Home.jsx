// import React from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";
import toast from "react-hot-toast";
const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);

    if (exists) {
      toast("Already add to cart this t-shirt");
    } else {
      const newTshirt = [...cart, tshirt];
      setCart(newTshirt);
    }
  };
  const handleRemoveToCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
