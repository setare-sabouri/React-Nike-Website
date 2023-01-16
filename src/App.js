import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, } from "react-router-dom";
import AllProducts from "./pages/Shop-page/AllProducts";
import Home from "./pages/Home-page";
import ProductsDATA from "./pages/Shop-page/ProductsDATA";
import Navbar from "./components/Sections/Navbar/Navbar";
import Cart from "./pages/Cart-Page/Cart";
function App() {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const addToCart = (product) => {
    setCart([...cart, product]);
    setCounter((prev) => prev + 1)
  };

  const handleDelete = (id) => {
    const newCart = cart.filter(test => {
      if (test.id !== id) {
        return test
      }
      else {
        setCounter((prev) => prev - 1);
      }
    }
    );
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Navbar counter={counter} />
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
        <Route path="/cart" element={<Cart cart={cart} handleDelete={handleDelete} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
