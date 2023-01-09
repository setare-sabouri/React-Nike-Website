import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Navbar from "./components/Sections/Navbar/Navbar";
import ProductList from "./components/Pages/ProductPage/ProductList";

const { productList } = ProductList;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/products"
          element={
            <>
              {" "}
              <Navbar /> <AllProducts products={productList} />{" "}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
