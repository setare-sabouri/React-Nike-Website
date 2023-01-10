import React from "react";
import "./Cart.css"

const Cart = ({ cart }) => {
  return (
    <div className="">
      {cart.map((cartProduct) => (
        <>
        <h3 className="cart-item-container">{cartProduct.title} ${cartProduct.price} <img className="cart-image" src={cartProduct.image}/> </h3>
        </>
      ))}
    </div>
  );
};

export default Cart;
