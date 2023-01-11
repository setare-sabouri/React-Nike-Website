import { Link } from "react-router-dom";
import "./styles/fonts.css";
import Products from "./components/Sections/Products/products";
import Features from "./components/Sections/Features/features";
import Populars from "./components/Sections/Populars/populars";
import Promos from "./components/Sections/Promos/promos";
import Footer from "./components/Sections/Footer/footer";
import Intro from "./components/Sections/Intro/intro";
import Navbar from "./components/Sections/Navbar/Navbar";

function Home() {
  return (
    <div className="App">
      <div className="Header-Intro-Wrapper">
        <Navbar />
        <Intro />
      </div>
      <Products />
      <Features />
      <Populars />
      <Promos />
      <Footer />
    </div>
  );
}

export default Home;
