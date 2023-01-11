import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  Routes,
} from "react-router-dom";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Home from "./Home";
import ProductList from "./components/Pages/ProductPage/ProductList";
import Navbar from "./components/Sections/Navbar/Navbar";

const { productList } = ProductList;

function App() {
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
              products={productList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
