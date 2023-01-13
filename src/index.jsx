import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AllProducts from "./pages/Shop-page/AllProducts";
import Navbar from "./components/Sections/Navbar/Navbar";
import ProductsDATA from "./pages/Shop-page/ProductsDATA";

const { productList } = ProductsDATA;

const ProductsPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const onChangeSearchTerm = (e) =>setSearchTerm(e.target.value);

	const filteredProducts =
		productList.filter((product) => {
			return product.title
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				);
		});

	console.log(productList);

	return (
		<React.Fragment>
			<input
				value={searchTerm}
				onChange={onChangeSearchTerm}
			/>
			<Navbar />
			<AllProducts
				products={filteredProducts}
			/>
		</React.Fragment>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

