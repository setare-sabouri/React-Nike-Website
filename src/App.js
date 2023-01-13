import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  Routes,
} from "react-router-dom";
import AllProducts from "./pages/Shop-page/AllProducts";
import Home from "./pages/Home-page";
import ProductsDATA from "./pages/Shop-page/ProductsDATA";
import Navbar from "./components/Sections/Navbar/Navbar";
import Cart from "./pages/CartPage/Cart";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={
            <AllProducts
              products={ProductsDATA}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
