// import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveToCart }) => {
  // console.log(cart);
  let message;
  if (cart.length === 0) {
    message = <p>Add some products to your shopping cart</p>;
  }
  return (
    <div className="cart-container">
      <h2>Order Summary: {cart.length}</h2>
      {message}
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
/**
 * CONDITIONAL RENDERING
 * 1. use ifb else to set a variable that  will contain an element, components
 * 2. ternary: condition ? for "true":"false"
 * 3. Logical &&: (if the condition is the  true then the next things will be displayed)
 * 4. Logical ||: (if the condition is the false then the next things will be displayed)
 * **/

/**
 * CONDITIONAL CSS CLASS
 * 1.use ternary
 * 2.ternary inside template string
 * 
 * **/ 
