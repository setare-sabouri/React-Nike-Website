import React, { useState } from "react";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Home from "./Home";
import ProductList from "./components/Pages/ProductPage/ProductList";
import Navbar from "./components/Sections/Navbar/Navbar";
import Cart from "./components/Pages/CartPage/Cart";

const { productList } = ProductList;

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearchTerm = (e) => setSearchTerm(e.target.value);

    const filteredProducts = productList.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    console.log(productList);

    return (
      <React.Fragment>
        <input value={searchTerm} onChange={onChangeSearchTerm} />
        <Navbar />
        <AllProducts products={filteredProducts} />
      </React.Fragment>
    );
  };


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<AllProducts products={productList} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
