import React, { useState } from "react";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Home from "./components/Pages/Home";
import ProductList from "./components/Pages/ProductPage/ProductList";
import Navbar from "./components/Sections/Navbar/Navbar";
import Cart from "./components/Pages/CartPage/Cart";

function App() {
	const [productList, setPro] = useState(ProductList);
	const [cart, setCart] = useState([]);
	const addToCart = (product) => {
		setCart([...cart, product]);
	};
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<AllProducts products={productList} addToCart={addToCart} set />} />
				<Route path="/cart" element={<Cart cart={cart} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
