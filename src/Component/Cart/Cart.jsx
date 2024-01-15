import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveToCart }) => {
  console.log(cart);
  return (
    <div className="cart-container">
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveToCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
