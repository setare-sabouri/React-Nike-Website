import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Navbar from "./components/Sections/Navbar/Navbar";
import ProductList from "./components/Pages/ProductPage/ProductList";
import "./styles/searchbar.css";

const { productList } = ProductList;

const root = ReactDOM.createRoot(document.getElementById("root"));

const ProductsPage = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onChangeSearchTerm = (e) => setSearchTerm(e.target.value);

	const filteredProducts = productList.filter((product) => {
		return product.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	console.log(productList);

};

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/products" element={<ProductsPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
