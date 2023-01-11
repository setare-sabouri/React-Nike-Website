import { Link } from "react-router-dom";
import "./styles/fonts.css";
import Products from "./components/Sections/Products/products";
import Features from "./components/Sections/Features/features";
import Populars from "./components/Sections/Populars/populars";
import Promos from "./components/Sections/Promos/promos";
import Footer from "./components/Sections/Footer/footer";
import Intro from "./components/Sections/Intro/intro";
import Navbar from "./components/Sections/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import {
  Route,
  Routes,
} from "react-router-dom";
import AllProducts from "./components/Pages/ProductPage/AllProducts";
import Home from "./Home";
import ProductList from "./components/Pages/ProductPage/ProductList";

const { productList } = ProductList;

function App() {
  return (
    <BrowserRouter>
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
