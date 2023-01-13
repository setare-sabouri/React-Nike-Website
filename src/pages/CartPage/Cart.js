import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleDelete }) => {
  const totalPrice = cart.reduce((total, cart) => {
    return (total + cart.price)
  }, 0)
  return (
    <div>
      <div className="cart-page-container">
        <h1 className="cart-header">Your shopping cart</h1>
      </div>
      {cart.length === 0 && <div className="empty-cart">Your cart is currently empty</div>}
      {cart.map((cartProduct) => (
        <>
          <h3 className="cart-item-container paragraph-font">
            <img className="cart-image" alt="product image" src={cartProduct.image} />{" "}
            {cartProduct.title} ${cartProduct.price}{" "}
            <div className="Delete-button-container">
            <button className="delete-cart-item-btn" onClick={() => handleDelete(cartProduct.id)}>Delete item</button>
            </div>
          </h3>
        </>
      ))}
      {cart.length >= 1 && <div className="total-price">{`Your total is:  $${totalPrice}`}</div>}
    </div>
  );
};
export default Cart;
