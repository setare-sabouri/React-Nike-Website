import { useState } from "react";
import "../../../styles/AllProducts.css";
import Cart from "../Cart/Cart";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img
        className="product-card-image"
        src={product.image}
        alt={product.title}
      />
      <p>{`$${product.price}`}</p> <h3>{product.title}</h3> <br />{" "}
      <button className="product-button" onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};

const AllProducts = ({ products, addToCart }) => {
  return (
    <div className="All-Products-Container">
      {products.map((product) => (
        <ProductCard product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default AllProducts;
